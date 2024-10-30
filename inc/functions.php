<?php
 /**
  * 
  * @package    Vchat - WordPress plugin
  * @version    1.0
  * @author     ThemeAtelier
  * @Websites: https://themeatelier.net/
  *
  */
  if( ! defined( 'ABSPATH' ) ) {
    die( VCHAT_ALERT_MSG );
  }

/**
 * Vchat buttons init
 *
 *
 */

function vchat_buttons_template_init( $args ) {
  $buttonObj = new Vchat_Buttons_Template( $args );

    if( !empty( $args['style'] ) ) {

    // Style Switch
    switch ( $args['style'] ) {
        case '1':
            $buttonObj->vchat_button_s1();
            break;
        case '2':
            $buttonObj->vchat_button_s2();
            break;
        default:
            $buttonObj->vchat_button_s1();
            break;
    }
  }
}

