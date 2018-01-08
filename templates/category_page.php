<?php
/**Template name: category_page */

get_header();
$my_blog = get_fields();
?>
<?php
$paged = get_query_var( 'paged' ) ? absint( get_query_var( 'paged' ) ) : 1;
//var_dump($_GET['author-page']);
$myacategory = $_GET['category-page'];
$the_query = new WP_Query( array(
//    'posts_per_page' => 4,
    'category_name'  => $myacategory,
    'paged'          => $paged
) );
$cat_name = $the_query->query_vars['category_name'];
$cat_name = str_replace(['-', '_'], ' ', $cat_name);
?>
<!--START CONTENT-->
<section class="blog-page">
    <div class="title green">
        <div class="bg-op">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h1 class="title"><?php the_title();?></h1>
    <!--                    --><?php //if( function_exists('kama_breadcrumbs') ) kama_breadcrumbs(' / '); ?>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="#"><?php echo ucwords($cat_name); ?></a>
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
                        <!--                        --><?php
                        //                        $ars = array('post_type'=>'post');
                        //                        $my_posts = get_posts($ars);
                        //                        foreach ($my_posts as $post) {
                        //                        setup_postdata($post);
                        //                        $my_the_permalink = $post->ID;
                        //                            $my_blog_lup = get_fields();
                        //                        ?>
                        <?php
                        while( $the_query->have_posts() ){
                            $the_query->the_post();
//                            $my_terms = get_the_terms($the_query->ID, 'category');
//                            $post_id = get_the_ID();
//                            $meta_values = get_post_meta( $post_id, 'vievs', false );
//                            var_dump($the_query->posts);
                            $my_blog_lup = get_fields();
                            ?>

                            <div class="blog-item">
                                <img src="<?php echo $my_blog_lup['picture_for_a_brief_description'];?>" alt="#">
                                <div class="description-blog">
                                    <h2 class="title"><?php the_title(); ?></h2>
                                    <p><?php echo get_the_date('F d Y', $post_id); ?> in Language Connect by <a href="/author-page/?author-page=<?php echo get_the_author_link();?>"><?php echo get_the_author();?></a></p>
                                    <p class="text"><?php the_content(); ?></p>
                                    <a href="<?php the_permalink();?>" class="button blue">Read more</a>

                                    <div class="share">
                                        <i class="icon-share"></i>
                                        <ul class="share-menu">
                                            <li>
                                                <a data-site="digg" class="ssba_diggit_share ssba_share_link" href="http://www.digg.com/submit?url=<?php echo wp_get_canonical_url( $post_id ); ?>" target="_blank">
                                                    <i class="icon-digglogo"></i>digg.it
                                                </a>
                                            </li>
                                            <li>
                                                <a data-site="reddit" class="ssba_reddit_share" href="http://reddit.com/submit?url=<?php echo wp_get_canonical_url( $post_id ); ?>&amp;title=<?php the_title();?>" target="_blank">
                                                    <i class="icon-reddit-social-logo"></i>Reddit
                                                </a>
                                            </li>
                                            <li>
                                                <a href="http://pinterest.com/pin/create/button/?url={URI-encoded URL of the page to pin}&media={URI-encoded URL of the image to pin}&description={optional URI-encoded description}" class="pin-it-button" count-layout="horizontal" target="_blank">
                                                    <i class="icon-pinterest"></i>Pinterest
                                                </a>
                                            </li>
                                            <li>
                                                <a class="a2a_button_facebook" href="http://www.addtoany.com/add_to/facebook?linkurl=<?php echo wp_get_canonical_url( $post_id ); ?>" title="Facebook" rel="nofollow" target="_blank">
                                                    <i class="icon-facebook"></i>Facebook
                                                </a>
                                            </li>
                                            <li>
                                                <a class="a2a_button_twitter" href="http://www.addtoany.com/add_to/twitter?linkurl=<?php echo wp_get_canonical_url( $post_id ); ?>&amp;linkname=<?php the_title();?>&amp;linknote=" title="Twitter" rel="nofollow" target="_blank">
                                                    <i class="icon-twitter"></i>Twitter
                                                </a>
                                            </li>
                                            <li>
                                                <a class="a2a_button_google_plus" href="http://www.addtoany.com/add_to/google_plus?linkurl=<?php echo wp_get_canonical_url( $post_id ); ?>&amp;linkname=<?php the_title();?>&amp;linknote=" title="Google+" rel="nofollow" target="_blank">
                                                    <i class="icon-gplus"></i>Google+
                                                </a>
                                            </li>
                                            <li>
                                                <a data-site="linkedin" class="ssba_linkedin_share ssba_share_link" href="http://www.linkedin.com/shareArticle?mini=true&amp;url=<?php echo wp_get_canonical_url( $post_id ); ?>" target="_blank">
                                                    <i class="icon-linkedin"></i>Linkedin
                                                </a>
                                            </li>
                                            <li>
                                                <a class="a2a_button_digg" href="http://www.addtoany.com/add_to/digg?linkurl=<?php echo wp_get_canonical_url( $post_id ); ?>&amp;linkname=<?php the_title();?>&amp;linknote=" title="Digg" rel="nofollow" target="_blank">
                                                    <i class="icon-digg"></i>Digg
                                                </a>
                                            </li>
                                            <li>
                                                <a data-site="stumbleupon" class="ssba_stumbleupon_share ssba_share_link" href="http://www.stumbleupon.com/submit?url=<?php echo wp_get_canonical_url( $post_id ); ?>&amp;title=<?php the_title();?>" target="_blank">
                                                    <i class="icon-stumbleupon"></i>Stumbleupon
                                                </a>
                                            </li>
                                            <!--                                    <li>-->
                                            <!--                                        <i class="g-ytsubscribe" data-channel="GoogleDevelopers" data-layout="default" data-theme="dark" data-count="hidden"></i>-->
                                            <!--                                    </li>-->
                                            <li>
                                                <a rel="nofollow" href="//www.myspace.com/Modules/PostTo/Pages/?u=<?php echo wp_get_canonical_url( $post_id ); ?>&amp;t=<?php the_title();?>&amp;c=" title="Add to MySpace" target="_blank">
                                                    <i class="icon-my-space-logo"></i>My space
                                                </a>
                                            </li>
                                            <li>
                                                <a rel="nofollow" href="//delicious.com/save?url=<?php echo wp_get_canonical_url( $post_id ); ?>&amp;title=<?php the_title();?>&amp;note=" data-count="dlcs"  title="Save bookmark в Delicious" target="_blank">
                                                    <i class="icon-Delicious"></i>Delicious
                                                </a>
                                            </li>
                                            <!--                                    <li>-->
                                            <!--                                        <a data-site="behance" href="https://www.behance.net/?url=--><?php //echo wp_get_canonical_url( $post_id ); ?><!--&amp;title=--><?php //the_title();?><!--" target="_blank">-->
                                            <!--                                            <i class="icon-behance"></i>Behance-->
                                            <!--                                        </a>-->
                                            <!--                                    </li>-->
                                            <li>
                                                <a href="http://instagram.com/global_language" rel="external" class="spricon i-instagram" target="_blank">
                                                    <i class="icon-instagram"></i>Instagram
                                                </a>
                                                <!--                                        <div class="share42init" data-url="--><?php //the_permalink() ?><!--" data-title="--><?php //the_title() ?><!--"></div>-->
                                                <!--                                        <script type="text/javascript" src="--><?php //bloginfo('template_url')?><!--/share42/share42.js"></script>-->
                                            </li>
                                            <li>
                                                <a href="http://www.youtube.com/user/Glanguages" data-channel="GoogleDevelopers" rel="external" target="_blank">
                                                    <i class="icon-icon"></i>Youtube
                                                </a>
                                            </li>
                                            <!--Dont have share button-->
                                            <li>
                                                <a href="https://www.behance.net/" target="_blank">
                                                    <i class="icon-behance"></i>Behance
                                                </a>
                                            </li>
<!--                                            <li>-->
<!--                                                <a data-site="behance" href="https://www.behance.net/?url=--><?php //echo wp_get_canonical_url( $post_id ); ?><!--&amp;title=--><?php //the_title();?><!--" target="_blank">-->
<!--                                                    <i class="icon-behance"></i>Behance-->
<!--                                                </a>-->
<!--                                            </li>-->
                                            <li>
                                                <a href="https://dribbble.com/" target="_blank">
                                                    <i class="icon-dribble-logo"></i>Dribbble
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.flickr.com/" target="_blank">
                                                    <i class="icon-flickr"></i>Flickr
                                                </a>
                                            </li>
                                            <!--                                    --><?php //echo do_shortcode('[addtoany]'); ?>
                                            <!--                                    <li> <a href="#"><i class="icon-behance"></i>Behance</a> </li>-->
                                            <!--                                    <li> <a href="#"><i class="icon-dribble-logo"></i>Dribbble</a> </li>-->
                                            <!--                                    <li> <a href="#"><i class="icon-flickr"></i>Flickr</a> </li>-->
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        <?php }
                        wp_reset_postdata();?>
                    </div>

                    <hr class="sline">

                    <div class="pagination">
                        <?php
                        $big = 999999999;

                        $args = array(
                            'base'    => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
                            'format'  => '?paged=%#%',
                            'current' => max( 1, get_query_var('paged') ),
                            'mid_size' => 1,
                            'end_size' => 3,
                            'prev_text' => '&#171; Prev',
                            'next_text' => 'Next &#187;',
                            'type' => 'list',
                            'total'   => $the_query->max_num_pages
                        );
                        echo paginate_links($args);
                        ?>

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
