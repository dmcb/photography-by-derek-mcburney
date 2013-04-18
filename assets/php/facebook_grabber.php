<?php

// Load and configure Facebook API
require_once("lib/facebook.php");
require_once("facebook_app_id.php");
$config = array();
$config['appId'] = $appId;
$config['secret'] = $secret;
$facebook = new Facebook($config);

function process_photos(&$photos, $category, $id) {
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

		    // Use largest Facebook phpoto as file
		    $processed_photo['file'] = $photo['images'][0]['source'];

		    // Set category based on facebook album
		    $processed_photo['category'] = $category;

		    // Save
			$photos[] = $processed_photo;
		}
	}
}

$photos = array();
$categories = array(
	'weddings-engagements' => '367177626734339',
	'people-events' => '367195056732596',
	'landscapes-architecture' => '367195726732529');

foreach ($categories as $category => $id) {
	process_photos($photos, $category, $id);
}

print json_encode($photos);