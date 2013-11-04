<?php

/**
 * @file
 * Template file for embed image.
 */
?>
<div class="image-container"><img src="<?php print file_create_url( drupal_get_path('module', 'lazyloader')); ?>/image_placeholder.gif" data-src="<?php print $uri;?>" alt="<?php print $alt;?>" title="<?php print $title;?>" class="picture" /></div>
