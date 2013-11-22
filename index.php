<?php

// Route to photo to populate meta data based on photo, for SEO and services like twitter
ob_start();
include "assets/php/photos_to_json.php";
$photos_json = ob_get_clean();
$photos = json_decode($photos_json, TRUE);
$photo_id = substr($_SERVER["REQUEST_URI"], strrpos($_SERVER["REQUEST_URI"], "/")+1);
$categories = array();

foreach ($photos as $photo) { 
	$categories[$photo['category']][] = $photo;
	if ($photo['id'] == $photo_id) {
		$current_photo = $photo;
	}
}

# If no photo was found from URL, default to first
if (!isset($current_photo) && sizeof($photos)) {
	$current_photo = $photos[0];
}

# Get neighbouring photos
if (isset($current_photo)) {
	$current_photo_category = $categories[$current_photo['category']];
	$previous_photo = $current_photo_category[array_search($current_photo, $current_photo_category) + count($current_photo_category) - 1 % count($current_photo_category)];
	$next_photo = $current_photo_category[array_search($current_photo, $current_photo_category) + 1 % count($current_photo_category)];
}

?><!DOCTYPE html>
<html lang="en">
<head>
	<title><?php if (isset($current_photo)) echo $current_photo['title'].' | ';?>Photography by Derek McBurney</title>
	
	<meta name="description" content="Calgary, Alberta based photographer who loves to shoot and share weddings, engagements, events, people, landscapes and architecture." />
	<meta name="keywords" content="photography by derek mcburney, derek mcburney, calgary, alberta, calgary photographer, wedding photography, engagement photography, event photography, people photography, landscape photography, architecture photography" />
	<meta name="robots" content="ALL" />
	<meta name="author" content="Derek McBurney" />
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
	
	<meta name="twitter:site" content="@derekmcb" />
	<meta name="twitter:creator" content="@derekmcb" />
	<meta name="twitter:card" content="photo" />
	<meta name="twitter:title" content="<?php if (isset($current_photo)) echo $current_photo['title'];?>" />
	<meta name="twitter:description" content="<?php if (isset($current_photo)) echo $current_photo['description'];?>" />
	<meta name="twitter:image" content="<?php if (isset($current_photo)) echo $current_photo['file'];?>" />
	<meta name="twitter:image:width" content="1896" />
	<meta name="twitter:image:height" content="1264" />
	
	<meta name="fb:app_id" content="" />
	<meta name="og:type" content="photo" />
	<meta name="og:title" content="<?php if (isset($current_photo)) echo $current_photo['title'];?>" />
	<meta name="og:image" content="<?php if (isset($current_photo)) echo $current_photo['file'];?>" />
	<meta name="og:description" content="<?php if (isset($current_photo)) echo $current_photo['description'];?>" />
	
	<link rel="author" href="https://plus.google.com/109721017489855707609" />
	
	<link href="assets/css/all.css" rel="stylesheet"/>
	<!--[if lt IE 9]>
	<link href="assets/css/ie8.css" rel="stylesheet"/>
	<![endif]-->
	<!--[if lt IE 8]>
	<link href="assets/css/ie7.css" rel="stylesheet"/>
	<![endif]-->
	
	<!-- Google Analytics -->
	<script type="text/javascript">
		var _gaq = _gaq || [];
		_gaq.push(['_setAccount', 'UA-35360688-1']);
		_gaq.push(['_trackPageview']);
		
		(function() {
			var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
			ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
			var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		})();
	</script>
</head>
<body>
	<div class="container">
		<div class="frame">
			<h1>Photography by Derek McBurney</h1>
			
			<div id="menu">
				<select class="menu">
					<?php foreach($categories as $category => $photos) {
						if (sizeof($photos)) {
							print '<option value="'.$category.'">'.str_replace(" / ", "/", ucwords(str_replace("-", " / ", $category))).'</option> ';
						}
					}?>
					<option value="blog">Blog</option>
				</select>
				<ul class="menu">
					<?php foreach($categories as $category => $photos) {
						if (sizeof($photos)) {
							print '<li><a href="'.$photos[0]['id'].'" id="'.$category.'">'.str_replace(" / ", "/", ucwords(str_replace("-", " / ", $category))).'</a></li> ';
						}
					}?>
					<li><a href="blog" id="blog">Blog</a></li>
				</ul>
			</div>
			
			<div id="showcase" class="section">
				<a class="navigation" id="left" href="<?php if (isset($previous_photo)) print $previous_photo['id']; ?>"><span></span></a>
				<a class="navigation" id="right" href="<?php if (isset($next_photo)) print $next_photo['id']; ?>"><span></span></a> 
				<div id="focus">
					<img src="assets/images/placeholder.png"/>
				</div>
			</div>

			<div id="details" class="section">
				<h2>
					<?php if (isset($current_photo)) echo $current_photo['title'];?>
					<a href="//www.pinterest.com/pin/create/button/?url=http://photographybyderek.com/<% print(encodeURI(id)); %>&media=<%= file %>&description=<% print(encodeURI(title)); %>" data-pin-do="buttonPin" data-pin-config="none" target="_blank"><img src="assets/images/pin_it_button.png" /></a>
				</h2>
				<p>
					<?php if (isset($current_photo)) echo $current_photo['description'];?>
				</p>
			</div>
			
			<div id="side">
				<div id="aboutme" class="section">
					<span>I would love to work with you.</span>
					<p>
						Photography is a passion of mine - I constantly seek new moments to capture and challenges to undertake. There is beauty everywhere and I'm fortunate enough to be able to share it from my perspective. I would be humbled to help tell your story.
					</p>
				</div>
				<form id="contactme" class="section">
					<input id="name" type="text" placeholder="Your name" />
					<label id="name_error" class="error"></label>
					<input id="email" type="text" placeholder="Your email address" />
					<label id="email_error" class="error"></label>
					<textarea id="story" placeholder="The story you would like told"></textarea>
					<label id="story_error" class="error"></label>
					<button id="send">Send</button>
				</form>
			</div>
			
			<div id="footer">
				<div id="social-media">
					<a href="https://www.facebook.com/PhotographyByDerek"><img src="assets/images/facebook-icon.png" alt="photography by derek facebook page" /></a>
					<a href="https://twitter.com/derekmcb"><img src="assets/images/twitter-icon.png" alt="derek's twitter page" /></a>
					<a href="https://500px.com/derekmcb"><img src="assets/images/500px-icon.png" alt="derek's 500px page" /></a>
				</div>
				<p id="copyright">
					&copy; <?php print date("Y");?>, Derek McBurney. All photographs (except where noted otherwise) are copyright of Derek McBurney and can not be used without permission for any purpose. Get in touch with me to request a license to use my photography!
				</p>
				<a href="http://dmcbdesign.com/" id="watermark"><span>website by</span> <img src="assets/images/dmcb_design.png" alt="dmcb" /> <span>design</span></a>
			</div>
		</div>
	</div>
	
	<!-- Templates -->
	<script id="photo-categories" type="text/template">
		<select class="menu">
			<?php foreach($categories as $category => $photos) {
				if (sizeof($photos)) {
					print '<option value="'.$category.'">'.str_replace(" / ", "/", ucwords(str_replace("-", " / ", $category))).'</option> ';
				}
			}?>
			<option value="blog">Blog</option>
		</select>
		<ul class="menu">
			<?php foreach($categories as $category => $photos) {
				if (sizeof($photos)) {
					print '<li><a href="'.$photos[0]['id'].'" id="'.$category.'">'.str_replace(" / ", "/", ucwords(str_replace("-", " / ", $category))).'</a></li> ';
				}
			}?>
			<li><a href="blog" id="blog">Blog</a></li>
		</ul>
	</script>
	
	<script id="photo-showcase" type="text/template">
		<a class="navigation" id="left"><span></span></a>
		<a class="navigation" id="right"><span></span></a> 
		<div id="focus">
			<img src="assets/images/placeholder.png"/>
		</div>
	</script>
	
	<script id="photo-details" type="text/template">
		<h2>
			<%= title %>
			<a href="//www.pinterest.com/pin/create/button/?url=http://photographybyderek.com/<% print(encodeURI(id)); %>&media=<%= file %>&description=<% print(encodeURI(title)); %>" data-pin-do="buttonPin" data-pin-config="none" target="_blank"><img src="assets/images/pin_it_button.png" /></a>
		</h2>
		<p>
			<%= description %>
		</p>
	</script>
	
	<!-- Javascripts -->
	<script type="text/javascript" src="assets/js/lib/jquery/jquery.min.js"></script>
	<script type="text/javascript" src="assets/js/lib/underscore-amd/underscore-min.js"></script>
	<script type="text/javascript" src="assets/js/lib/backbone-amd/backbone-min.js"></script>
	<script type="text/javascript" src="assets/js/lib/modernizr/modernizr.js"></script>
	<script type="text/javascript" src="assets/js/lib/respond/respond.min.js"></script>
	<script type="text/javascript" src="assets/js/lib/jquery-placeholder/jquery.placeholder.min.js"></script>
	<script type="text/javascript" src="assets/js/lib/bigscreen/bigscreen.min.js"></script>

	<script type="text/javascript" src="assets/js/models/photo.js"></script>
	<script type="text/javascript" src="assets/js/collections/photos.js"></script>
	<script type="text/javascript" src="assets/js/views/categories.js"></script>
	<script type="text/javascript" src="assets/js/views/photo.js"></script>
	<script type="text/javascript" src="assets/js/router.js"></script>
	<script type="text/javascript" src="assets/js/app.js"></script>
</body>
</html>