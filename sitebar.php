<?php
$social_networks = get_field('social_networks', 314);
?>
<div class="sitebar">
    <h2 class="title">Connect with us</h2>
    <ul class="soc">
        <?php if (isset($social_networks) && !empty($social_networks)): ?>
            <?php $count = 1; ?>
            <?php foreach ($social_networks as $block): ?>
                <li>
                    <a href="<?php echo $block['link'];?>">
                        <i class="<?php lem_social_networks($count); ?>"></i>
                    </a>
                </li>
                <?php $count++;?>
            <?php endforeach; ?>
        <?php endif; ?>
<!--        <li>-->
<!--            <a href="#"> <i class="icon-twitter"></i> </a>-->
<!--        </li>-->
<!--        <li>-->
<!--            <a href="#"> <i class="icon-facebook"></i> </a>-->
<!--        </li>-->
<!--        <li>-->
<!--            <a href="#"> <i class="icon-linkedin"></i> </a>-->
<!--        </li>-->
<!--        <li>-->
<!--            <a href="#"> <i class="icon-gplus"></i> </a>-->
<!--        </li>-->
    </ul> <a href="/free-quotes/" class="button yellow">get a free quote</a>

    <h2 class="title">Categories</h2>
    <?php
    $args = array(
        'type' => 'post'
    );
    ?>
    <ul class="cat">
<?php
$categories = get_categories( $args );
if( $categories ){
foreach( $categories as $cat ){?>
<?php $ternid = $cat->term_id;
//    var_dump($cat);
    ?>
<!--    --><?php //$category_link = get_category_link($ternid); ?>
<!--    <li> <a href="--><?php //echo $category_link; ?><!--">--><?php //echo $cat->name; ?><!--</a> </li>-->
    <li> <a href="/category-page/?category-page=<?php echo $cat->slug; ?>"><?php echo $cat->name; ?></a> </li>

    <?php }
}
?>
    </ul>
    <div class="months"></div>
</div>