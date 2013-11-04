<?php

/**
 * @file
 * Template file for embed pinterest.
 */
?>
<a href="//www.pinterest.com/pin/create/button/?url=<?php print $path; ?>&media=<?php print $uri; ?>&description=<?php print $title; ?>" data-pin-do="buttonPin" data-pin-config="none" target="_blank">
	<img src="<?php print file_create_url( drupal_get_path('module', 'embed_image')); ?>/images/pin_it_button.png" class="pinit">
</a>
