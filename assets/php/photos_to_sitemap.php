<?php

// Load facebook photo grabber functions
require_once("facebook_photo_grab.php");

// Dump JSON
print json_encode(process_photos());