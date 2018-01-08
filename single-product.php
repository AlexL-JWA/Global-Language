<?php
get_header();
$single_product = get_fields();
$post_id = get_the_ID();
$block_of_the_first_section = get_field('block_of_the_first_section', $post_id);
$header_button = get_field('header_button', $post_id);
$block_of_the_second_section = get_field('block_of_the_second_section', $post_id);
$block_of_the_third_section = get_field('block_of_the_third_section', $post_id);
$block_of_the_fourth_section = get_field('block_of_the_fourth_section', $post_id);
?>

<!--START CONTENT-->
<section class="Prof-translation">
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
    <!--                        <li>-->
    <!--                            <a href="#">What we do</a>-->
    <!--                        </li>-->
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
                            <img src="<?php the_post_thumbnail_url();?>" alt="#">
                        </div>
                    <?php } ?>
                </div>
            </div>
        </div>
    </div>
     <?php if(!empty($single_product['the_title_of_the_second_section']) || !empty($block_of_the_second_section) ){ ?>
    <div class="professional-translation">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <?php if(isset($single_product['the_title_of_the_second_section']) && !empty($single_product['the_title_of_the_second_section']) ){ ?>
                        <h2 class="title"><?php echo $single_product['the_title_of_the_second_section'];?></h2>
                    <?php }?>
                    <div class="descriptions">
                        <?php if (isset($block_of_the_second_section) && !empty($block_of_the_second_section)): ?>
                        <?php foreach ($block_of_the_second_section as $block): ?>
                        <div class="description">
                            <?php echo $block['description'];?>
                        </div>
                        <?php endforeach; ?>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <?php } ?>
    <div class="translation-services">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <?php if($single_product['the_title_of_the_third_section'] != null){ ?>
                    <h2 class="title"><?php echo $single_product['the_title_of_the_third_section'];?></h2>
                    <?php }?>
                    <div class="items">
                        <?php if (isset($block_of_the_third_section) && !empty($block_of_the_third_section)): ?>
                            <?php foreach ($block_of_the_third_section as $block): ?>
                        <div class="item">
                            <?php if($block['image'] != ''){?>
                            <?php if(isset($block['link']) && !empty($block['link'])) : ?><a href="<?php echo $block['link'];?>"><?php endif ?><img src="<?php echo $block['image'];?>" alt="#"><?php if(isset($block['link']) && !empty($block['link'])) : ?></a><?php endif ?>
                            <?php }?>
                            <h3 class="title"><?php echo $block['title'];?></h3>
                            <?php if(isset($block['link']) && !empty($block['link'])) : ?><a href="<?php echo $block['link'];?>"><?php endif ?><?php echo $block['description'];?><?php if(isset($block['link']) && !empty($block['link'])) : ?></a><?php endif ?>
                            <a href="/free-quotes/" class="button green">Request for translation</a>
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
                        <?php if($single_product['the_title_of_the_fourth_section'] != null){ ?>
                        <h2 class="title"><?php echo $single_product['the_title_of_the_fourth_section'];?></h2>
                        <?php }?>

                        <?php if (isset($block_of_the_fourth_section) && !empty($block_of_the_fourth_section)): ?>
                            <?php $count = 1;?>
                            <?php foreach ($block_of_the_fourth_section as $block): ?>
                        <div class="description">
                            <h3 class="title"><?php echo $block['title'];?></h3>
                            <?php echo $block['description'];?>
                        </div>
                                <?php if ($count == 2){?>
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
                    <div class="descriptions">
                                    <?php } ?>
                                <?php $count++;?>
                        <?php endforeach; ?>
                        <?php endif; ?>
                    </div>
                    <a href="/free-quotes/" class="button green">Request for translation</a>
                </div>
            </div>
        </div>
    </div>

</section>
<!--END CONTENT-->

<?php
get_footer();
?>
