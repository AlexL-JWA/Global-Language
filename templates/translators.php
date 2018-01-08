<?php
/**Template name: translators_page */

get_header();
$single_lang = get_fields();
$post_id = get_the_ID();
$header_button = get_field('header_button', $post_id);
$the_button_of_the_second_section = get_field('the_button_of_the_second_section', $post_id);
$first_list = get_field('first_list', $post_id);
$rigt_block = get_field('the_description_of_the_second_section',$post_id);
?>

<!--START CONTENT-->
<section class="language-translator">
    <div class="title">
        <div class="bg-op">  
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h1 class="title"><?= $single_lang['page_title']; ?></h1>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="#"><?= $single_lang['page_title']; ?></a>
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
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 top-sector">
                    <div class="left-block">
                    <?php if (isset($first_list) && !empty($first_list)): ?>
                                <ul class="first_lst">
                                    <?php foreach ($first_list as $block): ?>
                                        <li class="icon-correct">
                                            <?php echo $block['firs_list_item'];?>
                                        </li>
                                    <?php endforeach; ?>
                                </ul>
                        <?php else: ?>
                        <ul class="first_lst">
                            <li class="icon-correct">
                                <p><strong>Professional document translation</strong> delivered on time. No project too large or too small. No file format too difficult to handle. Highly affordable rates.</p>
                            </li>
                            <li class="icon-correct">
                                <p><strong>Translation of Web content</strong> without technical hitches. Raw HTML and XML files handled. Long-term content management undertaken. Competitive pricing.</p>
                            </li>
                            <li class="icon-correct">
                                <p><strong>A comprehensive video localization</strong> solution. Compact and expressive subtitles. Professional overdubbing. Negotiable rates for regular work.</p>
                            </li>
                            <li class="icon-correct">
                                <p><strong>Expert-level copywriting</strong>. Careful use of brand terminology and voice. Optimization of text for search engines if required. Cost-effective compared to competitors.</p>
                            </li>
                        </ul>
                        <?php endif; ?>
                    </div>
                    <div class="right-block">

                        <?php if (get_the_post_thumbnail_url() != NULL){?>
                            <img src="<?php the_post_thumbnail_url()?>" alt="#">
                            <?php }?>
                            <?php if (isset($header_button) && !empty($header_button)): ?>
                                <?php $counter = 1;?>
                                <div class="buttons buttons_block">
                                    <?php foreach ($header_button as $block): ?>
                                        <a href="<?php echo $block['button_link'];?>" class="button one-btn icons-circle-arrow <?php lem_languages_header_button($counter);?>"><?php echo $block['button'];?></a>
                                        <?php $counter++;?>
                                    <?php endforeach; ?>
                                </div>
                            <?php endif; ?>
                    </div>
                    <div class="cont_lang_flag">
                        <div class="language-block">
                            <h3>Translate Document into  Your target language</h3>
                            <ul>
                                <?php $ars = array('numberposts'=>'100','post_type'=>'page', 'include'=>'103,107,111,123,127,135,139,143,147,151,155,167,171,175,179,183,186');//post_parent 58
                                    $my_posts = get_posts($ars);?>
                                    <?php if(isset($my_posts) && !empty($my_posts)) : ?>
                                    <?php foreach($my_posts as $post) : ?>
                                        <?php setup_postdata($post); ?>
                                        <?php $single_lang = get_fields($post->ID); ?>
                                        <li><a href="<?php the_permalink()?>"><img src="<?php echo($single_lang['flag']); ?>" alt="#"><?php echo($single_lang['page_title']);?></a></li>
                                    <?php endforeach; ?>
                                    <?php wp_reset_postdata(); ?>
                                    <?php endif; ?>
                            </ul>
                        </div>          
                    </div>         

                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="left-block">
                        <?php if(have_posts()) : ?>
                            <?php while (have_posts()) :the_post();?>
                                <?php the_content() ; ?>
                            <?php endwhile;?>
                        <?php endif;?>
                    </div>
                    <div class="right-block">
                        <?php if($rigt_block != null){?>
                            <div class="text">
                                <?php echo $rigt_block; ?>
                                <?php if (isset($the_button_of_the_second_section) && !empty($the_button_of_the_second_section)): ?>
                                    <?php foreach ($the_button_of_the_second_section as $block): ?>
                                        <a href="<?php echo $block['button_link'];?>" class="button green icons-circle-arrow"><?php echo $block['button'];?></a>
                                    <?php endforeach; ?>
                                <?php endif; ?>
                            </div>
                        <?php }?>
                    </div>     
                    <div class="items">
                        <h3 class="tr_serv">Translation Services</h3>
                        <ul class="translate-block">
                            <?php $ars = array('numberposts'=>'100','post_type'=>'page', 'include'=>'230,227,55,233', 'order' => 'ASC');//post_parent 58
                                    $my_posts = get_posts($ars);
                                    if(isset($my_posts) && !empty($my_posts)) :
                                    foreach ($my_posts as $post) :
                                        setup_postdata($post);
                                        $single_lang = get_fields($post->ID);
                                        ?>
                                            <li><a href="<?php the_permalink()?>"><i class="icon-<?= $single_lang['icon-class']; ?>"></i><?php echo($post->post_title);?></a></li>
                                    <?php endforeach; ?>
                                    <?php wp_reset_postdata(); ?>
                                    <?php endif; ?>
                        </ul>
                        <div class="translate-sector top-border-none">
                            <h3>Translate in Your Sector</h3>
                            <ul>
                                <?php $ars = array('numberposts'=>'100','post_type'=>'sector');//post_parent 58
                                    $my_posts = get_posts($ars);
                                    if(isset($my_posts) && !empty($my_posts)) :
                                    foreach ($my_posts as $post) :
                                        setup_postdata($post);
                                        $single_lang = get_fields($post->ID);
                                        ?>
                                <li><a href="<?php the_permalink()?>"><i class="icon-<?= $single_lang['icon-class']; ?>"></i><?php echo($single_lang['page_title']);?></a></li>
                                    <?php endforeach; ?>
                                    <?php wp_reset_postdata(); ?>
                                    <?php endif; ?>
                            </ul>
                        </div>
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

