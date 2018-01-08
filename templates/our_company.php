<?php
/**Template name: our_company_page */
get_header();
$service_page = get_fields();
$post_id = get_the_ID();
$block_of_the_first_section = get_field('block_of_the_first_section', $post_id);
$header_button = get_field('header_button', $post_id);
$block_of_the_second_section = get_field('block_of_the_second_section', $post_id);
$button_of_the_second_section = get_field('button_of_the_second_section', $post_id);
$block_of_the_third_section = get_field('block_of_the_third_section', $post_id);
$block_of_the_fourth_section = get_field('block_of_the_fourth_section', $post_id);
$block_of_the_fifth_section = get_field('block_of_the_fifth_section', $post_id);
?>


    <!--START CONTENT-->
    <section class="services">
        <div class="title">
            <div class="bg-op">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <h1 class="title"><?php the_title(); ?></h1>
                            <ul>
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <a href="#"><?php the_title(); ?></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="descriptions-block">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="left-block">
                            <?php if (isset($block_of_the_first_section) && !empty($block_of_the_first_section)): ?>
                                <ul>
                                    <?php foreach ($block_of_the_first_section as $block): ?>
                                        <li class="icon-correct">
                                            <?php echo $block['description'];?>
                                        </li>
                                    <?php endforeach; ?>
                                </ul>
                            <?php endif; ?>
                            <?php if (isset($header_button) && !empty($header_button)): ?>
                                <?php $count = 1;?>
                                <div class="buttons">
                                    <?php foreach ($header_button as $block): ?>
                                        <a href="<?php echo $block['button_link'];?>" class="button <?php lem_languages_header_button($count);?>"><?php echo $block['button'];?></a>
                                        <?php $count++;?>
                                    <?php endforeach; ?>
                                </div>
                            <?php endif; ?>
                        </div>
                        <?php if (get_the_post_thumbnail_url() != NULL){ ?>
                            <div class="right-block">
                                <!--<img src="<?php //the_post_thumbnail_url();?>" alt="#">-->
                                <?php the_post_thumbnail();?>
                            </div>
                        <?php } ?>
                    </div>
                </div>
            </div>
        </div>
        <div class="categories">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <?php if($service_page['the_title_of_the_second_section'] != null){ ?>
                            <h2 class="title"><?php echo $service_page['the_title_of_the_second_section'];?></h2>
                        <?php }?>
                        <div class="items">
                            <?php if (isset($block_of_the_second_section) && !empty($block_of_the_second_section)): ?>
                                <?php foreach ($block_of_the_second_section as $block): ?>
                                    <div class="item">
                                        <div>
                                            <a href="<?php echo $block['link'];?>"><img src="<?php echo $block['image'];?>" alt="#"></a>
                                            <h3 class="title"><?php echo $block['titlr'];?></h3>
                                            <a href="<?php echo $block['link'];?>"><?php echo $block['description'];?></a>
                                        </div>
                                    </div>
                                <?php endforeach; ?>
                            <?php endif; ?>
                        </div>
                        <?php if (isset($button_of_the_second_section) && !empty($button_of_the_second_section)): ?>
                            <?php foreach ($button_of_the_second_section as $block): ?>
                                <a href="<?php echo $block['button_link'];?>" class="button green"><?php echo $block['button'];?></a>
                            <?php endforeach; ?>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        </div>

        <div class="languages">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                        <div class="descriptions">
                            <?php if($service_page['the_title_of_the_third_section'] != null){ ?>
                                <h2 class="title"><?php echo $service_page['the_title_of_the_third_section'];?></h2>
                            <?php }?>
                            <?php if (isset($block_of_the_third_section) && !empty($block_of_the_third_section)): ?>
                                <?php foreach ($block_of_the_third_section as $block): ?>
                                    <div class="description">
                                        <?php echo $block['description_left_column'];?>
                                    </div>
                                    <div class="description">
                                        <?php echo $block['description_right_column'];?>
                                    </div>
                                <?php endforeach; ?>
                            <?php endif; ?>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div class="areas-of-expertise">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <?php if($service_page['the_title_of_the_fourth_section'] != null){ ?>
                            <h2 class="title"><?php echo $service_page['the_title_of_the_fourth_section'];?></h2>
                        <?php }?>
                        <div class="items">
                            <?php if (isset($block_of_the_fourth_section) && !empty($block_of_the_fourth_section)): ?>
                                <?php foreach ($block_of_the_fourth_section as $block): ?>
                                    <div class="item">
                                        <div>
                                            <a href="<?php echo $block['link'];?>"><img src="<?php echo $block['image'];?>" alt="#"></a>
                                            <h3 class="title"><?php echo $block['title'];?></h3>
                                            <a href="<?php echo $block['link'];?>"><?php echo $block['description'];?></a>
                                        </div>
                                    </div>
                                <?php endforeach; ?>
                            <?php endif; ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="languages">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="descriptions">
                            <?php if($service_page['the_title_of_the_fifth_section'] != null){ ?>
                                <h2 class="title"><?php echo $service_page['the_title_of_the_fifth_section'];?></h2>
                            <?php }?>
                            <?php if (isset($block_of_the_fifth_section) && !empty($block_of_the_fifth_section)): ?>
                                <?php foreach ($block_of_the_fifth_section as $block): ?>
                                    <div class="description">
                                        <?php echo $block['description_left_column'];?>
                                    </div>
                                    <div class="description">
                                        <?php echo $block['description_right_column'];?>
                                    </div>
                                <?php endforeach; ?>
                            <?php endif; ?>
                        </div>
                        <ul>
                            <?php $ars = array('numberposts'=>'100','post_type'=>'page', 'include'=>'103,107,111,123,127,135,139,143,147,151,155,167,171,175,179,183,186');//post_parent 58
                            $my_posts = get_posts($ars);
                            foreach ($my_posts as $post) {
                                setup_postdata($post);
                                $single_lang = get_fields($post->ID);
                                ?>
                                <li>
                                    <a href="<?php the_permalink()?>"><img src="<?php echo $single_lang['flag'];?>" alt="#"><?php echo $post->post_title;?></a>
                                </li>
                            <?php }
                            wp_reset_postdata();?>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <?php get_template_part('templates/contact_forma_footer');?>

    </section>
    <!--END CONTENT-->

<?php
get_footer();
?>