<?php
	function ping($domain) {
		$curlInit = curl_init($domain);
		curl_setopt($curlInit, CURLOPT_CONNECTTIMEOUT, 5);
		curl_setopt($curlInit, CURLOPT_HEADER, true);
		curl_setopt($curlInit, CURLOPT_NOBODY, true);
		curl_setopt($curlInit, CURLOPT_RETURNTRANSFER, true);

		//get answer
		$response = curl_exec($curlInit);

		curl_close($curlInit);
		if ($response) return true;
		return false;
	}
?>