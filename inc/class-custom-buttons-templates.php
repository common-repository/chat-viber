<?php
 
class Vchat_Buttons_Template {
   public static $getData;

   function __construct( array $args ) {
      self::$getData = $args;
   }
   // Template Style 1
   public function vchat_button_s1() {
   $iterateData = self::$getData;
   $atts = $iterateData;

   // button settings
   $vibNumber =  $atts['number'];

   // visibility
   if ($atts['visibility'] == 'only-desktop') {
      $buttonVisibility = 'vc-desktop-only';
    } elseif ($atts['visibility'] == 'only-tablet') {
      $buttonVisibility = 'vc-tablet-only';
    } elseif ($atts['visibility'] == 'only-tablet-mobile') {
      $buttonVisibility = 'vc-mobile-tablet-only';
    } else {
      $buttonVisibility = "vc-show-everywhere";
    }

   $buttonRounded = $atts['rounded'];
   $buttonSizes = $atts['sizes'];
   $agentPhoto = $atts['photo'];
   $agentName = $atts['name'];
   $agentDesignation = $atts['designation'];
   $labelText = $atts['label'];
   $onlineText = $atts['online'];
   $offlineText = $atts['offline'];
   // availablity
   $avlTimezone =  $atts['timezone'];
   $avlSunday = $atts['sunday'];
   $avlMonday = $atts['monday'];
   $avlTuesday = $atts['tuesday'];
   $avlWednesday = $atts['wednesday'];
   $avlThursday = $atts['thursday'];
   $avlFriday = $atts['friday'];
   $avlSaturday = $atts['saturday'];
?>
<div class="vc-button-wrapper">
    
      <button <?php if( $avlTimezone) { ?> data-timezone="<?php echo esc_attr($avlTimezone); ?>" <?php } ?> class="vcButtons vChat-button-4 vc-btn-bg <?php echo esc_attr($buttonVisibility); ?> <?php echo esc_attr($buttonRounded); ?> avatar-active <?php echo esc_attr($buttonSizes); ?>"  data-btnavailablety='{ "sunday":"<?php echo esc_attr( $avlSunday);?>", "monday":"<?php echo esc_attr( $avlMonday);?>", "tuesday":"<?php echo esc_attr( $avlTuesday);?>", "wednesday":"<?php echo esc_attr( $avlWednesday);?>", "thursday":"<?php echo esc_attr( $avlThursday);?>", "friday":"<?php echo esc_attr( $avlFriday);?>", "saturday":"<?php echo esc_attr( $avlSaturday);?>" }'>

         <?php if ($agentPhoto) { ?>
            <img src="<?php echo $agentPhoto; ?>"/>
         <?php } ?>

            <div class="info-wrapper">
            <?php if( $agentName || $agentDesignation ) { ?>
               <p class="info"><?php if( $agentName ) { ?><?php echo esc_html( $agentName ); ?><?php } ?> <?php if( $agentDesignation ) { ?>/ <?php echo esc_html( $agentDesignation ); ?><?php } ?></p>
            <?php } ?>
            <?php if( $labelText ) { ?>
               <p class="title"><?php echo esc_html( $labelText ); ?></p>
            <?php } ?>
            <?php if( $onlineText ) { ?>
               <p class="online"><?php echo esc_html( $onlineText ); ?></p>
            <?php } ?>
            <?php if( $offlineText ) { ?>
               <p class="offline"><?php echo esc_html( $offlineText ); ?></p>
               <?php } ?>
            </div>
            <a class="viber__target" href="viber://chat?number=<?php echo esc_attr($vibNumber); ?>"></a>
            </button>
   </div>
      <?php
   } 

   // // Template style 2
   function vchat_button_s2 () {
      $iterateData = self::$getData;
      $atts = $iterateData;
      $number = esc_attr( $atts['number'] );
      $timezone = esc_attr( $atts['timezone'] );
      ?>

      <div class="vc-button-wrapper">
         <a href="viber://chat?number=<?php echo $number; ?>"  <?php if( $timezone) { ?> data-timezone="<?php echo $timezone; ?>" <?php } ?>  class="vChat-button-2 viber__target vc-btn-bg <?php echo esc_attr($buttonSizes); ?> <?php echo esc_attr($buttonVisibility); ?> <?php if( $atts['rounded'] == 'yes') { ?>vc-btn-rounded<?php } ?>" >
         <i class="fab fa-viber"></i><?php if( $atts['label'] ) { ?><?php echo esc_html( $atts['label'] ); ?><?php } ?>
         </a>
      </div>
      <?php
   }

} // End Class