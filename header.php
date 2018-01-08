<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" id="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
    <link rel="icon" href="<?php  echo get_template_directory_uri() . '/img/logo.png';?>">
    <link rel="stylesheet" href="<?php bloginfo('template_url');?>/style.css">
    <!--<title>
        <?php if(is_front_page()){
            echo 'Global Language Solution';
            }
            else the_title(); ?> |
        <?php  bloginfo()?>
    </title>-->
    <script src="https://apis.google.com/js/platform.js"></script>
    <?php
   wp_head();
    ?>
</head>

<body <?php body_class();?>>

    <!--START HEADER-->
    <header>
        <div class="head">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="logo">
                            <a href="/">
                                <img src="<?php bloginfo('template_url')?>/img/LOGO_new-01.svg" alt="Logo">
                            </a>
                        </div>
                        <?php
                        wp_nav_menu(array(
                            'container' => 'false',
                            //The location that we want to bring
                            'theme_location'=>'menu_3',
                            //Location displays the HTML markup menu
                            'items_wrap'=>'<ul id="%1$s" class="%2$s">%3$s</ul>',
                            //Specify the class for the menu
                            'menu_class'=>'soc',//changing styles called class="nav-in" to class='sub-menu'
                            'menu_id'=>'',
                            'depth'=>'0',
                            'walker'=> new Menu_Walker_social
                        ));
                        ?>
                        <div class="tel text-right">
                            <?php if(get_theme_mod('header_tel_text') !='' ){?>
                                <a href="tel:<?php echo get_theme_mod('header_tel'); ?>"><i class="icon-telephone"></i><?php echo get_theme_mod('header_tel_text'); ?></a>
                                <a href="#">Hong Kong: +852 580 32041</a>
                            <?php }?>
                        </div>
                        <div class="mail">
                            <?php if(get_theme_mod('header_mail') !='' ){?>     
                                <a href="mailto:<?php echo get_theme_mod('header_mail'); ?>"><i class="icon-mail"></i><?php echo get_theme_mod('header_mail'); ?></a>
                            <?php }?>
                        </div>
                        <ul class="btn-header">
                            <li><a href="<?php echo get_theme_mod('header_button_1_url');?>" class="btn btn-border-yellow"><?php echo get_theme_mod('header_button_1_text');?></a></li>
                            <li><a href="<?php echo get_theme_mod('header_button_1_url');?>" class="btn btn-border-green"><?php echo get_theme_mod('header_button_2_text');?></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="menu">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        
                        <div class="burger-menu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <?php
                    wp_nav_menu(array(
                        'container' => 'false',
                        //The location that we want to bring
                        'theme_location'=>'menu_1',
                        //Location displays the HTML markup menu
                        'items_wrap'=>'<ul id="%1$s" class="%2$s">%3$s</ul>',
                        //Specify the class for the menu
                        'menu_class'=>'',
                        'menu_id'=>'',
                        'depth'=>'3'
                    ));
        
                    echo '<div class="item"><div class="cont_leng select">';
                    wp_nav_menu(
                        array(
                            'container' => 'false',
                            'theme_location'=>'menu_6',
                            'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s</ul>',
                            'depth'=>'0',
                            'walker' => new Menu_Walker_header_language
                        )
                    );
                    echo '</div> </div>';
                    ?>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!--END HEADER-->
