<?php
get_header();
?>
<div class="title">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <h1 class="title"><?php the_title();?></h1>
                <?php if(have_posts()) : ?>
                    <?php while (have_posts()) :the_post();?>
                        <?php the_content() ; ?>
                    <?php endwhile;?>
                <?php endif;?>
            </div>
        </div>
    </div>
</div>


<?php
get_footer();
?>
