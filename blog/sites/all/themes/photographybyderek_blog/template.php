<?php

function photographybyderek_blog_preprocess_html(&$variables) {
	$viewport = array(
		'#tag' => 'meta', 
		'#attributes' => array(
			'name' => 'viewport', 
			'content' => 'width=device-width, initial-scale=1',
		),
	);
	drupal_add_html_head($viewport, 'viewport');
}

function photographybyderek_blog_preprocess_node(&$variables) {
	/* Remove read more link */
	unset($variables['content']['links']['node']['#links']['node-readmore']);
}
