<?php
/**Template name: home_page */
get_header();
$page_home = get_fields();
$post_id = get_the_ID();
$button_header = get_field('button_header', $post_id);
$block_second_section = get_field('block_second_section', $post_id);
$block_third_section = get_field('block_third_section', $post_id);
$block_fifth_section = get_field('block_fifth_section', $post_id);
$button_fifth_section = get_field('button_fifth_section', $post_id);
$block_sixth_section = get_field('block_sixth_section', $post_id);
$block_of_the_seventh_section = get_field('block_of_the_seventh_section', $post_id);
$block_of_the_eighth_section = get_field('block_of_the_eighth_section', $post_id);
$block_of_the_ninth_section = get_field('block_of_the_ninth_section', $post_id);
$block_of_the_tenth_section = get_field('block_of_the_tenth_section', $post_id);
?>


<!--START CONTENT  -->
<section class="home-page">
    <div class="banner" style="background-image:url(<?php if($page_home['background_header'] != null){ echo $page_home['background_header']; }?>);">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="banner-content">

                        <h2 class="title"><?php the_title(); ?></h2>
                        <?php if (isset($page_home['header_title']) && !empty($page_home['header_title'])): ?>
                        <h1 class="title"><?php echo $page_home['header_title'];?></h1>
                        <?php endif;?>
                        <?php if(have_posts()) : ?>
                            <?php while (have_posts()) :the_post();?>
                                <?php the_content() ; ?>
                            <?php endwhile;?>
                        <?php endif;?>
                        <div class="buttons">
                            <?php if (isset($button_header) && !empty($button_header)): ?>
                                <?php $counter = 1;?>
                            <?php foreach ($button_header as $block): ?>
                                    <?php if ($counter == 1){?>
                            <a href="<?php echo $block['button_link'];?>" class="button one-btn icons-circle-arrow"><?php echo $block['button'];?></a>
                                        <?php }else{?>
                            <a href="<?php echo $block['button_link'];?>" class="button green"><?php echo $block['button'];?></a>
                                        <?php }?>
                                    <?php $counter++;?>
                                <?php endforeach; ?>
                            <?php endif; ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    <div class="categories">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="items">
                        <?php if (isset($block_second_section) && !empty($block_second_section)): ?>
                        <?php foreach ($block_second_section as $block): ?>
                        <div class="item">
                            <div>
                                <img src="<?php echo $block['image'];?>" alt="#">
                                <h3 class="title"><?php echo $block['title'];?></h3>
                                <?php echo $block['description'];?>
                                <a href="#">Read more...</a>
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
                        <?php if($page_home['title_third_section'] != null){ ?>
                        <h2 class="title"><?php echo $page_home['title_third_section'];?></h2>
                        <?php }?>
                        <?php if (isset($block_third_section) && !empty($block_third_section)): ?>
                            <?php foreach ($block_third_section as $block): ?>
                        <div class="description">
                            <h2 class="title"><?php echo $block['title'];?></h2>
                            <?php echo $block['description'];?>
                        </div>
                        <?php endforeach; ?>
                        <?php endif; ?>
                    </div>
                    <ul>
                        <?php $ars = array('numberposts'=>'100','post_type'=>'page', 'post_parent'=>58);//post_parent 58
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
    <div class="sectors">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <?php if($page_home['title_fifth_section'] != null){ ?>
                    <h2 class="title"><?php echo $page_home['title_fifth_section'];?></h2>
                    <?php }?>
                    <div class="slider">
                        <div class="slider-sectors slider-sectors-nav">
                            <?php if (isset($block_fifth_section) && !empty($block_fifth_section)): ?>
                                <?php foreach ($block_fifth_section as $block): ?>
                            <div class="item-slider">
                                <h3 class="title"><?php echo $block['title'];?></h3>
                            </div>
                            <?php endforeach; ?>
                            <?php endif; ?>
                        </div>
                        <div class="slider-sectors slider-sectors-content">
                            <?php if (isset($block_fifth_section) && !empty($block_fifth_section)): ?>
                                <?php foreach ($block_fifth_section as $block): ?>
                            <div class="item-slider">
                                <div class="right-block">
                                    <div class="content">
                                        <?php echo $block['description'];?>
                                    </div>
                                </div>
                            </div>
                            <?php endforeach; ?>
                            <?php endif; ?>
                        </div>

                    </div>
                    <?php if (isset($button_fifth_section) && !empty($button_fifth_section)): ?>
                        <?php foreach ($button_fifth_section as $block): ?>
                    <a href="<?php echo $block['button_link'];?>" class="button green"><?php echo $block['button'];?></a>
                    <?php endforeach; ?>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </div>
    <div class="our-benefits">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <?php if($page_home['title_sixth_section'] != null){ ?>
                    <h2 class="title"><?php echo $page_home['title_sixth_section'];?></h2>
                    <?php }?>
                    <div class="items">
                        <?php if (isset($block_sixth_section) && !empty($block_sixth_section)): ?>
                            <?php $count = 1;?>
                            <?php foreach ($block_sixth_section as $block): ?>
                        <div class="item">
                            <?php lem_home_block_sixth_section($count);?>
                            <h4 class="title"><?php echo $block['title'];?></h4>
                            <?php echo $block['description'];?>
                        </div>
                                <?php $count++;?>
                        <?php endforeach; ?>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="how-it-works-title">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <?php if($page_home['title_seventh_section'] != null){ ?>
                    <h2 class="title"><?php echo $page_home['title_seventh_section'];?></h2>
                    <?php }?>
                </div>
            </div>
        </div>
    </div>
    <div class="how-it-works">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <ul>
                        <?php if (isset($block_of_the_seventh_section) && !empty($block_of_the_seventh_section)): ?>
                            <?php foreach ($block_of_the_seventh_section as $block): ?>
                        <li><?php echo $block['steps'];?></li>
                        <?php endforeach; ?>
                        <?php endif; ?>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="rates">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <?php if($page_home['the_title_of_the_eighth_section'] != null){ ?>
                    <h2 class="title"><?php echo $page_home['the_title_of_the_eighth_section'];?></h2>
                    <?php }?>
                    <div class="orders">
                        <?php if (isset($block_of_the_eighth_section) && !empty($block_of_the_eighth_section)): ?>
                            <?php $count = 1;?>
                            <?php foreach ($block_of_the_eighth_section as $block): ?>
                        <div class="order <?php lem_home_block_of_the_eighth_section($count);?>">
                            <h5 class="title"><?php echo $block['title'];?></h5>
                            <h2 class="price"><?php echo $block['price'];?></h2>
                            <ul>
                                <?php foreach ($block['list'] as $block_1){?>
                                <li><?php echo $block_1['position'];?></li>
                                <?php }?>
                            </ul>
                            <a href="<?php echo $block['button_link'];?>" class="button">Order now</a>
                        </div>
                                <?php $count++;?>
                        <?php endforeach; ?>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="discounts">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <?php if($page_home['the_title_of_the_ninth_section'] != null){ ?>
                    <h2 class="title"><?php echo $page_home['the_title_of_the_ninth_section'];?></h2>
                    <?php }?>
                    <?php if (isset($block_of_the_ninth_section) && !empty($block_of_the_ninth_section)): ?>
                        <?php foreach ($block_of_the_ninth_section as $block): ?>
                    <div class="discount">
                        <img src="<?php echo $block['image'];?>" alt="#">
                    </div>
                    <?php endforeach; ?>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </div>
    <div class="our-clients">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <?php if($page_home['the_title_of_the_tenth_section'] != null){ ?>
                    <h2 class="title"><?php echo $page_home['the_title_of_the_tenth_section'];?></h2>
                    <?php }?>
                    <div class="clients-slider">
                        <?php if (isset($block_of_the_tenth_section) && !empty($block_of_the_tenth_section)): ?>
                            <?php foreach ($block_of_the_tenth_section as $block): ?>
                        <div class="item">
                            <a href="<?php echo $block['link'];?>">
                                <img src="<?php echo $block['image'];?>" alt="#">
                            </a>
                        </div>
                        <?php endforeach; ?>
                        <?php endif; ?>
                    </div>
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
