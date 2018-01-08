<?php
/**Template name: contacts_page */
get_header();
$contact_page = get_fields();
$post_id = get_the_ID();
$social_networks = get_field('social_networks', $post_id);
$telephone = get_field('telephone', $post_id);
$address = get_field('address', $post_id);
?>

<!--START CONTENT-->
<section class="contacts">
    <div class="title green">
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
    <div class="contacts-content">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="left-block">
                        <i class="icon-mail"></i>
                        <?php if($contact_page['email'] != null){ ?>
                        <a href="mailto:<?php echo $contact_page['email'];?>" target="_blank"><?php echo $contact_page['email'];?></a>
                        <?php }?>
                    </div>
                    <div class="right-block">
                        <i class="icon-placeholder"></i>
                        <?php if (isset($address) && !empty($address)): ?>
                            <?php foreach ($address as $block): ?>
                        <a href="<?php echo $block['link'];?>" target="_blank"><?php echo $block['address'];?></a>
                        <?php endforeach; ?>
                        <?php endif; ?>
                    </div>
                    
                    <div class="left-block">
                        <i class="icon-telephone"></i>
                        <?php if (isset($telephone) && !empty($telephone)): ?>
                        <ul>
                            <?php foreach ($telephone as $block): ?>
                            <li>
                                <?= $block['name']; ?>
                               <a href="tel:<?php echo $block['tel'];?>" target="_blank"><?php echo $block['address'];?></a>
                            </li>
                            <?php endforeach; ?>
                            <?php endif; ?>
                        </ul>
                    </div>
                    <div class="right-block">
                        <i class="icon-share"></i>
                        <ul>
                            <?php if (isset($social_networks) && !empty($social_networks)): ?>
                                <?php $count = 1; ?>
                                <?php foreach ($social_networks as $block): ?>
                            <li>
                                <a href="<?php echo $block['link'];?>" target="_blank">
                                    <i class="<?php lem_social_networks($count); ?>"></i>
                                </a>
                            </li>
                            <?php $count++;?>
                            <?php endforeach; ?>
                            <?php endif; ?>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="map">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div id="map"></div>
                </div>
            </div>
        </div>
    </div>
</section>
<!--END CONTENT-->
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD_rQrQVfEbzDIi6gWm8Rd1R09JTlHG5k0&callback=initMap" async></script>
<?php
get_footer();
?>
