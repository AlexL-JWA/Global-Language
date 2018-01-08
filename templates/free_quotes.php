<?php
/**Template name: free_quotes_page */
get_header();
?>



<!--START CONTENT-->
<section class="free-quotes">
    <div class="title green">
        <div class="bg-op">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h1 class="title"><?php the_title(); ?></h1>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="free-quotes-content">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="left-block">
                        <?php if(have_posts()) : ?>
                            <?php while (have_posts()) :the_post();?>
                                <?php the_content() ; ?>
                            <?php endwhile;?>
                        <?php endif;?>
                    </div>
                    <div class="right-block form">
                    <p class="form-load">PLEASE WAIT! THE ONLINE FORM IS BEING LOADED</p>
                        <script src="https://www.emailmeform.com/builder/forms/jsform/83eI03v2p4eCx3JTYFi7g" type="text/javascript" ></script>
                        
<!--                        <form id="form_id_footer">
                            <h2 class="title">Get a free quote</h2>
                            <div class="left-block">
                                <label>Services:* </label>
                                <div class="select services">
                                    <p class="placeholder select-service">Select service</p>
                                    <div class="selects-options">
                                        <?php// $ars = array('numberposts'=>'100','post_type'=>'page','include'=>'230,227,55,233');//'include'=>'230,227,55,233'//'post_parent'=>204
//                                        $my_posts = get_posts($ars);
//                                        $counter = 1;
//                                        foreach ($my_posts as $post) {
//                                            setup_postdata($post);
                                            ?>
                                            <div class="radiobutton">
                                                <input type="radio" id="<?php //lem_contact_servis($counter);?>" name="services">
                                                <label for="<?php //lem_contact_servis($counter);?>"><?php //the_title();?></label>
                                            </div>
                                            <?php
                                            //$counter++;
                                       // }
                                        //wp_reset_postdata();?>

                                    </div>
                                    <span id="serv_req" class="error"></span>
                                </div>
                                <label>Source language:*</label>
                                <div class="select source-language">
                                    <p class="placeholder select-language">Select language</p>
                                    <div class="selects-options">
                                        <?php //$ars = array('numberposts'=>'100','post_type'=>'page','include'=>'103,107,111,123,127,135,139,143,147,151,155,167,171,175,179,183,186');//'include'=>'230,227,55,233'//'post_parent'=>204
                                       // $my_posts = get_posts($ars);
                                       // $counter = 1;
                                       // foreach ($my_posts as $post) {
                                         //   setup_postdata($post);
                                            ?>
                                            <div class="radiobutton">
                                                <input type="radio" id="lang-<?php //echo $counter;?>" name="language">
                                                <label for="lang-<?php //echo $counter;?>"><?php// the_title();?></label>
                                            </div>
                                            <?php
                                           // $counter++;
                                       // }
                                       // wp_reset_postdata();?>

                                    </div>
                                    <span id="source_req" class="error"></span>
                                </div>

                            </div>
                            <div class="right-block">
                                <label>Target language(s):*</label>
                                <div class="select target-language">
                                    <p class="placeholder">Select language</p>
                                    <div class="selects-options">
                                        <?php //$ars = array('numberposts'=>'100','post_type'=>'page','include'=>'103,107,111,123,127,135,139,143,147,151,155,167,171,175,179,183,186');//'include'=>'230,227,55,233'//'post_parent'=>204
//                                        $my_posts = get_posts($ars);
//                                        $counter = 1;
//                                        foreach ($my_posts as $post) {
//                                            setup_postdata($post);
                                            ?>
                                            <div class="checkbox">
                                                <input type="checkbox" id="target_<?php //echo $counter;?>">
                                                <label for="target_<?php //echo $counter;?>"><?php// the_title();?></label>
                                            </div>
                                            <?php
//                                            $counter++;
//                                        }
//                                        wp_reset_postdata();?>

                                    </div>
                                    <span id="target_req" class="error"></span>
                                </div>
                            </div>
                            <div class="left-block">
                                <div class="input">
                                    <label>First name:*</label>
                                    <input type="text"  class="mytextf" placeholder="Name">
                                    <span id="first_req" class="error"></span>
                                </div>
                                <div class="input">
                                    <label>Last name:*</label>
                                    <input type="text"  class="mytext" placeholder="Name">
                                    <span id="last_req" class="error"></span>
                                </div>
                                <div class="input">
                                    <label>E-mail*</label>
                                    <input type="text"  class="myemail" placeholder="Your mail">
                                    <span id="email_req" class="error"></span>
                                </div>
                            </div>
                            <div class="right-block">
                                <label>Subject:*</label>
                                <div class="select subject">
                                    <p class="placeholder subject">Select subject</p>
                                    <div class="selects-options">
                                        <?php //$ars = array('numberposts'=>'100','post_type'=>'sector');//'include'=>'230,227,55,233'//'post_parent'=>204
//                                        $my_posts = get_posts($ars);
//                                        $counter = 1;
//                                        foreach ($my_posts as $post) {
//                                            setup_postdata($post);
                                            ?>
                                            <div class="radiobutton">
                                                <input type="radio" requaired id="sectors-<?php// echo $counter;?>" name="subject">
                                                <label for="sectors-<?php //echo $counter;?>"><?php //the_title();?></label>
                                            </div>
                                            <?php
                                            //$counter++;
                                       // }
                                       // wp_reset_postdata();?>

                                    </div>
                                    <span id="subject_req" class="error"></span>
                                </div>
                                <div class="textarea">
                                    <label>Comments:</label>
                                    <textarea placeholder="Your comments..."></textarea>
                                </div>
                            </div>
                            <div class="file-upload">
                                <label>File upload:</label>
                                <div class="input file">
                                    <label for="add-file" class="icon icon-lnk-file-format-symbol"></label>
                                    <input type="file" id="add-file" class="add-file" multiple="true">
                                    <label for="add-file" class="name-file">No file chosen</label>
                                    <label for="add-file" class="files">Select file</label>
                                    <div class="progress" id="progressBar">
                                    <div class="progress-number" aria-valuenow="0" style="left: 0;"></div>
                                    <div class="rounded">
                                        <div class="progress-bar" style="width: 0;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                </div>
                                <span id="file_req" class="error"></span>
                                <span id="file_insert"></span>
                            </div>
                            
                            <input type="submit" id="send_button" class="button green" value="Submit">
                        </form>-->
<!--                        <form>-->
<!--                            <h2 class="title">Get a free quote</h2>-->
<!--                            <div class="left-block">-->
<!--                                <label>Services:*</label>-->
<!--                                <div class="select services">-->
<!--                                    <p class="placeholder">Select service</p>-->
<!--                                    <div class="selects-options">-->
<!--                                        <div class="radiobutton">-->
<!--                                            <input type="radio" id="document_translation" name="services">-->
<!--                                            <label for="document_translation">Document Translation</label>-->
<!--                                        </div>-->
<!--                                        <div class="radiobutton">-->
<!--                                            <input type="radio" id="website_translation" name="services">-->
<!--                                            <label for="website_translation">Website Translation</label>-->
<!--                                        </div>-->
<!--                                        <div class="radiobutton">-->
<!--                                            <input type="radio" id="video_translation" name="services">-->
<!--                                            <label for="video_translation">Video Translation</label>-->
<!--                                        </div>-->
<!--                                        <div class="radiobutton">-->
<!--                                            <input type="radio" id="copywriting" name="services">-->
<!--                                            <label for="copywriting">Copywriting</label>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <label>Source language:*</label>-->
<!--                                <div class="select">-->
<!--                                    <p class="placeholder">Select language</p>-->
<!--                                    <div class="selects-options">-->
<!--                                        <div class="radiobutton">-->
<!--                                            <input type="radio" id="english" name="language">-->
<!--                                            <label for="english">English</label>-->
<!--                                        </div>-->
<!--                                        <div class="radiobutton">-->
<!--                                            <input type="radio" id="swedish" name="language">-->
<!--                                            <label for="swedish">Swedish</label>-->
<!--                                        </div>-->
<!--                                        <div class="radiobutton">-->
<!--                                            <input type="radio" id="german" name="language">-->
<!--                                            <label for="german">German</label>-->
<!--                                        </div>-->
<!--                                        <div class="radiobutton">-->
<!--                                            <input type="radio" id="finnish" name="language">-->
<!--                                            <label for="finnish">Finnish</label>-->
<!--                                        </div>-->
<!--                                        <div class="radiobutton">-->
<!--                                            <input type="radio" id="french" name="language">-->
<!--                                            <label for="french">French</label>-->
<!--                                        </div>-->
<!--                                        <div class="radiobutton">-->
<!--                                            <input type="radio" id="russian" name="language">-->
<!--                                            <label for="russian">Russian</label>-->
<!--                                        </div>-->
<!--                                        <div class="radiobutton">-->
<!--                                            <input type="radio" id="spanish" name="language">-->
<!--                                            <label for="spanish">Spanish</label>-->
<!--                                        </div>-->
<!--                                        <div class="radiobutton">-->
<!--                                            <input type="radio" id="arabic" name="language">-->
<!--                                            <label for="arabic">Arabic</label>-->
<!--                                        </div>-->
<!--                                        <div class="radiobutton">-->
<!--                                            <input type="radio" id="portuguese" name="language">-->
<!--                                            <label for="portuguese">Portuguese</label>-->
<!--                                        </div>-->
<!--                                        <div class="radiobutton">-->
<!--                                            <input type="radio" id="hebrew" name="language">-->
<!--                                            <label for="hebrew">Hebrew</label>-->
<!--                                        </div>-->
<!--                                        <div class="radiobutton">-->
<!--                                            <input type="radio" id="italian" name="language">-->
<!--                                            <label for="italian">Italian</label>-->
<!--                                        </div>-->
<!--                                        <div class="radiobutton">-->
<!--                                            <input type="radio" id="chinese" name="language">-->
<!--                                            <label for="chinese">Chinese</label>-->
<!--                                        </div>-->
<!--                                        <div class="radiobutton">-->
<!--                                            <input type="radio" id="dutch" name="language">-->
<!--                                            <label for="dutch">Dutch</label>-->
<!--                                        </div>-->
<!--                                        <div class="radiobutton">-->
<!--                                            <input type="radio" id="korean" name="language">-->
<!--                                            <label for="korean">Korean</label>-->
<!--                                        </div>-->
<!--                                        <div class="radiobutton">-->
<!--                                            <input type="radio" id="danish" name="language">-->
<!--                                            <label for="danish">Danish</label>-->
<!--                                        </div>-->
<!--                                        <div class="radiobutton">-->
<!--                                            <input type="radio" id="japanese" name="language">-->
<!--                                            <label for="japanese">Japanese</label>-->
<!--                                        </div>-->
<!--                                        <div class="radiobutton">-->
<!--                                            <input type="radio" id="norwegian" name="language">-->
<!--                                            <label for="norwegian">Norwegian</label>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class="right-block">-->
<!--                                <label>Target language(s):*</label>-->
<!--                                <div class="select target-language">-->
<!--                                    <p class="placeholder">Select language</p>-->
<!--                                    <div class="selects-options">-->
<!--                                        <div class="checkbox">-->
<!--                                            <input type="checkbox" id="target_english">-->
<!--                                            <label for="target_english">English</label>-->
<!--                                        </div>-->
<!--                                        <div class="checkbox">-->
<!--                                            <input type="checkbox" id="target_swedish">-->
<!--                                            <label for="target_swedish">Swedish</label>-->
<!--                                        </div>-->
<!--                                        <div class="checkbox">-->
<!--                                            <input type="checkbox" id="target_german">-->
<!--                                            <label for="target_german">German</label>-->
<!--                                        </div>-->
<!--                                        <div class="checkbox">-->
<!--                                            <input type="checkbox" id="target_finnish">-->
<!--                                            <label for="target_finnish">Finnish</label>-->
<!--                                        </div>-->
<!--                                        <div class="checkbox">-->
<!--                                            <input type="checkbox" id="target_french">-->
<!--                                            <label for="target_french">French</label>-->
<!--                                        </div>-->
<!--                                        <div class="checkbox">-->
<!--                                            <input type="checkbox" id="target_russian">-->
<!--                                            <label for="target_russian">Russian</label>-->
<!--                                        </div>-->
<!--                                        <div class="checkbox">-->
<!--                                            <input type="checkbox" id="target_spanish">-->
<!--                                            <label for="target_spanish">Spanish</label>-->
<!--                                        </div>-->
<!--                                        <div class="checkbox">-->
<!--                                            <input type="checkbox" id="target_arabic">-->
<!--                                            <label for="target_arabic">Arabic</label>-->
<!--                                        </div>-->
<!--                                        <div class="checkbox">-->
<!--                                            <input type="checkbox" id="target_portuguese">-->
<!--                                            <label for="target_portuguese">Portuguese</label>-->
<!--                                        </div>-->
<!--                                        <div class="checkbox">-->
<!--                                            <input type="checkbox" id="target_hebrew">-->
<!--                                            <label for="target_hebrew">Hebrew</label>-->
<!--                                        </div>-->
<!--                                        <div class="checkbox">-->
<!--                                            <input type="checkbox" id="target_italian">-->
<!--                                            <label for="target_italian">Italian</label>-->
<!--                                        </div>-->
<!--                                        <div class="checkbox">-->
<!--                                            <input type="checkbox" id="target_chinese">-->
<!--                                            <label for="target_chinese">Chinese</label>-->
<!--                                        </div>-->
<!--                                        <div class="checkbox">-->
<!--                                            <input type="checkbox" id="target_dutch">-->
<!--                                            <label for="target_dutch">Dutch</label>-->
<!--                                        </div>-->
<!--                                        <div class="checkbox">-->
<!--                                            <input type="checkbox" id="target_korean">-->
<!--                                            <label for="target_korean">Korean</label>-->
<!--                                        </div>-->
<!--                                        <div class="checkbox">-->
<!--                                            <input type="checkbox" id="target_danish">-->
<!--                                            <label for="target_danish">Danish</label>-->
<!--                                        </div>-->
<!--                                        <div class="checkbox">-->
<!--                                            <input type="checkbox" id="target_japanese">-->
<!--                                            <label for="target_japanese">Japanese</label>-->
<!--                                        </div>-->
<!--                                        <div class="checkbox">-->
<!--                                            <input type="checkbox" id="target_norwegian">-->
<!--                                            <label for="target_norwegian">Norwegian</label>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class="left-block">-->
<!--                                <div class="input">-->
<!--                                    <label>First name:*</label>-->
<!--                                    <input type="text" placeholder="Name">-->
<!--                                </div>-->
<!--                                <div class="input">-->
<!--                                    <label>Last name:*</label>-->
<!--                                    <input type="text" placeholder="Name">-->
<!--                                </div>-->
<!--                                <div class="input">-->
<!--                                    <label>E-mail*</label>-->
<!--                                    <input type="text" placeholder="Your mail">-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class="right-block">-->
<!--                                <label>Subject:*</label>-->
<!--                                <div class="select">-->
<!--                                    <p class="placeholder">Select subject</p>-->
<!--                                    <div class="selects-options">-->
<!---->
<!--                                        <div class="radiobutton">-->
<!--                                            <input type="radio" id="business" name="subject">-->
<!--                                            <label for="business">Business</label>-->
<!--                                        </div>-->
<!--                                        <div class="radiobutton">-->
<!--                                            <input type="radio" id="legal" name="subject">-->
<!--                                            <label for="legal">Legal</label>-->
<!--                                        </div>-->
<!---->
<!--                                        <div class="radiobutton">-->
<!--                                            <input type="radio" id="marketing" name="subject">-->
<!--                                            <label for="marketing">Marketing</label>-->
<!--                                        </div>-->
<!--                                        <div class="radiobutton">-->
<!--                                            <input type="radio" id="medical" name="subject">-->
<!--                                            <label for="medical">Medical</label>-->
<!--                                        </div>-->
<!--                                        <div class="radiobutton">-->
<!--                                            <input type="radio" id="ecommerce" name="subject">-->
<!--                                            <label for="ecommerce">eCommerce</label>-->
<!--                                        </div>-->
<!---->
<!--                                        <div class="radiobutton">-->
<!--                                            <input type="radio" id="pharmaceutical" name="subject">-->
<!--                                            <label for="pharmaceutical">Pharmaceutical</label>-->
<!--                                        </div>-->
<!---->
<!--                                        <div class="radiobutton">-->
<!--                                            <input type="radio" id="consumer_goods" name="subject">-->
<!--                                            <label for="consumer_goods">Consumer Goods</label>-->
<!--                                        </div>-->
<!---->
<!--                                        <div class="radiobutton">-->
<!--                                            <input type="radio" id="engineering" name="subject">-->
<!--                                            <label for="engineering">Engineering</label>-->
<!--                                        </div>-->
<!---->
<!--                                        <div class="radiobutton">-->
<!--                                            <input type="radio" id="retail" name="subject">-->
<!--                                            <label for="retail">Retail</label>-->
<!--                                        </div>-->
<!---->
<!--                                        <div class="radiobutton">-->
<!--                                            <input type="radio" id="biotech" name="subject">-->
<!--                                            <label for="biotech">Biotech</label>-->
<!--                                        </div>-->
<!---->
<!--                                        <div class="radiobutton">-->
<!--                                            <input type="radio" id="financial" name="subject">-->
<!--                                            <label for="financial">Financial</label>-->
<!--                                        </div>-->
<!---->
<!--                                        <div class="radiobutton">-->
<!--                                            <input type="radio" id="science_and_technology" name="subject">-->
<!--                                            <label for="science_and_technology">Science and <span>Technology</span></label>-->
<!--                                        </div>-->
<!---->
<!--                                        <div class="radiobutton">-->
<!--                                            <input type="radio" id="banking" name="subject">-->
<!--                                            <label for="banking">Banking</label>-->
<!--                                        </div>-->
<!---->
<!--                                        <div class="radiobutton">-->
<!--                                            <input type="radio" id="technical" name="subject">-->
<!--                                            <label for="technical">Technical</label>-->
<!--                                        </div>-->
<!---->
<!--                                        <div class="radiobutton">-->
<!--                                            <input type="radio" id="arts" name="subject">-->
<!--                                            <label for="arts">Arts</label>-->
<!--                                        </div>-->
<!---->
<!--                                        <div class="radiobutton">-->
<!--                                            <input type="radio" id="industrial_equipment" name="subject">-->
<!--                                            <label for="industrial_equipment">Industrial Equipment</label>-->
<!--                                        </div>-->
<!---->
<!--                                        <div class="radiobutton">-->
<!--                                            <input type="radio" id="sports" name="subject">-->
<!--                                            <label for="sports">Sports</label>-->
<!--                                        </div>-->
<!---->
<!--                                        <div class="radiobutton">-->
<!--                                            <input type="radio" id="manufacturing" name="subject">-->
<!--                                            <label for="manufacturing">Manufacturing</label>-->
<!--                                        </div>-->
<!---->
<!--                                        <div class="radiobutton">-->
<!--                                            <input type="radio" id="general" name="subject">-->
<!--                                            <label for="general">General</label>-->
<!--                                        </div>-->
<!---->
<!--                                        <div class="radiobutton">-->
<!--                                            <input type="radio" id="oil_and_gas" name="subject">-->
<!--                                            <label for="oil_and_gas">Oil and Gas</label>-->
<!--                                        </div>-->
<!---->
<!--                                        <div class="radiobutton">-->
<!--                                            <input type="radio" id="travel_tourism" name="subject">-->
<!--                                            <label for="travel_tourism">Travel &#38; <span>Tourism</span></label>-->
<!--                                        </div>-->
<!---->
<!--                                        <div class="radiobutton">-->
<!--                                            <input type="radio" id="automotive" name="subject">-->
<!--                                            <label for="automotive">Automotive</label>-->
<!--                                        </div>-->
<!---->
<!--                                        <div class="radiobutton">-->
<!--                                            <input type="radio" id="culinary_beverage" name="subject">-->
<!--                                            <label for="culinary_beverage">Culinary &#38; <span>Beverage</span></label>-->
<!--                                        </div>-->
<!---->
<!--                                        <div class="radiobutton">-->
<!--                                            <input type="radio" id="telecom" name="subject">-->
<!--                                            <label for="telecom">Telecom</label>-->
<!--                                        </div>-->
<!---->
<!--                                        <div class="radiobutton">-->
<!--                                            <input type="radio" id="journals_periodicals" name="subject">-->
<!--                                            <label for="journals_periodicals">Journals &#38; Periodicals</label>-->
<!--                                        </div>-->
<!---->
<!--                                        <div class="radiobutton">-->
<!--                                            <input type="radio" id="information_technology" name="subject">-->
<!--                                            <label for="information_technology">Information Technology</label>-->
<!--                                        </div>-->
<!---->
<!--                                        <div class="radiobutton">-->
<!--                                            <input type="radio" id="media_entertainment" name="subject">-->
<!--                                            <label for="media_entertainment">Media &#38; <span>Entertainment</span></label>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div class="textarea">-->
<!--                                    <label>Comments:</label>-->
<!--                                    <textarea placeholder="Your comments..."></textarea>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class="file-upload">-->
<!--                                <label>File upload:</label>-->
<!--                                <div class="input file">-->
<!--                                    <label for="add-file" class="icon icon-lnk-file-format-symbol"></label>-->
<!--                                    <input type="file" id="add-file" class="add-file">-->
<!--                                    <label for="add-file" class="name-file">No file chosen</label>-->
<!--                                    <label for="add-file" class="files">Select file</label>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <input type="submit" class="button green" value="Submit">-->
<!--                        </form>-->
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
