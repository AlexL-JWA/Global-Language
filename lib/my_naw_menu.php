<?php
function lem_setup()
{
    if (function_exists('register_nav_menus')) {
        register_nav_menus(
            array(
                'menu_1' => 'Menu 1 Header',
                'menu_2' => 'Menu 2 Footer menu',
                'menu_3' => 'Menu 3 Social links',
                'menu_4' => 'Menu 4 Sectors',
                'menu_5' => 'Menu 5 Languages',
                'menu_6' => 'Language Flags'
            )
        );
    }
    
}
add_action('after_setup_theme', 'lem_setup');

// add_filter( 'wp_nav_menu_args', 'wp_nav' );
////function wp_nav( $args = '' ){
////	$args = array(
////        'theme_location'  => 'menu_6',
////	'menu'            => 'language_menu', 
////	'container'       => 'div', 
////	'container_class' => 'language_select', 
////	'container_id'    => '',
////	'menu_class'      => 'menu', 
////	'menu_id'         => '',
////	'echo'            => true,
////	'fallback_cb'     => 'wp_page_menu',
////	'before'          => '',
////	'after'           => '',
////	'link_before'     => '',
////	'link_after'      => '',
////	'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s</ul>',
////	'depth'           => 0,
////	'walker'          => '',
////    );
////        
////	return $args;
////}

class Menu_Walker_social extends Walker
{
    public function walk($elements, $max_depth)
    {
//        var_dump($elements); die();
        $list = array();
        foreach ($elements as $item) {
//            var_dump($item->classes[7]);
//            var_dump($item->post_title);
//            echo '<hr>';

                $list[] = '<li><a href="' . $item->url . '" target=' . '"_blank">' . '<i class="' . $item->title . '"></i>' . '</a></li>';

        }

        return join("\n", $list);
    }
}

class Menu_Walker_languages extends Walker
{
    public function walk($elements, $max_depth)
    {
//        var_dump($elements); die();
        $list = array();
        foreach ($elements as $item) {
            $list[] = '<li><a href="' . $item->url . '">' . $item->title . '</a></li>';
        }

        return join("\n", $list);
    }
}

class Menu_Walker_footer extends Walker
{
    public function walk($elements, $max_depth)
    {
//        var_dump($elements); die();
        $list = array();
        foreach ($elements as $item) {
            $list[] = '<li><a href="' . $item->url . '">' . $item->title . '</a></li>';
        }

        return join("\n", $list);
    }
}

class Menu_Walker_footer_sectors extends Walker
{
    public function walk($elements, $max_depth)
    {
//        var_dump($elements); die();
        $list = array();
        foreach ($elements as $item) {
            $list[] = '<li><a href="' . $item->url . '">' . $item->title . '</a></li>';
        }

        return join("\n", $list);
    }
}

class Menu_Walker_header extends Walker
{
    public function walk($elements, $max_depth)
    {
//        var_dump($elements); die();
        $list = array();
        foreach ($elements as $item) {
            $list[] = '<li><a href="' . $item->url . '">' . $item->title . '</a></li>';
        }

        return join("\n", $list);
    }
}

class Menu_Walker_header_language extends Walker
{
    public function walk($elements, $max_depth)
    {
        //print_r($elements); die();
        
        
        $list = array();
        echo '<span></span>';
        
        foreach ($elements as $item) {
            $classes = empty( $item->classes ) ? array() : (array) $item->classes;
            
            $css_class = implode(' ', $classes);
            
            if(strlen($item->title) > 19)
            {
               $cut_title = mb_strimwidth($item->title, 0 , 18, '...');
               $list[] = '<li><a href="' . $item->url .'"'. 'class="'. $css_class .'">' . $cut_title . '</a></li>';
            }
            else{
                $list[] = '<li><a href="' . $item->url .'"'. 'class="'. $css_class .'">' . $item->title . '</a></li>';
            }
            
        }

        return join("\n", $list);
    }
}
