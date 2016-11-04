<?php
function notFound(){
  header("HTTP/1.0 404 Not Found");
  echo "File not found.";
  die();
}

function redirect($url, $statusCode = 303){
  header('Location: ' . $url, true, $statusCode);
  die();
}

if($_GET['file']) {
  if($_GET['file'] == 1) $fileName = 'Angelina - Tu Conmigo Yo Contigo.mp3';

  if (file_exists($fileName)) {
      // ob_clean();
      // flush();

      if($_GET['download'] == true){
        download($fileName, 'audio/mpeg');
      } else {
        redirect($fileName);
        // stream($fileName, 'audio/mpeg');
      }
  }
}

/**
 * Stream-able file handler
 *
 * @param String $file_location
 * @param Header|String $content_type
 * @return content
 */
function stream($file, $content_type = 'application/octet-stream') {
    @error_reporting(0);

    // Make sure the files exists, otherwise we are wasting our time
    if (!file_exists($file)) {
        header("HTTP/1.1 404 Not Found");
        exit;
    }

    // Get file size
    $filesize = sprintf("%u", filesize($file));

    // Handle 'Range' header
    if(isset($_SERVER['HTTP_RANGE'])){
        $range = $_SERVER['HTTP_RANGE'];
    }elseif($apache = apache_request_headers()){
        $headers = array();
        foreach ($apache as $header => $val){
            $headers[strtolower($header)] = $val;
        }
        if(isset($headers['range'])){
            $range = $headers['range'];
        }
        else $range = FALSE;
    } else $range = FALSE;

    //Is range
    if($range){
        $partial = true;
        list($param, $range) = explode('=',$range);
        // Bad request - range unit is not 'bytes'
        if(strtolower(trim($param)) != 'bytes'){ 
            header("HTTP/1.1 400 Invalid Request");
            exit;
        }
        // Get range values
        $range = explode(',',$range);
        $range = explode('-',$range[0]); 
        // Deal with range values
        if ($range[0] === ''){
            $end = $filesize - 1;
            $start = $end - intval($range[0]);
        } else if ($range[1] === '') {
            $start = intval($range[0]);
            $end = $filesize - 1;
        }else{ 
            // Both numbers present, return specific range
            $start = intval($range[0]);
            $end = intval($range[1]);
            if ($end >= $filesize || (!$start && (!$end || $end == ($filesize - 1)))) $partial = false; // Invalid range/whole file specified, return whole file
        }
        $length = $end - $start + 1;
    }
    // No range requested
    else $partial = false; 

    // Send standard headers
    header("Content-Type: $content_type");
    header("Content-Length: $filesize");
    header('Accept-Ranges: bytes');

    // send extra headers for range handling...
    if ($partial) {
        header('HTTP/1.1 206 Partial Content');
        header("Content-Range: bytes $start-$end/$filesize");
        if (!$fp = fopen($file, 'rb')) {
            header("HTTP/1.1 500 Internal Server Error");
            exit;
        }
        if ($start) fseek($fp,$start);
        while($length){
            set_time_limit(0);
            $read = ($length > 8192) ? 8192 : $length;
            $length -= $read;
            print(fread($fp,$read));
        }
        fclose($fp);
    }
    //just send the whole file
    else readfile($file);
    exit;
}


function download($fileName, $content_type = 'application/octet-stream'){
  $file=$fileName;
  $filesize = filesize($fileName);

  $offset = 0;
  $length = $filesize;

  if ( isset($_SERVER['HTTP_RANGE']) ) {
    // if the HTTP_RANGE header is set we're dealing with partial content

    $partialContent = true;

    // find the requested range
    // this might be too simplistic, apparently the client can request
    // multiple ranges, which can become pretty complex, so ignore it for now
    preg_match('/bytes=(\d+)-(\d+)?/', $_SERVER['HTTP_RANGE'], $matches);

    $offset = intval($matches[1]);
    $length = intval($matches[2]) - $offset;
  } else {
    $partialContent = false;
  }

  $file = fopen($file, 'r');

  // seek to the requested offset, this is 0 if it's not a partial content request
  fseek($file, $offset);

  $data = fread($file, $length);

  fclose($file);

  if ( $partialContent ) {
    // output the right headers for partial content

    header('HTTP/1.1 206 Partial Content');

    header('Content-Range: bytes ' . $offset . '-' . ($offset + $length) . '/' . $filesize);
  }

  // output the regular HTTP headers
  header('Content-Type: ' . $content_type);
  header('Content-Length: ' . $filesize);
  header('Content-Disposition: attachment; filename="' . $fileName . '"');
  header('Accept-Ranges: bytes');

  // don't forget to send the data too
  print($data);
  exit;
  return die();  
}

return notFound();
?>