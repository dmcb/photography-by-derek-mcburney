<?php

/**
 * @file
 * Template file for embed image wrapper.
 */
?>
<div class="picture <?php print $aspect_ratio;?>"><?php print $img_markup; ?><?php if (isset($meta_markup)) print $meta_markup; ?><?php if (isset($pinterest_markup)) print $pinterest_markup; ?></div>