<?php
/**Template name: lang_parent_page */
get_header();
$single_lang = get_fields();
$post_id = get_the_ID();
$header_button = get_field('header_button', $post_id);
$the_button_of_the_second_section = get_field('the_button_of_the_second_section', $post_id);
?>

<!--START CONTENT-->
<section class="language-translator">
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
    <div class="language-translator-content">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="left-block">
                        <?php if(have_posts()) : ?>
                            <?php while (have_posts()) :the_post();?>
                                <?php the_content() ; ?>
                            <?php endwhile;?>
                        <?php endif;?>
                        <?php if (isset($header_button) && !empty($header_button)): ?>
                        <?php $counter = 1;?>
                        <div class="buttons">
                            <?php foreach ($header_button as $block): ?>
                            <a href="<?php echo $block['button_link'];?>" class="button <?php lem_languages_header_button($counter);?>"><?php echo $block['button'];?></a>
                                <?php $counter++;?>
                            <?php endforeach; ?>
                        </div>
                        <?php endif; ?>
                    </div>
                    <div class="right-block">
                        <?php if (get_the_post_thumbnail() != NULL){?>
                        <img src="<?php the_post_thumbnail()?>" alt="#">
                        <?php }?>
                        <?php if($single_lang['the_description_of_the_second_section'] != null){ ?>
                        <div class="text">
                            <?php echo $single_lang['the_description_of_the_second_section'];?>
                            <?php if (isset($the_button_of_the_second_section) && !empty($the_button_of_the_second_section)): ?>
                            <?php foreach ($the_button_of_the_second_section as $block): ?>
                            <a href="<?php echo $block['button_link'];?>" class="button green"><?php echo $block['button'];?></a>
                            <?php endforeach; ?>
                            <?php endif; ?>
                        </div>
                        <?php }?>
                    </div>
                    <div class="items">
                        <div class="languages-item">
                            <h2 class="title">Languages</h2>
                            <ul>
                                <?php $ars = array('numberposts'=>'100','post_type'=>'page', 'post_parent'=>58);//post_parent 58
                                $my_posts = get_posts($ars);
                                foreach ($my_posts as $post) {
                                    setup_postdata($post);
                                    $single_lang = get_fields($post->ID);
                                    ?>
                                    <li>
                                        <a href="<?php the_permalink()?>"><?php echo $post->post_title;?></a>
                                    </li>
                                <?php }
                                wp_reset_postdata();?>
                            </ul>
                            <a href="/free-quotes/" class="button wghite">Request for translation</a>
                        </div>
                        <div class="item-sectors">
                            <h2 class="title">Sectors</h2>
                            <ul>
                                <?php $ars = array('numberposts'=>'100','post_type'=>'sector');//post_parent 58
                                $my_posts = get_posts($ars);
                                foreach ($my_posts as $post) {
                                    setup_postdata($post);
                                    $single_lang = get_fields($post->ID);
                                    ?>
                                    <li>
                                        <a href="<?php the_permalink()?>"><?php echo $post->post_title;?></a>
                                    </li>
                                <?php }
                                wp_reset_postdata();?>

                            </ul>

                            <a href="/free-quotes/" class="button wghite">Request for translation</a>
                        </div>
                        <div class="services-item">
                            <h2 class="title">Services</h2>
                            <ul>
                                <?php $ars = array('numberposts'=>'100','post_type'=>'page', 'post_parent'=>204);//post_parent 58
                                $my_posts = get_posts($ars);
                                foreach ($my_posts as $post) {
                                    setup_postdata($post);
                                    $single_lang = get_fields($post->ID);
                                    ?>
                                    <li>
                                        <a href="<?php the_permalink()?>"><?php echo $post->post_title;?></a>
                                    </li>
                                <?php }
                                wp_reset_postdata();?>
                                <!---->
                                <!--                                <li>-->
                                <!--                                    <a href="#">Translation Company</a>-->
                                <!--                                </li>-->
                                <!--                                <li>-->
                                <!--                                    <a href="#">Human Translation</a>-->
                                <!--                                </li>-->
                                <!--                                <li>-->
                                <!--                                    <a href="#">Document translation</a>-->
                                <!--                                </li>-->
                                <!--                                <li>-->
                                <!--                                    <a href="#">Website translation</a>-->
                                <!--                                </li>-->
                                <!--                                <li>-->
                                <!--                                    <a href="#">Video translation</a>-->
                                <!--                                </li>-->
                                <!--                                <li>-->
                                <!--                                    <a href="#">Copywriting</a>-->
                                <!--                                </li>-->
                            </ul>
                            <a href="/free-quotes/" class="button wghite">Request for translation</a>
                        </div>
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
