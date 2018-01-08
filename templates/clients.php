<?php
/**Template name: clients_page */

get_header();
$clients = get_fields();
$post_id = get_the_ID();
$header_button = get_field('header_button', $post_id);
$the_button_of_the_second_section = get_field('the_button_of_the_second_section', $post_id);
$the_button_of_the_third_section = get_field('the_button_of_the_third_section', $post_id);
$block_third_section = get_field('block_third_section', $post_id);

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
                            <div class="buttons left-block-btn">
                                <?php foreach ($header_button as $block): ?>
                                    <a href="<?php echo $block['button_link'];?>" class="button icons-circle-arrow <?php lem_languages_header_button($counter);?>"><?php echo $block['button'];?></a>
                                    <?php $counter++;?>
                                <?php endforeach; ?>
                            </div>
                        <?php endif; ?>
                    </div>
                    <div class="right-block">
                        <?php if (get_the_post_thumbnail() != NULL){?>
                            <?php  the_post_thumbnail();  ?>
                        <?php }?>
                        <?php if($clients['the_description_of_the_second_section'] != null){ ?>
                            <div class="text">
                                <?php echo $clients['the_description_of_the_second_section'];?>
                                <?php if (isset($the_button_of_the_second_section) && !empty($the_button_of_the_second_section)): ?>
                                    <?php foreach ($the_button_of_the_second_section as $block): ?>
                                        <a href="<?php echo $block['button_link'];?>" class="button green icons-circle-arrow"><?php echo $block['button'];?></a>
                                    <?php endforeach; ?>
                                <?php endif; ?>
                            </div>
                        <?php }?>
                    </div>
                    <?php if (isset($clients['title_third_sections']) && !empty($clients['title_third_sections'])): ?>
                                    
                    <div class="center-block">
                            <h2 class="title"><?= $clients['title_third_sections']; ?></h2>
                    <?php endif; ?>
                    <?php if (isset($block_third_section) && !empty($block_third_section)): ?>
                        <ul>
                            <?php foreach ($block_third_section as $block): ?>       
                                <li>
                                    <img src="<?= $block['image']; ?>" alt="<?= $block['image']; ?>">
                                    <p><?= $block['text']; ?> </p>
                                </li>
                            <?php endforeach; ?>    
                        </ul>
                    <?php endif; ?>    
                            <?php if (isset($the_button_of_the_third_section) && !empty($the_button_of_the_third_section)): ?>
                                    <?php foreach ($the_button_of_the_third_section as $block): ?>
                                        <a href="<?php echo $block['button_link'];?>" class="button green icons-circle-arrow"><?php echo $block['button'];?></a>
                                    <?php endforeach; ?>
                                <?php endif; ?>
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
                    <div class="translate-sector no-border-top">
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
</section>
<!--END CONTENT-->

<?php
get_footer();
?>

