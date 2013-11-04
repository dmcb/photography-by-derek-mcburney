<?php
/**
 * @file
 * photography_by_derek_blog.features.uuid_node.inc
 */

/**
 * Implements hook_uuid_features_default_content().
 */
function photography_by_derek_blog_uuid_features_default_content() {
  $nodes = array();

  $nodes[] = array(
  'uid' => 1,
  'title' => 'About Derek',
  'log' => '',
  'status' => 1,
  'comment' => 1,
  'promote' => 1,
  'sticky' => 0,
  'vuuid' => 'accd7432-1293-4cef-a3f5-f46805e792fd',
  'type' => 'photo_article',
  'language' => 'und',
  'created' => 1383435787,
  'tnid' => 0,
  'translate' => 0,
  'uuid' => '7967164f-2601-4f7e-8856-f01026e065e3',
  'revision_uid' => 1,
  'body' => array(
    'und' => array(
      0 => array(
        'value' => '[image:1]

Photography is a passion of mine - I constantly seek new moments to capture and challenges to undertake. There is beauty everywhere and I\'m fortunate enough to be able to share it from my perspective. I would be humbled to help tell your story.',
        'summary' => '',
        'format' => 'markdown',
        'safe_value' => '<p>[image:1]</p>

<p>Photography is a passion of mine - I constantly seek new moments to capture and challenges to undertake. There is beauty everywhere and I\'m fortunate enough to be able to share it from my perspective. I would be humbled to help tell your story.</p>
',
        'safe_summary' => '',
      ),
    ),
  ),
  'field_tags' => array(),
  'field_image' => array(
    'und' => array(
      0 => array(
        'fid' => 71,
        'alt' => '',
        'title' => 'Photo by Jason Ronald',
        'width' => 1896,
        'height' => 1264,
        'uid' => 1,
        'filename' => 'DSC_0540.jpg',
        'uri' => 'public://field/image/DSC_0540.jpg',
        'filemime' => 'image/jpeg',
        'filesize' => 606944,
        'status' => 1,
        'timestamp' => 1383435787,
        'uuid' => '627cfb83-04f9-46b1-b045-cfe7e04b7323',
        'rdf_mapping' => array(),
      ),
    ),
  ),
  'metatags' => array(),
  'rdf_mapping' => array(
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
  'cid' => 0,
  'last_comment_name' => NULL,
  'last_comment_uid' => 1,
  'comment_count' => 0,
  'name' => 'derekmcb',
  'picture' => 0,
  'data' => 'b:0;',
  'date' => '2013-11-02 17:43:07 -0600',
);
  return $nodes;
}
