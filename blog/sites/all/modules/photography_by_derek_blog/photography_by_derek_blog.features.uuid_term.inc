<?php
/**
 * @file
 * photography_by_derek_blog.features.uuid_term.inc
 */

/**
 * Implements hook_uuid_features_default_terms().
 */
function photography_by_derek_blog_uuid_features_default_terms() {
  $terms = array();

  $terms[] = array(
    'name' => 'Weddings',
    'description' => '',
    'format' => 'markdown',
    'weight' => 0,
    'uuid' => '940d0d03-275e-4527-a02a-4d217f34170a',
    'vocabulary_machine_name' => 'tags',
    'metatags' => array(),
  );
  return $terms;
}
