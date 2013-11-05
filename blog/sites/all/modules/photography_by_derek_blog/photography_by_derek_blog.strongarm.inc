<?php
/**
 * @file
 * photography_by_derek_blog.strongarm.inc
 */

/**
 * Implements hook_strongarm().
 */
function photography_by_derek_blog_strongarm() {
  $export = array();

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'admin_theme';
  $strongarm->value = 'seven';
  $export['admin_theme'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'clean_url';
  $strongarm->value = 1;
  $export['clean_url'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'comment_anonymous_photo_article';
  $strongarm->value = 0;
  $export['comment_anonymous_photo_article'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'comment_anonymous_photo_blog';
  $strongarm->value = 0;
  $export['comment_anonymous_photo_blog'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'comment_default_mode_photo_article';
  $strongarm->value = 1;
  $export['comment_default_mode_photo_article'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'comment_default_mode_photo_blog';
  $strongarm->value = 1;
  $export['comment_default_mode_photo_blog'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'comment_default_per_page_photo_article';
  $strongarm->value = '50';
  $export['comment_default_per_page_photo_article'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'comment_default_per_page_photo_blog';
  $strongarm->value = '50';
  $export['comment_default_per_page_photo_blog'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'comment_form_location_photo_article';
  $strongarm->value = 1;
  $export['comment_form_location_photo_article'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'comment_form_location_photo_blog';
  $strongarm->value = 1;
  $export['comment_form_location_photo_blog'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'comment_photo_article';
  $strongarm->value = '2';
  $export['comment_photo_article'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'comment_photo_blog';
  $strongarm->value = '0';
  $export['comment_photo_blog'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'comment_preview_photo_article';
  $strongarm->value = '1';
  $export['comment_preview_photo_article'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'comment_preview_photo_blog';
  $strongarm->value = '1';
  $export['comment_preview_photo_blog'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'comment_subject_field_photo_article';
  $strongarm->value = 1;
  $export['comment_subject_field_photo_article'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'comment_subject_field_photo_blog';
  $strongarm->value = 1;
  $export['comment_subject_field_photo_blog'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'disqus_developer';
  $strongarm->value = 1;
  $export['disqus_developer'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'disqus_domain';
  $strongarm->value = 'photographybyderek';
  $export['disqus_domain'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'disqus_inherit_login';
  $strongarm->value = 1;
  $export['disqus_inherit_login'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'disqus_location';
  $strongarm->value = 'content_area';
  $export['disqus_location'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'disqus_nodetypes';
  $strongarm->value = array(
    'photo_blog' => 'photo_blog',
    'article' => 0,
    'page' => 0,
  );
  $export['disqus_nodetypes'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'embed_fancybox_photo_article';
  $strongarm->value = 0;
  $export['embed_fancybox_photo_article'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'embed_fancybox_photo_blog';
  $strongarm->value = 1;
  $export['embed_fancybox_photo_blog'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'embed_field_photo_article';
  $strongarm->value = 'field_image';
  $export['embed_field_photo_article'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'embed_field_photo_blog';
  $strongarm->value = 'field_pictures';
  $export['embed_field_photo_blog'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'embed_metadata_photo_article';
  $strongarm->value = 0;
  $export['embed_metadata_photo_article'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'embed_metadata_photo_blog';
  $strongarm->value = 1;
  $export['embed_metadata_photo_blog'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'embed_pinterest_photo_article';
  $strongarm->value = 0;
  $export['embed_pinterest_photo_article'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'embed_pinterest_photo_blog';
  $strongarm->value = 1;
  $export['embed_pinterest_photo_blog'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'fancybox_settings';
  $strongarm->value = array(
    'settings' => array(
      'selectors' => '',
      'deactivated_pages' => 'admin*
img_assist*
imce*
node/add*
node/*/edit',
    ),
    'options' => array(
      'padding' => 15,
      'margin' => 20,
      'width' => 800,
      'height' => 600,
      'minWidth' => 100,
      'minHeight' => 100,
      'maxWidth' => 9999,
      'maxHeight' => 9999,
      'autoSize' => 1,
      'autoHeight' => 0,
      'autoWidth' => 0,
      'autoResize' => 1,
      'autoCenter' => 1,
      'fitToView' => 1,
      'aspectRatio' => 0,
      'topRatio' => 0.5,
      'leftRatio' => 0.5,
      'scrolling' => 'auto',
      'wrapCSS' => '',
      'arrows' => 1,
      'closeBtn' => 1,
      'closeClick' => 0,
      'nextClick' => 0,
      'mouseWheel' => 1,
      'autoPlay' => 0,
      'playSpeed' => 3000,
      'preload' => 3,
      'modal' => 0,
      'openEffect' => 'fade',
      'closeEffect' => 'fade',
      'nextEffect' => 'elastic',
      'prevEffect' => 'elastic',
      'openSpeed' => 250,
      'closeSpeed' => 250,
      'nextSpeed' => 250,
      'prevSpeed' => 250,
      'openEasing' => 'swing',
      'closeEasing' => 'swing',
      'nextEasing' => 'swing',
      'prevEasing' => 'swing',
      'openOpacity' => 1,
      'closeOpacity' => 1,
      'openMethod' => 'zoomIn',
      'closeMethod' => 'zoomOut',
      'nextMethod' => 'changeIn',
      'prevMethod' => 'changeOut',
    ),
    'helpers' => array(
      'title_enabled' => 1,
      'overlay_enabled' => 1,
      'thumbs_enabled' => 0,
      'media_enabled' => 0,
      'buttons_enabled' => 0,
      'title' => array(
        'type' => 'float',
        'position' => 'bottom',
      ),
      'overlay' => array(
        'closeClick' => 1,
        'speedOut' => 200,
        'showEarly' => 1,
        'locked' => 1,
        'fixed' => 1,
      ),
      'thumbs' => array(
        'width' => 50,
        'height' => 50,
        'position' => 'bottom',
      ),
      'media' => array(),
      'buttons' => array(
        'position' => 'top',
      ),
    ),
    'callbacks' => array(
      'onCancel' => '',
      'beforeLoad' => '',
      'afterLoad' => '',
      'beforeShow' => '',
      'afterShow' => '',
      'beforeClose' => '',
      'afterClose' => '',
      'onUpdate' => '',
      'onPlayStart' => '',
      'onPlayEnd' => '',
    ),
  );
  $export['fancybox_settings'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'field_bundle_settings_node__photo_article';
  $strongarm->value = array(
    'view_modes' => array(
      'teaser' => array(
        'custom_settings' => TRUE,
      ),
      'full' => array(
        'custom_settings' => FALSE,
      ),
      'rss' => array(
        'custom_settings' => FALSE,
      ),
      'search_index' => array(
        'custom_settings' => FALSE,
      ),
      'search_result' => array(
        'custom_settings' => FALSE,
      ),
      'token' => array(
        'custom_settings' => FALSE,
      ),
    ),
    'extra_fields' => array(
      'form' => array(),
      'display' => array(),
    ),
  );
  $export['field_bundle_settings_node__photo_article'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'field_bundle_settings_node__photo_blog';
  $strongarm->value = array(
    'view_modes' => array(
      'teaser' => array(
        'custom_settings' => TRUE,
      ),
      'full' => array(
        'custom_settings' => FALSE,
      ),
      'rss' => array(
        'custom_settings' => FALSE,
      ),
      'search_index' => array(
        'custom_settings' => FALSE,
      ),
      'search_result' => array(
        'custom_settings' => FALSE,
      ),
      'token' => array(
        'custom_settings' => FALSE,
      ),
    ),
    'extra_fields' => array(
      'form' => array(
        'title' => array(
          'weight' => '0',
        ),
        'path' => array(
          'weight' => '1',
        ),
      ),
      'display' => array(),
    ),
  );
  $export['field_bundle_settings_node__photo_blog'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'imagemagick_quality';
  $strongarm->value = '75';
  $export['imagemagick_quality'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'image_toolkit';
  $strongarm->value = 'imagemagick';
  $export['image_toolkit'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'jquery_update_jquery_version';
  $strongarm->value = '1.8';
  $export['jquery_update_jquery_version'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'lazyloader';
  $strongarm->value = array(
    'enabled' => 1,
    'distance' => '0',
    'placeholder' => '',
    'loader_icon' => '4',
    'exclude' => '',
  );
  $export['lazyloader'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'menu_options_photo_article';
  $strongarm->value = array(
    0 => 'main-menu',
  );
  $export['menu_options_photo_article'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'menu_options_photo_blog';
  $strongarm->value = array(
    0 => 'main-menu',
  );
  $export['menu_options_photo_blog'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'menu_parent_photo_article';
  $strongarm->value = 'main-menu:0';
  $export['menu_parent_photo_article'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'menu_parent_photo_blog';
  $strongarm->value = 'main-menu:0';
  $export['menu_parent_photo_blog'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'node_options_photo_article';
  $strongarm->value = array(
    0 => 'status',
    1 => 'promote',
  );
  $export['node_options_photo_article'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'node_options_photo_blog';
  $strongarm->value = array(
    0 => 'status',
    1 => 'promote',
  );
  $export['node_options_photo_blog'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'node_preview_photo_article';
  $strongarm->value = '1';
  $export['node_preview_photo_article'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'node_preview_photo_blog';
  $strongarm->value = '1';
  $export['node_preview_photo_blog'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'node_submitted_photo_article';
  $strongarm->value = 0;
  $export['node_submitted_photo_article'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'node_submitted_photo_blog';
  $strongarm->value = 0;
  $export['node_submitted_photo_blog'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'pathauto_node_pattern';
  $strongarm->value = '[node:title]';
  $export['pathauto_node_pattern'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'preprocess_css';
  $strongarm->value = 1;
  $export['preprocess_css'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'site_default_country';
  $strongarm->value = 'CA';
  $export['site_default_country'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'site_frontpage';
  $strongarm->value = 'blog';
  $export['site_frontpage'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'site_mail';
  $strongarm->value = 'derek@photographybyderek.com';
  $export['site_mail'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'site_name';
  $strongarm->value = 'Photography by Derek McBurney';
  $export['site_name'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'site_slogan';
  $strongarm->value = '';
  $export['site_slogan'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'theme_default';
  $strongarm->value = 'photographybyderek_blog';
  $export['theme_default'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'theme_photographybyderek_blog_settings';
  $strongarm->value = array(
    'toggle_logo' => 0,
    'toggle_name' => 1,
    'toggle_slogan' => 1,
    'toggle_node_user_picture' => 1,
    'toggle_comment_user_picture' => 1,
    'toggle_comment_user_verification' => 1,
    'toggle_favicon' => 0,
    'toggle_main_menu' => 0,
    'toggle_secondary_menu' => 0,
    'default_logo' => 1,
    'logo_path' => '',
    'logo_upload' => '',
    'default_favicon' => 1,
    'favicon_path' => '',
    'favicon_upload' => '',
  );
  $export['theme_photographybyderek_blog_settings'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'xmlsitemap_settings_menu_link_main-menu';
  $strongarm->value = array(
    'status' => '1',
    'priority' => '0.5',
  );
  $export['xmlsitemap_settings_menu_link_main-menu'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'xmlsitemap_settings_node_photo_article';
  $strongarm->value = array(
    'entity' => 'node',
    'bundle' => 'article',
    'info' => array(
      'label' => 'Article',
      'admin' => array(
        'path' => 'admin/structure/types/manage/%node_type',
        'real path' => 'admin/structure/types/manage/article',
        'bundle argument' => 4,
        'access arguments' => array(
          0 => 'administer content types',
        ),
      ),
      'rdf_mapping' => array(
        'field_image' => array(
          'predicates' => array(
            0 => 'og:image',
            1 => 'rdfs:seeAlso',
          ),
          'type' => 'rel',
        ),
        'field_tags' => array(
          'predicates' => array(
            0 => 'dc:subject',
          ),
          'type' => 'rel',
        ),
        'rdftype' => array(
          0 => 'sioc:Item',
          1 => 'foaf:Document',
        ),
        'title' => array(
          'predicates' => array(
            0 => 'dc:title',
          ),
        ),
        'created' => array(
          'predicates' => array(
            0 => 'dc:date',
            1 => 'dc:created',
          ),
          'datatype' => 'xsd:dateTime',
          'callback' => 'date_iso8601',
        ),
        'changed' => array(
          'predicates' => array(
            0 => 'dc:modified',
          ),
          'datatype' => 'xsd:dateTime',
          'callback' => 'date_iso8601',
        ),
        'body' => array(
          'predicates' => array(
            0 => 'content:encoded',
          ),
        ),
        'uid' => array(
          'predicates' => array(
            0 => 'sioc:has_creator',
          ),
          'type' => 'rel',
        ),
        'name' => array(
          'predicates' => array(
            0 => 'foaf:name',
          ),
        ),
        'comment_count' => array(
          'predicates' => array(
            0 => 'sioc:num_replies',
          ),
          'datatype' => 'xsd:integer',
        ),
        'last_activity' => array(
          'predicates' => array(
            0 => 'sioc:last_activity_date',
          ),
          'datatype' => 'xsd:dateTime',
          'callback' => 'date_iso8601',
        ),
      ),
      'xmlsitemap' => array(
        'entity' => 'node',
        'bundle' => 'article',
        'status' => '1',
        'priority' => '0.5',
      ),
    ),
    'status' => '1',
    'priority' => '0.5',
  );
  $export['xmlsitemap_settings_node_photo_article'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'xmlsitemap_settings_node_photo_blog';
  $strongarm->value = array(
    'status' => '1',
    'priority' => '0.5',
  );
  $export['xmlsitemap_settings_node_photo_blog'] = $strongarm;

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'xmlsitemap_settings_taxonomy_term_tags';
  $strongarm->value = array(
    'status' => '1',
    'priority' => '0.5',
  );
  $export['xmlsitemap_settings_taxonomy_term_tags'] = $strongarm;

  return $export;
}
