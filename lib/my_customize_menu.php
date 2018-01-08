<?php
//Define settings Customizer. Described sections, settings and controls
function lem_customize_register( $wp_customize ) {
    //header
    $wp_customize->add_setting( 'header_tel_text' , array(//'header_textcolor'
        'default' => __('TEL text', 'lem'),
        'transport' => 'refresh',
    ) );
    $wp_customize->add_setting( 'header_tel' , array(//'header_textcolor'
        'default' => __('TEL', 'lem'),
        'transport' => 'refresh',
    ) );
    $wp_customize->add_setting( 'header_tel_text_h' , array(//'header_textcolor'
        'default' => __('TEL text', 'lem'),
        'transport' => 'refresh',
    ) );
    $wp_customize->add_setting( 'header_tel_h' , array(//'header_textcolor'
        'default' => __('TEL', 'lem'),
        'transport' => 'refresh',
    ) );
    $wp_customize->add_setting( 'header_mail' , array(//'header_textcolor'
        'default' => __('mail', 'lem'),
        'transport' => 'refresh',
    ) );
    $wp_customize->add_setting( 'header_button_1_text' , array(//'header_textcolor'
        'default' => __('', 'lem'),
        'transport' => 'refresh',
    ) );
    $wp_customize->add_setting( 'header_button_1_url' , array(//'header_textcolor'
        'default' => __('', 'lem'),
        'transport' => 'refresh',
    ) );
    $wp_customize->add_setting( 'header_button_2_text' , array(//'header_textcolor'
        'default' => __('', 'lem'),
        'transport' => 'refresh',
    ) );
    $wp_customize->add_setting( 'header_button_2_url' , array(//'header_textcolor'
        'default' => __('', 'lem'),
        'transport' => 'refresh',
    ) );
    //footer
    $wp_customize->add_setting( 'footer_tel_text' , array(//'header_textcolor'
        'default' => __('TEL text', 'lem'),
        'transport' => 'refresh',
    ) );
    $wp_customize->add_setting( 'footer_tel' , array(//'header_textcolor'
        'default' => __('TEL', 'lem'),
        'transport' => 'refresh',
    ) );
    $wp_customize->add_setting( 'footer_address' , array(//'header_textcolor'
        'default' => __('Address', 'lem'),
        'transport' => 'refresh',
    ) );
    $wp_customize->add_setting( 'footer_address_link' , array(//'header_textcolor'
        'default' => __('Address link', 'lem'),
        'transport' => 'refresh',
    ) );
    $wp_customize->add_setting( 'footer_address_country' , array(//'header_textcolor'
        'default' => __('Address country', 'lem'),
        'transport' => 'refresh',
    ) );
    $wp_customize->add_setting( 'copyrighted' , array(//'header_textcolor'
        'default' => __('Copyrighted', 'lem'),
        'transport' => 'refresh',
    ) );
    //=========================================================
    //header
    $wp_customize->add_section( 'header_section' , array(//'mytheme_new_section_name'
        'title'      => __( 'Header settings', 'metro' ),//'Visible Section Name', 'mytheme'
        'priority'   => 30,
    ) );
    //footer
    $wp_customize->add_section( 'footer_section' , array(//'mytheme_new_section_name'
        'title'      => __( 'Footer settings', 'metro' ),//'Visible Section Name', 'mytheme'
        'priority'   => 31,
    ) );
    //==========================================================
    //header
    $wp_customize->add_control(
        'header_tel_text',//your_control_id
        array(
            'label'    => __( 'Header TEL text:', 'lem' ),//'Control Label', 'mytheme'
            'section'  => 'header_section',//your_section_id
            'settings' => 'header_tel_text',//your_setting_id
            'type'     => 'text',//'radio'
        )
    );
    $wp_customize->add_control(
        'header_tel',//your_control_id
        array(
            'label'    => __( 'Header TEL:', 'lem' ),//'Control Label', 'mytheme'
            'section'  => 'header_section',//your_section_id
            'settings' => 'header_tel',//your_setting_id
            'type'     => 'text',//'radio'
        )
    );
    $wp_customize->add_control(
        'header_tel_text_h',//your_control_id
        array(
            'label'    => __( 'Header TEL text Hong Kong:', 'lem' ),//'Control Label', 'mytheme'
            'section'  => 'header_section',//your_section_id
            'settings' => 'header_tel_text_h',//your_setting_id
            'type'     => 'text',//'radio'
        )
    );
    $wp_customize->add_control(
        'header_tel_h',//your_control_id
        array(
            'label'    => __( 'Header TEL Hong Kong:', 'lem' ),//'Control Label', 'mytheme'
            'section'  => 'header_section',//your_section_id
            'settings' => 'header_tel_h',//your_setting_id
            'type'     => 'text',//'radio'
        )
    );
    $wp_customize->add_control(
        'header_mail',//your_control_id
        array(
            'label'    => __( 'Header mail:', 'lem' ),//'Control Label', 'mytheme'
            'section'  => 'header_section',//your_section_id
            'settings' => 'header_mail',//your_setting_id
            'type'     => 'text',//'radio'
        )
    );
    $wp_customize->add_control(
        'header_button_1_text',//your_control_id
        array(
            'label'    => __( 'Header button 1 text:', 'lem' ),//'Control Label', 'mytheme'
            'section'  => 'header_section',//your_section_id
            'settings' => 'header_button_1_text',//your_setting_id
            'type'     => 'text',//'radio'
        )
    );
    $wp_customize->add_control(
        'header_button_1_url',//your_control_id
        array(
            'label'    => __( 'Header button 1 URL:', 'lem' ),//'Control Label', 'mytheme'
            'section'  => 'header_section',//your_section_id
            'settings' => 'header_button_1_url',//your_setting_id
            'type'     => 'text',//'radio'
        )
    );
    $wp_customize->add_control(
        'header_button_2_text',//your_control_id
        array(
            'label'    => __( 'Header button 2 text:', 'lem' ),//'Control Label', 'mytheme'
            'section'  => 'header_section',//your_section_id
            'settings' => 'header_button_2_text',//your_setting_id
            'type'     => 'text',//'radio'
        )
    );
    $wp_customize->add_control(
        'header_button_2_url',//your_control_id
        array(
            'label'    => __( 'Header button 2 URL:', 'lem' ),//'Control Label', 'mytheme'
            'section'  => 'header_section',//your_section_id
            'settings' => 'header_button_2_url',//your_setting_id
            'type'     => 'text',//'radio'
        )
    );
    $wp_customize->add_control(
        'header_button_2',//your_control_id
        array(
            'label'    => __( 'Header button 2:', 'lem' ),//'Control Label', 'mytheme'
            'section'  => 'header_section',//your_section_id
            'settings' => 'header_button_2',//your_setting_id
            'type'     => 'text',//'radio'
        )
    );
    //footer
    $wp_customize->add_control(
        'footer_tel_text',//your_control_id
        array(
            'label'    => __( 'Footer TEL text:', 'lem' ),//'Control Label', 'mytheme'
            'section'  => 'footer_section',//your_section_id
            'settings' => 'footer_tel_text',//your_setting_id
            'type'     => 'text',//'radio'
        )
    );
    $wp_customize->add_control(
        'footer_tel',//your_control_id
        array(
            'label'    => __( 'Footer TEL:', 'lem' ),//'Control Label', 'mytheme'
            'section'  => 'footer_section',//your_section_id
            'settings' => 'footer_tel',//your_setting_id
            'type'     => 'text',//'radio'
        )
    );
    $wp_customize->add_control(
        'footer_address',//your_control_id
        array(
            'label'    => __( 'Footer Address:', 'lem' ),//'Control Label', 'mytheme'
            'section'  => 'footer_section',//your_section_id
            'settings' => 'footer_address',//your_setting_id
            'type'     => 'text',//'radio'
        )
    );
    $wp_customize->add_control(
        'footer_address_link',//your_control_id
        array(
            'label'    => __( 'Footer Address link:', 'lem' ),//'Control Label', 'mytheme'
            'section'  => 'footer_section',//your_section_id
            'settings' => 'footer_address_link',//your_setting_id
            'type'     => 'text',//'radio'
        )
    );
    $wp_customize->add_control(
        'footer_address_country',//your_control_id
        array(
            'label'    => __( 'Footer Address country:', 'lem' ),//'Control Label', 'mytheme'
            'section'  => 'footer_section',//your_section_id
            'settings' => 'footer_address_country',//your_setting_id
            'type'     => 'text',//'radio'
        )
    );
    $wp_customize->add_control(
        'copyrighted',//your_control_id
        array(
            'label'    => __( 'Copyrighted:', 'lem' ),//'Control Label', 'mytheme'
            'section'  => 'footer_section',//your_section_id
            'settings' => 'copyrighted',//your_setting_id
            'type'     => 'text',//'radio'
        )
    );
}
add_action( 'customize_register', 'lem_customize_register' );