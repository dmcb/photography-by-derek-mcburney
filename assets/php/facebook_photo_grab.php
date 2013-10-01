<?php

// Load and configure Facebook API
require_once("lib/facebook.php");
require_once("facebook_app_id.php");

$config = array();
$config['appId'] = $appId;
$config['secret'] = $secret;
$facebook = new Facebook($config);

function process_album(&$photos, $category, $id) {
	global $facebook;
	$data = $facebook->api("/{$id}/photos");

	foreach ($data['data'] as $photo) {
		// Format Facebook data into what I want the data to look like
		$processed_photo = array();

		// URL friendly string from photo title
		$name_parts = explode("\n", $photo['name']);
		$processed_photo['id'] = strtolower(preg_replace('/[^a-zA-Z0-9_]/', '-', $name_parts[0]));

		// Photo title and description from a splitting of the Facebook name field
		if (sizeof($name_parts) >= 2) {
		    $processed_photo['title'] = $name_parts[0];
		    $processed_photo['description'] = $name_parts[2];

		    // Use largest Facebook photo as file
		    $processed_photo['file'] = $photo['images'][0]['source'];

		    // Grab photo date
		    $processed_photo['date'] = $photo['updated_time'];

		    // Set category based on facebook album
		    $processed_photo['category'] = $category;

		    // Save
			$photos[] = $processed_photo;
		}
	}
}

function process_photos($categories) {
	$photos = array();

	foreach ($categories as $category => $id) {
		process_album($photos, $category, $id);
	}

	return $photos;
}
