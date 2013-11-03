<?php

function photographybyderek_blog_preprocess_node(&$variables) {
	/* Remove read more link */
	unset($variables['content']['links']['node']['#links']['node-readmore']);
}
