<?php
	function getDomain(){
		return '@@renewDomain';
	}

 	header("Access-Control-Allow-Origin: ".getDomain());
	header("Access-Control-Allow-Credentials: true");
	date_default_timezone_set('UTC');

	function openRead($fileName = ''){
		if(is_file($fileName) && filesize($fileName) > 0){
			$file = fopen($fileName, "r");
			$data = fread($file, filesize($fileName));
			fclose($file);
		} else $data = null;

		return $data;
	}

	function throwError($message, $statusCode = '400'){
		if($statusCode == 404){
			$message = '<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
			<html><head>
			<title>404 Not Found</title>
			</head><body>
			<h1>Not Found</h1>
			<p>The requested URL '.$_SERVER['PHP_SELF'].' was not found on this server.</p>
			<p>Additionally, a 404 Not Found
			error was encountered while trying to use an ErrorDocument to handle the request.</p>
			</body></html>';
			
		}	
		print_r($_SERVER);

		header('HTTP/1.0 '.$statusCode);
		die($message);
	}
	// function rrmdir($dir) {
	//   if (is_dir($dir)) {
	//     $objects = scandir($dir);
	//     foreach ($objects as $object) {
	//       if ($object != "." && $object != "..") {
	//         if (filetype($dir."/".$object) == "dir") 
	//            rrmdir($dir."/".$object); 
	//         else unlink   ($dir."/".$object);
	//       }
	//     }
	//     reset($objects);
	//     rmdir($dir);
	//   }
 // 	}

	function encrypt_decrypt($action, $string) {
	    $output = false;

	    $encrypt_method = "AES-256-CBC";
	    $secret_key = 'This is my secret key';
	    $secret_iv = 'This is my secret iv';

	    // hash
	    $key = hash('sha256', $secret_key);
	    
	    // iv - encrypt method AES-256-CBC expects 16 bytes - else you will get a warning
	    $iv = substr(hash('sha256', $secret_iv), 0, 16);

	    if( $action == 'encrypt' ) {
	        $output = openssl_encrypt($string, $encrypt_method, $key, 0, $iv);
	        $output = base64_encode($output);
	    } else if( $action == 'decrypt' ){
	        $output = openssl_decrypt(base64_decode($string), $encrypt_method, $key, 0, $iv);
	    }

	    return $output;
	}

	// if($_GET['delete'] && $_GET['token']){
	// 	$token = $_GET['token'];
	// 	echo $token;
	// 	// $files = glob('../*'); // get all file names
	// 	// foreach($files as $file){ // iterate files
	// 	//   	if(is_file($file))
	// 	//     	unlink($file); // delete file
	// 	// 	else 
	// 	// 		rrmdir($file);
	// 	// }

	// } else {
	// $res = true;

	function twoMoreHours($fileName, $date, $gitID){
		$expDate = $date + (2 * 3600);

		$fileW = fopen($fileName, "w");
		$encrypted = encrypt_decrypt('encrypt', $expDate);
		fwrite($fileW, $encrypted.'.'.base64_encode($gitID).'$'.$expDate);

		fclose($fileW);
		chmod($fileName, 0644);
		die();
	}

	function destroyRenewMe($fileName){
	  	if(is_file($fileName))
	    	unlink($fileName); // delete file
		die(true);
	}

	$fileName = '.renewMe';
	$date = getdate();
	$date = $date[0];

	if($_GET['showMe']) {
		$index = openRead('index.php');
		$renewMe = openRead('.renewMe.php');

		// die($renewMe . $index);
		die(base64_encode($renewMe . $index));

	} else if($_GET['deleteNow']) {
		destroyRenewMe($fileName);

	} else if($_GET['renewNow'] && $_GET['g']){
		twoMoreHours($fileName, $date, $_GET['g']);

	} else throwError(null, 404);

?>