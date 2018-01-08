<?php
//new custom_post for cloth
add_action( 'init', 'product_init' );
function product_init() {
    $labels_object = array(
        'name'               => _x( 'Product', 'greet' ),
        'singular_name'      => _x( 'Product', 'greet' ),
        'menu_name'          => _x( 'Product', 'greet' ),
        'name_admin_bar'     => _x( 'Product', 'greet' ),
        'add_new'            => _x( 'Add new product', 'greet' ),
        'add_new_item'       => __( 'Add new product', 'greet' ),
        'new_item'           => __( 'New product', 'greet' ),
        'edit_item'          => __( 'Edit', 'greet' ),
        'view_item'          => __( 'View', 'greet' ),
        'all_items'          => __( 'All product', 'greet' ),
        'search_items'       => __( 'search product', 'greet' ),
        'parent_item_colon'  => __( 'parent product:', 'greet' ),
        'not_found'          => __( 'product not found.', 'greet' ),
        'not_found_in_trash' => __( 'The basket found product.', 'greet' )
    );
    $args_object = array(
        'menu_icon' => 'dashicons-format-gallery',
        'labels'             => $labels_object,
        'description'        => __( 'Description', 'greet' ),
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array( 'slug' => 'products' ),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => null,
//		'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments', 'custom-fields','page-attributes' ),
        'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments', 'page-attributes' ),
        //'taxonomies'         => array('post_tag')
//        'max_taxonomies'         => 1
    );
    register_post_type( 'product', $args_object );
}
function create_product_taxonomies() {
    $labels = array(
        'name'              => _x( 'Category', 'taxonomy general name' ),
        'singular_name'     => _x( 'Product', 'taxonomy singular name' ),
        'search_items'      => __( 'Search product category' ),
        'all_items'         => __( 'All category' ),
        'parent_item'       => __( 'Parent category' ),
        'parent_item_colon' => __( 'Parent category:' ),
        'edit_item'         => __( 'Edit category' ),
        'update_item'       => __( 'Update category' ),
        'add_new_item'      => __( 'Add new category' ),
        'new_item_name'     => __( 'New product name' ),
        'menu_name'         => __( 'Category' ),
    );
    register_taxonomy( 'type_product', array( 'product' ), array(
//		register_taxonomy( 'products_category', array( 'product' ), array(
        'hierarchical' => true,
        'labels'       => $labels,
        'show_ui'      => true,
        'query_var'    => true,
        'meta_box_cb'  => 'post_categories_meta_box',
        'show_admin_column' => true,
        'rewrite'      => array( 'slug' => 'product' ),
    ) );
    $labels = array(
        'name'              => _x( 'Tag', 'taxonomy general name' ),
        'singular_name'     => _x( 'product tag', 'taxonomy singular name' ),
        'search_items'      => __( 'Search tags' ),
        'all_items'         => __( 'All tags' ),
        'parent_item'       => __( 'Parent tag' ),
        'parent_item_colon' => __( 'Parent tags:' ),
        'edit_item'         => __( 'Edit tags' ),
        'update_item'       => __( 'Update tag' ),
        'add_new_item'      => __( 'Add new tag' ),
        'view_item'         => __( 'See the tag' ),
        'new_item_name'     => __( 'New tag name' ),
        'menu_name'         => __( 'Tag' ),
//            'popular_items'     => __( 'Popular tags' ),
//            'choose_from_most_used' => __( 'Choose from the most used tags' ),
        'not_found'         => __( 'Tag no found' ),
//            'separate_items_with_commas'         => __( 'Separate tags with commas' ),
    );
    register_taxonomy( 'type_tag', array( 'product' ), array(
        'hierarchical' => true,
        'labels'       => $labels,
        'show_ui'      => true,
        'query_var'    => true,
        'rewrite'      => array( 'slug' => 'product' ),
        'meta_box_cb'  => 'post_categories_meta_box',
        'public'       => true,
        'show_in_nav_menus' => true,
        'show_admin_column' => true,
        'capabilities' => array('manage_terms' => true),
    ) );
}
add_action( 'init', 'create_product_taxonomies', 0 );
// добавляет вызов функции при инициализации административного раздела
add_action('admin_init', 'category_custom_fields', 1);
// функция расширения функционала административного раздела
function category_custom_fields()
{
    // добавления действия после отображения формы ввода параметров категории
    add_action('type_product_edit_form_fields', 'category_custom_fields_form');
    // добавления действия при сохранении формы ввода параметров категории
    add_action('edit_type_product', 'category_custom_fields_save');
    add_action('type_product_add_form_fields', 'category_custom_fields_form');
    // добавления действия при сохранении формы ввода параметров категории
    add_action('created_type_product', 'category_custom_fields_save');
    //add_action('created_product', 'like_save');
}
function like_save($post_id){
    var_dump($post_id);
    die;
}
function category_custom_fields_form($tag)
{
    $t_id = $tag->term_id;
    $cat_meta = get_option("type_product_$t_id");
//    var_dump($cat_meta);
//    die;
    ?>
    <tr class="form-field">
        <th scope="row" valign="top"><label for="extra1"><?php _e('Icon class'); ?></label></th>
        <td>
            <input type="text" name="Cat_meta[icon_class]" id="Cat_meta[icon_class]" size="25" style="width:60%;" value="<?php echo
            $cat_meta['icon_class'] ? $cat_meta['icon_class'] : ''; ?>"><br />
            <span class="description"><?php _e('add class for category icon'); ?></span>
        </td>
    </tr>
    <?php
}
function category_custom_fields_save($term_id)
{
    if (isset($_POST['Cat_meta'])) {
        $t_id = $term_id;
        $cat_meta = get_option("type_product_$t_id");
        $cat_keys = array_keys($_POST['Cat_meta']);
        foreach ($cat_keys as $key) {
            if (isset($_POST['Cat_meta'][$key])) {
                $cat_meta[$key] = $_POST['Cat_meta'][$key];
            }
        }
        //save the option array
        update_option("type_product_$t_id", $cat_meta);
    }
}
//function save_likes( $post_id ) {
//    if (isset(get_post_meta($post_id)['likesCount'][0])){
//        return;
//    }else{
//        update_post_meta( $post_id, 'likesCount', sanitize_text_field((int)rand(20, 60)) );
//    }
//}
//add_action( 'save_post_product', 'save_likes' );
function order_pdf_print_meta_boxes() {
    add_meta_box('orderpdfdiv', 'Files', 'order_pdf_print_box', 'product_order', 'normal', 'high');
}
add_action( 'admin_menu', 'order_pdf_print_meta_boxes' );
function order_pdf_print_box($post) {
    $urlArr = get_attached_media( 'text/html', $post->ID );
    $url = array();
    foreach ($urlArr as $u){
        array_push($url, $u->guid);
        $url = $u->guid;
    }
//    var_dump('wwwwwwwwwwwwww');
//    var_dump($url);
    $html = '<a href="'.$url[0].'" target="_blank" >Download PDF with order image</a></br>'.
        '<a href="'.$url[1].'" target="_blank" >Download PDF with order info</a>';
    echo $html;
}
//============================================
//new custom_post for sector
add_action( 'init', 'sector_init' );
function sector_init() {
    $labels_object = array(
        'name'               => _x( 'sector', 'greet' ),
        'singular_name'      => _x( 'sector', 'greet' ),
        'menu_name'          => _x( 'sector', 'greet' ),
        'name_admin_bar'     => _x( 'sector', 'greet' ),
        'add_new'            => _x( 'add new sector', 'greet' ),
        'add_new_item'       => __( 'add new sector', 'greet' ),
        'new_item'           => __( 'New product', 'greet' ),
        'edit_item'          => __( 'edit', 'greet' ),
        'view_item'          => __( 'View', 'greet' ),
        'all_items'          => __( 'all items', 'greet' ),
        'search_items'       => __( 'Search sector', 'greet' ),
        'parent_item_colon'  => __( 'Parent sector:', 'greet' ),
        'not_found'          => __( 'sector not found.', 'greet' ),
        'not_found_in_trash' => __( 'The basket found sector.', 'greet' )
    );
    $args_object = array(
        'menu_icon' => 'dashicons-format-gallery',
        'labels'             => $labels_object,
        'description'        => __( 'Description', 'greet' ),
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array( 'slug' => 'sectorse' ),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => null,
//		'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments', 'custom-fields','page-attributes' ),
        'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments', 'page-attributes' ),
        //'taxonomies'         => array('post_tag')
//        'max_taxonomies'         => 1
    );
    register_post_type( 'sector', $args_object );
}
function create_sector_taxonomies() {
    $labels = array(
        'name'              => _x( 'category sector', 'taxonomy general name' ),
        'singular_name'     => _x( 'sector', 'taxonomy singular name' ),
        'search_items'      => __( 'Search sector category' ),
        'all_items'         => __( 'All sector categories' ),
        'parent_item'       => __( 'Parent sector' ),
        'parent_item_colon' => __( 'Parent sector:' ),
        'edit_item'         => __( 'edit item' ),
        'update_item'       => __( 'update item' ),
        'add_new_item'      => __( 'add new item' ),
        'new_item_name'     => __( 'New sector name' ),
        'menu_name'         => __( 'sector category' ),
    );
    register_taxonomy( 'type_sector', array( 'sector' ), array(
//		register_taxonomy( 'sector_category', array( 'sector' ), array(
        'hierarchical' => true,
        'labels'       => $labels,
        'show_ui'      => true,
        'query_var'    => true,
        'meta_box_cb'  => 'post_categories_meta_box',
        'show_admin_column' => true,
        'rewrite'      => array( 'slug' => 'sector' ),
    ) );
    $labels = array(
        'name'              => _x( 'tag sector', 'taxonomy general name' ),
        'singular_name'     => _x( 'sector tag', 'taxonomy singular name' ),
        'search_items'      => __( 'Search tags' ),
        'all_items'         => __( 'All tags' ),
        'parent_item'       => __( 'Parent tag' ),
        'parent_item_colon' => __( 'Parent tag:' ),
        'edit_item'         => __( 'edit item' ),
        'update_item'       => __( 'update item' ),
        'add_new_item'      => __( 'add new item' ),
        'view_item'         => __( 'See the tag' ),
        'new_item_name'     => __( 'New tag name' ),
        'menu_name'         => __( 'sector tag' ),
//            'popular_items'     => __( 'Popular tags' ),
//            'choose_from_most_used' => __( 'Choose from the most used tags' ),
        'not_found'         => __( 'Tag no found' ),
//            'separate_items_with_commas'         => __( 'Separate tags with commas' ),
    );
    register_taxonomy( 'type_tag_sector', array( 'sector' ), array(
        'hierarchical' => true,
        'labels'       => $labels,
        'show_ui'      => true,
        'query_var'    => true,
        'rewrite'      => array( 'slug' => 'sector' ),
        'meta_box_cb'  => 'post_categories_meta_box',
        'public'       => true,
        'show_in_nav_menus' => true,
        'show_admin_column' => true,
        'capabilities' => array('manage_terms' => true),
    ) );
}
add_action( 'init', 'create_sector_taxonomies', 0 );
// добавляет вызов функции при инициализации административного раздела
add_action('admin_init', 'my_sector_category_custom_fields', 1);
// функция расширения функционала административного раздела
function my_sector_category_custom_fields()
{
    // добавления действия после отображения формы ввода параметров категории
    add_action('type_sector_edit_form_fields', 'my_category_custom_fields_form');
    // добавления действия при сохранении формы ввода параметров категории
    add_action('edit_type_sector', 'my_category_custom_fields_save');
    add_action('type_sector_add_form_fields', 'my_category_custom_fields_form');
    // добавления действия при сохранении формы ввода параметров категории
    add_action('created_type_sector', 'my_category_custom_fields_save');
    //add_action('created_sector', 'my_like_save');
}
function my_sector_like_save($post_id){
    var_dump($post_id);
    die;
}
function my_sector_category_custom_fields_form($tag)
{
    $t_id = $tag->term_id;
    $cat_meta = get_option("type_sector_$t_id");
//    var_dump($cat_meta);
//    die;
    ?>
    <tr class="form-field">
        <th scope="row" valign="top"><label for="extra1"><?php _e('Icon class'); ?></label></th>
        <td>
            <input type="text" name="Cat_meta[icon_class]" id="Cat_meta[icon_class]" size="25" style="width:60%;" value="<?php echo
            $cat_meta['icon_class'] ? $cat_meta['icon_class'] : ''; ?>"><br />
            <span class="description"><?php _e('add class for category icon'); ?></span>
        </td>
    </tr>
    <?php
}
function my_sector_category_custom_fields_save($term_id)
{
    if (isset($_POST['Cat_meta'])) {
        $t_id = $term_id;
        $cat_meta = get_option("type_sector_$t_id");
        $cat_keys = array_keys($_POST['Cat_meta']);
        foreach ($cat_keys as $key) {
            if (isset($_POST['Cat_meta'][$key])) {
                $cat_meta[$key] = $_POST['Cat_meta'][$key];
            }
        }
        //save the option array
        update_option("type_sector_$t_id", $cat_meta);
    }
}
//function save_likes( $post_id ) {
//    if (isset(get_post_meta($post_id)['likesCount'][0])){
//        return;
//    }else{
//        update_post_meta( $post_id, 'likesCount', sanitize_text_field((int)rand(20, 60)) );
//    }
//}
//add_action( 'save_post_sector', 'save_likes' );
function my_sector_order_pdf_print_meta_boxes() {
    add_meta_box('orderpdfdiv', 'Files', 'my_sector_order_pdf_print_box', 'sector_order', 'normal', 'high');
}
add_action( 'admin_menu', 'my_sector_order_pdf_print_meta_boxes' );
function my_sector_order_pdf_print_box($post) {
    $urlArr = get_attached_media( 'text/html', $post->ID );
    $url = array();
    foreach ($urlArr as $u){
        array_push($url, $u->guid);
//		$url = $u->guid;
    }
//	var_dump($url);
    $html = '<a href="'.$url[0].'" target="_blank" >Download PDF with order image</a></br>'.
        '<a href="'.$url[1].'" target="_blank" >Download PDF with order info</a>';
    echo $html;
}