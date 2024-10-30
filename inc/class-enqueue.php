<?php

/**
 * 
 * @package    Vchat - Chat and support floating layouts and buttons for viber
 * @version    1.1.0
 * @author     ThemeAtelier
 * @Websites: https://themeatelier.net/
 *
 */
if (!defined('ABSPATH')) {
	die(VCHAT_ALERT_MSG);
}

if (!class_exists('Vchat_Enqueue')) {

	class Vchat_Enqueue
	{

		public function __construct($args = array())
		{
			add_action('wp_enqueue_scripts', array($this, 'frontend_enqueue_scripts'));
			add_action('admin_enqueue_scripts', array($this, 'vchat_admin_enqueue_scripts'));
		}
		// Admin enqueue scripts
		public function vchat_admin_enqueue_scripts()
		{
			wp_enqueue_style('vchat-help', VCHAT_DIR_URL . 'assets/css/help.css', array(), VCHAT_VERSION, false);
		}

		// Front-End enqueue scripts
		public function frontend_enqueue_scripts()
		{
			wp_enqueue_style('fontawesome', VCHAT_DIR_URL . 'assets/css/fontawesome-all.min.css', array(), '1.0', false);
			wp_enqueue_style('sweetalert', VCHAT_DIR_URL . 'assets/css/sweetalert2.min.css', array(), '1.0', false);
			wp_enqueue_style('vchat-main', VCHAT_DIR_URL . 'assets/css/vchat-main.css', array(), VCHAT_VERSION, false);



			/********************
				Js Enqueue
			 ********************/
			wp_enqueue_script('moment', array('jquery'), '1.0', true);
			wp_enqueue_script('moment-timezone', VCHAT_DIR_URL . 'assets/js/moment-timezone-with-data.min.js', array('jquery'), '1.0', true);
			wp_enqueue_script('sweetalert', VCHAT_DIR_URL . 'assets/js/sweetalert2.all.min.js', array('jquery'), '1.0', true);
			wp_enqueue_script('vchat-main', VCHAT_DIR_URL . 'assets/js/vchat-main.js', array('jquery'), VCHAT_VERSION, true);
			$options = get_option('vchat-opt');
			$data = array(
				'title' => $options['popup-title'],
				'download' => $options['popup-download'],
				'cancel' => $options['popup-cancel'],
				'show' => $options['installation-popup'],
				'time' => 3000,
			);

			wp_localize_script('vchat-main', 'localizedata', $data);
		}
	}

	$obj = new Vchat_Enqueue();
}
