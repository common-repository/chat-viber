<?php

namespace Vchatelementor\Widgets;

use Elementor\Widget_Base;
use Elementor\Controls_Manager;
use Elementor\Group_Control_Class;
use Elementor\Scheme_Color;
use Elementor\Scheme_Typography;
use Elementor\Group_Control_Typography;
use Elementor\Group_Control_Text_Shadow;
use Elementor\Group_Control_Background;

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}
/**
 *
 * Laamya elementor about page section widget.
 *
 * @since 1.0
 */
class Vchat_Buttons extends Widget_Base
{

    public function get_name()
    {
        return 'vchat-buttons';
    }

    public function get_title()
    {
        return __('Vchat buttons', 'chat-viber');
    }

    public function get_icon()
    {
        return 'eicon-headphones';
    }

    public function get_categories()
    {
        return ['vchat-elements'];
    }

    protected function _register_controls()
    {


        // ----------------------------------------  Vchat Buttons Settings ------------------------------

        $this->start_controls_section(
            'vchat__general__settings',
            [
                'label' => esc_html__('General settings', 'chat-viber'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'number',
            [
                'label'     => esc_html__('Number', 'chat-viber'),
                'description' => esc_html__('Add your viber number including country code. eg: 00880123456189', 'chat-viber'),
                'label_block' => false,
                'type'      => Controls_Manager::TEXT,
            ]
        );

        $this->add_control(
            'style',
            [
                'label' => esc_html__('Style', 'chat-viber'),
                'type'  => Controls_Manager::SELECT,
                'label_block' => false,
                'default' => '1',
                'options' => array(
                    '1'  => esc_html__('Advanced button', 'chat-viber'),
                    '2'  => esc_html__('Basic button', 'chat-viber'),
                )

            ]
        );

        $this->add_control(
            'agent__photo',
            [
                'label' => esc_html__('Agent photo', 'chat-viber'),
                'description' => esc_html__('Add agent photo to show in button.', 'chat-viber'),
                'type'  => Controls_Manager::MEDIA,
                'label_block' => true,
                'default' => [
                    'url' => VCHAT_DIR_URL . 'assets/image/user.webp',
                ],
                'condition' => [
                    'style' => '1',
                ],
            ]
        );

        $this->add_control(
            'agent__name',
            [
                'label' => esc_html__('Agent name', 'chat-viber'),
                'description' => esc_html__('Write agent name to show in button.', 'chat-viber'),
                'type'  => Controls_Manager::TEXT,
                'label_block' => false,
                'default' => 'Robert',
                'condition' => [
                    'style' => '1',
                ],
            ]
        );

        $this->add_control(
            'agent__designation',
            [
                'label' => esc_html__('Agent designation', 'chat-viber'),
                'description' => esc_html__('Write agent designation to show in button.', 'chat-viber'),
                'type'  => Controls_Manager::TEXT,
                'label_block' => false,
                'default' => 'Sales Support',
                'condition' => [
                    'style' => '1',
                ],
            ]
        );

        $this->add_control(
            'custom__button__label',
            [
                'label' => esc_html__('Button label', 'chat-viber'),
                'description' => esc_html__('Add custom button label.', 'chat-viber'),
                'type'  => Controls_Manager::TEXT,
                'label_block' => true,
                'default' => 'How can I help you?',
            ]
        );

        $this->add_control(
            'online__text',
            [
                'label' => esc_html__('Online badget text', 'chat-viber'),
                'description' => esc_html__('Add custom badget text when user in online.', 'chat-viber'),
                'type'  => Controls_Manager::TEXT,
                'label_block' => false,
                'default' => 'I\'m avaiable',
                'condition' => [
                    'style' => '1',
                ],
            ]
        );

        $this->add_control(
            'offline__text',
            [
                'label' => esc_html__('Offline badget text', 'chat-viber'),
                'description' => esc_html__('Add custom badget text when user in offline.', 'chat-viber'),
                'type'  => Controls_Manager::TEXT,
                'label_block' => false,
                'default' => 'I\'m offline',
                'condition' => [
                    'style' => '1',
                ],
            ]
        );

        $this->end_controls_section(); // End section top content


        $this->start_controls_section(
            'vchat__availablity__manager',
            [
                'label' => esc_html__('Chat settings', 'chat-viber'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
                'condition' => [
                    'style' => '1',
                ],
            ]
        );



        $this->add_control(
            'timezone',
            [
                'label' => esc_html__('Timezone', 'chat-viber'),
                'description' => esc_html__('When using the date and time from the user browser you can transform it to your current timezone (in case your user is in a different timezone)', 'chat-viber'),
                'type'  => Controls_Manager::SELECT2,
                'label_block' => true,
                'multiple' => false,
                'default' => '1',
                'options' => array(
                    '1' => esc_html__('Select timezone', 'chat-viber'),
                    'Africa/Abidjan' => esc_html__('Africa/Abidjan', 'chat-viber'),
                    'Africa/Accra' => esc_html__('Africa/Accra', 'chat-viber'),
                    'Africa/Addis_Ababa' => esc_html__('Africa/Addis_Ababa', 'chat-viber'),
                    'Africa/Algiers' => esc_html__('Africa/Algiers', 'chat-viber'),
                    'Africa/Asmara' => esc_html__('Africa/Asmara', 'chat-viber'),
                    'Africa/Asmera' => esc_html__('Africa/Asmera', 'chat-viber'),
                    'Africa/Bamako' => esc_html__('Africa/Bamako', 'chat-viber'),
                    'Africa/Bangui' => esc_html__('Africa/Bangui', 'chat-viber'),
                    'Africa/Banjul' => esc_html__('Africa/Banjul', 'chat-viber'),
                    'Africa/Bissau' => esc_html__('Africa/Bissau', 'chat-viber'),
                    'Africa/Blantyre' => esc_html__('Africa/Blantyre', 'chat-viber'),
                    'Africa/Brazzaville' => esc_html__('Africa/Brazzaville', 'chat-viber'),
                    'Africa/Bujumbura' => esc_html__('Africa/Bujumbura', 'chat-viber'),
                    'Africa/Cairo' => esc_html__('Africa/Cairo', 'chat-viber'),
                    'Africa/Casablanca' => esc_html__('Africa/Casablanca', 'chat-viber'),
                    'Africa/Ceuta' => esc_html__('Africa/Ceuta', 'chat-viber'),
                    'Africa/Conakry' => esc_html__('Africa/Conakry', 'chat-viber'),
                    'Africa/Dakar' => esc_html__('Africa/Dakar', 'chat-viber'),
                    'Africa/Dar_es_Salaam' => esc_html__('Africa/Dar_es_Salaam', 'chat-viber'),
                    'Africa/Djibouti' => esc_html__('Africa/Djibouti', 'chat-viber'),
                    'Africa/Douala' => esc_html__('Africa/Douala', 'chat-viber'),
                    'Africa/El_Aaiun' => esc_html__('Africa/El_Aaiun', 'chat-viber'),
                    'Africa/Freetown' => esc_html__('Africa/Freetown', 'chat-viber'),
                    'Africa/Gaborone' => esc_html__('Africa/Gaborone', 'chat-viber'),
                    'Africa/Harare' => esc_html__('Africa/Harare', 'chat-viber'),
                    'Africa/Johannesburg' => esc_html__('Africa/Johannesburg', 'chat-viber'),
                    'Africa/Juba' => esc_html__('Africa/Juba', 'chat-viber'),
                    'Africa/Kampala' => esc_html__('Africa/Kampala', 'chat-viber'),
                    'Africa/Khartoum' => esc_html__('Africa/Khartoum', 'chat-viber'),
                    'Africa/Kigali' => esc_html__('Africa/Kigali', 'chat-viber'),
                    'Africa/Kinshasa' => esc_html__('Africa/Kinshasa', 'chat-viber'),
                    'Africa/Lagos' => esc_html__('Africa/Lagos', 'chat-viber'),
                    'Africa/Libreville' => esc_html__('Africa/Libreville', 'chat-viber'),
                    'Africa/Lome' => esc_html__('Africa/Lome', 'chat-viber'),
                    'Africa/Luanda' => esc_html__('Africa/Luanda', 'chat-viber'),
                    'Africa/Lubumbashi' => esc_html__('Africa/Lubumbashi', 'chat-viber'),
                    'Africa/Lusaka' => esc_html__('Africa/Lusaka', 'chat-viber'),
                    'Africa/Malabo' => esc_html__('Africa/Malabo', 'chat-viber'),
                    'Africa/Maputo' => esc_html__('Africa/Maputo', 'chat-viber'),
                    'Africa/Maseru' => esc_html__('Africa/Maseru', 'chat-viber'),
                    'Africa/Mbabane' => esc_html__('Africa/Mbabane', 'chat-viber'),
                    'Africa/Mogadishu' => esc_html__('Africa/Mogadishu', 'chat-viber'),
                    'Africa/Monrovia' => esc_html__('Africa/Monrovia', 'chat-viber'),
                    'Africa/Nairobi' => esc_html__('Africa/Nairobi', 'chat-viber'),
                    'Africa/Ndjamena' => esc_html__('Africa/Ndjamena', 'chat-viber'),
                    'Africa/Niamey' => esc_html__('Africa/Niamey', 'chat-viber'),
                    'Africa/Nouakchott' => esc_html__('Africa/Nouakchott', 'chat-viber'),
                    'Africa/Ouagadougou' => esc_html__('Africa/Ouagadougou', 'chat-viber'),
                    'Africa/Porto-Novo' => esc_html__('Africa/Porto-Novo', 'chat-viber'),
                    'Africa/Sao_Tome' => esc_html__('Africa/Sao_Tome', 'chat-viber'),
                    'Africa/Timbuktu' => esc_html__('Africa/Timbuktu', 'chat-viber'),
                    'Africa/Tripoli' => esc_html__('Africa/Tripoli', 'chat-viber'),
                    'Africa/Tunis' => esc_html__('Africa/Tunis', 'chat-viber'),
                    'Africa/Windhoek' => esc_html__('Africa/Windhoek', 'chat-viber'),
                    'America/Adak' => esc_html__('America/Adak', 'chat-viber'),
                    'America/Anchorage' => esc_html__('America/Anchorage', 'chat-viber'),
                    'America/Anguilla' => esc_html__('America/Anguilla', 'chat-viber'),
                    'America/Antigua' => esc_html__('America/Antigua', 'chat-viber'),
                    'America/Araguaina' => esc_html__('America/Araguaina', 'chat-viber'),
                    'America/Argentina/Buenos_Aires' => esc_html__('America/Argentina/Buenos_Aires', 'chat-viber'),
                    'America/Argentina/Catamarca' => esc_html__('America/Argentina/Catamarca', 'chat-viber'),
                    'America/Argentina/ComodRivadavia' => esc_html__('America/Argentina/ComodRivadavia', 'chat-viber'),
                    'America/Argentina/Cordoba' => esc_html__('America/Argentina/Cordoba', 'chat-viber'),
                    'America/Argentina/Jujuy' => esc_html__('America/Argentina/Jujuy', 'chat-viber'),
                    'America/Argentina/La_Rioja' => esc_html__('America/Argentina/La_Rioja', 'chat-viber'),
                    'America/Argentina/Mendoza' => esc_html__('America/Argentina/Mendoza', 'chat-viber'),
                    'America/Argentina/Rio_Gallegos' => esc_html__('America/Argentina/Rio_Gallegos', 'chat-viber'),
                    'America/Argentina/Salta' => esc_html__('America/Argentina/Salta', 'chat-viber'),
                    'America/Argentina/San_Juan' => esc_html__('America/Argentina/San_Juan', 'chat-viber'),
                    'America/Argentina/San_Luis' => esc_html__('America/Argentina/San_Luis', 'chat-viber'),
                    'America/Argentina/Tucuman' => esc_html__('America/Argentina/Tucuman', 'chat-viber'),
                    'America/Argentina/Ushuaia' => esc_html__('America/Argentina/Ushuaia', 'chat-viber'),
                    'America/Aruba' => esc_html__('America/Aruba', 'chat-viber'),
                    'America/Asuncion' => esc_html__('America/Asuncion', 'chat-viber'),
                    'America/Atikokan' => esc_html__('America/Atikokan', 'chat-viber'),
                    'America/Atka' => esc_html__('America/Atka', 'chat-viber'),
                    'America/Bahia' => esc_html__('America/Bahia', 'chat-viber'),
                    'America/Bahia_Banderas' => esc_html__('America/Bahia_Banderas', 'chat-viber'),
                    'America/Barbados' => esc_html__('America/Barbados', 'chat-viber'),
                    'America/Belem' => esc_html__('America/Belem', 'chat-viber'),
                    'America/Belize' => esc_html__('America/Belize', 'chat-viber'),
                    'America/Blanc-Sablon' => esc_html__('America/Blanc-Sablon', 'chat-viber'),
                    'America/Boa_Vista' => esc_html__('America/Boa_Vista', 'chat-viber'),
                    'America/Bogota' => esc_html__('America/Bogota', 'chat-viber'),
                    'America/Boise' => esc_html__('America/Boise', 'chat-viber'),
                    'America/Buenos_Aires' => esc_html__('America/Buenos_Aires', 'chat-viber'),
                    'America/Cambridge_Bay' => esc_html__('America/Cambridge_Bay', 'chat-viber'),
                    'America/Campo_Grande' => esc_html__('America/Campo_Grande', 'chat-viber'),
                    'America/Cancun' => esc_html__('America/Cancun', 'chat-viber'),
                    'America/Caracas' => esc_html__('America/Caracas', 'chat-viber'),
                    'America/Catamarca' => esc_html__('America/Catamarca', 'chat-viber'),
                    'America/Cayenne' => esc_html__('America/Cayenne', 'chat-viber'),
                    'America/Cayman' => esc_html__('America/Cayman', 'chat-viber'),
                    'America/Chicago' => esc_html__('America/Chicago', 'chat-viber'),
                    'America/Chihuahua' => esc_html__('America/Chihuahua', 'chat-viber'),
                    'America/Coral_Harbour' => esc_html__('America/Coral_Harbour', 'chat-viber'),
                    'America/Cordoba' => esc_html__('America/Cordoba', 'chat-viber'),
                    'America/Costa_Rica' => esc_html__('America/Costa_Rica', 'chat-viber'),
                    'America/Creston' => esc_html__('America/Creston', 'chat-viber'),
                    'America/Cuiaba' => esc_html__('America/Cuiaba', 'chat-viber'),
                    'America/Curacao' => esc_html__('America/Curacao', 'chat-viber'),
                    'America/Danmarkshavn' => esc_html__('America/Danmarkshavn', 'chat-viber'),
                    'America/Dawson' => esc_html__('America/Dawson', 'chat-viber'),
                    'America/Araguaina' => esc_html__('America/Araguaina', 'chat-viber'),
                    'America/Denver' => esc_html__('America/Denver', 'chat-viber'),
                    'America/Araguaina' => esc_html__('America/Araguaina', 'chat-viber'),
                    'America/Dominica' => esc_html__('America/Dominica', 'chat-viber'),
                    'America/Edmonton' => esc_html__('America/Edmonton', 'chat-viber'),
                    'America/Eirunepe' => esc_html__('America/Eirunepe', 'chat-viber'),
                    'America/El_Salvador' => esc_html__('America/El_Salvador', 'chat-viber'),
                    'America/Ensenada' => esc_html__('America/Ensenada', 'chat-viber'),
                    'America/Fort_Nelson' => esc_html__('America/Fort_Nelson', 'chat-viber'),
                    'America/Fort_Wayne' => esc_html__('America/Fort_Wayne', 'chat-viber'),
                    'America/Fortaleza' => esc_html__('America/Fortaleza', 'chat-viber'),
                    'America/Glace_Bay' => esc_html__('America/Glace_Bay', 'chat-viber'),
                    'America/Godthab' => esc_html__('America/Godthab', 'chat-viber'),
                    'America/Goose_Bay' => esc_html__('America/Goose_Bay', 'chat-viber'),
                    'America/Grand_Turk' => esc_html__('America/Grand_Turk', 'chat-viber'),
                    'America/Grenada' => esc_html__('America/Grenada', 'chat-viber'),
                    'America/Guadeloupe' => esc_html__('America/Guadeloupe', 'chat-viber'),
                    'America/Guatemala' => esc_html__('America/Guatemala', 'chat-viber'),
                    'America/Guayaquil' => esc_html__('America/Guayaquil', 'chat-viber'),
                    'America/Guyana' => esc_html__('America/Guyana', 'chat-viber'),
                    'America/Halifax' => esc_html__('America/Halifax', 'chat-viber'),
                    'America/Havana' => esc_html__('America/Havana', 'chat-viber'),
                    'America/Hermosillo' => esc_html__('America/Hermosillo', 'chat-viber'),
                    'America/Indiana/Indianapolis' => esc_html__('Indiana/Indianapolis', 'chat-viber'),
                    'America/Indiana/Knox' => esc_html__('America/Indiana/Knox', 'chat-viber'),
                    'America/Indiana/Marengo' => esc_html__('America/Indiana/Marengo', 'chat-viber'),
                    'America/Indiana/Petersburg' => esc_html__('America/Indiana/Petersburg', 'chat-viber'),
                    'America/Indiana/Tell_City' => esc_html__('America/Indiana/Tell_City', 'chat-viber'),
                    'America/Indiana/Vevay' => esc_html__('America/Indiana/Vevay', 'chat-viber'),
                    'America/Indiana/Vincennes' => esc_html__('America/Indiana/Vincennes', 'chat-viber'),
                    'America/Indiana/Winamac' => esc_html__('America/Indiana/Winamac', 'chat-viber'),
                    'America/Indianapolis' => esc_html__('America/Indianapolis', 'chat-viber'),
                    'America/Inuvik' => esc_html__('America/Inuvik', 'chat-viber'),
                    'America/Iqaluit' => esc_html__('America/Iqaluit', 'chat-viber'),
                    'America/Jamaica' => esc_html__('America/Jamaica', 'chat-viber'),
                    'America/Jujuy' => esc_html__('America/Jujuy', 'chat-viber'),
                    'America/Juneau' => esc_html__('America/Juneau', 'chat-viber'),
                    'America/Kentucky/Louisville' => esc_html__('America/Kentucky/Louisville', 'chat-viber'),
                    'America/Kentucky/Monticello' => esc_html__('America/Kentucky/Monticello', 'chat-viber'),
                    'America/Knox_IN' => esc_html__('America/Knox_IN', 'chat-viber'),
                    'America/Kralendijk' => esc_html__('America/Kralendijk', 'chat-viber'),
                    'America/La_Paz' => esc_html__('America/La_Paz', 'chat-viber'),
                    'America/Lima' => esc_html__('America/Lima', 'chat-viber'),
                    'America/Los_Angeles' => esc_html__('America/Los_Angeles', 'chat-viber'),
                    'America/Louisville' => esc_html__('America/Louisville', 'chat-viber'),
                    'America/Lower_Princes' => esc_html__('America/Lower_Princes', 'chat-viber'),
                    'America/Maceio' => esc_html__('America/Maceio', 'chat-viber'),
                    'America/Managua' => esc_html__('America/Managua', 'chat-viber'),
                    'America/Manaus' => esc_html__('America/Manaus', 'chat-viber'),
                    'America/Marigot' => esc_html__('America/Marigot', 'chat-viber'),
                    'America/Martinique' => esc_html__('America/Martinique', 'chat-viber'),
                    'America/Matamoros' => esc_html__('America/Matamoros', 'chat-viber'),
                    'America/Mazatlan' => esc_html__('America/Mazatlan', 'chat-viber'),
                    'America/Mendoza' => esc_html__('America/Mendoza', 'chat-viber'),
                    'America/Menominee' => esc_html__('America/Menominee', 'chat-viber'),
                    'America/Merida' => esc_html__('America/Merida', 'chat-viber'),
                    'America/Metlakatla' => esc_html__('America/Metlakatla', 'chat-viber'),
                    'America/Mexico_City' => esc_html__('America/Mexico_City', 'chat-viber'),
                    'America/Miquelon' => esc_html__('America/Miquelon', 'chat-viber'),
                    'America/Moncton' => esc_html__('America/Moncton', 'chat-viber'),
                    'America/Monterrey' => esc_html__('America/Monterrey', 'chat-viber'),
                    'America/Montevideo' => esc_html__('America/Montevideo', 'chat-viber'),
                    'America/Montreal' => esc_html__('America/Montreal', 'chat-viber'),
                    'America/Montserrat' => esc_html__('America/Montserrat', 'chat-viber'),
                    'America/Nassau' => esc_html__('America/Nassau', 'chat-viber'),
                    'America/New_York' => esc_html__('America/New_York', 'chat-viber'),
                    'America/Nipigon' => esc_html__('America/Nipigon', 'chat-viber'),
                    'America/Nome' => esc_html__('America/Nome', 'chat-viber'),
                    'America/Noronha' => esc_html__('America/Noronha', 'chat-viber'),
                    'America/North_Dakota/Beulah' => esc_html__('America/North_Dakota/Beulah', 'chat-viber'),
                    'America/North_Dakota/Center' => esc_html__('America/North_Dakota/Center', 'chat-viber'),
                    'America/North_Dakota/New_Salem' => esc_html__('America/North_Dakota/New_Salem', 'chat-viber'),
                    'America/Ojinaga' => esc_html__('America/Ojinaga', 'chat-viber'),
                    'America/Panama' => esc_html__('America/Panama', 'chat-viber'),
                    'America/Pangnirtung' => esc_html__('America/Pangnirtung', 'chat-viber'),
                    'America/Paramaribo' => esc_html__('America/Paramaribo', 'chat-viber'),
                    'America/Phoenix' => esc_html__('America/Phoenix', 'chat-viber'),
                    'America/Port-au-Prince' => esc_html__('America/Port-au-Prince', 'chat-viber'),
                    'America/Port_of_Spain' => esc_html__('America/Port_of_Spain', 'chat-viber'),
                    'America/Porto_Acre' => esc_html__('America/Porto_Acre', 'chat-viber'),
                    'America/Porto_Velho' => esc_html__('America/Porto_Velho', 'chat-viber'),
                    'America/Puerto_Rico' => esc_html__('America/Puerto_Rico', 'chat-viber'),
                    'America/Punta_Arenas' => esc_html__('America/Punta_Arenas', 'chat-viber'),
                    'America/Rainy_River' => esc_html__('America/Rainy_River', 'chat-viber'),
                    'America/Rankin_Inlet' => esc_html__('America/Rankin_Inlet', 'chat-viber'),
                    'America/Recife' => esc_html__('America/Recife', 'chat-viber'),
                    'America/Regina' => esc_html__('America/Regina', 'chat-viber'),
                    'America/Resolute' => esc_html__('America/Resolute', 'chat-viber'),
                    'America/Rio_Branco' => esc_html__('America/Rio_Branco', 'chat-viber'),
                    'America/Rosario' => esc_html__('America/Rosario', 'chat-viber'),
                    'America/Santa_Isabel' => esc_html__('America/Santa_Isabel', 'chat-viber'),
                    'America/Santarem' => esc_html__('America/Santarem', 'chat-viber'),
                    'America/Santiago' => esc_html__('America/Santiago', 'chat-viber'),
                    'America/Santo_Domingo' => esc_html__('America/Santo_Domingo', 'chat-viber'),
                    'America/Sao_Paulo' => esc_html__('America/Sao_Paulo', 'chat-viber'),
                    'America/Scoresbysund' => esc_html__('America/Scoresbysund', 'chat-viber'),
                    'America/Shiprock' => esc_html__('America/Shiprock', 'chat-viber'),
                    'America/Sitka' => esc_html__('America/Sitka', 'chat-viber'),
                    'America/St_Barthelemy' => esc_html__('America/St_Barthelemy', 'chat-viber'),
                    'America/St_Johns' => esc_html__('America/St_Johns', 'chat-viber'),
                    'America/St_Kitts' => esc_html__('America/St_Kitts', 'chat-viber'),
                    'America/St_Lucia' => esc_html__('America/St_Lucia', 'chat-viber'),
                    'America/St_Thomas' => esc_html__('America/St_Thomas', 'chat-viber'),
                    'America/St_Vincent' => esc_html__('America/St_Vincent', 'chat-viber'),
                    'America/Swift_Current' => esc_html__('America/Swift_Current', 'chat-viber'),
                    'America/Tegucigalpa' => esc_html__('America/Tegucigalpa', 'chat-viber'),
                    'America/Thule' => esc_html__('America/Thule', 'chat-viber'),
                    'America/Thunder_Bay' => esc_html__('America/Thunder_Bay', 'chat-viber'),
                    'America/Tijuana' => esc_html__('America/Tijuana', 'chat-viber'),
                    'America/Toronto' => esc_html__('America/Toronto', 'chat-viber'),
                    'America/Tortola' => esc_html__('America/Tortola', 'chat-viber'),
                    'America/Vancouver' => esc_html__('America/Vancouver', 'chat-viber'),
                    'America/Virgin' => esc_html__('America/Virgin', 'chat-viber'),
                    'America/Whitehorse' => esc_html__('America/Whitehorse', 'chat-viber'),
                    'America/Winnipeg' => esc_html__('America/Winnipeg', 'chat-viber'),
                    'America/Yakutat' => esc_html__('America/Yakutat', 'chat-viber'),
                    'America/Yellowknife' => esc_html__('America/Yellowknife', 'chat-viber'),
                    'Antarctica/Casey' => esc_html__('Antarctica/Casey', 'chat-viber'),
                    'Antarctica/Davis' => esc_html__('Antarctica/Davis', 'chat-viber'),
                    'Antarctica/DumontDUrville' => esc_html__('Antarctica/DumontDUrville', 'chat-viber'),
                    'Antarctica/Macquarie' => esc_html__('Antarctica/Macquarie', 'chat-viber'),
                    'Antarctica/Mawson' => esc_html__('Antarctica/Mawson', 'chat-viber'),
                    'Antarctica/McMurdo' => esc_html__('Antarctica/McMurdo', 'chat-viber'),
                    'Antarctica/Palmer' => esc_html__('Antarctica/Palmer', 'chat-viber'),
                    'Antarctica/Rothera' => esc_html__('Antarctica/Rothera', 'chat-viber'),
                    'Antarctica/South_Pole' => esc_html__('Antarctica/South_Pole', 'chat-viber'),
                    'Antarctica/Syowa' => esc_html__('Antarctica/Syowa', 'chat-viber'),
                    'Antarctica/Troll' => esc_html__('Antarctica/Troll', 'chat-viber'),
                    'Antarctica/Vostok' => esc_html__('Antarctica/Vostok', 'chat-viber'),
                    'Arctic/Longyearbyen' => esc_html__('Arctic/Longyearbyen', 'chat-viber'),
                    'Asia/Aden' => esc_html__('Asia/Aden', 'chat-viber'),
                    'Asia/Almaty' => esc_html__('Asia/Almaty', 'chat-viber'),
                    'Asia/Amman' => esc_html__('Asia/Amman', 'chat-viber'),
                    'Asia/Anadyr' => esc_html__('Asia/Anadyr', 'chat-viber'),
                    'Asia/Aqtau' => esc_html__('Asia/Aqtau', 'chat-viber'),
                    'Asia/Aqtobe' => esc_html__('Asia/Aqtobe', 'chat-viber'),
                    'Asia/Ashgabat' => esc_html__('Asia/Ashgabat', 'chat-viber'),
                    'Asia/Ashkhabad' => esc_html__('Asia/Ashkhabad', 'chat-viber'),
                    'Asia/Atyrau' => esc_html__('Asia/Atyrau', 'chat-viber'),
                    'Asia/Baghdad' => esc_html__('Asia/Baghdad', 'chat-viber'),
                    'Asia/Bahrain' => esc_html__('Asia/Bahrain', 'chat-viber'),
                    'Asia/Baku' => esc_html__('Asia/Baku', 'chat-viber'),
                    'Asia/Bangkok' => esc_html__('Asia/Bangkok', 'chat-viber'),
                    'Asia/Barnaul' => esc_html__('Asia/Barnaul', 'chat-viber'),
                    'Asia/Beirut' => esc_html__('Asia/Beirut', 'chat-viber'),
                    'Asia/Bishkek' => esc_html__('Asia/Bishkek', 'chat-viber'),
                    'Asia/Brunei' => esc_html__('Asia/Brunei', 'chat-viber'),
                    'Asia/Calcutta' => esc_html__('Asia/Calcutta', 'chat-viber'),
                    'Asia/Chita' => esc_html__('Asia/Chita', 'chat-viber'),
                    'Asia/Choibalsan' => esc_html__('Asia/Choibalsan', 'chat-viber'),
                    'Asia/Chongqing' => esc_html__('Asia/Chongqing', 'chat-viber'),
                    'Asia/Chungking' => esc_html__('Asia/Chungking', 'chat-viber'),
                    'Asia/Colombo' => esc_html__('Asia/Colombo', 'chat-viber'),
                    'Asia/Dacca' => esc_html__('Asia/Dacca', 'chat-viber'),
                    'Asia/Damascus' => esc_html__('Asia/Damascus', 'chat-viber'),
                    'Asia/Dhaka' => esc_html__('Asia/Dhaka', 'chat-viber'),
                    'Asia/Dili' => esc_html__('Asia/Dili', 'chat-viber'),
                    'Asia/Dubai' => esc_html__('Asia/Dubai', 'chat-viber'),
                    'Asia/Dushanbe' => esc_html__('Asia/Dushanbe', 'chat-viber'),
                    'Asia/Famagusta' => esc_html__('Asia/Famagusta', 'chat-viber'),
                    'Asia/Gaza' => esc_html__('Asia/Gaza', 'chat-viber'),
                    'Asia/Harbin' => esc_html__('Asia/Harbin', 'chat-viber'),
                    'Asia/Hebron' => esc_html__('Asia/Hebron', 'chat-viber'),
                    'Asia/Ho_Chi_Minh' => esc_html__('Asia/Ho_Chi_Minh', 'chat-viber'),
                    'Asia/Hong_Kong' => esc_html__('Asia/Hong_Kong', 'chat-viber'),
                    'Asia/Hovd' => esc_html__('Asia/Hovd', 'chat-viber'),
                    'Asia/Irkutsk' => esc_html__('Asia/Irkutsk', 'chat-viber'),
                    'Asia/Istanbul' => esc_html__('Asia/Istanbul', 'chat-viber'),
                    'Asia/Jakarta' => esc_html__('Asia/Jakarta', 'chat-viber'),
                    'Asia/Jayapura' => esc_html__('Asia/Jayapura', 'chat-viber'),
                    'Asia/Jerusalem' => esc_html__('Asia/Jerusalem', 'chat-viber'),
                    'Asia/Kabul' => esc_html__('Asia/Kabul', 'chat-viber'),
                    'Asia/Kamchatka' => esc_html__('Asia/Kamchatka', 'chat-viber'),
                    'Asia/Karachi' => esc_html__('Asia/Karachi', 'chat-viber'),
                    'Asia/Kashgar' => esc_html__('Asia/Kashgar', 'chat-viber'),
                    'Asia/Kathmandu' => esc_html__('Asia/Kathmandu', 'chat-viber'),
                    'Asia/Katmandu' => esc_html__('Asia/Katmandu', 'chat-viber'),
                    'Asia/Khandyga' => esc_html__('Asia/Khandyga', 'chat-viber'),
                    'Asia/Kolkata' => esc_html__('Asia/Kolkata', 'chat-viber'),
                    'Asia/Krasnoyarsk' => esc_html__('Asia/Krasnoyarsk', 'chat-viber'),
                    'Asia/Kuala_Lumpur' => esc_html__('Asia/Kuala_Lumpur', 'chat-viber'),
                    'Asia/Kuching' => esc_html__('Asia/Kuching', 'chat-viber'),
                    'Asia/Kuwait' => esc_html__('Asia/Kuwait', 'chat-viber'),
                    'Asia/Macao' => esc_html__('Asia/Macao', 'chat-viber'),
                    'Asia/Macau' => esc_html__('Asia/Macau', 'chat-viber'),
                    'Asia/Magadan' => esc_html__('Asia/Magadan', 'chat-viber'),
                    'Asia/Makassar' => esc_html__('Asia/Makassar', 'chat-viber'),
                    'Asia/Manila' => esc_html__('Asia/Manila', 'chat-viber'),
                    'Asia/Muscat' => esc_html__('Asia/Muscat', 'chat-viber'),
                    'Asia/Nicosia' => esc_html__('Asia/Nicosia', 'chat-viber'),
                    'Asia/Novokuznetsk' => esc_html__('Asia/Novokuznetsk', 'chat-viber'),
                    'Asia/Novosibirsk' => esc_html__('Asia/Novosibirsk', 'chat-viber'),
                    'Asia/Omsk' => esc_html__('Asia/Omsk', 'chat-viber'),
                    'Asia/Oral' => esc_html__('Asia/Oral', 'chat-viber'),
                    'Asia/Phnom_Penh' => esc_html__('Asia/Phnom_Penh', 'chat-viber'),
                    'Asia/Pontianak' => esc_html__('Asia/Pontianak', 'chat-viber'),
                    'Asia/Pyongyang' => esc_html__('Asia/Pyongyang', 'chat-viber'),
                    'Asia/Qatar' => esc_html__('Asia/Qatar', 'chat-viber'),
                    'Asia/Qyzylorda' => esc_html__('Asia/Qyzylorda', 'chat-viber'),
                    'Asia/Rangoon' => esc_html__('Asia/Rangoon', 'chat-viber'),
                    'Asia/Riyadh' => esc_html__('Asia/Riyadh', 'chat-viber'),
                    'Asia/Saigon' => esc_html__('Asia/Saigon', 'chat-viber'),
                    'Asia/Sakhalin' => esc_html__('Asia/Sakhalin', 'chat-viber'),
                    'Asia/Samarkand' => esc_html__('Asia/Samarkand', 'chat-viber'),
                    'Asia/Seoul' => esc_html__('Asia/Seoul', 'chat-viber'),
                    'Asia/Shanghai' => esc_html__('Asia/Shanghai', 'chat-viber'),
                    'Asia/Singapore' => esc_html__('Asia/Singapore', 'chat-viber'),
                    'Asia/Srednekolymsk' => esc_html__('Asia/Srednekolymsk', 'chat-viber'),
                    'Asia/Taipei' => esc_html__('Asia/Taipei', 'chat-viber'),
                    'Asia/Tashkent' => esc_html__('Asia/Tashkent', 'chat-viber'),
                    'Asia/Tbilisi' => esc_html__('Asia/Tbilisi', 'chat-viber'),
                    'Asia/Tehran' => esc_html__('Asia/Tehran', 'chat-viber'),
                    'Asia/Tel_Aviv' => esc_html__('Asia/Tel_Aviv', 'chat-viber'),
                    'Asia/Thimbu' => esc_html__('Asia/Thimbu', 'chat-viber'),
                    'Asia/Thimphu' => esc_html__('Asia/Thimphu', 'chat-viber'),
                    'Asia/Tokyo' => esc_html__('Asia/Tokyo', 'chat-viber'),
                    'Asia/Tomsk' => esc_html__('Asia/Tomsk', 'chat-viber'),
                    'Asia/Ujung_Pandang' => esc_html__('Asia/Ujung_Pandang', 'chat-viber'),
                    'Asia/Ulaanbaatar' => esc_html__('Asia/Ulaanbaatar', 'chat-viber'),
                    'Asia/Ulan_Bator' => esc_html__('Asia/Ulan_Bator', 'chat-viber'),
                    'Asia/Urumqi' => esc_html__('Asia/Urumqi', 'chat-viber'),
                    'Asia/Ust-Nera' => esc_html__('Asia/Ust-Nera', 'chat-viber'),
                    'Asia/Vientiane' => esc_html__('Asia/Vientiane', 'chat-viber'),
                    'Asia/Vladivostok' => esc_html__('Asia/Vladivostok', 'chat-viber'),
                    'Asia/Yakutsk' => esc_html__('Asia/Yakutsk', 'chat-viber'),
                    'Asia/Yangon' => esc_html__('Asia/Yangon', 'chat-viber'),
                    'Asia/Yekaterinburg' => esc_html__('Asia/Yekaterinburg', 'chat-viber'),
                    'Asia/Yerevan' => esc_html__('Asia/Yerevan', 'chat-viber'),
                    'Atlantic/Azores' => esc_html__('Atlantic/Azores', 'chat-viber'),
                    'Atlantic/Bermuda' => esc_html__('Atlantic/Bermuda', 'chat-viber'),
                    'Atlantic/Canary' => esc_html__('Atlantic/Canary', 'chat-viber'),
                    'Atlantic/Cape_Verde' => esc_html__('Atlantic/Cape_Verde', 'chat-viber'),
                    'Atlantic/Faeroe' => esc_html__('Atlantic/Faeroe', 'chat-viber'),
                    'Atlantic/Faroe' => esc_html__('Atlantic/Faroe', 'chat-viber'),
                    'Atlantic/Jan_Mayen' => esc_html__('Atlantic/Jan_Mayen', 'chat-viber'),
                    'Atlantic/Madeira' => esc_html__('Atlantic/Madeira', 'chat-viber'),
                    'Atlantic/Reykjavik' => esc_html__('Atlantic/Reykjavik', 'chat-viber'),
                    'Atlantic/South_Georgia' => esc_html__('Atlantic/South_Georgia', 'chat-viber'),
                    'Atlantic/St_Helena' => esc_html__('Atlantic/St_Helena', 'chat-viber'),
                    'Atlantic/Stanley' => esc_html__('Atlantic/Stanley', 'chat-viber'),
                    'Australia/ACT' => esc_html__('Australia/ACT', 'chat-viber'),
                    'Australia/Adelaide' => esc_html__('Australia/Adelaide', 'chat-viber'),
                    'Australia/Brisbane' => esc_html__('Australia/Brisbane', 'chat-viber'),
                    'Australia/Broken_Hill' => esc_html__('Asia/Broken_Hill', 'chat-viber'),
                    'Australia/Canberra' => esc_html__('Australia/Canberra', 'chat-viber'),
                    'Australia/Currie' => esc_html__('Australia/Currie', 'chat-viber'),
                    'Australia/Darwin' => esc_html__('Australia/Darwin', 'chat-viber'),
                    'Australia/Eucla' => esc_html__('Australia/Eucla', 'chat-viber'),
                    'Australia/Hobart' => esc_html__('Australia/Hobart', 'chat-viber'),
                    'Australia/LHI' => esc_html__('Australia/LHI', 'chat-viber'),
                    'Australia/Lindeman' => esc_html__('Australia/Lindeman', 'chat-viber'),
                    'Australia/Lord_Howe' => esc_html__('Australia/Lord_Howe', 'chat-viber'),
                    'Australia/Melbourne' => esc_html__('Australia/Melbourne', 'chat-viber'),
                    'Australia/NSW' => esc_html__('Australia/NSW', 'chat-viber'),
                    'Australia/North' => esc_html__('Australia/North', 'chat-viber'),
                    'Australia/Perth' => esc_html__('Australia/Perth', 'chat-viber'),
                    'Australia/Queensland' => esc_html__('Australia/Queensland', 'chat-viber'),
                    'Australia/South' => esc_html__('Australia/South', 'chat-viber'),
                    'Australia/Sydney' => esc_html__('Australia/Sydney', 'chat-viber'),
                    'Australia/Tasmania' => esc_html__('Australia/Tasmania', 'chat-viber'),
                    'Australia/Victoria' => esc_html__('Australia/Victoria', 'chat-viber'),
                    'Australia/West' => esc_html__('Australia/West', 'chat-viber'),
                    'Australia/Yancowinna' => esc_html__('Australia/Yancowinna', 'chat-viber'),
                    'Brazil/Acre' => esc_html__('Brazil/Acre', 'chat-viber'),
                    'Brazil/DeNoronha' => esc_html__('Brazil/DeNoronha', 'chat-viber'),
                    'Brazil/East' => esc_html__('Brazil/East', 'chat-viber'),
                    'Brazil/West' => esc_html__('Brazil/West', 'chat-viber'),
                    'CET' => esc_html__('CET', 'chat-viber'),
                    'CST6CDT' => esc_html__('CST6CDT', 'chat-viber'),
                    'Canada/Atlantic' => esc_html__('Canada/Atlantic', 'chat-viber'),
                    'Canada/Central' => esc_html__('Canada/Central', 'chat-viber'),
                    'Canada/Eastern' => esc_html__('Canada/Eastern', 'chat-viber'),
                    'Canada/Mountain' => esc_html__('Canada/Mountain', 'chat-viber'),
                    'Canada/Newfoundland' => esc_html__('Canada/Newfoundland', 'chat-viber'),
                    'Canada/Pacific' => esc_html__('Canada/Pacific', 'chat-viber'),
                    'Canada/Saskatchewan' => esc_html__('Canada/Saskatchewan', 'chat-viber'),
                    'Canada/Yukon' => esc_html__('Canada/Yukon', 'chat-viber'),
                    'Chile/Continental' => esc_html__('Chile/Continental', 'chat-viber'),
                    'Chile/EasterIsland' => esc_html__('Chile/EasterIsland', 'chat-viber'),
                    'Cuba' => esc_html__('Cuba', 'chat-viber'),
                    'EET' => esc_html__('EET', 'chat-viber'),
                    'EST' => esc_html__('EST', 'chat-viber'),
                    'EST5EDT' => esc_html__('EST5EDT', 'chat-viber'),
                    'Egypt' => esc_html__('Egypt', 'chat-viber'),
                    'Eire' => esc_html__('Eire', 'chat-viber'),
                    'Etc/GMT' => esc_html__('Etc/GMT', 'chat-viber'),
                    'Etc/GMT+0' => esc_html__('Etc/GMT+0', 'chat-viber'),
                    'Etc/GMT+1' => esc_html__('Etc/GMT+1', 'chat-viber'),
                    'Etc/GMT+10' => esc_html__('Etc/GMT+10', 'chat-viber'),
                    'Etc/GMT+11' => esc_html__('Etc/GMT+11', 'chat-viber'),
                    'Etc/GMT+12' => esc_html__('Etc/GMT+12', 'chat-viber'),
                    'Etc/GMT+2' => esc_html__('Etc/GMT+2', 'chat-viber'),
                    'Etc/GMT+3' => esc_html__('Etc/GMT+3', 'chat-viber'),
                    'Etc/GMT+4' => esc_html__('Etc/GMT+4', 'chat-viber'),
                    'Etc/GMT+5' => esc_html__('Etc/GMT+5', 'chat-viber'),
                    'Etc/GMT+6' => esc_html__('Etc/GMT+6', 'chat-viber'),
                    'Etc/GMT+7' => esc_html__('Etc/GMT+7', 'chat-viber'),
                    'Etc/GMT+8' => esc_html__('Etc/GMT+8', 'chat-viber'),
                    'Etc/GMT+9' => esc_html__('Etc/GMT+9', 'chat-viber'),
                    'Etc/GMT-0' => esc_html__('Etc/GMT-0', 'chat-viber'),
                    'Etc/GMT-1' => esc_html__('Etc/GMT-1', 'chat-viber'),
                    'Etc/GMT-10' => esc_html__('Etc/GMT-10', 'chat-viber'),
                    'Etc/GMT-11' => esc_html__('Etc/GMT-11', 'chat-viber'),
                    'Etc/GMT-12' => esc_html__('Etc/GMT-12', 'chat-viber'),
                    'Etc/GMT-13' => esc_html__('Etc/GMT-13', 'chat-viber'),
                    'Etc/GMT-14' => esc_html__('Etc/GMT-14', 'chat-viber'),
                    'Etc/GMT-2' => esc_html__('Etc/GMT-2', 'chat-viber'),
                    'Etc/GMT-3' => esc_html__('Etc/GMT-3', 'chat-viber'),
                    'Etc/GMT-4' => esc_html__('Etc/GMT-4', 'chat-viber'),
                    'Etc/GMT-5' => esc_html__('Etc/GMT-5', 'chat-viber'),
                    'Etc/GMT-6' => esc_html__('Etc/GMT-6', 'chat-viber'),
                    'Etc/GMT-7' => esc_html__('Etc/GMT-7', 'chat-viber'),
                    'Etc/GMT-8' => esc_html__('Etc/GMT-8', 'chat-viber'),
                    'Etc/GMT-9' => esc_html__('Etc/GMT-9', 'chat-viber'),
                    'Etc/GMT0' => esc_html__('Etc/GMT0', 'chat-viber'),
                    'Etc/Greenwich' => esc_html__('Etc/Greenwich', 'chat-viber'),
                    'Etc/UCT' => esc_html__('Etc/UCT', 'chat-viber'),
                    'Etc/UTC' => esc_html__('Etc/UTC', 'chat-viber'),
                    'Etc/Universal' => esc_html__('Etc/Universal', 'chat-viber'),
                    'Etc/Zulu' => esc_html__('Etc/Zulu', 'chat-viber'),
                    'Europe/Amsterdam' => esc_html__('Europe/Amsterdam', 'chat-viber'),
                    'Europe/Andorra' => esc_html__('Europe/Andorra', 'chat-viber'),
                    'Europe/Astrakhan' => esc_html__('Europe/Astrakhan', 'chat-viber'),
                    'Europe/Athens' => esc_html__('Europe/Athens', 'chat-viber'),
                    'Europe/Belfast' => esc_html__('Europe/Belfast', 'chat-viber'),
                    'Europe/Belgrade' => esc_html__('Europe/Belgrade', 'chat-viber'),
                    'Europe/Berlin' => esc_html__('Europe/Berlin', 'chat-viber'),
                    'Europe/Bratislava' => esc_html__('Europe/Bratislava', 'chat-viber'),
                    'Europe/Brussels' => esc_html__('Europe/Brussels', 'chat-viber'),
                    'Europe/Bucharest' => esc_html__('Europe/Bucharest', 'chat-viber'),
                    'Europe/Budapest' => esc_html__('Europe/Budapest', 'chat-viber'),
                    'Europe/Busingen' => esc_html__('Europe/Busingen', 'chat-viber'),
                    'Europe/Chisinau' => esc_html__('Europe/Chisinau', 'chat-viber'),
                    'Europe/Copenhagen' => esc_html__('Europe/Copenhagen', 'chat-viber'),
                    'Europe/Dublin' => esc_html__('Europe/Dublin', 'chat-viber'),
                    'Europe/Gibraltar' => esc_html__('Europe/Gibraltar', 'chat-viber'),
                    'Europe/Guernsey' => esc_html__('Europe/Guernsey', 'chat-viber'),
                    'Europe/Helsinki' => esc_html__('Europe/Helsinki', 'chat-viber'),
                    'Europe/Isle_of_Man' => esc_html__('Europe/Isle_of_Man', 'chat-viber'),
                    'Europe/Istanbul' => esc_html__('Europe/Istanbul', 'chat-viber'),
                    'Europe/Jersey' => esc_html__('Europe/Jersey', 'chat-viber'),
                    'Europe/Kaliningrad' => esc_html__('Europe/Kaliningrad', 'chat-viber'),
                    'Europe/Kiev' => esc_html__('Europe/Kiev', 'chat-viber'),
                    'Europe/Kirov' => esc_html__('Europe/Kirov', 'chat-viber'),
                    'Europe/Lisbon' => esc_html__('Europe/Lisbon', 'chat-viber'),
                    'Europe/Ljubljana' => esc_html__('Europe/Ljubljana', 'chat-viber'),
                    'Europe/London' => esc_html__('Europe/London', 'chat-viber'),
                    'Europe/Luxembourg' => esc_html__('Europe/Luxembourg', 'chat-viber'),
                    'Europe/Madrid' => esc_html__('Europe/Madrid', 'chat-viber'),
                    'Europe/Malta' => esc_html__('Europe/Malta', 'chat-viber'),
                    'Europe/Mariehamn' => esc_html__('Europe/Mariehamn', 'chat-viber'),
                    'Europe/Minsk' => esc_html__('Europe/Minsk', 'chat-viber'),
                    'Europe/Monaco' => esc_html__('Europe/Monaco', 'chat-viber'),
                    'Europe/Moscow' => esc_html__('Europe/Moscow', 'chat-viber'),
                    'Europe/Nicosia' => esc_html__('Europe/Nicosia', 'chat-viber'),
                    'Europe/Oslo' => esc_html__('Europe/Oslo', 'chat-viber'),
                    'Europe/Paris' => esc_html__('Europe/Paris', 'chat-viber'),
                    'Europe/Podgorica' => esc_html__('Europe/Podgorica', 'chat-viber'),
                    'Europe/Prague' => esc_html__('Europe/Prague', 'chat-viber'),
                    'Europe/Riga' => esc_html__('Europe/Riga', 'chat-viber'),
                    'Europe/Rome' => esc_html__('Europe/Rome', 'chat-viber'),
                    'Europe/Samara' => esc_html__('Europe/Samara', 'chat-viber'),
                    'Europe/San_Marino' => esc_html__('Europe/San_Marino', 'chat-viber'),
                    'Europe/Sarajevo' => esc_html__('Europe/Sarajevo', 'chat-viber'),
                    'Europe/Saratov' => esc_html__('Europe/Saratov', 'chat-viber'),
                    'Europe/Simferopol' => esc_html__('Europe/Simferopol', 'chat-viber'),
                    'Europe/Skopje' => esc_html__('Europe/Skopje', 'chat-viber'),
                    'Europe/Sofia' => esc_html__('Europe/Sofia', 'chat-viber'),
                    'Europe/Stockholm' => esc_html__('Europe/Stockholm', 'chat-viber'),
                    'Europe/Tallinn' => esc_html__('Europe/Tallinn', 'chat-viber'),
                    'Europe/Tirane' => esc_html__('Europe/Tirane', 'chat-viber'),
                    'Europe/Tiraspol' => esc_html__('Europe/Tiraspol', 'chat-viber'),
                    'Europe/Ulyanovsk' => esc_html__('Europe/Ulyanovsk', 'chat-viber'),
                    'Europe/Uzhgorod' => esc_html__('Europe/Uzhgorod', 'chat-viber'),
                    'Europe/Vaduz' => esc_html__('Europe/Vaduz', 'chat-viber'),
                    'Europe/Vatican' => esc_html__('Europe/Vatican', 'chat-viber'),
                    'Europe/Vienna' => esc_html__('Europe/Vienna', 'chat-viber'),
                    'Europe/Vilnius' => esc_html__('Europe/Vilnius', 'chat-viber'),
                    'Europe/Volgograd' => esc_html__('Europe/Volgograd', 'chat-viber'),
                    'Europe/Warsaw' => esc_html__('Europe/Warsaw', 'chat-viber'),
                    'Europe/Zagreb' => esc_html__('Europe/Zagreb', 'chat-viber'),
                    'Europe/Zaporozhye' => esc_html__('Europe/Zaporozhye', 'chat-viber'),
                    'Europe/Zurich' => esc_html__('Europe/Zurich', 'chat-viber'),
                    'GB' => esc_html__('GB', 'chat-viber'),
                    'GB-Eire' => esc_html__('GB-Eire', 'chat-viber'),
                    'GMT' => esc_html__('GMT', 'chat-viber'),
                    'GMT+0' => esc_html__('GMT+0', 'chat-viber'),
                    'GMT-0' => esc_html__('GMT-0', 'chat-viber'),
                    'GMT0' => esc_html__('GMT0', 'chat-viber'),
                    'Greenwich' => esc_html__('Greenwich', 'chat-viber'),
                    'HST' => esc_html__('HST', 'chat-viber'),
                    'Hongkong' => esc_html__('Hongkong', 'chat-viber'),
                    'Iceland' => esc_html__('Iceland', 'chat-viber'),
                    'Indian/Antananarivo' => esc_html__('Indian/Antananarivo', 'chat-viber'),
                    'Indian/Chagos' => esc_html__('Indian/Chagos', 'chat-viber'),
                    'Indian/Christmas' => esc_html__('Indian/Christmas', 'chat-viber'),
                    'Indian/Cocos' => esc_html__('Indian/Cocos', 'chat-viber'),
                    'Indian/Comoro' => esc_html__('Indian/Comoro', 'chat-viber'),
                    'Indian/Kerguelen' => esc_html__('Indian/Kerguelen', 'chat-viber'),
                    'Indian/Mahe' => esc_html__('Indian/Mahe', 'chat-viber'),
                    'Indian/Maldives' => esc_html__('Indian/Maldives', 'chat-viber'),
                    'Indian/Mauritius' => esc_html__('Indian/Mauritius', 'chat-viber'),
                    'Indian/Mayotte' => esc_html__('Indian/Mayotte', 'chat-viber'),
                    'Indian/Reunion' => esc_html__('Indian/Reunion', 'chat-viber'),
                    'Iran' => esc_html__('Iran', 'chat-viber'),
                    'Israel' => esc_html__('Israel', 'chat-viber'),
                    'Jamaica' => esc_html__('Jamaica', 'chat-viber'),
                    'Japan' => esc_html__('Japan', 'chat-viber'),
                    'Kwajalein' => esc_html__('Kwajalein', 'chat-viber'),
                    'Libya' => esc_html__('Libya', 'chat-viber'),
                    'MET' => esc_html__('MET', 'chat-viber'),
                    'MST' => esc_html__('MST', 'chat-viber'),
                    'MST7MDT' => esc_html__('MST7MDT', 'chat-viber'),
                    'Mexico/BajaNorte' => esc_html__('Mexico/BajaNorte', 'chat-viber'),
                    'Mexico/BajaSur' => esc_html__('Mexico/BajaSur', 'chat-viber'),
                    'Mexico/General' => esc_html__('Mexico/General', 'chat-viber'),
                    'NZ' => esc_html__('NZ', 'chat-viber'),
                    'NZ-CHAT' => esc_html__('NZ-CHAT', 'chat-viber'),
                    'Navajo' => esc_html__('Navajo', 'chat-viber'),
                    'PRC' => esc_html__('PRC', 'chat-viber'),
                    'PST8PDT' => esc_html__('PST8PDT', 'chat-viber'),
                    'Pacific/Apia' => esc_html__('Pacific/Apia', 'chat-viber'),
                    'Pacific/Auckland' => esc_html__('Pacific/Auckland', 'chat-viber'),
                    'Pacific/Bougainville' => esc_html__('Pacific/Bougainville', 'chat-viber'),
                    'Pacific/Chatham' => esc_html__('Pacific/Chatham', 'chat-viber'),
                    'Pacific/Chuuk' => esc_html__('Pacific/Chuuk', 'chat-viber'),
                    'Pacific/Easter' => esc_html__('Pacific/Easter', 'chat-viber'),
                    'Pacific/Efate' => esc_html__('Pacific/Efate', 'chat-viber'),
                    'Pacific/Enderbury' => esc_html__('Pacific/Enderbury', 'chat-viber'),
                    'Pacific/Fakaofo' => esc_html__('Pacific/Fakaofo', 'chat-viber'),
                    'Pacific/Fiji' => esc_html__('Pacific/Fiji', 'chat-viber'),
                    'Pacific/Funafuti' => esc_html__('Pacific/Funafuti', 'chat-viber'),
                    'Pacific/Galapagos' => esc_html__('Pacific/Galapagos', 'chat-viber'),
                    'Pacific/Gambier' => esc_html__('Pacific/Gambier', 'chat-viber'),
                    'Pacific/Guadalcanal' => esc_html__('Pacific/Guadalcanal', 'chat-viber'),
                    'Pacific/Guam' => esc_html__('Pacific/Guam', 'chat-viber'),
                    'Pacific/Honolulu' => esc_html__('Pacific/Honolulu', 'chat-viber'),
                    'Pacific/Johnston' => esc_html__('Pacific/Johnston', 'chat-viber'),
                    'Pacific/Kiritimati' => esc_html__('Pacific/Kiritimati', 'chat-viber'),
                    'Pacific/Kosrae' => esc_html__('Pacific/Kosrae', 'chat-viber'),
                    'Pacific/Kwajalein' => esc_html__('Pacific/Kwajalein', 'chat-viber'),
                    'Pacific/Majuro' => esc_html__('Pacific/Majuro', 'chat-viber'),
                    'Pacific/Marquesas' => esc_html__('Pacific/Marquesas', 'chat-viber'),
                    'Pacific/Midway' => esc_html__('Pacific/Midway', 'chat-viber'),
                    'Pacific/Nauru' => esc_html__('Pacific/Nauru', 'chat-viber'),
                    'Pacific/Niue' => esc_html__('Pacific/Niue', 'chat-viber'),
                    'Pacific/Norfolk' => esc_html__('Pacific/Norfolk', 'chat-viber'),
                    'Pacific/Noumea' => esc_html__('Pacific/Noumea', 'chat-viber'),
                    'Pacific/Pago_Pago' => esc_html__('Pacific/Pago_Pago', 'chat-viber'),
                    'Pacific/Palau' => esc_html__('Pacific/Palau', 'chat-viber'),
                    'Pacific/Pitcairn' => esc_html__('Pacific/Pitcairn', 'chat-viber'),
                    'Pacific/Pohnpei' => esc_html__('Pacific/Pohnpei', 'chat-viber'),
                    'Pacific/Ponape' => esc_html__('Pacific/Ponape', 'chat-viber'),
                    'Pacific/Port_Moresby' => esc_html__('Pacific/Port_Moresby', 'chat-viber'),
                    'Pacific/Rarotonga' => esc_html__('Pacific/Rarotonga', 'chat-viber'),
                    'Pacific/Saipan' => esc_html__('Pacific/Saipan', 'chat-viber'),
                    'Pacific/Samoa' => esc_html__('Pacific/Samoa', 'chat-viber'),
                    'Pacific/Tahiti' => esc_html__('Pacific/Tahiti', 'chat-viber'),
                    'Pacific/Tarawa' => esc_html__('Pacific/Tarawa', 'chat-viber'),
                    'Pacific/Tongatapu' => esc_html__('Pacific/Tongatapu', 'chat-viber'),
                    'Pacific/Truk' => esc_html__('Pacific/Truk', 'chat-viber'),
                    'Pacific/Wake' => esc_html__('Pacific/Wake', 'chat-viber'),
                    'Pacific/Wallis' => esc_html__('Pacific/Wallis', 'chat-viber'),
                    'Pacific/Yap' => esc_html__('Pacific/Yap', 'chat-viber'),
                    'Poland' => esc_html__('Poland', 'chat-viber'),
                    'Portugal' => esc_html__('Portugal', 'chat-viber'),
                    'ROC' => esc_html__('ROC', 'chat-viber'),
                    'ROK' => esc_html__('ROK', 'chat-viber'),
                    'Singapore' => esc_html__('Singapore', 'chat-viber'),
                    'Turkey' => esc_html__('Turkey', 'chat-viber'),
                    'UCT' => esc_html__('UCT', 'chat-viber'),
                    'US/Alaska' => esc_html__('US/Alaska', 'chat-viber'),
                    'US/Aleutian' => esc_html__('US/Aleutian', 'chat-viber'),
                    'US/Arizona' => esc_html__('US/Arizona', 'chat-viber'),
                    'US/Central' => esc_html__('US/Central', 'chat-viber'),
                    'US/East-Indiana' => esc_html__('US/East-Indiana', 'chat-viber'),
                    'US/Eastern' => esc_html__('US/Eastern', 'chat-viber'),
                    'US/Hawaii' => esc_html__('US/Hawaii', 'chat-viber'),
                    'US/Indiana-Starke' => esc_html__('US/Indiana-Starke', 'chat-viber'),
                    'US/Michigan' => esc_html__('US/Michigan', 'chat-viber'),
                    'US/Mountain' => esc_html__('US/Mountain', 'chat-viber'),
                    'US/Pacific' => esc_html__('US/Pacific', 'chat-viber'),
                    'US/Pacific-New' => esc_html__('US/Pacific-New', 'chat-viber'),
                    'US/Samoa' => esc_html__('US/Samoa', 'chat-viber'),
                    'UTC' => esc_html__('UTC', 'chat-viber'),
                    'Universal' => esc_html__('Universal', 'chat-viber'),
                    'W-SU' => esc_html__('W-SU', 'chat-viber'),
                    'WET' => esc_html__('WET', 'chat-viber'),
                )
            ]
        );


        // start sunday popover
        $this->add_control(
            'popover-sunday',
            [
                'label' => esc_html__('Sunday', 'chat-viber'),
                'type' => \Elementor\Controls_Manager::POPOVER_TOGGLE,
            ]
        );


        $this->start_popover();
        $this->add_control(
            'sunday__start',
            [
                'label' => esc_html__('Start time', 'chat-viber'),
                'type'  => Controls_Manager::TEXT,
                'label_block' => false,
                'default' => '00:00',
                'condition' => [
                    'popover-sunday' => 'yes',
                ],
            ]
        );

        $this->add_control(
            'sunday__end',
            [
                'label' => esc_html__('End time', 'chat-viber'),
                'type'  => Controls_Manager::TEXT,
                'label_block' => false,
                'default' => '23:59',
                'condition' => [
                    'popover-sunday' => 'yes',
                ],
            ]
        );

        $this->end_popover();
        // end sunday popover

        // start monday popover
        $this->add_control(
            'popover-monday',
            [
                'label' => esc_html__('Monday', 'chat-viber'),
                'type' => \Elementor\Controls_Manager::POPOVER_TOGGLE,
            ]
        );

        $this->start_popover();
        $this->add_control(
            'monday__start',
            [
                'label' => esc_html__('Start time', 'chat-viber'),
                'type'  => Controls_Manager::TEXT,
                'label_block' => false,
                'default' => '00:00',
                'condition' => [
                    'popover-monday' => 'yes',
                ],
            ]
        );

        $this->add_control(
            'monday__end',
            [
                'label' => esc_html__('End time', 'chat-viber'),
                'type'  => Controls_Manager::TEXT,
                'label_block' => false,
                'default' => '23:59',
                'condition' => [
                    'popover-monday' => 'yes',
                ],
            ]
        );

        $this->end_popover();
        // end monday popover

        // start tuesday popover
        $this->add_control(
            'popover-tuesday',
            [
                'label' => esc_html__('Tuesday', 'chat-viber'),
                'type' => \Elementor\Controls_Manager::POPOVER_TOGGLE,
            ]
        );

        $this->start_popover();
        $this->add_control(
            'tuesday__start',
            [
                'label' => esc_html__('Start time', 'chat-viber'),
                'type'  => Controls_Manager::TEXT,
                'label_block' => false,
                'default' => '00:00',
                'condition' => [
                    'popover-tuesday' => 'yes',
                ],
            ]
        );

        $this->add_control(
            'tuesday__end',
            [
                'label' => esc_html__('End time', 'chat-viber'),
                'type'  => Controls_Manager::TEXT,
                'label_block' => false,
                'default' => '23:59',
                'condition' => [
                    'popover-tuesday' => 'yes',
                ],
            ]
        );

        $this->end_popover();
        // end tuesday popover

        // start wednesday popover
        $this->add_control(
            'popover-wednesday',
            [
                'label' => esc_html__('Wednesday', 'chat-viber'),
                'type' => \Elementor\Controls_Manager::POPOVER_TOGGLE,
            ]
        );

        $this->start_popover();
        $this->add_control(
            'wednesday__start',
            [
                'label' => esc_html__('Start time', 'chat-viber'),
                'type'  => Controls_Manager::TEXT,
                'label_block' => false,
                'default' => '00:00',
                'condition' => [
                    'popover-wednesday' => 'yes',
                ],
            ]
        );

        $this->add_control(
            'wednesday__end',
            [
                'label' => esc_html__('End time', 'chat-viber'),
                'type'  => Controls_Manager::TEXT,
                'label_block' => false,
                'default' => '23:59',
                'condition' => [
                    'popover-wednesday' => 'yes',
                ],
            ]
        );

        $this->end_popover();
        // end wednesday popover

        // start sunday popover
        $this->add_control(
            'popover-thursday',
            [
                'label' => esc_html__('Thursday', 'chat-viber'),
                'type' => \Elementor\Controls_Manager::POPOVER_TOGGLE,
            ]
        );

        $this->start_popover();
        $this->add_control(
            'thursday__start',
            [
                'label' => esc_html__('Start time', 'chat-viber'),
                'type'  => Controls_Manager::TEXT,
                'label_block' => false,
                'default' => '00:00',
                'condition' => [
                    'popover-thursday' => 'yes',
                ],
            ]
        );

        $this->add_control(
            'thursday__end',
            [
                'label' => esc_html__('End time', 'chat-viber'),
                'type'  => Controls_Manager::TEXT,
                'label_block' => false,
                'default' => '23:59',
                'condition' => [
                    'popover-thursday' => 'yes',
                ],
            ]
        );

        $this->end_popover();
        // end thursday popover

        // start sunday popover
        $this->add_control(
            'popover-friday',
            [
                'label' => esc_html__('Friday', 'chat-viber'),
                'type' => \Elementor\Controls_Manager::POPOVER_TOGGLE,
            ]
        );

        $this->start_popover();
        $this->add_control(
            'friday__start',
            [
                'label' => esc_html__('Start time', 'chat-viber'),
                'type'  => Controls_Manager::TEXT,
                'label_block' => false,
                'default' => '00:00',
                'condition' => [
                    'popover-friday' => 'yes',
                ],
            ]
        );

        $this->add_control(
            'friday__end',
            [
                'label' => esc_html__('End time', 'chat-viber'),
                'type'  => Controls_Manager::TEXT,
                'label_block' => false,
                'default' => '23:59',
                'condition' => [
                    'popover-friday' => 'yes',
                ],
            ]
        );

        $this->end_popover();
        // end friday popover

        $this->add_control(
            'popover-saturday',
            [
                'label' => esc_html__('Saturday', 'chat-viber'),
                'type' => \Elementor\Controls_Manager::POPOVER_TOGGLE,
            ]
        );

        $this->start_popover();
        $this->add_control(
            'saturday__start',
            [
                'label' => esc_html__('Start time', 'chat-viber'),
                'type'  => Controls_Manager::TEXT,
                'label_block' => false,
                'default' => '00:00',
                'condition' => [
                    'popover-saturday' => 'yes',
                ],
            ]
        );

        $this->add_control(
            'saturday__end',
            [
                'label' => esc_html__('End time', 'chat-viber'),
                'type'  => Controls_Manager::TEXT,
                'label_block' => false,
                'default' => '23:59',
                'condition' => [
                    'popover-saturday' => 'yes',
                ],
            ]
        );
        $this->end_popover();

        $this->end_controls_section(); // End section top content

        $this->start_controls_section(
            'vchat__appearance',
            [
                'label' => esc_html__('Appearance settings', 'chat-viber'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'visibility',
            [
                'label' => esc_html__('Visibility on', 'chat-viber'),
                'type'  => Controls_Manager::SELECT2,
                'label_block' => false,
                'default' => 'vc-show-everywhere',
                'options' => array(
                    'vc-show-everywhere'  => esc_html__('Everywhere', 'chat-viber'),
                    'vc-desktop-only'  => esc_html__('Desktops only', 'chat-viber'),
                    'vc-tablet-only'  => esc_html__('Tablets only', 'chat-viber'),
                    'vc-mobile-tablet-only'  => esc_html__('Mobile and tablets', 'chat-viber'),
                    'vc-mobile-only'  => esc_html__('Mobile only', 'chat-viber'),
                )

            ]
        );

        $this->add_control(
            'button__sizes',
            [
                'label' => esc_html__('Size', 'chat-viber'),
                'type'  => Controls_Manager::SELECT,
                'label_block' => false,
                'default' => 'vc-btn-md',
                'options' => array(
                    'vc-btn-sm' => esc_html__('Small', 'chat-viber'),
                    'vc-btn-md' => esc_html__('Medium', 'chat-viber'),
                    'vc-btn-lg' => esc_html__('Large', 'chat-viber'),
                )
            ]
        );

        $this->add_control(
            'bg__color',
            [
                'label' => esc_html__('Backgound color', 'chat-viber'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'default' => '#825cf2',
                'selectors' => [
                    '{{WRAPPER}} [class*="vChat-button-"].vc-btn-bg' => 'background-color: {{VALUE}}'
                ],
            ]
        );

        $this->add_control(
            'bg__color__hover',
            [
                'label' => esc_html__('Hover backgound color', 'chat-viber'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'default' => '#623ecf',
                'selectors' => [
                    '{{WRAPPER}} [class*="vChat-button-"].vc-btn-bg:hover' => 'background-color: {{VALUE}}'
                ],
            ]
        );

        $this->add_control(
            'text__color',
            [
                'label' => esc_html__('Text color', 'chat-viber'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'default' => '#ffffff',
                'selectors' => [
                    '{{WRAPPER}} [class*="vChat-button-"].vc-btn-bg' => 'color: {{VALUE}}',
                ],
            ]
        );

        $this->add_control(
            'text__color__hover',
            [
                'label' => esc_html__('Hover text color', 'chat-viber'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'default' => '#ffffff',
                'selectors' => [
                    '{{WRAPPER}} [class*="vChat-button-"].vc-btn-bg:hover' => 'color: {{VALUE}}',
                ],
            ]
        );


        $this->add_group_control(
            \Elementor\Group_Control_Border::get_type(),
            [
                'name' => 'border',
                'label' => esc_html__('Border', 'chat-viber'),
                'selector' => '{{WRAPPER}} .vcButtons, {{WRAPPER}} .vChat-button-2',
                'fields_options' => [
                    'border' => [
                        'label' => esc_html__('Border', 'chat-viber'),
                        'default' => 'solid',
                    ],
                    'width' => [
                        'default' => [
                            'top' => '1',
                            'right' => '1',
                            'bottom' => '1',
                            'left' => '1',
                            'isLinked' => false,
                        ],
                    ],
                    'color' => [
                        'default' => '#825cf2',
                    ],
                ],
            ]
        );

        $this->add_group_control(
            \Elementor\Group_Control_Border::get_type(),
            [
                'name' => 'border__hover',
                'label' => esc_html__('Hover border', 'chat-viber'),
                'default' => '#623ecf',
                'selector' => '{{WRAPPER}} .vcButtons:hover, {{WRAPPER}} .vChat-button-2:hover',
                'fields_options' => [
                    'border' => [
                        'label' => esc_html__('Hover border', 'chat-viber'),
                        'default' => 'solid',
                    ],
                    'width' => [
                        'default' => [
                            'top' => '1',
                            'right' => '1',
                            'bottom' => '1',
                            'left' => '1',
                            'isLinked' => false,
                        ],
                    ],
                    'color' => [
                        'default' => '#623ecf',
                    ],
                ],
            ]
        );

        $this->add_control(
            'button__icon',
            [
                'label' => esc_html__('Change icon', 'chat-viber'),
                'type' => \Elementor\Controls_Manager::ICONS,
                'default' => [
                    'value' => 'fab fa-viber',
                ],
                'condition' => [
                    'style' => '2',
                ],
                'recommended' => [
                    'fa-solid' => [
                        'envelope',
                        'envelope-open',
                        'facebook-messenger',
                    ],
                    'fa-regular' => [
                        'envelope',
                        'envelope-open',
                    ],

                ],
            ]
        );

        $this->add_control(
            'icon__color',
            [
                'label' => esc_html__('Icon color', 'chat-viber'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'default' => '#825cf2',
                'selectors' => [
                    '{{WRAPPER}} [class*="vChat-button-"].vc-btn-bg i' => 'color: {{VALUE}}',
                ],
                'condition' => [
                    'style' => '2',
                ],
            ]
        );

        $this->add_control(
            'icon__color__hover',
            [
                'label' => esc_html__('Icon hover color', 'chat-viber'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'default' => '#623ecf',
                'selectors' => [
                    '{{WRAPPER}} [class*="vChat-button-"].vc-btn-bg:hover i' => 'color: {{VALUE}}',
                ],
                'condition' => [
                    'style' => '2',
                ],
            ]
        );

        $this->add_control(
            'show__icon__bg__color',
            [
                'label' => esc_html__('Want bg in icon?', 'chat-viber'),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => esc_html__('Yes', 'chat-viber'),
                'label_off' => esc_html__('No', 'chat-viber'),
                'return_value' => 'vChat-button-3',
                'condition' => [
                    'style' => '2',
                ],
            ]
        );

        $this->add_control(
            'icon__bg__color',
            [
                'label' => esc_html__('Icon bg color', 'chat-viber'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'default' => '#fff',
                'selectors' => [
                    '{{WRAPPER}} [class*="vChat-button-"].vChat-button-3.vc-btn-bg i' => 'background-color: {{VALUE}}',
                ],
                'condition' => [
                    'style' => '2',
                    'show__icon__bg__color' => 'vChat-button-3',
                ],
            ]
        );

        $this->add_control(
            'icon__bg__color__hover',
            [
                'label' => esc_html__('Icon hover bg color', 'chat-viber'),
                'type' => \Elementor\Controls_Manager::COLOR,
                'default' => '#ffffff',
                'selectors' => [
                    '{{WRAPPER}} [class*="vChat-button-"].vChat-button-3.vc-btn-bg:hover i' => 'background-color: {{VALUE}}',
                ],
                'condition' => [
                    'style' => '2',
                    'show__icon__bg__color' => 'vChat-button-3',
                ],
            ]
        );

        $this->add_control(
            'rounded',
            [
                'label' => esc_html__('Rounded?', 'chat-viber'),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => esc_html__('Yes', 'chat-viber'),
                'label_off' => esc_html__('No', 'chat-viber'),
                'return_value' => 'vc-btn-rounded',
            ]
        );

        $this->add_control(
            'text_align',
            [
                'label' => esc_html__('Alignment', 'chat-viber'),
                'type' => \Elementor\Controls_Manager::CHOOSE,
                'options' => [
                    'left' => [
                        'title' => esc_html__('Left', 'chat-viber'),
                        'icon' => 'eicon-text-align-left',
                    ],
                    'center' => [
                        'title' => esc_html__('Center', 'chat-viber'),
                        'icon' => 'eicon-text-align-center',
                    ],
                    'right' => [
                        'title' => esc_html__('Right', 'chat-viber'),
                        'icon' => 'eicon-text-align-right',
                    ],
                ],
                'default' => 'left',
                'toggle' => true,
                'selectors' => [
                    '{{WRAPPER}} .vc-button-wrapper' => 'text-align: {{VALUE}};',
                ],
            ]
        );

        $this->end_controls_section(); // End section top content
    }

    protected function render()
    {
        $settings = $this->get_settings_for_display();
        // button settings
        $style = $settings['style'];
        $number =  $settings['number'];
        $timezone =  $settings['timezone'];

        $visibility = $settings['visibility'];

        $rounded = $settings['rounded'];
        $icon__bg = $settings['show__icon__bg__color'];
        $sizes = $settings['button__sizes'];

        $name = $settings['agent__name'];
        $designation = $settings['agent__designation'];
        $labelText = $settings['custom__button__label'];
        $onlineText = $settings['online__text'];
        $offlineText = $settings['offline__text'];
        // availablity

        $sunday = ($settings['sunday__start'] ? $settings['sunday__start'] : "0:00") . "-" . ($settings['sunday__end'] ? $settings['sunday__end'] : "23:59");
        $monday = ($settings['monday__start'] ? $settings['monday__start'] : "0:00") . "-" . ($settings['monday__end'] ? $settings['monday__end'] : "23:59");
        $tuesday = ($settings['tuesday__start'] ? $settings['tuesday__start'] : "0:00") . "-" . ($settings['tuesday__end'] ? $settings['tuesday__end'] : "23:59");
        $wednesday = ($settings['wednesday__start'] ? $settings['wednesday__start'] : "0:00") . "-" . ($settings['wednesday__end'] ? $settings['wednesday__end'] : "23:59");
        $thursday = ($settings['thursday__start'] ? $settings['thursday__start'] : "0:00") . "-" . ($settings['thursday__end'] ? $settings['thursday__end'] : "23:59");
        $friday = ($settings['friday__start'] ? $settings['friday__start'] : "0:00") . "-" . ($settings['friday__end'] ? $settings['friday__end'] : "23:59");
        $saturday = ($settings['saturday__start'] ? $settings['saturday__start'] : "0:00") . "-" . ($settings['saturday__end'] ? $settings['saturday__end'] : "23:59");


?>
        <?php if ($style == '1') : ?>
            <?php $photo = $settings['agent__photo']['url']; ?>
            <div class="vc-button-wrapper">

                <button <?php if ($timezone) { ?> data-timezone="<?php esc_attr($timezone); ?>" <?php } ?> class="vcButtons vChat-button-4 vc-btn-bg <?php echo esc_attr($visibility); ?> <?php echo esc_attr($rounded); ?> avatar-active <?php echo esc_attr($sizes); ?>" data-btnavailablety='{ "sunday":"<?php echo esc_attr($sunday); ?>", "monday":"<?php echo esc_attr($monday); ?>", "tuesday":"<?php echo esc_attr($tuesday); ?>", "wednesday":"<?php echo esc_attr($wednesday); ?>", "thursday":"<?php echo esc_attr($thursday); ?>", "friday":"<?php echo esc_attr($friday); ?>", "saturday":"<?php echo esc_attr($saturday); ?>" }'>
                    <?php if ($photo) { ?>
                        <img src="<?php echo esc_attr($photo); ?>" />
                    <?php } ?>
                    <div class="info-wrapper">
                        <?php if ($name || $designation) { ?>
                            <p class="info"><?php if ($name) { ?><?php echo esc_html($name); ?><?php } ?> <?php if ($designation) { ?>/ <?php echo esc_html($designation); ?><?php } ?></p>
                        <?php } ?>
                        <?php if ($labelText) { ?>
                            <p class="title"><?php echo esc_html($labelText); ?></p>
                        <?php } ?>
                        <?php if ($onlineText) { ?>
                            <p class="online"><?php echo esc_html($onlineText); ?></p>
                        <?php } ?>
                        <?php if ($offlineText) { ?>
                            <p class="offline"><?php echo esc_html($offlineText); ?></p>
                        <?php } ?>
                    </div>
                    <a class="viber__target" href="viber://chat?number=<?php echo esc_attr($number); ?>"></a>
                </button>
            </div>
        <?php else : ?>
            <?php
            $icon = $settings['button__icon']['value'];
            $vchatIcon = $icon ? $icon : "fab fa-viber";
            ?>
            <div class="vc-button-wrapper">
                <a href="viber://chat?number=<?php echo $number; ?>" class="vChat-button-2 viber__target <?php echo esc_attr($icon__bg); ?> vc-btn-bg <?php echo esc_attr($visibility); ?> <?php echo esc_attr($rounded); ?> <?php echo esc_attr($sizes); ?>">
                    <i class="<?php echo $vchatIcon; ?>"></i> <?php if ($labelText) { ?><span><?php echo esc_html($labelText); ?></span><?php } ?>
                </a>
            </div>
        <?php endif; ?>
<?php }
}
