<?php
function process_photos(&$photos, $category, $url) {
	$data = json_decode(file_get_contents("http://graph.facebook.com/" . $url . "/photos"));
	foreach ($data->{'data'} as $photo) {
		$photo = get_object_vars($photo);

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
		    $processed_photo['file'] = $photo['images'][0]->{'source'};

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

foreach ($categories as $category => $url) {
	process_photos($photos, $category, $url);
}

print_r(json_encode($photos));