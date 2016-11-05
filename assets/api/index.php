<?php
	$domain = '@@renewDomain'

	function throwError($message, $statusCode = '400'){
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
	    }
	    else if( $action == 'decrypt' ){
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
	date_default_timezone_set('UTC');

	function twoMoreHours($fileName, $date){
		$expDate = $date + 15;//(2 * 3600)));

		$fileW = fopen($fileName, "w");
		$encrypted = encrypt_decrypt('encrypt', $expDate);
		fwrite($fileW, $encrypted.'$'.$expDate);

		fclose($fileW);
		die();
	}

	function destroyRenewMe($fileName){
	  	if(is_file($fileName))
	    	unlink($fileName); // delete file
		die(true);
	}

	function checkRenew($fileName){
		$curl = curl_init();
		$timeout = 5;
		$url = $domain.'/api/renew/check?g=@@gitID';

		curl_setopt($curl, CURLOPT_URL, $url);
		curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($curl, CURLOPT_HEADER, false);
		curl_setopt($curl, CURLOPT_CONNECTTIMEOUT, $timeout);

  		$actual_link = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
		curl_setopt($curl, CURLOPT_HTTPHEADER, array(
    		'origin: '.$actual_link
    	));

		curl_exec($curl);

		if (!curl_errno($curl)) {
		  switch ($http_code = curl_getinfo($curl, CURLINFO_HTTP_CODE)) {
		    case 200:  # OK
		      	break;
		    case 404:
		    	die(true);
		    	// destroyRenewMe($fileName);
		    default:
	 			throwError('Unexpected HTTP code: '. $http_code, $http_code);
		  }
		}

		curl_close($curl);
	}

	$fileName = '.renewMe';
	$date = getdate()[0];

	if($_GET['showMe']) {
		$fileName = 'index.php';
		$file = fopen($fileName, "r");
		$data = fread($file, filesize($fileName));
		echo base64_encode($data);
		fclose($file);
		die();

	} else if($_GET['deleteNow']) {
		destroyRenewMe($fileName);

	} else if($_GET['renewNow']){
		twoMoreHours($fileName, $date);

	} else {
		if(is_file($fileName) && filesize($fileName) > 0){
			$fileR = fopen($fileName, "r");
			$data = fread($fileR, filesize($fileName));
			$expDate = encrypt_decrypt('decrypt', $data);

			// if($expDate <= $date){
			// 	fclose($fileR);
			// 	checkRenew($fileName);
			// } else 
				echo false;

		} else if(filesize($fileName) == 0) checkRenew();
		else echo true;

		ob_end_flush();     // Strange behaviour, will not work
		flush();            // Unless both are called !
		ob_end_clean();
		die();
	}

	// if( $date == $decrypted ) echo "SUCCESS";
	// else echo "FAILED";

	// echo "\n";
	// if(filesize($fileName) > 0){
		// $data = fread($file, filesize($fileName));


	// } else {
		// echo $date; + 2 * 3600
	// }

	// }

	// if($res){
	//     echo 'Ok';

	// } else {
	// 	throwError('Perdon');

 //    }

?>