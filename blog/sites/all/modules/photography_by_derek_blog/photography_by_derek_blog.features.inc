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
 * Implements hook_image_default_styles().
 */
function photography_by_derek_blog_image_default_styles() {
  $styles = array();

  // Exported image style: blog_thumbnail.
  $styles['blog_thumbnail'] = array(
    'name' => 'blog_thumbnail',
    'label' => 'Blog thumbnail',
    'effects' => array(
      1 => array(
        'label' => 'Scale and crop',
        'help' => 'Scale and crop will maintain the aspect-ratio of the original image, then crop the larger dimension. This is most useful for creating perfectly square thumbnails without stretching the image.',
        'effect callback' => 'image_scale_and_crop_effect',
        'dimensions callback' => 'image_resize_dimensions',
        'form callback' => 'image_resize_form',
        'summary theme' => 'image_resize_summary',
        'module' => 'image',
        'name' => 'image_scale_and_crop',
        'data' => array(
          'width' => 1000,
          'height' => 1000,
        ),
        'weight' => 1,
      ),
    ),
  );

  return $styles;
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
