<!--START FOOTER-->
<footer>
    <div class="container">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="left-block">
                    <div class="logo">
                        <a href="/"><i class="icon-LOGO"></i></a>
                    </div>
                    <h3 class="title">Contacts:</h3>
                    <?php if(get_theme_mod('footer_tel_text') !='' ){?>
                    <a href="tel:<?php echo get_theme_mod('footer_tel'); ?>"><?php echo get_theme_mod('footer_tel_text'); ?></a>
                    <?php }?>
                    <?php if(get_theme_mod('footer_address') !='' ){?>
                    <a href="<?php echo get_theme_mod('footer_address_link'); ?>"><?php echo get_theme_mod('footer_address'); ?></a>
                    <?php }?>
                    <?php if(get_theme_mod('footer_address_country') !='' ){?>
                    <p><?php echo get_theme_mod('footer_address_country'); ?></p>
                    <?php }?>
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
                </div>
                <div class="right-block">
                    <div class="mnu">
                        <h3 class="title">menu:</h3>
                        <?php
                        wp_nav_menu(array(
                            'container' => 'false',
                            //The location that we want to bring
                            'theme_location'=>'menu_2',
                            //Location displays the HTML markup menu
                            'items_wrap'=>'<ul id="%1$s" class="%2$s">%3$s</ul>',
                            //Specify the class for the menu
                            'menu_class'=>'',//changing styles called class="nav-in" to class='sub-menu'
                            'menu_id'=>'',
                            'depth'=>'0',
                            'walker'=> new Menu_Walker_footer
                        ));
                        ?>
                    </div>
                    <div class="mnu">
                        <h3 class="title">Sectors:</h3>
                        <?php
                        wp_nav_menu(array(
                            'container' => 'false',
                            //The location that we want to bring
                            'theme_location'=>'menu_4',
                            //Location displays the HTML markup menu
                            'items_wrap'=>'<ul id="%1$s" class="%2$s">%3$s</ul>',
                            //Specify the class for the menu
                            'menu_class'=>'',//changing styles called class="nav-in" to class='sub-menu'
                            'menu_id'=>'',
                            'depth'=>'0',
                            'walker'=> new Menu_Walker_footer_sectors
                        ));
                        ?>

                    </div>
                    <div class="mnu">
                        <h3 class="title">languages:</h3>
                        <?php
                        wp_nav_menu(array(
                            'container' => 'false',
                            //The location that we want to bring
                            'theme_location'=>'menu_5',
                            //Location displays the HTML markup menu
                            'items_wrap'=>'<ul id="%1$s" class="%2$s">%3$s</ul>',
                            //Specify the class for the menu
                            'menu_class'=>'',//changing styles called class="nav-in" to class='sub-menu'
                            'menu_id'=>'',
                            'depth'=>'0',
                            'walker'=> new Menu_Walker_languages
                        ));
                        ?>
                    </div>
                </div>
                <?php if(get_theme_mod('copyrighted') !='' ){?>
                <p class="copiright"><?php echo get_theme_mod('copyrighted'); ?></p>
                <?php }?>
            </div>
        </div>
    </div>
</footer>
<!--END FOOTER-->
<?php
wp_footer();
?>

<!-- BEGIN JIVOSITE CODE {literal} -->
<script type='text/javascript'>
(function(){ var widget_id = 'ZaA0neqnC8';var d=document;var w=window;function l(){
var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = '//code.jivosite.com/script/widget/'+widget_id; var ss = document.getElementsByTagName('script')[0]; ss.parentNode.insertBefore(s, ss);}if(d.readyState=='complete'){l();}else{if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();</script>
<!-- {/literal} END JIVOSITE CODE -->
<!-- Start of HubSpot Embed Code -->
  <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/3948296.js"></script>
<!-- End of HubSpot Embed Code -->
<!--LiveInternet counter--><script type="text/javascript">
document.write("<a href='//www.liveinternet.ru/click' "+
"target=_blank><img src='//counter.yadro.ru/hit?t45.5;r"+
escape(document.referrer)+((typeof(screen)=="undefined")?"":
";s"+screen.width+"*"+screen.height+"*"+(screen.colorDepth?
screen.colorDepth:screen.pixelDepth))+";u"+escape(document.URL)+
";"+Math.random()+
"' alt='' title='LiveInternet' "+
"border='0' width='3' height='3'><\/a>")
</script><!--/LiveInternet-->
<script>
    if($('.select').length){
        $('.select').each(function(){
            var selectText = $(this).find('li:first-child').html(),
                selectDataOptions = $(this).find('li:first-child').html(),
                select = $(this).find('li:first-child');
            $(this).parent().find('span').html(selectText);
            $(this).parent().find('span').attr('data-options', selectText) ;
            select.addClass('hide');
            $('body').on('click','.select li', function(){
                var selectOptions = $(this).html();
                $(this).parent().find('li').removeClass('hide');
                $(this).addClass('hide')
                $(this).parent().parent().find('span').html(selectOptions);
                $(this).parent().parent().find('span').attr('data-options', selectOptions);
                $('.select span').removeClass('active');
                $('.select span').next().slideUp(100);
            });
            $('.select').parent().find('span a').click(function(e){
                e.preventDefault();
            });
        });  
        $('body').on('click','.select span', function(){
            if($(this).hasClass('active')){
                $(this).next().slideUp(100);
                $('.select span').removeClass('active');
            }else{
                $('.select span').removeClass('active');
                $(this).addClass('active');
                $('.select span').next().slideUp();
                $(this).next().slideDown(100);

            }
            $('#menu-language-flags').mouseleave(function(e){
                console.log(e);
                $('.select span').removeClass('active');
                $('.menu').removeClass('active');
                $('.select .menu').slideUp(100);
                console.log('sdjksja');
            });
        });
    }
</script>

</body>
</html>