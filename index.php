<?php

// Route to photo to populate meta data based on photo, for SEO and services like twitter
$photos_json = file_get_contents("assets/js/collections/photo-data.json");
$photos = json_decode($photos_json, TRUE);
$photo_id = substr($_SERVER["REQUEST_URI"], strrpos($_SERVER["REQUEST_URI"], "/")+1);

foreach ($photos as $photo) { 
	if ($photo['id'] == $photo_id) {
		$current_photo = $photo;
	}
}

?><!DOCTYPE html>
<html lang="en">
<head>
	<title><?php echo $current_photo['title'];?> | Photography by Derek McBurney</title>
	
	<meta name="description" content="Calgary, Alberta based photographer who loves to shoot and share weddings, engagements, events, people, landscapes and architecture." />
	<meta name="keywords" content="photography by derek mcburney, derek mcburney, calgary, alberta, calgary photographer, wedding photography, engagement photography, event photography, people photography, landscape photography, architecture photography" />
	<meta name="robots" content="ALL" />
	<meta name="author" content="Derek McBurney" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	
	<meta name="twitter:site" content="@derekmcb" />
	<meta name="twitter:creator" content="@derekmcb" />
	<meta name="twitter:card" content="photo" />
	<meta name="twitter:title" content="<?php echo $current_photo['title'];?>" />
	<meta name="twitter:description" content="<?php echo $current_photo['description'];?>" />
	<meta name="twitter:image" content="<?php echo 'http://'.$_SERVER["SERVER_NAME"].substr($_SERVER["REQUEST_URI"], 0, strrpos($_SERVER["REQUEST_URI"], "/")).'/assets/photos/'.$current_photo['file'];?>" />
	<meta name="twitter:image:width" content="1896" />
	<meta name="twitter:image:height" content="1264" />
	
	<meta name="fb:app_id" content="" />
	<meta name="og:type" content="photo" />
	<meta name="og:title" content="<?php echo $current_photo['title'];?>" />
	<meta name="og:image" content="<?php echo 'http://'.$_SERVER["SERVER_NAME"].substr($_SERVER["REQUEST_URI"], 0, strrpos($_SERVER["REQUEST_URI"], "/")).'/assets/photos/'.$current_photo['file'];?>" />
	<meta name="og:description" content="<?php echo $current_photo['description'];?>" />
	
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
			
			<div id="menu"></div>
			
			<div id="showcase" class="section"></div>

			<div id="details" class="section"></div>
			
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
				</div>
				<a href="http://dmcbdesign.com/" id="watermark"><span>website by</span> <img src="assets/images/dmcb_design.png" alt="dmcb design" /> <span>design</span></a>
			</div>
		</div>
	</div>
	
	<!-- Templates -->
	<script id="photo-categories" type="text/template">
		<select class="menu">
			<option value="weddings-engagements">Weddings/Engagements</option>
			<option value="people-events">People/Events</option>
			<option value="landscapes-architecture">Landscapes/Architecture</option>
		</select>
		<ul class="menu">
			<li id="weddings-engagements">Weddings/Engagements</li>
			<li id="people-events">People/Events</li>
			<li id="landscapes-architecture">Landscapes/Architecture</li>
		</ul>
	</script>
	
	<script id="photo-showcase" type="text/template">
		<div class="navigation" id="left"><a></a></div>
		<div class="navigation" id="right"><a></a></div> 
		<div id="focus">
			<img src="assets/images/placeholder.png"/>
		</div>
	</script>
	
	<script id="photo-details" type="text/template">
		<h2><%= title %></h2>
		<p>
			<%= description %>
		</p>
	</script>
	
	<!-- Javascripts -->
	<script type="text/javascript" src="assets/js/lib/jquery-1.8.2.min.js"></script>
	<script type="text/javascript" src="assets/js/lib/underscore-1.4.0.min.js"></script>
	<script type="text/javascript" src="assets/js/lib/backbone-0.9.2.min.js"></script>
	<script type="text/javascript" src="assets/js/lib/modernizr.2.6.2.min.js"></script>
	<script type="text/javascript" src="assets/js/lib/respond.min.js"></script>
	<script type="text/javascript" src="assets/js/lib/jquery.placeholder.min.js"></script>
	<script type="text/javascript" src="assets/js/lib/bigscreen.min.js"></script>
	
    <script type="text/javascript" src="assets/js/models/photo.js"></script>
    <script type="text/javascript" src="assets/js/collections/photos.js"></script>
    <script type="text/javascript" src="assets/js/views/categories.js"></script>
    <script type="text/javascript" src="assets/js/views/photo.js"></script>
    <script type="text/javascript" src="assets/js/router.js"></script>
    <script type="text/javascript" src="assets/js/app.js"></script>
</body>
</html>