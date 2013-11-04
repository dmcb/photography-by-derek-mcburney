<?php
/**
 * @file
 * photography_by_derek_blog.features.menu_links.inc
 */

/**
 * Implements hook_menu_default_menu_links().
 */
function photography_by_derek_blog_menu_default_menu_links() {
  $menu_links = array();

  // Exported menu link: main-menu_about-derek:node/2
  $menu_links['main-menu_about-derek:node/2'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'node/2',
    'router_path' => 'node/%',
    'link_title' => 'About Derek',
    'options' => array(
      'identifier' => 'main-menu_about-derek:node/2',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 0,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -48,
    'customized' => 1,
  );
  // Exported menu link: main-menu_blog:<front>
  $menu_links['main-menu_blog:<front>'] = array(
    'menu_name' => 'main-menu',
    'link_path' => '<front>',
    'router_path' => '',
    'link_title' => 'Blog',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'main-menu_blog:<front>',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 1,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -49,
    'customized' => 1,
  );
  // Exported menu link: main-menu_return-to-portfolio:http://photographybyderek.com
  $menu_links['main-menu_return-to-portfolio:http://photographybyderek.com'] = array(
    'menu_name' => 'main-menu',
    'link_path' => 'http://photographybyderek.com',
    'router_path' => '',
    'link_title' => 'Return to portfolio',
    'options' => array(
      'attributes' => array(
        'title' => '',
      ),
      'identifier' => 'main-menu_return-to-portfolio:http://photographybyderek.com',
    ),
    'module' => 'menu',
    'hidden' => 0,
    'external' => 1,
    'has_children' => 0,
    'expanded' => 0,
    'weight' => -50,
    'customized' => 1,
  );
  // Translatables
  // Included for use with string extractors like potx.
  t('About Derek');
  t('Blog');
  t('Return to portfolio');


  return $menu_links;
}
