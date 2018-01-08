<?php
get_header();
$post_id = get_the_ID();
$blog_single = get_fields();
?>

<!--START CONTENT-->
<section class="blog-page">
    <div class="title green">
       <div class="bg-op">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h1 class="title">Blog</h1>
                        <ul>
                            <li> <a href="/">Home</a> </li>
                            <li> <a href="/blog/">Blog</a> </li>
                            <li> <?php echo get_the_date('F d, Y', $post_id); ?> </li>
                            <li> <a href="/author-page/?author-page=<?php if(have_posts()) : ?><?php while (have_posts()) :the_post(); echo get_the_author_link();?><?php endwhile;?><?php endif;?>"><?php if(have_posts()) : ?><?php while (have_posts()) :the_post(); echo get_the_author();?><?php endwhile;?><?php endif;?>/<?php the_title(); ?></a> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="content-blog ">
                    <div class="post-content">
                        <p class="descr"><?php echo get_the_date('F d Y', $post_id); ?> in Language Connect by <a href="/author-page/?author-page=<?php echo get_the_author_link();?>"><?php echo get_the_author();?></a></p>

                        <h1 class="title"><?php the_title(); ?></h1>
                        <?php if(have_posts()) : ?>
                            <?php while (have_posts()) :the_post();?>
                                <?php the_content() ; ?>
                            <?php endwhile;?>
                        <?php endif;?>
                         <!-- <img src="<?php //the_post_thumbnail_url();?>" alt="#"> -->
                        <?php if($blog_single['description_of_the_first_section'] != null){ ?>
                            <?php  echo $blog_single['description_of_the_first_section'];?>
                        <?php }?> 

                        <hr class="sline">
                        <div class="comment">
<!--                            <p><span>52</span> comments</p>-->
                            <p><?php comments_number('<span>0 </span>comments'); ?></p>
                            <div class="share"> <i class="icon-share"><span>Share</span></i>
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
<!--                                    <li>-->
<!--                                        <a data-site="behance" href="https://www.behance.net/?url=--><?php //echo wp_get_canonical_url( $post_id ); ?><!--&amp;title=--><?php //the_title();?><!--" target="_blank">-->
<!--                                            <i class="icon-behance"></i>Behance-->
<!--                                        </a>-->
<!--                                    </li>-->
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
                            <!--Comment form-->
                            <?php
                            $fields = array(
                            'author' => '<p class="comment-form-author"><label for="author">' . __( 'Name' ) . ($req ? '<span class="required">*</span>' : '') . '</label><input type="text" id="author" name="author" class="author" value="' . esc_attr($commenter['comment_author']) . '" placeholder="" pattern="[A-Za-zА-Яа-я]{3,}" maxlength="30" autocomplete="on" tabindex="1" required' . $aria_req . '></p>',
                            'email' => '<p class="comment-form-email"><label for="email">' . __( 'Email') . ($req ? '<span class="required">*</span>' : '') . '</label><input type="email" id="email" name="email" class="email" value="' . esc_attr($commenter['comment_author_email']) . '" placeholder="example@example.com" maxlength="30" autocomplete="on" tabindex="2" required' . $aria_req . '></p>'
//                            'url' => '<p class="comment-form-url"><label for="url">' . __( 'Website' ) . '</label><input type="url" id="url" name="url" class="site" value="' . esc_attr($commenter['comment_author_url']) . '" placeholder="www.example.com" maxlength="30" tabindex="3" autocomplete="on"></p>'

                            );
                            $args = array(
                            'comment_notes_after' => '',
                            'title_reply' => '',
                            'comment_field' => '<div class="me-comment">'.get_avatar($comment).'<textarea id="comment" name="comment" class="comment-form" cols="45" rows="8" aria-required="true" placeholder="Join the discussion..."></textarea></div>',
                            'label_submit' => 'Send',
                            'fields' => apply_filters('comment_form_default_fields', $fields)
                            );
                            comment_form($args);
                            ?>
                            <?php while (have_posts()) : the_post(); ?>
                                <?php comments_template(); ?>
                            <?php endwhile; ?>

                            <a href="#" class="button" id="more-comment">Load more coments</a>
                        </div>
                    </div>
                    <div class="blog-items">

                    <?php $mycategory = get_the_category($post_id);
                    $mycategoryid = $mycategory[0]->term_id;
                    $ars = array('post_type'=>'post', 'category'=>$mycategoryid , 'exclude'=>$post_id);
                    $my_posts = get_posts($ars);
                    foreach ($my_posts as $post) {
                        setup_postdata($post);
                        $my_the_permalink = $post->ID;
                                        ?>
                        <div class="blog-item"> <img src="<?php the_post_thumbnail_url();?>" alt="#">
                            <div class="description-blog">
                                <h2 class="title"><?php echo $post->post_title; ?></h2>
<!--                                <p><a href="#">February 28th, 2017</a> in Language Connect by <a href="#">Gunilla Huddleston</a></p>-->
                                <p><?php echo get_the_date('F d Y', $post_id); ?> in Language Connect by <a href="/author-page/?author-page=<?php echo get_the_author_link();?>"><?php echo get_the_author();?></a></p>
                                <p class="text"><?php echo $post->post_content; ?></p>
                                <a href="<?php the_permalink($my_the_permalink);?>" class="button blue">Read more</a>
                            </div>
                        </div>
                    <?php }
                    wp_reset_postdata();?>

                    </div>
<!--                    --><?php //$my_link_cat = get_category_link( $mycategoryid );?>
<!--                    <hr class="sline"> <a href="--><?php //echo $my_link_cat; ?><!--" class="button green see-all">See all</a> </div>-->
                    <?php $mycat = get_the_category($post_id);
                    $mycat1 = $mycat[0]->slug;
                    ?>
                    <hr class="sline"> <a href="/category-page/?category-page=<?php echo $mycat1; ?>" class="button green see-all">See all</a> </div>

                <?php get_template_part('sitebar');?>

            </div>
        </div>
    </div>
</section>
<!--END CONTENT-->
<?php
get_footer();
?>