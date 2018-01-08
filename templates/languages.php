<?php
/**Template name: languages_page */
get_header();
$language_home = get_fields();
$post_id = get_the_ID();
$block_of_the_first_section = get_field('block_of_the_first_section', $post_id);
$header_button = get_field('header_button', $post_id);
$block_of_the_third_section = get_field('block_of_the_third_section', $post_id);
?>

<!--START CONTENT-->
<section class="Language-page">
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
                                <a href="/languages/">Languages</a>
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
                        <ul>
                            <?php if (isset($block_of_the_first_section) && !empty($block_of_the_first_section)): ?>
                            <?php foreach ($block_of_the_first_section as $block): ?>
                            <li class="icon-correct">
                                <?php echo $block['description'];?>
                            </li>
                                <?php endforeach; ?>
                            <?php endif; ?>
                        </ul>
                        <?php if (isset($header_button) && !empty($header_button)): ?>
                        <div class="buttons">
                                <?php $count = 1;?>
                            <?php foreach ($header_button as $block): ?>
                            <a href="<?php echo $block['button_link'];?>" class="button <?php lem_languages_header_button($count);?>"><?php echo $block['button'];?></a>
                                    <?php $count++;?>
                                <?php endforeach; ?>
                        </div>
                        <?php endif; ?>
                    </div>
                    <?php if($language_home['image_of_the_firsr_section'] != null){ ?>
                    <div class="right-block">
                        <img src="<?php echo $language_home['image_of_the_firsr_section'];?>" alt="#">
                    </div>
                    <?php }?>
                </div>
            </div>
        </div>
    </div>
    <div class="translate">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <?php if($language_home['the_title_of_the_second_section'] != null){ ?>
                    <h2 class="title"><?php echo $language_home['the_title_of_the_second_section'];?></h2>
                    <?php }?>
                    <?php if($language_home['the_image_of_the_second_section_'] != null){ ?>
                    <div class="left-block">
                        <img src="<?php echo $language_home['the_image_of_the_second_section_'];?>" alt="#">
                    </div>
                    <?php }?>
                    <div class="right-block">
                        <?php if($language_home['the_description_of_the_second_section'] != null){ ?>
                            <?php echo $language_home['the_description_of_the_second_section'];?>
                        <?php }?>
                        <?php if (isset($header_button) && !empty($header_button)): ?>
                            <div class="buttons">
                                <?php $count = 1;?>
                                <?php foreach ($header_button as $block): ?>
                                    <a href="<?php echo $block['button_link'];?>" class="button <?php lem_languages_header_button($count);?>"><?php echo $block['button'];?></a>
                                    <?php $count++;?>
                                <?php endforeach; ?>
                            </div>
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
                        <?php if (isset($block_of_the_third_section) && !empty($block_of_the_third_section)): ?>
                            <?php foreach ($block_of_the_third_section as $block): ?>
                        <!-- <h2 class="title"><?php // echo $block['title'];?></h2> -->
                        <div class="description">
                            <?php echo $block['description_left_block'];?>
                        </div>
                        <div class="description">
                            <?php echo $block['description_right_block'];?>
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
</section>
<!--END CONTENT-->

<?php
get_footer();
?>
