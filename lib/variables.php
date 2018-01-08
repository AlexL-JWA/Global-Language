<?php
function lem_home_block_sixth_section($count){
    $variables_1 = '<figure class="chart" data-percent="25">
                                <figcaption>1M</figcaption>
                                <svg width="200" height="200">
                                    <circle class="outer" cx="90.5" cy="100" r="89.5" transform="rotate(-90, 95, 95)"/>
                                </svg>
                            </figure>';
    $variables_2 = '<figure class="chart" data-percent="100">
                                <figcaption>100%</figcaption>
                                <svg width="200" height="200">
                                    <circle class="outer" cx="90.5" cy="100" r="89" transform="rotate(-90, 95, 95)"/>
                                </svg>
                            </figure>';
    $variables_3 = '<figure class="chart" data-percent="75">
                                <figcaption>1000</figcaption>
                                <svg width="200" height="200">
                                    <circle class="outer" cx="90.5" cy="100" r="89.9" transform="rotate(-90, 95, 95)"/>
                                </svg>
                            </figure>';
    $variables_4 = '<figure class="chart" data-percent="50">
                                <figcaption>24/7</figcaption>
                                <svg width="200" height="200">
                                    <circle class="outer" cx="90.5" cy="100" r="90.5" transform="rotate(-90, 95, 95)"/>
                                </svg>
                            </figure>';
    if ($count == 1){
        echo $variables_1;
    }
    elseif ($count == 2){
        echo $variables_2;
    }
    elseif ($count == 3){
        echo $variables_3;
    }
    elseif ($count == 4){
        echo $variables_4;
    }else{
        echo $variables_1;
    }
}

function lem_home_block_of_the_eighth_section($count){
    $variables_1 = 'yellow';
    $variables_2 = 'blue';
    $variables_3 = 'green';
    if ($count == 1){
        echo $variables_1;
    }
    elseif ($count == 2){
        echo $variables_2;
    }
    elseif ($count == 3){
        echo $variables_3;
    }else{
        echo $variables_1;
    }
}

function lem_languages_header_button($count){
    $variables_1 = 'yellow';
    $variables_2 = 'green';
    if ($count == 1){
        echo $variables_1;
    }else{
        echo $variables_2;
    }
}

function lem_block_of_the_third_sectionn($count){
    $variables_1 = 'icon-file';
    $variables_2 = 'icon-wi-fi';
    $variables_3 = 'icon-video-player';
    $variables_4 = 'icon-copyright';
    if ($count == 1){
        echo $variables_1;
    }
    elseif ($count == 2){
        echo $variables_2;
    }
    elseif ($count == 3){
        echo $variables_3;
    }
    elseif ($count == 4){
        echo $variables_4;
    }else{
        echo $variables_1;
    }
}

function lem_docs_translation($count){
    $variables_1 = 'icon-file';
    $variables_2 = 'icon-font';

    if ($count == 1){
        echo $variables_1;
    }elseif($count == 2){
        echo $variables_2;
    }elseif ($count == 3){
        echo $variables_1;
    }
    elseif ($count == 4){
        echo $variables_2;
    }else{
        echo $variables_1;
    }
}

function lem_social_networks($count){
    $variables_1 = 'icon-twitter';
    $variables_2 = 'icon-facebook';
    $variables_3 = 'icon-linkedin';
    $variables_4 = 'icon-gplus';
    if ($count == 1){
        echo $variables_1;
    }
    elseif ($count == 2){
        echo $variables_2;
    }
    elseif ($count == 3){
        echo $variables_3;
    }
    elseif ($count == 4){
        echo $variables_4;
    }else{
        echo $variables_1;
    }
}

function lem_contact_servis($count){
    $variables_4 = 'document_translation';
    $variables_3 = 'website_translation';
    $variables_2 = 'video_translation';
    $variables_1 = 'copywriting';
    if ($count == 1){
        echo $variables_1;
    }
    elseif ($count == 2){
        echo $variables_2;
    }
    elseif ($count == 3){
        echo $variables_3;
    }
    elseif ($count == 4){
        echo $variables_4;
    }else{
        echo $variables_1;
    }
}

