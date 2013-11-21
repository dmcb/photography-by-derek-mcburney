<?php

// Load facebook photo grabber functions
require_once("facebook_photo_grab.php");
require_once("site_settings.php");

// Create cache if none exists
if (!file_exists("cache")) {
	@mkdir("cache");
}

// Grab facebook information if no cache exists or the cache is stale
$cache_file = "cache/cache.json";
$json = @file_get_contents($cache_file);
if ($json === false || time() - filemtime($cache_file) > 86400) {
	$json = json_encode(process_photos($categories));
	file_put_contents($cache_file, $json);
}
print $json;