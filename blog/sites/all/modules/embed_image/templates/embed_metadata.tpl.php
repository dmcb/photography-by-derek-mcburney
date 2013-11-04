<?php

/**
 * @file
 * Template file for embed image metadata.
 */

if (!empty($title)) {
	print '<p class="title">'.$title.'</p>';
}

if (!empty($image_meta)) {
	print '<ul class="metadata">';

	foreach ($image_meta as $class => $value) {
		print '<li class="'.$class.'">'.$value.'</li>';
	}

	print '</ul>';
}
?>
