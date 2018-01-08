<?php
get_header();
/**Template name: sectord_page */
$sectors_page = get_fields();
$post_id = get_the_ID();
$block_of_the_first_section = get_field('block_of_the_first_section', $post_id);
$header_button = get_field('header_button', $post_id);
$block_of_the_second_section = get_field('block_of_the_second_section', $post_id);
?>


<!--START CONTENT-->
<section class="sectors-page">
    <div class="title">
        <div class="bg-op">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h1 class="title"><?php the_title();?></h1>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="#">Sectors</a>
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
                    <div class="right-block">
                        <!--<img src="<?php //the_post_thumbnail_url();?>" alt="#">-->
                        <?php the_post_thumbnail();?>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="translate">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <?php if (isset($block_of_the_second_section) && !empty($block_of_the_second_section)): ?>
                        <?php foreach ($block_of_the_second_section as $block): ?>
                    <h2 class="title"><?php echo $block['title'];?></h2>
                    <div class="sectors-item">
                        <div class="left-block">
                            <img src="<?php echo $block['image'];?>" alt="#">
                        </div>
                        <div class="right-block">
                            <?php echo $block['description'];?>
                            <?php if (isset($block_of_the_second_section) && !empty($block_of_the_second_section)): ?>
                            <div class="buttons">
                                <?php foreach ($block['button'] as $block1): ?>
                                <a href="<?php echo $block1['button_link'];?>" class="button blue"><?php echo $block1['button'];?></a>
                                <?php endforeach; ?>
                            </div>
                            <?php endif; ?>
                        </div>
                    </div>
                    <?php endforeach; ?>
                        <?php endif; ?>

                    <?php $ars = array('numberposts'=>'100','post_type'=>'sector', 'exclude'=>"399 395 393 397 371 356 373");//'include'=>'230,227,55,233'
                    $my_posts = get_posts($ars);
                    foreach ($my_posts as $post) {
                        setup_postdata($post);
                        $single_lang = get_fields($post->ID);
                        ?>
                    <div class="sectors-item">
                        <div class="left-block">
<!--                            <img src="--><?php //echo $single_lang['picture_for_a_brief_description'];?><!--" alt="#">-->
                            <?php if(get_the_post_thumbnail_url() != null){?>
                            <a href="<?php the_permalink();?>"><img src="<?php the_post_thumbnail_url();?>" alt="#"></a>
                            <?php }?>
                        </div>
                        <div class="right-block">
                            <a href="<?php the_permalink();?>"><h3 class="title"><?php echo $post->post_title; ?></h3></a>
<!--                            --><?php //echo $post->post_content; ?>
                            <?php the_excerpt(); ?>
                            <div class="buttons">
                                <a href="/free-quotes/" class="button green">Free Quote</a>
                                <a href="/free-quotes/" class="button blue">Translate</a>
<!--                                <a href="/products/professional_translation/" class="button blue">Translate</a>-->
                            </div>
                        </div>
                    </div>
                    <?php }
                    wp_reset_postdata();?>

                </div>
            </div>
        </div>
    </div>

</section>
<!--END CONTENT-->


<?php
get_footer();
?>