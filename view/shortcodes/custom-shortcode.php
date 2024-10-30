<?php

/**
 * 
 * @package    Viber chat Wp plugin
 * @version    1.0
 * @author     ThemeAtelier
 * @Websites: https://themeatelier.net/
 *
 */


add_shortcode('vchat', 'vchat_custom_buttons_shortcode');
function vchat_custom_buttons_shortcode($atts)
{
  $atts = shortcode_atts(array(
    'style' => '1',
    'photo' => '',
    'name' => esc_html__('Robert', 'chat-viber'),
    'designation' => esc_html__('Sales Support', 'chat-viber'),
    'label' => esc_html__('How can I help you?', 'chat-viber'),
    'online' => esc_html__('I\'m avaiable', 'chat-viber'),
    'offline'  => esc_html__('I\'m offline', 'chat-viber'),
    'number' => esc_html__('008801813381520', 'chat-viber'),
    'timezone' => '',
    'visibility' => 'vc-show-everywhere',
    'sizes' => 'vc-btn-md',
    'rounded' => 'vc-btn-rounded',
    'sunday' => esc_html__('00:00-23:59', 'chat-viber'),
    'monday' => esc_html__('00:00-23:59', 'chat-viber'),
    'tuesday' => esc_html__('00:00-23:59', 'chat-viber'),
    'wednesday' => esc_html__('00:00-23:59', 'chat-viber'),
    'thursday' => esc_html__('00:00-23:59', 'chat-viber'),
    'friday' => esc_html__('00:00-23:59', 'chat-viber'),
    'saturday' => esc_html__('00:00-23:59', 'chat-viber'),
  ), $atts);

  ob_start();

  vchat_buttons_template_init($atts);

  return ob_get_clean();
}
