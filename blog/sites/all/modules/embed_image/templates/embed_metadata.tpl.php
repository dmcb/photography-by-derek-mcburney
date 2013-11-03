<?php

/**
 * @file
 * Template file for embed image metadata.
 */
?>
<ul class="metadata">
<?php
	foreach ($image_meta as $class => $value) {
		print '<li class="'.$class.'">'.$value.'</li>';
	}
?>
</ul>
