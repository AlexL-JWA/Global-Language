<?php
/**Template name: category_page */
get_header();
$my_blog = get_fields();
$post_id = get_the_ID();
//var_dump(get_the_category( $post_id ));
?>
<!--Pagination-->
<?php
//$catslug = get_the_category( $post_id );
//$catname = $catslug[0]->slug;
////var_dump($catname);
//$paged = $_GET['page']  ? absint( $_GET['page']  ) : 1;
//
//$the_query = new WP_Query( array(
//    'posts_per_page' => 1,
//    'category_name'  => $catname,
//    'paged'          => $paged
//) );
//?>
<!--START CONTENT-->
<section class="blog-page">
    <div class="title green">
        <div class="bg-op">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h1 class="title"><?php single_cat_title(); ?></h1>
    <!--                    --><?php //if( function_exists('kama_breadcrumbs') ) kama_breadcrumbs(' / '); ?>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="#"><?php single_cat_title(); ?></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                <div class="content-blog">
                    <ul class="blog-menu">
                        <li>
                            <a href="#">
                                <i class="icon-menu-interface"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="icon-menu"></i>
                            </a>
                        </li>
                    </ul>

                    <div class="blog-items">
                        <?php
//                        while( $the_query->have_posts() ){
//                            $the_query->the_post();
//                            $my_terms = get_the_terms($the_query->ID, 'category');
//                            $post_id = get_the_ID();
//                            $meta_values = get_post_meta( $post_id, 'vievs', false );
//                            var_dump($the_query->posts);

//                            $my_blog_lup = get_fields();
                            ?>
                        <?php if(have_posts()) : ?>
                        <?php while (have_posts()) :the_post();?>
<!--                        --><?php //while( $the_query->have_posts() ){
//                            $the_query->the_post();?>
                        <?php $my_blog_lup = get_fields();
                        ?>

                            <div class="blog-item">
                                <img src="<?php echo $my_blog_lup['picture_for_a_brief_description'];?>" alt="#">
                                <div class="description-blog">
                                    <h2 class="title"><?php the_title() ?></h2>
                                    <p><?php echo get_the_date('F d Y', $post_id); ?> in Language Connect by <a href="/author-page/?author-page=<?php echo get_the_author_link();?>"><?php echo get_the_author();?></a></p>
                                    <p class="text"><?php the_content(); ?></p>
                                    <a href="<?php the_permalink();?>" class="button blue">Read more</a>

                                    <div class="share">
                                        <i class="icon-share"></i>
                                        <ul class="share-menu">
                                            <li>
                                                <a href="#"><i class="icon-twitter"></i>Twitter</a>
                                            </li>
                                            <li>
                                                <a href="#"><i class="icon-facebook"></i>Facebook</a>
                                            </li>
                                            <li>
                                                <a href="#"><i class="icon-linkedin"></i>Linkedin</a>
                                            </li>
                                            <li>
                                                <a href="#"><i class="icon-gplus"></i>Google+</a>
                                            </li>
                                            <li>
                                                <a href="#"><i class="icon-pinterest"></i>Pinterest</a>
                                            </li>
                                            <li>
                                                <a href="#"><i class="icon-behance"></i>Behance</a>
                                            </li>
                                            <li>
                                                <a href="#"><i class="icon-digg"></i>Digg</a>
                                            </li>
                                            <li>
                                                <a href="#"><i class="icon-dribble-logo"></i>Dribbble</a>
                                            </li>
                                            <li>
                                                <a href="#"><i class="icon-digglogo"></i>digg.it</a>
                                            </li>
                                            <li>
                                                <a href="#"><i class="icon-instagram"></i>Instagram</a>
                                            </li>
                                            <li>
                                                <a href="#"><i class="icon-Delicious"></i>Delicious</a>
                                            </li>
                                            <li>
                                                <a href="#"><i class="icon-icon"></i>Youtube</a>
                                            </li>
                                            <li>
                                                <a href="#"><i class="icon-reddit-social-logo"></i>Reddit</a>
                                            </li>
                                            <li>
                                                <a href="#"><i class="icon-my-space-logo"></i>My space</a>
                                            </li>
                                            <li>
                                                <a href="#"><i class="icon-flickr"></i>Flickr</a>
                                            </li>
                                            <li>
                                                <a href="#"><i class="icon-stumbleupon"></i>Stumbleupon</a>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
<!--                        --><?php //}
//                        wp_reset_postdata();?>
                            <?php endwhile;?>
                        <?php endif;?>
<!--                        --><?php //}
//                        wp_reset_postdata();?>

                    </div>

                    <hr class="sline">

                    <div class="pagination">
<!--Pagination-->
<!--                        --><?php
//                        $big = 999999999;
//
//                        $args = array(
//                            'base'    => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
//                            'format'  => '?page=%#%',
//                            'current' => max( 1, $_GET['page'] ),
//                            'mid_size' => 1,
//                            'end_size' => 3,
//                            'prev_text' => '&#171; Prev',
//                            'next_text' => 'Next &#187;',
//                            'type' => 'list',
//                            'total'   => $the_query->max_num_pages
//                        );
//                        echo paginate_links($args);
//                        ?>

                    </div>

                </div>

                <?php get_template_part('sitebar');?>

            </div>
        </div>
    </div>
</section>
<!--END CONTENT-->

<?php
get_footer();
?>
