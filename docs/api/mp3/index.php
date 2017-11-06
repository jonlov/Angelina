<?php function notFound(){ header("HTTP/1.0 404 Not Found"); echo "File not found."; die(); } function redirect($url, $statusCode = 303){ header('Location: ' . $url, true, $statusCode); die(); } if($_GET['file']) { if($_GET['file'] == 1) $fileName = 'Angelina - Tu Conmigo Yo Contigo.mp3'; if (file_exists($fileName)) { if($_GET['download'] == true){ download($fileName, 'audio/mpeg'); } else { redirect($fileName); } } } function stream($file, $content_type = 'application/octet-stream') { @error_reporting(0); if (!file_exists($file)) { header("HTTP/1.1 404 Not Found"); exit; } $filesize = sprintf("%u", filesize($file)); if(isset($_SERVER['HTTP_RANGE'])){ $range = $_SERVER['HTTP_RANGE']; }elseif($apache = apache_request_headers()){ $headers = array(); foreach ($apache as $header => $val){ $headers[strtolower($header)] = $val; } if(isset($headers['range'])){ $range = $headers['range']; } else $range = FALSE; } else $range = FALSE; if($range){ $partial = true; list($param, $range) = explode('=',$range); if(strtolower(trim($param)) != 'bytes'){ header("HTTP/1.1 400 Invalid Request"); exit; } $range = explode(',',$range); $range = explode('-',$range[0]); if ($range[0] === ''){ $end = $filesize - 1; $start = $end - intval($range[0]); } else if ($range[1] === '') { $start = intval($range[0]); $end = $filesize - 1; }else{ $start = intval($range[0]); $end = intval($range[1]); if ($end >= $filesize || (!$start && (!$end || $end == ($filesize - 1)))) $partial = false; } $length = $end - $start + 1; } else $partial = false; header("Content-Type: $content_type"); header("Content-Length: $filesize"); header('Accept-Ranges: bytes'); if ($partial) { header('HTTP/1.1 206 Partial Content'); header("Content-Range: bytes $start-$end/$filesize"); if (!$fp = fopen($file, 'rb')) { header("HTTP/1.1 500 Internal Server Error"); exit; } if ($start) fseek($fp,$start); while($length){ set_time_limit(0); $read = ($length > 8192) ? 8192 : $length; $length -= $read; print(fread($fp,$read)); } fclose($fp); } else readfile($file); exit; } function download($fileName, $content_type = 'application/octet-stream'){ $file=$fileName; $filesize = filesize($fileName); $offset = 0; $length = $filesize; if ( isset($_SERVER['HTTP_RANGE']) ) { $partialContent = true; preg_match('/bytes=(\d+)-(\d+)?/', $_SERVER['HTTP_RANGE'], $matches); $offset = intval($matches[1]); $length = intval($matches[2]) - $offset; } else { $partialContent = false; } $file = fopen($file, 'r'); fseek($file, $offset); $data = fread($file, $length); fclose($file); if ( $partialContent ) { header('HTTP/1.1 206 Partial Content'); header('Content-Range: bytes ' . $offset . '-' . ($offset + $length) . '/' . $filesize); } header('Content-Type: ' . $content_type); header('Content-Length: ' . $filesize); header('Content-Disposition: attachment; filename="' . $fileName . '"'); header('Accept-Ranges: bytes'); print($data); exit; return die(); } return notFound(); ?>