<?php
function my_scripts(){

    wp_enqueue_style('min-css', get_template_directory_uri() . '/css/main.css');

    wp_deregister_script( 'jquery' );
    wp_register_script('jquery', get_template_directory_uri() . '/js/bild.js', array(), false, true);
    wp_enqueue_script( 'jquery' );

    wp_enqueue_script('lem_options', get_template_directory_uri() . '/js/lem_options.js', array(), false, true);
    wp_enqueue_script('progress', get_template_directory_uri() . '/js/progress.js', array(), false, true);
    wp_enqueue_script('lem_share', get_template_directory_uri() . '/share42/', array(), false, true);
    
    wp_localize_script( 'lem_options', 'myajax', 
		array(
			'url' => admin_url('admin-ajax.php'),
			'nonce' => wp_create_nonce('myajax-nonce')
		)
	);  

}
add_action('wp_enqueue_scripts', 'my_scripts');