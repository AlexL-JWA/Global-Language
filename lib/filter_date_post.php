<?php
add_action('wp_ajax_filter_date_post', 'filter_date_post');
add_action('wp_ajax_nopriv_filter_date_post', 'filter_date_post');
function filter_date_post()
{
//    var_dump($_POST);
    $mymonth = $_POST['searchm'];
//    $myday = $_POST['searchd'];
//    $pagin = $_POST['searchp'];
//    var_dump($mymonth);
//    var_dump($pagin);

    if ($mymonth == 'Jan'){
        $mymonth = 1;
    }elseif ($mymonth == 'Feb'){
        $mymonth = 2;
    }elseif ($mymonth == 'Mar'){
        $mymonth = 3;
    }elseif ($mymonth == 'Apr'){
        $mymonth = 4;
    }elseif ($mymonth == 'May'){
        $mymonth = 5;
    }elseif ($mymonth == 'Jun'){
        $mymonth = 6;
    }elseif ($mymonth == 'Jul'){
        $mymonth = 7;
    }elseif ($mymonth == 'Aug'){
        $mymonth = 8;
    }elseif ($mymonth == 'Sep'){
        $mymonth = 9;
    }elseif ($mymonth == 'Oct'){
        $mymonth = 10;
    }elseif ($mymonth == 'Nov'){
        $mymonth = 11;
    }elseif ($mymonth == 'Dec'){
        $mymonth = 12;
    }
    ?>
    <?php
//    $paged = get_query_var( 'paged' ) ? absint( get_query_var( 'paged' ) ) : 1;


//    $paged = $pagin ? $pagin : 1;

    $query = new WP_Query( array(
//        'posts_per_page' => 4,
//        'category_name'  => '',
//        'paged'          => $paged,
        'monthnum'=>$mymonth
    ) );
    ?>
    <ul class="blog-menu">
                        <li>
                            <a href="#">
                                <i class="icon-menu-interface"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="icon-menu"></i>
                            </a>
                        </li>
                    </ul>

                    <div class="blog-items">



    <?php
//$args = array(
//    'monthnum'=>$mymonth
//);
//    $query = new WP_Query($args);
//    var_dump($query->posts);
    foreach ($query->posts as $post) {
        setup_postdata($post);
        $post_id = $post->ID;
        $my_blog_lup = get_fields($post->ID);
//        var_dump($post);
//        var_dump($post->ID);
//        var_dump($post->post_author);
//        var_dump($post->post_title);
//        var_dump($post->post_content);
        ?>
        <div class="blog-item">
        <img src="<?php echo $my_blog_lup['picture_for_a_brief_description'];?>" alt="#">
        <div class="description-blog">
        <h2 class="title"><?php echo $post->post_title;?></h2>
        <p><a href="#"><?php echo get_the_date('F d Y', $post_id); ?></a> in Language Connect by <a href="<?php echo get_the_author_link();?>"><?php echo get_the_author();?></a></p>
        <p class="text"><?php the_content($post_id) ?></p>
        <a href="<?php the_permalink($post_id);?>" class="button blue">Read more</a>
            <div class="share">
                <i class="icon-share"></i>
                <ul class="share-menu">
                    <li>
                        <a href="#"><i class="icon-twitter"></i>Twitter</a>
                    </li>
                    <li>
                        <a href="#"><i class="icon-facebook"></i>Facebook</a>
                    </li>
                    <li>
                        <a href="#"><i class="icon-linkedin"></i>Linkedin</a>
                    </li>
                    <li>
                        <a href="#"><i class="icon-gplus"></i>Google+</a>
                    </li>
                    <li>
                        <a href="#"><i class="icon-pinterest"></i>Pinterest</a>
                    </li>
                    <li>
                        <a href="#"><i class="icon-behance"></i>Behance</a>
                    </li>
                    <li>
                        <a href="#"><i class="icon-digg"></i>Digg</a>
                    </li>
                    <li>
                        <a href="#"><i class="icon-dribble-logo"></i>Dribbble</a>
                    </li>
                    <li>
                        <a href="#"><i class="icon-digglogo"></i>digg.it</a>
                    </li>
                    <li>
                        <a href="#"><i class="icon-instagram"></i>Instagram</a>
                    </li>
                    <li>
                        <a href="#"><i class="icon-Delicious"></i>Delicious</a>
                    </li>
                    <li>
                        <a href="#"><i class="icon-icon"></i>Youtube</a>
                    </li>
                    <li>
                        <a href="#"><i class="icon-reddit-social-logo"></i>Reddit</a>
                    </li>
                    <li>
                        <a href="#"><i class="icon-my-space-logo"></i>My space</a>
                    </li>
                    <li>
                        <a href="#"><i class="icon-flickr"></i>Flickr</a>
                    </li>
                    <li>
                        <a href="#"><i class="icon-stumbleupon"></i>Stumbleupon</a>
                    </li>
                </ul>
            </div>
        </div>
        </div>

        <?php
         }
wp_reset_postdata();
?>
                    </div>

    <hr class="sline">

    <div class="pagination">
<!--        --><?php
//        $big = 999999999;
//
//        $args = array(
//            'base'    => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
//            'format'  => '?paged=%#%',
//            'current' => max( 1, get_query_var('paged') ),
//            'mid_size' => 1,
//            'end_size' => 3,
//            'prev_text' => '&#171; Prev',
//            'next_text' => 'Next &#187;',
//            'type' => 'list',
//            'total'   => $query->max_num_pages
//        );
//        echo paginate_links($args);
//        ?>

    </div>


    <?php
    wp_die();
}


//send form footer
add_action('wp_ajax_send_form_footer', 'send_form_footer');
add_action('wp_ajax_nopriv_send_form_footer', 'send_form_footer');
function send_form_footer()
{
   // var_dump($_POST);
    //var_dump($_FILES);
    check_ajax_referer( 'myajax-nonce', 'nonce_code' );
    
    
    $user_message = get_field('user_message',1371);
    $admin_message = get_field('admin_message',1371);
    foreach ($_FILES as $key => $value) {
        $myfiles[] = $_FILES[$key]['tmp_name'];
        $myfilesname[] = $_FILES[$key]['name'];
    }
    // for ($i = 0; $i < count($_FILES); $i++) {
    //     $myfiles[] = $_FILES['file' . $i]['tmp_name'];
    //     $myfilesname[] = $_FILES['file' . $i]['name'];
    // }
   // $myfiles = $_FILES['file']['tmp_name'];
    //$myfilesname = $_FILES['file']['name'];
   
    $services = $_POST['keyservices'];
    $Sourcelanguage = $_POST['keySourcelanguage'];
    $targetlanguage = $_POST['keytargetlanguage'];
    $subject = $_POST['keysubject'];
    $inputTextFirst = $_POST['keyinputTextFirst'];
    $inputTextLast = $_POST['keyinputTextLast'];
    $inputEmail = $_POST['keyinputEmail'];
    $inputTextArea = $_POST['keyinputTextArea'];
    $ip = $_SERVER['REMOTE_ADDR'];
//    $to = $_POST['search'];
//    $to = 'lemesh37@gmail.com';
    $to = get_option('admin_email');
    $subjectmail = "GL_Solution_Translation Request";
//    $filepath = get_template_directory_uri().'/Catalog_no_price.pdf';
    
    
    
    $info = pathinfo($myfilesname);
   // $name = $info['filename'];
    
    $base_dir = get_template_directory() . '/uploads/';

    // for($i=0; $i < count($myfilesname); $i++){
    //     $new_name[] = $base_dir .  esc_attr($myfilesname[$i]);
    // }
    
    foreach ($myfilesname as $key => $value) {
        $new_name[] = $base_dir .  esc_attr($myfilesname[$key]);
    }
    
    
    
    
    
    if($inputTextArea == ''){
        $inputTextArea = 'no comments';
    }

    
    $message_to_admin = " 
    

     
        
    <body style=\"max-width: 560px;width: 100%;\">
    $admin_message
    <table style=\"width: 100%;border-spacing: 0 !important;margin-top: 20px;\">
        <tr style=\"background: #ccc; width: 100%;\">
            <th style=\"padding: 0 10px;text-align: left;\">
                <p style=\"margin: 10px 0;font-size: 15px;line-height: 1.2;\">Services:</p>  
            </th>
            <td style=\"padding: 0 10px;text-align: left;\">
                <p style=\"margin: 10px 0;font-size: 15px;line-height: 1.2;\">$services</p>  
            </td>
        </tr>
        <tr style=\"width: 100%;\">
            <th style=\"padding: 0 10px;text-align: left;\">
                <p style=\"margin: 10px 0;font-size: 15px;line-height: 1.2;\">Source language:</p>  
            </th>
            <td style=\"padding: 0 10px;text-align: left;\">
                <p style=\"margin: 10px 0;font-size: 15px;line-height: 1.2;\">$Sourcelanguage</p>  
            </td>
        </tr>
        <tr style=\"background: #ccc; width: 100%;\">
            <th style=\"padding: 0 10px;text-align: left;\">
                <p style=\"margin: 10px 0;font-size: 15px;line-height: 1.2;\">Target language(s):</p>  
            </th>
            <td style=\"padding: 0 10px;text-align: left;\">
                <p style=\"margin: 10px 0;font-size: 15px;line-height: 1.2;\">$targetlanguage</p>  
            </td>
        </tr>
        <tr style=\"width: 100%;\">
            <th style=\"padding: 0 10px;text-align: left;\">
                <p style=\"margin: 10px 0;font-size: 15px;line-height: 1.2;\">Subject:</p>  
            </th>
            <td style=\"padding: 0 10px;text-align: left;\">
                <p style=\"margin: 10px 0;font-size: 15px;line-height: 1.2;\">$subject</p>  
            </td>
        </tr>
        <tr style=\"background: #ccc; width: 100%;\">
            <th style=\"padding: 0 10px;text-align: left;\">
                <p style=\"margin: 10px 0;font-size: 15px;line-height: 1.2;\">First name:</p>  
            </th>
            <td style=\"padding: 0 10px;text-align: left;\">
                <p style=\"margin: 10px 0;font-size: 15px;line-height: 1.2;\">$inputTextFirst</p>  
            </td>
        </tr>
        <tr style=\"width: 100%;\">
            <th style=\"padding: 0 10px;text-align: left;\">
                <p style=\"margin: 10px 0;font-size: 15px;line-height: 1.2;\">Last name:</p>  
            </th>
            <td style=\"padding: 0 10px;text-align: left;\">
               <p style=\"margin: 10px 0;font-size: 15px;line-height: 1.2;\">$inputTextLast  </p>
            </td>
        </tr>
        <tr style=\"background: #ccc; width: 100%;\">
            <th style=\"padding: 0 10px;text-align: left;\">
                <p style=\"margin: 10px 0;font-size: 15px;line-height: 1.2;\">E-mail:</p>  
            </th>
            <td style=\"padding: 0 10px;text-align: left;\">
                $inputEmail  
            </td>
        </tr>
        <tr style=\"width: 100%;\">
            <th style=\"padding: 0 10px;text-align: left;\">
                <p style=\"margin: 10px 0;font-size: 15px;line-height: 1.2;\">Comments:</p>  
            </th>
            <td style=\"padding: 0 10px;text-align: left;\">
                <p style=\"margin: 10px 0;font-size: 15px;line-height: 1.2;\">$inputTextArea</p>  
            </td>
        </tr>
        
        <tr style=\"background: #ccc; width: 100%;\">
            <th style=\"padding: 0 10px;text-align: left;\">
                <p style=\"margin: 10px 0;font-size: 15px;line-height: 1.2;\">IP adress:</p>  
            </th>
            <td style=\"padding: 0 10px;text-align: left;\">
                <p style=\"margin: 10px 0;font-size: 15px;line-height: 1.2;\">$ip</p>  
            </td>
        </tr>
    </table>
    </body>";

    
    $message_client ="
        <body style=\"max-width: 560px;width: 100%;\">
    $user_message
    <table style=\"width: 100%;border-spacing: 0 !important;margin-top: 20px;\">
        <tr style=\"background: #ccc; width: 100%;\">
            <th style=\"padding: 0 10px;text-align: left;\">
                <p style=\"margin: 10px 0;font-size: 15px;line-height: 1.2;\">Services:</p>  
            </th>
            <td style=\"padding: 0 10px;text-align: left;\">
                <p style=\"margin: 10px 0;font-size: 15px;line-height: 1.2;\">$services</p>  
            </td>
        </tr>
        <tr style=\"width: 100%;\">
            <th style=\"padding: 0 10px;text-align: left;\">
                <p style=\"margin: 10px 0;font-size: 15px;line-height: 1.2;\">Source language:</p>  
            </th>
            <td style=\"padding: 0 10px;text-align: left;\">
                <p style=\"margin: 10px 0;font-size: 15px;line-height: 1.2;\">$Sourcelanguage</p>  
            </td>
        </tr>
        <tr style=\"background: #ccc; width: 100%;\">
            <th style=\"padding: 0 10px;text-align: left;\">
                <p style=\"margin: 10px 0;font-size: 15px;line-height: 1.2;\">Target language(s):</p>  
            </th>
            <td style=\"padding: 0 10px;text-align: left;\">
                <p style=\"margin: 10px 0;font-size: 15px;line-height: 1.2;\">$targetlanguage</p>  
            </td>
        </tr>
        <tr style=\"width: 100%;\">
            <th style=\"padding: 0 10px;text-align: left;\">
                <p style=\"margin: 10px 0;font-size: 15px;line-height: 1.2;\">Subject:</p>  
            </th>
            <td style=\"padding: 0 10px;text-align: left;\">
                <p style=\"margin: 10px 0;font-size: 15px;line-height: 1.2;\">$subject</p>  
            </td>
        </tr>
        <tr style=\"background: #ccc; width: 100%;\">
            <th style=\"padding: 0 10px;text-align: left;\">
                <p style=\"margin: 10px 0;font-size: 15px;line-height: 1.2;\">First name:</p>  
            </th>
            <td style=\"padding: 0 10px;text-align: left;\">
                <p style=\"margin: 10px 0;font-size: 15px;line-height: 1.2;\">$inputTextFirst</p>  
            </td>
        </tr>
        <tr style=\"width: 100%;\">
            <th style=\"padding: 0 10px;text-align: left;\">
                <p style=\"margin: 10px 0;font-size: 15px;line-height: 1.2;\">Last name:</p>  
            </th>
            <td style=\"padding: 0 10px;text-align: left;\">
               <p style=\"margin: 10px 0;font-size: 15px;line-height: 1.2;\">$inputTextLast  </p>
            </td>
        </tr>
        <tr style=\"background: #ccc; width: 100%;\">
            <th style=\"padding: 0 10px;text-align: left;\">
                <p style=\"margin: 10px 0;font-size: 15px;line-height: 1.2;\">E-mail:</p>  
            </th>
            <td style=\"padding: 0 10px;text-align: left;\">
                $inputEmail  
            </td>
        </tr>
        <tr style=\"width: 100%;\">
            <th style=\"padding: 0 10px;text-align: left;\">
                <p style=\"margin: 10px 0;font-size: 15px;line-height: 1.2;\">Comments:</p>  
            </th>
            <td style=\"padding: 0 10px;text-align: left;\">
                <p style=\"margin: 10px 0;font-size: 15px;line-height: 1.2;\">$inputTextArea</p>  
            </td>
        </tr>
        
    </table>
    </body>
    ";
//    $message = $services.$Sourcelanguage.$targetlanguage.$subject.$inputTextFirst.$inputTextLast.$inputEmail.$inputTextArea;
    $headers[] = 'From: GLSolution <info@translationserviceonline.com>';
    $headers[]  = "Content-type: text/html; charset=UTF-8 \r\n";
    
    
    //$headers[]  = "Content-type: text/plain; charset=UTF-8 \r\n";
//    for ($i = 0; $i < count($myfiles); $i++ ){ 
//     if(move_uploaded_file($myfiles[$i], $new_name[$i])){
//         $attachments = $new_name;    
//     }
// }
    foreach ($myfiles as $key => $value) {
       if(move_uploaded_file($myfiles[$key], $new_name[$key])){
        $attachments = $new_name;    
    }
    }
    
        if(wp_mail( $to, $subjectmail, $message_to_admin, $headers, $attachments )){
        echo 1;
    } else {
        echo 0;
    }
    
    if(wp_mail( $inputEmail, $subjectmail, $message_client, $headers, $attachments )){
        echo 1;
    } else {
        echo 0;
    }    
    



    wp_die();
}
