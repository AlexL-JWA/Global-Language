<?php
require_once ('lib/scripts.php');
require_once ('lib/my_customize_menu.php');
require_once ('lib/my_naw_menu.php');
require_once ('lib/variables.php');
require_once ('lib/post_type.php');
require_once ('lib/filter_date_post.php');
require_once ('lib/bread_crumbs.php');


function lem_franch_setup(){
   
    load_theme_textdomain('lem');
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
}
add_action('after_setup_theme', 'lem_franch_setup');
//++++++++++++++++++++++++++
