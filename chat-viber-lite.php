<?php
/*
 *  Plugin Name:    Viber Chat Support
 *  Plugin URI:     https://wpchatplugins.com/vchat/
 *  Description:    Allow your users to send you direct Viber messages by clicking floating chat button and buttons with shortcode or elementor widgets
 *  Author:         ThemeAtelier
 *  Author URI:     http://themeatelier.net/
 *  Requirements:   PHP 7.0 or above, WordPress 4.0 or above.
 *  Version:       1.7.2
 * Text Domain:  chat-viber
 * Domain Path:  /languages
 */

// Block Direct access
if (!defined('ABSPATH')) {
    die('You should not access this file directly!.');
}

// Define Constants for direct access alert message.
if (!defined('VCHAT_ALERT_MSG'))
    define('VCHAT_ALERT_MSG', __('You should not access this file directly.!', 'chat-viber'));


// Define constants for plugin directory path.
if (!defined('VCHAT_VERSION'))
    define('VCHAT_VERSION', '1.7.2');

// Define constants for plugin directory path.
if (!defined('VCHAT_DIR_PATH'))
    define('VCHAT_DIR_PATH', plugin_dir_path(__FILE__));


// Define constants for view directory path.
if (!defined('VCHAT_VIEW_DIR_PATH'))
    define('VCHAT_VIEW_DIR_PATH', VCHAT_DIR_PATH . 'view/');

// Define constants for elementor widget directory path.
if (!defined('VCHAT_EW_DIR_PATH'))
    define('VCHAT_EW_DIR_PATH', VCHAT_VIEW_DIR_PATH . 'elementor-widgets/');


// Define constants for plugin directory path.
if (!defined('VCHAT_DIR_URL'))
    define('VCHAT_DIR_URL', plugin_dir_url(__FILE__));

// load text domain from plugin folder
function vchat_load_textdomain()
{
    load_plugin_textdomain('', false, dirname(__FILE__) . "/languages");
}
add_action("plugins_loaded", 'vchat_load_textdomain');


// Plugin settings in plugin list
add_filter('plugin_action_links_' . plugin_basename(__FILE__), 'vchat_settings_link');
function vchat_settings_link(array $links)
{
    $url = get_admin_url() . "admin.php?page=vchat";
    $settings_link = '<a href="' . esc_url($url) . '">' . esc_html__('Settings', 'chat-viber') . '</a>';
    $links[] = $settings_link;
    return $links;
}

// viber link protocol 
add_filter('kses_allowed_protocols', function ($protocols) {
    $protocols[] = 'viber';
    return $protocols;
});


// Register block
function create_block_viber_block_init()
{
    register_block_type_from_metadata(VCHAT_VIEW_DIR_PATH . 'block/');
}
add_action('init', 'create_block_viber_block_init');


// Register block category 

function viber_chat_plugin_block_categories($categories)
{
    return array_merge(
        $categories,
        [
            [
                'slug'  => 'viber-block',
                'title' => __('Viber block', 'chat-viber'),
            ],
        ]
    );
}
add_action('block_categories', 'viber_chat_plugin_block_categories', 10, 2);

// Pro version link
add_filter('plugin_action_links_' . plugin_basename(__FILE__), 'vchat_pro_link');
function vchat_pro_link(array $links)
{
    $url = "https://1.envato.market/YgJ10O";
    $settings_link = '<a style="color: #7F4DA0; font-weight: 700;" href="' . esc_url($url) . '">' . esc_html__('Go Pro!', 'chat-viber') . '</a>';
    $links[] = $settings_link;
    return $links;
}

// Script enqueue class include
require_once VCHAT_DIR_PATH . 'inc/class-enqueue.php';

// View Shortcodes
require_once VCHAT_DIR_PATH . '/view/elementor-widgets/elementor-widget.php';
require_once VCHAT_DIR_PATH . 'view/shortcodes/custom-shortcode.php';

// buttons functions
require_once VCHAT_DIR_PATH . 'inc/functions.php';
// Button template class
require_once VCHAT_DIR_PATH . 'inc/class-custom-buttons-templates.php';

// single chat bubble template
require_once VCHAT_DIR_PATH . '/view/single-chat-bubble/single-chat-bubble.php';

// include framework for admin panel
require_once VCHAT_DIR_PATH . 'admin/csf/vc-options-framework.php';
require_once VCHAT_DIR_PATH . 'inc/vc-plugin-options.php';


/**
 * Initialize the plugin tracker
 *
 * @return void
 */
function viber_chat_appsero_init()
{

    if (!class_exists('ViberAppSero\Insights')) {
        require_once VCHAT_DIR_PATH . 'admin/appsero/Client.php';
    }

    $client = new ViberAppSero\Client('6c851eed-2a10-4a1d-a068-9852bcb75aba', 'Viber Chat', __FILE__);
    // Active insights
    $client->insights()->init();
}

viber_chat_appsero_init();
