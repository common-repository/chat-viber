<?php
 /**
  * 
  * @package    Vchat - Chat and support floating layouts and buttons for viber
  * @version    1.1.0
  * @author     ThemeAtelier
  * @Websites: https://themeatelier.net/
  *
  */
  
 add_action( 'wp_footer', 'vchat_chat_popup');

 function vchat_chat_popup(){
    $options = get_option( 'vchat-opt' );
    $sunday = ($options['availablity-sunday']['from'] ? $options['availablity-sunday']['from']: "0:00")."-".($options['availablity-sunday']['to'] ? $options['availablity-sunday']['to']:"23:59");
    $monday = ($options['availablity-monday']['from'] ? $options['availablity-monday']['from']: "0:00")."-".($options['availablity-monday']['to'] ? $options['availablity-monday']['to']:"23:59");
    $tuesday = ($options['availablity-tuesday']['from'] ? $options['availablity-tuesday']['from']: "0:00")."-".($options['availablity-tuesday']['to'] ? $options['availablity-tuesday']['to']:"23:59");
    $wednesday = ($options['availablity-wednesday']['from'] ? $options['availablity-wednesday']['from']: "0:00")."-".($options['availablity-wednesday']['to'] ? $options['availablity-wednesday']['to']:"23:59");
    $thursday = ($options['availablity-thursday']['from'] ? $options['availablity-thursday']['from']: "0:00")."-".($options['availablity-thursday']['to'] ? $options['availablity-thursday']['to']:"23:59");
    $friday = ($options['availablity-friday']['from'] ? $options['availablity-friday']['from']: "0:00")."-".($options['availablity-friday']['to'] ? $options['availablity-friday']['to']:"23:59");
    $saturday = ($options['availablity-saturday']['from'] ? $options['availablity-saturday']['from']: "0:00")."-".($options['availablity-saturday']['to'] ? $options['availablity-saturday']['to']:"23:59");
    $random = rand(1, 13);
    $bubbleType = null;
    $buttonLabel = $options['bubble-text'];
    if ($options['opt-button-style'] === '1') {
      $bubbleType = '<button class="vc-bubble circle-bubble circle-animation-'. esc_attr($options['circle-animation']).' ">
      <span class="open-icon"><i class="'.esc_html($options['circle-button-icon']).'"></i></span>
      <span class="close-icon"><i class="'.esc_html($options['circle-button-close']).'"></i></span>
    </button>';
    } elseif ($options['opt-button-style'] === '2') {
      $bubbleType = '<button class="vc-bubble bubble vc-btn-bg">
      <div class="bubble__icon bubble-animation'. esc_attr($options['circle-animation']).'">
      <span class="bubble__icon--open"><i class="'.esc_html($options['circle-button-icon']).'"></i></span>
      <span class="bubble__icon--close"><i class="'.esc_html($options['circle-button-close']).'"></i></span>
      </div>'.esc_attr($buttonLabel).'</button>';
    } elseif ($options['opt-button-style'] === '3') {
      $bubbleType = '<button class="vc-bubble bubble">
      <div class="bubble__icon bubble-animation'. esc_attr($options['circle-animation']).'">
      <span class="bubble__icon--open"><i class="'.esc_html($options['circle-button-icon']).'"></i></span>
      <span class="bubble__icon--close"><i class="'.esc_html($options['circle-button-close']).'"></i></span>
      </div>'.esc_attr($buttonLabel).'</button>';
  } elseif ($options['opt-button-style'] === '4') {
    $bubbleType = '<button class="vc-bubble bubble vc-btn-rounded vc-btn-bg">
    <div class="bubble__icon bubble-animation'. esc_attr($options['circle-animation']).'">
    <span class="bubble__icon--open"><i class="'.esc_html($options['circle-button-icon']).'"></i></span>
    <span class="bubble__icon--close"><i class="'.esc_html($options['circle-button-close']).'"></i></span>
    </div>'.esc_attr($buttonLabel).'</button>';
} elseif ($options['opt-button-style'] === '5') {
  $bubbleType = '<button class="vc-bubble bubble vc-btn-rounded">
  <div class="bubble__icon bubble-animation'. esc_attr($options['circle-animation']).'">
  <span class="bubble__icon--open"><i class="'.esc_html($options['circle-button-icon']).'"></i></span>
  <span class="bubble__icon--close"><i class="'.esc_html($options['circle-button-close']).'"></i></span>
  </div>'.esc_attr($buttonLabel).'</button>';
} elseif ($options['opt-button-style'] === '6') {
  $bubbleType = '<button class="vc-bubble bubble vc-btn-bg bubble-transparent">
  <div class="bubble__icon bubble-animation'. esc_attr($options['circle-animation']).'">
  <span class="bubble__icon--open"><i class="'.esc_html($options['circle-button-icon']).'"></i></span>
  <span class="bubble__icon--close"><i class="'.esc_html($options['circle-button-close']).'"></i></span>
  </div>'.esc_attr($buttonLabel).'</button>';
} elseif ($options['opt-button-style'] === '7') {
  $bubbleType = '<button class="vc-bubble bubble  bubble-transparent">
  <div class="bubble__icon bubble-animation'. esc_attr($options['circle-animation']).'">
  <span class="bubble__icon--open"><i class="'.esc_html($options['circle-button-icon']).'"></i></span>
  <span class="bubble__icon--close"><i class="'.esc_html($options['circle-button-close']).'"></i></span>
  </div>'.esc_attr($buttonLabel).'</button>';
}  elseif ($options['opt-button-style'] === '8') {
  $bubbleType = '<button class="vc-bubble bubble vc-btn-bg vc-btn-rounded bubble-transparent">
  <div class="bubble__icon bubble-animation'. esc_attr($options['circle-animation']).'">
  <span class="bubble__icon--open"><i class="'.esc_html($options['circle-button-icon']).'"></i></span>
  <span class="bubble__icon--close"><i class="'.esc_html($options['circle-button-close']).'"></i></span>
  </div>'.esc_attr($buttonLabel).'</button>';
} elseif ($options['opt-button-style'] === '9') {
  $bubbleType = '<button class="vc-bubble bubble vc-btn-rounded bubble-transparent">
  <div class="bubble__icon bubble-animation'. esc_attr($options['circle-animation']).'">
  <span class="bubble__icon--open"><i class="'.esc_html($options['circle-button-icon']).'"></i></span>
  <span class="bubble__icon--close"><i class="'.esc_html($options['circle-button-close']).'"></i></span>
  </div>'.esc_attr($buttonLabel).'</button>';
}
?>

    <div class="vChat vc-<?php if (isset($options['bubble-visibility'])) { echo esc_attr($options['bubble-visibility']);}; ?>-only <?php if($options['autoshow-popup']) : ?>vChat-show<?php endif; ?> <?php if($options['bubble-style'] === 'dark') : ?>dark-mode <?php elseif($options['bubble-style'] === 'night') : ?> night-mode<?php endif; ?> <?php if($options['bubble-position'] === 'left') { ?>vChat-left<?php } ?>">
      <?php echo $bubbleType;?>
      <div
        class="vChat__popup animation<?php echo esc_attr($options['select-animation']); ?> chat-availability"
        <?php if( $options['select-timezone']) { ?> data-timezone="<?php echo esc_attr($options['select-timezone']); ?>" <?php } ?>
        data-availability='{ "sunday":"<?php echo esc_attr($sunday); ?>", "monday":"<?php echo esc_attr($monday); ?>", "tuesday":"<?php echo esc_attr($tuesday); ?>", "wednesday":"<?php echo esc_attr($wednesday); ?>", "thursday":"<?php echo esc_attr($thursday); ?>", "friday":"<?php echo esc_attr($friday); ?>", "saturday":"<?php echo esc_attr($saturday); ?>" }'
      >
   
      
        <div class="vChat__popup--header <?php if ($options['header-content-position'] == 'center') : ?> header-center <?php endif; ?>">
          <div class="image">
            <img src="<?php echo esc_attr($options['agent-photo']['url']); ?>" />
          </div>
          <div class="info">
            <h4 class="info__name"><?php echo esc_html($options['agent-name']); ?></h4>
            
            <p class="info__title"><?php echo esc_html($options['agent-subtitle']); ?></p>
          </div>
        </div>
        <div class="vChat__popup--content">
          <div class="current-time"></div>
          <div class="sms">
            <div class="sms__user">
              <img src="<?php echo esc_attr($options['agent-photo']['url']); ?>" />
            </div>
            <div class="sms__text">
              <p>
              <?php echo esc_html($options['agent-message']); ?>
              </p>
            </div>
          </div>
          
          <button class="vChat__send-message" target="_blank">
            <i class="<?php echo esc_html($options['before-chat-icon']); ?>"></i><?php echo esc_html($options['chat-button-text']); ?>
            <a class="viber__target" href="viber://chat?number=<?php echo esc_attr($options['opt-number']); ?>"></a>
          </button>
          <span style="font-size: 10px;
text-align: center;display: block;margin-top: 10px;margin-bottom: -20px;background: #111;margin-left: -20px;margin-right: -20px;color: #fff;padding: 5px;border-radius: 0px 0 5px 5px;" class="wcp-branding">Powered by <a style="text-decoration: none;color:#fff;" target="_blank" href="https://wpchatplugins.com/"><strong>WpChatPlugins</strong></a></span>
        </div>
      </div>
    </div>
<?php
}


?>