<?php
/**Template name: rates_page */
get_header();
$rates_page = get_fields();
$post_id = get_the_ID();
$block_of_the_first_section = get_field('block_of_the_first_section', $post_id);
$header_button = get_field('header_button', $post_id);
$block_of_the_second_section = get_field('block_of_the_second_section', $post_id);
$the_button_of_the_third_section = get_field('the_button_of_the_third_section', $post_id);
?>

<!--START CONTENT-->
<section class="docs-translation">
    <div class="title green">
        <div class="bg-op">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h1 class="title"><?php the_title(); ?></h1>
                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Our Company</a>
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
                        <img src="<?php the_post_thumbnail_url();?>" alt="#">
                    </div>
                    <?php } ?>
                </div>
            </div>
        </div>
    </div>
    <div class="rates">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <?php if($rates_page['the_title_of_the_second_section'] != null){ ?>
                    <h2 class="title"><?php echo $rates_page['the_title_of_the_second_section'];?></h2>
                    <?php }?>
                    <div class="orders">

                        <?php if (isset($block_of_the_second_section) && !empty($block_of_the_second_section)): ?>
                            <?php $count = 1;?>
                            <?php foreach ($block_of_the_second_section as $block): ?>
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

                    <div class="like">
                        <i class="icon-like"></i>
                        <?php if($rates_page['the_title_of_the_third_section'] != null){ ?>
                        <h3 class="title"><?php echo $rates_page['the_title_of_the_third_section'];?></h3>
                        <?php }?>
                        <?php if (isset($the_button_of_the_third_section) && !empty($the_button_of_the_third_section)): ?>
                            <?php foreach ($the_button_of_the_third_section as $block): ?>
                        <a href="<?php echo $block['button_link'];?>" class="button green icons-circle-arrow"><?php echo $block['button'];?></a>
                        <?php endforeach; ?>
                        <?php endif; ?>
                    </div>

                </div>
            </div>
        </div>
    </div>

</section>
<!--END CONTENT-->
<?php
get_footer();
?>