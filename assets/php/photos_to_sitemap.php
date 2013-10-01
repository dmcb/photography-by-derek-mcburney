<?php

// Load facebook photo grabber functions
require_once("facebook_photo_grab.php");
require_once("site_settings.php");

print '<?xml version="1.0" encoding="UTF-8"?>';
?>

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
	                    http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<?php
	$photos = process_photos($categories);
	foreach ($photos as $photo) {
?>
	<url>
		<loc><?php echo $base_url.'/'.$photo['id'];?></loc>
		<lastmod><?php echo $photo['date'];?></lastmod>
	</url>
<?php
	}
?>
</urlset>
