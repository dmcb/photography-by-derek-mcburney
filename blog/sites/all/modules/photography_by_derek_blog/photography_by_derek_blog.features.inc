<?php
/**
 * @file
 * photography_by_derek_blog.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function photography_by_derek_blog_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_views_api().
 */
function photography_by_derek_blog_views_api($module = NULL, $api = NULL) {
  return array("api" => "3.0");
}

/**
 * Implements hook_node_info().
 */
function photography_by_derek_blog_node_info() {
  $items = array(
    'photo_article' => array(
      'name' => t('Photo article'),
      'base' => 'node_content',
      'description' => t('Use <em>articles</em> for time-sensitive content like news, press releases or blog posts.'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
    'photo_blog' => array(
      'name' => t('Photo blog'),
      'base' => 'node_content',
      'description' => t('Create a photography blog article.'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  return $items;
}
