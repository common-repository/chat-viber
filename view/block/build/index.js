/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");






const {
  SelectControl,
  TextControl
} = wp.components;


const agentImage = __webpack_require__(/*! ./image/user.jpg */ "./src/image/user.jpg");
const timezones = [{
  value: 'Africa/Abidjan',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Abidjan', 'chat-viber')
}, {
  value: 'Africa/Accra',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Accra', 'chat-viber')
}, {
  value: 'Africa/Addis_Ababa',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Addis_Ababa', 'chat-viber')
}, {
  value: 'Africa/Algiers',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Algiers', 'chat-viber')
}, {
  value: 'Africa/Asmara',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Asmara', 'chat-viber')
}, {
  value: 'Africa/Asmera',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Asmera', 'chat-viber')
}, {
  value: 'Africa/Bamako',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Bamako', 'chat-viber')
}, {
  value: 'Africa/Bangui',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Bangui', 'chat-viber')
}, {
  value: 'Africa/Banjul',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Banjul', 'chat-viber')
}, {
  value: 'Africa/Bissau',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Bissau', 'chat-viber')
}, {
  value: 'Africa/Blantyre',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Blantyre', 'chat-viber')
}, {
  value: 'Africa/Brazzaville',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Brazzaville', 'chat-viber')
}, {
  value: 'Africa/Bujumbura',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Bujumbura', 'chat-viber')
}, {
  value: 'Africa/Cairo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Cairo', 'chat-viber')
}, {
  value: 'Africa/Casablanca',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Casablanca', 'chat-viber')
}, {
  value: 'Africa/Ceuta',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Ceuta', 'chat-viber')
}, {
  value: 'Africa/Conakry',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Conakry', 'chat-viber')
}, {
  value: 'Africa/Dakar',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Dakar', 'chat-viber')
}, {
  value: 'Africa/Dar_es_Salaam',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Dar_es_Salaam', 'chat-viber')
}, {
  value: 'Africa/Djibouti',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Djibouti', 'chat-viber')
}, {
  value: 'Africa/Douala',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Douala', 'chat-viber')
}, {
  value: 'Africa/El_Aaiun',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/El_Aaiun', 'chat-viber')
}, {
  value: 'Africa/Freetown',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Freetown', 'chat-viber')
}, {
  value: 'Africa/Gaborone',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Gaborone', 'chat-viber')
}, {
  value: 'Africa/Harare',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Harare', 'chat-viber')
}, {
  value: 'Africa/Johannesburg',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Johannesburg', 'chat-viber')
}, {
  value: 'Africa/Juba',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Juba', 'chat-viber')
}, {
  value: 'Africa/Kampala',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Kampala', 'chat-viber')
}, {
  value: 'Africa/Khartoum',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Khartoum', 'chat-viber')
}, {
  value: 'Africa/Kigali',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Kigali', 'chat-viber')
}, {
  value: 'Africa/Kinshasa',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Kinshasa', 'chat-viber')
}, {
  value: 'Africa/Lagos',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Lagos', 'chat-viber')
}, {
  value: 'Africa/Libreville',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Libreville', 'chat-viber')
}, {
  value: 'Africa/Lome',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Lome', 'chat-viber')
}, {
  value: 'Africa/Luanda',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Luanda', 'chat-viber')
}, {
  value: 'Africa/Lubumbashi',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Lubumbashi', 'chat-viber')
}, {
  value: 'Africa/Lusaka',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Lusaka', 'chat-viber')
}, {
  value: 'Africa/Malabo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Malabo', 'chat-viber')
}, {
  value: 'Africa/Maputo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Maputo', 'chat-viber')
}, {
  value: 'Africa/Maseru',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Maseru', 'chat-viber')
}, {
  value: 'Africa/Mbabane',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Mbabane', 'chat-viber')
}, {
  value: 'Africa/Mogadishu',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Mogadishu', 'chat-viber')
}, {
  value: 'Africa/Monrovia',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Monrovia', 'chat-viber')
}, {
  value: 'Africa/Nairobi',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Nairobi', 'chat-viber')
}, {
  value: 'Africa/Ndjamena',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Ndjamena', 'chat-viber')
}, {
  value: 'Africa/Niamey',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Niamey', 'chat-viber')
}, {
  value: 'Africa/Nouakchott',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Nouakchott', 'chat-viber')
}, {
  value: 'Africa/Ouagadougou',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Ouagadougou', 'chat-viber')
}, {
  value: 'Africa/Porto-Novo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Porto-Novo', 'chat-viber')
}, {
  value: 'Africa/Sao_Tome',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Sao_Tome', 'chat-viber')
}, {
  value: 'Africa/Timbuktu',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Timbuktu', 'chat-viber')
}, {
  value: 'Africa/Tripoli',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Tripoli', 'chat-viber')
}, {
  value: 'Africa/Tunis',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Tunis', 'chat-viber')
}, {
  value: 'Africa/Windhoek',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Windhoek', 'chat-viber')
}, {
  value: 'America/Adak',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Adak', 'chat-viber')
}, {
  value: 'America/Anchorage',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Anchorage', 'chat-viber')
}, {
  value: 'America/Anguilla',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Anguilla', 'chat-viber')
}, {
  value: 'America/Antigua',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Antigua', 'chat-viber')
}, {
  value: 'America/Araguaina',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Araguaina', 'chat-viber')
}, {
  value: 'America/Argentina/Buenos_Aires',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Argentina/Buenos_Aires', 'chat-viber')
}, {
  value: 'America/Argentina/Catamarca',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Argentina/Catamarca', 'chat-viber')
}, {
  value: 'America/Argentina/ComodRivadavia',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Argentina/ComodRivadavia', 'chat-viber')
}, {
  value: 'America/Argentina/Cordoba',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Argentina/Cordoba', 'chat-viber')
}, {
  value: 'America/Argentina/Jujuy',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Argentina/Jujuy', 'chat-viber')
}, {
  value: 'America/Argentina/La_Rioja',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Argentina/La_Rioja', 'chat-viber')
}, {
  value: 'America/Argentina/Mendoza',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Argentina/Mendoza', 'chat-viber')
}, {
  value: 'America/Argentina/Rio_Gallegos',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Argentina/Rio_Gallegos', 'chat-viber')
}, {
  value: 'America/Argentina/Salta',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Argentina/Salta', 'chat-viber')
}, {
  value: 'America/Argentina/San_Juan',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Argentina/San_Juan', 'chat-viber')
}, {
  value: 'America/Argentina/San_Luis',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Argentina/San_Luis', 'chat-viber')
}, {
  value: 'America/Argentina/Tucuman',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Argentina/Tucuman', 'chat-viber')
}, {
  value: 'America/Argentina/Ushuaia',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Argentina/Ushuaia', 'chat-viber')
}, {
  value: 'America/Aruba',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Aruba', 'chat-viber')
}, {
  value: 'America/Asuncion',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Asuncion', 'chat-viber')
}, {
  value: 'America/Atikokan',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Atikokan', 'chat-viber')
}, {
  value: 'America/Atka',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Atka', 'chat-viber')
}, {
  value: 'America/Bahia',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Bahia', 'chat-viber')
}, {
  value: 'America/Bahia_Banderas',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Bahia_Banderas', 'chat-viber')
}, {
  value: 'America/Barbados',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Barbados', 'chat-viber')
}, {
  value: 'America/Belem',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Belem', 'chat-viber')
}, {
  value: 'America/Belize',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Belize', 'chat-viber')
}, {
  value: 'America/Blanc-Sablon',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Blanc-Sablon', 'chat-viber')
}, {
  value: 'America/Boa_Vista',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Boa_Vista', 'chat-viber')
}, {
  value: 'America/Bogota',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Bogota', 'chat-viber')
}, {
  value: 'America/Boise',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Boise', 'chat-viber')
}, {
  value: 'America/Buenos_Aires',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Buenos_Aires', 'chat-viber')
}, {
  value: 'America/Cambridge_Bay',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Cambridge_Bay', 'chat-viber')
}, {
  value: 'America/Campo_Grande',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Campo_Grande', 'chat-viber')
}, {
  value: 'America/Cancun',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Cancun', 'chat-viber')
}, {
  value: 'America/Caracas',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Caracas', 'chat-viber')
}, {
  value: 'America/Catamarca',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Catamarca', 'chat-viber')
}, {
  value: 'America/Cayenne',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Cayenne', 'chat-viber')
}, {
  value: 'America/Cayman',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Cayman', 'chat-viber')
}, {
  value: 'America/Chicago',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Chicago', 'chat-viber')
}, {
  value: 'America/Chihuahua',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Chihuahua', 'chat-viber')
}, {
  value: 'America/Coral_Harbour',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Coral_Harbour', 'chat-viber')
}, {
  value: 'America/Cordoba',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Cordoba', 'chat-viber')
}, {
  value: 'America/Costa_Rica',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Costa_Rica', 'chat-viber')
}, {
  value: 'America/Creston',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Creston', 'chat-viber')
}, {
  value: 'America/Cuiaba',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Cuiaba', 'chat-viber')
}, {
  value: 'America/Curacao',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Curacao', 'chat-viber')
}, {
  value: 'America/Danmarkshavn',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Danmarkshavn', 'chat-viber')
}, {
  value: 'America/Dawson',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Dawson', 'chat-viber')
}, {
  value: 'America/Dawson_Creek',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Dawson_Creek', 'chat-viber')
}, {
  value: 'America/Denver',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Denver', 'chat-viber')
}, {
  value: 'America/Detroit',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Detroit', 'chat-viber')
}, {
  value: 'America/Dominica',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Dominica', 'chat-viber')
}, {
  value: 'America/Edmonton',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Edmonton', 'chat-viber')
}, {
  value: 'America/Eirunepe',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Eirunepe', 'chat-viber')
}, {
  value: 'America/El_Salvador',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/El_Salvador', 'chat-viber')
}, {
  value: 'America/Ensenada',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Ensenada', 'chat-viber')
}, {
  value: 'America/Fort_Nelson',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Fort_Nelson', 'chat-viber')
}, {
  value: 'America/Fort_Wayne',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Fort_Wayne', 'chat-viber')
}, {
  value: 'America/Fortaleza',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Fortaleza', 'chat-viber')
}, {
  value: 'America/Glace_Bay',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Glace_Bay', 'chat-viber')
}, {
  value: 'America/Godthab',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Godthab', 'chat-viber')
}, {
  value: 'America/Goose_Bay',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Goose_Bay', 'chat-viber')
}, {
  value: 'America/Grand_Turk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Grand_Turk', 'chat-viber')
}, {
  value: 'America/Grenada',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Grenada', 'chat-viber')
}, {
  value: 'America/Guadeloupe',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Guadeloupe', 'chat-viber')
}, {
  value: 'America/Guatemala',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Guatemala', 'chat-viber')
}, {
  value: 'America/Guayaquil',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Guayaquil', 'chat-viber')
}, {
  value: 'America/Guyana',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Guyana', 'chat-viber')
}, {
  value: 'America/Halifax',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Halifax', 'chat-viber')
}, {
  value: 'America/Havana',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Havana', 'chat-viber')
}, {
  value: 'America/Hermosillo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Hermosillo', 'chat-viber')
}, {
  value: 'America/Indiana/Indianapolis',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Indiana/Indianapolis', 'chat-viber')
}, {
  value: 'America/Indiana/Knox',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Indiana/Knox', 'chat-viber')
}, {
  value: 'America/Indiana/Marengo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Indiana/Marengo', 'chat-viber')
}, {
  value: 'America/Indiana/Petersburg',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Indiana/Petersburg', 'chat-viber')
}, {
  value: 'America/Indiana/Tell_City',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Indiana/Tell_City', 'chat-viber')
}, {
  value: 'America/Indiana/Vevay',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Indiana/Vevay', 'chat-viber')
}, {
  value: 'America/Indiana/Vincennes',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Indiana/Vincennes', 'chat-viber')
}, {
  value: 'America/Indiana/Winamac',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Indiana/Winamac', 'chat-viber')
}, {
  value: 'America/Indianapolis',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Indianapolis', 'chat-viber')
}, {
  value: 'America/Inuvik',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Inuvik', 'chat-viber')
}, {
  value: 'America/Iqaluit',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Iqaluit', 'chat-viber')
}, {
  value: 'America/Jamaica',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Jamaica', 'chat-viber')
}, {
  value: 'America/Jujuy',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Jujuy', 'chat-viber')
}, {
  value: 'America/Juneau',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Juneau', 'chat-viber')
}, {
  value: 'America/Kentucky/Louisville',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Kentucky/Louisville', 'chat-viber')
}, {
  value: 'America/Kentucky/Monticello',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Kentucky/Monticello', 'chat-viber')
}, {
  value: 'America/Knox_IN',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Knox_IN', 'chat-viber')
}, {
  value: 'America/Kralendijk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Kralendijk', 'chat-viber')
}, {
  value: 'America/La_Paz',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/La_Paz', 'chat-viber')
}, {
  value: 'America/Lima',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Lima', 'chat-viber')
}, {
  value: 'America/Los_Angeles',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Los_Angeles', 'chat-viber')
}, {
  value: 'America/Louisville',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Louisville', 'chat-viber')
}, {
  value: 'America/Lower_Princes',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Lower_Princes', 'chat-viber')
}, {
  value: 'America/Maceio',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Maceio', 'chat-viber')
}, {
  value: 'America/Managua',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Managua', 'chat-viber')
}, {
  value: 'America/Manaus',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Manaus', 'chat-viber')
}, {
  value: 'America/Marigot',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Marigot', 'chat-viber')
}, {
  value: 'America/Martinique',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Martinique', 'chat-viber')
}, {
  value: 'America/Matamoros',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Matamoros', 'chat-viber')
}, {
  value: 'America/Mazatlan',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Mazatlan', 'chat-viber')
}, {
  value: 'America/Mendoza',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Mendoza', 'chat-viber')
}, {
  value: 'America/Menominee',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Menominee', 'chat-viber')
}, {
  value: 'America/Merida',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Merida', 'chat-viber')
}, {
  value: 'America/Metlakatla',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Metlakatla', 'chat-viber')
}, {
  value: 'America/Mexico_City',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Mexico_City', 'chat-viber')
}, {
  value: 'America/Miquelon',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Miquelon', 'chat-viber')
}, {
  value: 'America/Moncton',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Moncton', 'chat-viber')
}, {
  value: 'America/Monterrey',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Monterrey', 'chat-viber')
}, {
  value: 'America/Montevideo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Montevideo', 'chat-viber')
}, {
  value: 'America/Montreal',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Montreal', 'chat-viber')
}, {
  value: 'America/Montserrat',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Montserrat', 'chat-viber')
}, {
  value: 'America/Nassau',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Nassau', 'chat-viber')
}, {
  value: 'America/New_York',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/New_York', 'chat-viber')
}, {
  value: 'America/Nipigon',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Nipigon', 'chat-viber')
}, {
  value: 'America/Nome',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Nome', 'chat-viber')
}, {
  value: 'America/Noronha',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Noronha', 'chat-viber')
}, {
  value: 'America/North_Dakota/Beulah',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/North_Dakota/Beulah', 'chat-viber')
}, {
  value: 'America/North_Dakota/Center',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/North_Dakota/Center', 'chat-viber')
}, {
  value: 'America/North_Dakota/New_Salem',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/North_Dakota/New_Salem', 'chat-viber')
}, {
  value: 'America/Ojinaga',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Ojinaga', 'chat-viber')
}, {
  value: 'America/Panama',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Panama', 'chat-viber')
}, {
  value: 'America/Pangnirtung',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Pangnirtung', 'chat-viber')
}, {
  value: 'America/Paramaribo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Paramaribo', 'chat-viber')
}, {
  value: 'America/Phoenix',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Phoenix', 'chat-viber')
}, {
  value: 'America/Port-au-Prince',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Port-au-Prince', 'chat-viber')
}, {
  value: 'America/Port_of_Spain',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Port_of_Spain', 'chat-viber')
}, {
  value: 'America/Porto_Acre',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Porto_Acre', 'chat-viber')
}, {
  value: 'America/Porto_Velho',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Porto_Velho', 'chat-viber')
}, {
  value: 'America/Puerto_Rico',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Puerto_Rico', 'chat-viber')
}, {
  value: 'America/Punta_Arenas',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Punta_Arenas', 'chat-viber')
}, {
  value: 'America/Rainy_River',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Rainy_River', 'chat-viber')
}, {
  value: 'America/Rankin_Inlet',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Rankin_Inlet', 'chat-viber')
}, {
  value: 'America/Recife',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Recife', 'chat-viber')
}, {
  value: 'America/Regina',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Regina', 'chat-viber')
}, {
  value: 'America/Resolute',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Resolute', 'chat-viber')
}, {
  value: 'America/Rio_Branco',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Rio_Branco', 'chat-viber')
}, {
  value: 'America/Rosario',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Rosario', 'chat-viber')
}, {
  value: 'America/Santa_Isabel',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Santa_Isabel', 'chat-viber')
}, {
  value: 'America/Santarem',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Santarem', 'chat-viber')
}, {
  value: 'America/Santiago',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Santiago', 'chat-viber')
}, {
  value: 'America/Santo_Domingo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Santo_Domingo', 'chat-viber')
}, {
  value: 'America/Sao_Paulo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Sao_Paulo', 'chat-viber')
}, {
  value: 'America/Scoresbysund',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Scoresbysund', 'chat-viber')
}, {
  value: 'America/Shiprock',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Shiprock', 'chat-viber')
}, {
  value: 'America/Sitka',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Sitka', 'chat-viber')
}, {
  value: 'America/St_Barthelemy',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/St_Barthelemy', 'chat-viber')
}, {
  value: 'America/St_Johns',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/St_Johns', 'chat-viber')
}, {
  value: 'America/St_Kitts',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/St_Kitts', 'chat-viber')
}, {
  value: 'America/St_Lucia',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/St_Lucia', 'chat-viber')
}, {
  value: 'America/St_Thomas',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/St_Thomas', 'chat-viber')
}, {
  value: 'America/St_Vincent',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/St_Vincent', 'chat-viber')
}, {
  value: 'America/Swift_Current',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Swift_Current', 'chat-viber')
}, {
  value: 'America/Tegucigalpa',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Tegucigalpa', 'chat-viber')
}, {
  value: 'America/Thule',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Thule', 'chat-viber')
}, {
  value: 'America/Thunder_Bay',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Thunder_Bay', 'chat-viber')
}, {
  value: 'America/Tijuana',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Tijuana', 'chat-viber')
}, {
  value: 'America/Toronto',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Toronto', 'chat-viber')
}, {
  value: 'America/Tortola',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Tortola', 'chat-viber')
}, {
  value: 'America/Vancouver',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Vancouver', 'chat-viber')
}, {
  value: 'America/Virgin',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Virgin', 'chat-viber')
}, {
  value: 'America/Whitehorse',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Whitehorse', 'chat-viber')
}, {
  value: 'America/Winnipeg',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Winnipeg', 'chat-viber')
}, {
  value: 'America/Yakutat',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Yakutat', 'chat-viber')
}, {
  value: 'America/Yellowknife',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Yellowknife', 'chat-viber')
}, {
  value: 'Antarctica/Casey',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Antarctica/Casey', 'chat-viber')
}, {
  value: 'Antarctica/Davis',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Antarctica/Davis', 'chat-viber')
}, {
  value: 'Antarctica/DumontDUrville',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Antarctica/DumontDUrville', 'chat-viber')
}, {
  value: 'Antarctica/Macquarie',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Antarctica/Macquarie', 'chat-viber')
}, {
  value: 'Antarctica/Mawson',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Antarctica/Mawson', 'chat-viber')
}, {
  value: 'Antarctica/McMurdo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Antarctica/McMurdo', 'chat-viber')
}, {
  value: 'Antarctica/Palmer',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Antarctica/Palmer', 'chat-viber')
}, {
  value: 'Antarctica/Rothera',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Antarctica/Rothera', 'chat-viber')
}, {
  value: 'Antarctica/South_Pole',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Antarctica/South_Pole', 'chat-viber')
}, {
  value: 'Antarctica/Syowa',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Antarctica/Syowa', 'chat-viber')
}, {
  value: 'Antarctica/Troll',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Antarctica/Troll', 'chat-viber')
}, {
  value: 'Antarctica/Vostok',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Antarctica/Vostok', 'chat-viber')
}, {
  value: 'Arctic/Longyearbyen',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Arctic/Longyearbyen', 'chat-viber')
}, {
  value: 'Asia/Aden',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Aden', 'chat-viber')
}, {
  value: 'Asia/Almaty',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Almaty', 'chat-viber')
}, {
  value: 'Asia/Amman',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Amman', 'chat-viber')
}, {
  value: 'Asia/Anadyr',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Anadyr', 'chat-viber')
}, {
  value: 'Asia/Aqtau',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Aqtau', 'chat-viber')
}, {
  value: 'Asia/Aqtobe',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Aqtobe', 'chat-viber')
}, {
  value: 'Asia/Ashgabat',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Ashgabat', 'chat-viber')
}, {
  value: 'Asia/Ashkhabad',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Ashkhabad', 'chat-viber')
}, {
  value: 'Asia/Atyrau',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Atyrau', 'chat-viber')
}, {
  value: 'Asia/Baghdad',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Baghdad', 'chat-viber')
}, {
  value: 'Asia/Bahrain',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Bahrain', 'chat-viber')
}, {
  value: 'Asia/Baku',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Baku', 'chat-viber')
}, {
  value: 'Asia/Bangkok',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Bangkok', 'chat-viber')
}, {
  value: 'Asia/Barnaul',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Barnaul', 'chat-viber')
}, {
  value: 'Asia/Beirut',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Beirut', 'chat-viber')
}, {
  value: 'Asia/Bishkek',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Bishkek', 'chat-viber')
}, {
  value: 'Asia/Brunei',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Brunei', 'chat-viber')
}, {
  value: 'Asia/Calcutta',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Calcutta', 'chat-viber')
}, {
  value: 'Asia/Chita',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Chita', 'chat-viber')
}, {
  value: 'Asia/Choibalsan',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Choibalsan', 'chat-viber')
}, {
  value: 'Asia/Chongqing',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Chongqing', 'chat-viber')
}, {
  value: 'Asia/Chungking',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Chungking', 'chat-viber')
}, {
  value: 'Asia/Colombo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Colombo', 'chat-viber')
}, {
  value: 'Asia/Dacca',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Dacca', 'chat-viber')
}, {
  value: 'Asia/Damascus',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Damascus', 'chat-viber')
}, {
  value: 'Asia/Dhaka',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Dhaka', 'chat-viber')
}, {
  value: 'Asia/Dili',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Dili', 'chat-viber')
}, {
  value: 'Asia/Dubai',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Dubai', 'chat-viber')
}, {
  value: 'Asia/Dushanbe',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Dushanbe', 'chat-viber')
}, {
  value: 'Asia/Famagusta',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Famagusta', 'chat-viber')
}, {
  value: 'Asia/Gaza',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Gaza', 'chat-viber')
}, {
  value: 'Asia/Harbin',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Harbin', 'chat-viber')
}, {
  value: 'Asia/Hebron',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Hebron', 'chat-viber')
}, {
  value: 'Asia/Ho_Chi_Minh',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Ho_Chi_Minh', 'chat-viber')
}, {
  value: 'Asia/Hong_Kong',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Hong_Kong', 'chat-viber')
}, {
  value: 'Asia/Hovd',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Hovd', 'chat-viber')
}, {
  value: 'Asia/Irkutsk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Irkutsk', 'chat-viber')
}, {
  value: 'Asia/Istanbul',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Istanbul', 'chat-viber')
}, {
  value: 'Asia/Jakarta',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Jakarta', 'chat-viber')
}, {
  value: 'Asia/Jayapura',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Jayapura', 'chat-viber')
}, {
  value: 'Asia/Jerusalem',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Jerusalem', 'chat-viber')
}, {
  value: 'Asia/Kabul',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Kabul', 'chat-viber')
}, {
  value: 'Asia/Kamchatka',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Kamchatka', 'chat-viber')
}, {
  value: 'Asia/Karachi',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Karachi', 'chat-viber')
}, {
  value: 'Asia/Kashgar',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Kashgar', 'chat-viber')
}, {
  value: 'Asia/Kathmandu',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Kathmandu', 'chat-viber')
}, {
  value: 'Asia/Katmandu',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Katmandu', 'chat-viber')
}, {
  value: 'Asia/Khandyga',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Khandyga', 'chat-viber')
}, {
  value: 'Asia/Kolkata',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Kolkata', 'chat-viber')
}, {
  value: 'Asia/Krasnoyarsk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Krasnoyarsk', 'chat-viber')
}, {
  value: 'Asia/Kuala_Lumpur',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Kuala_Lumpur', 'chat-viber')
}, {
  value: 'Asia/Kuching',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Kuching', 'chat-viber')
}, {
  value: 'Asia/Kuwait',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Kuwait', 'chat-viber')
}, {
  value: 'Asia/Macao',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Macao', 'chat-viber')
}, {
  value: 'Asia/Macau',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Macau', 'chat-viber')
}, {
  value: 'Asia/Magadan',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Magadan', 'chat-viber')
}, {
  value: 'Asia/Makassar',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Makassar', 'chat-viber')
}, {
  value: 'Asia/Manila',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Manila', 'chat-viber')
}, {
  value: 'Asia/Muscat',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Muscat', 'chat-viber')
}, {
  value: 'Asia/Nicosia',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Nicosia', 'chat-viber')
}, {
  value: 'Asia/Novokuznetsk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Novokuznetsk', 'chat-viber')
}, {
  value: 'Asia/Novosibirsk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Novosibirsk', 'chat-viber')
}, {
  value: 'Asia/Omsk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Omsk', 'chat-viber')
}, {
  value: 'Asia/Oral',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Oral', 'chat-viber')
}, {
  value: 'Asia/Phnom_Penh',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Phnom_Penh', 'chat-viber')
}, {
  value: 'Asia/Pontianak',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Pontianak', 'chat-viber')
}, {
  value: 'Asia/Pyongyang',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Pyongyang', 'chat-viber')
}, {
  value: 'Asia/Qatar',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Qatar', 'chat-viber')
}, {
  value: 'Asia/Qyzylorda',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Qyzylorda', 'chat-viber')
}, {
  value: 'Asia/Rangoon',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Rangoon', 'chat-viber')
}, {
  value: 'Asia/Riyadh',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Riyadh', 'chat-viber')
}, {
  value: 'Asia/Saigon',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Saigon', 'chat-viber')
}, {
  value: 'Asia/Sakhalin',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Sakhalin', 'chat-viber')
}, {
  value: 'Asia/Samarkand',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Samarkand', 'chat-viber')
}, {
  value: 'Asia/Seoul',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Seoul', 'chat-viber')
}, {
  value: 'Asia/Shanghai',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Shanghai', 'chat-viber')
}, {
  value: 'Asia/Singapore',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Singapore', 'chat-viber')
}, {
  value: 'Asia/Srednekolymsk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Srednekolymsk', 'chat-viber')
}, {
  value: 'Asia/Taipei',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Taipei', 'chat-viber')
}, {
  value: 'Asia/Tashkent',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Tashkent', 'chat-viber')
}, {
  value: 'Asia/Tbilisi',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Tbilisi', 'chat-viber')
}, {
  value: 'Asia/Tehran',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Tehran', 'chat-viber')
}, {
  value: 'Asia/Tel_Aviv',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Tel_Aviv', 'chat-viber')
}, {
  value: 'Asia/Thimbu',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Thimbu', 'chat-viber')
}, {
  value: 'Asia/Thimphu',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Thimphu', 'chat-viber')
}, {
  value: 'Asia/Tokyo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Tokyo', 'chat-viber')
}, {
  value: 'Asia/Tomsk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Tomsk', 'chat-viber')
}, {
  value: 'Asia/Ujung_Pandang',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Ujung_Pandang', 'chat-viber')
}, {
  value: 'Asia/Ulaanbaatar',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Ulaanbaatar', 'chat-viber')
}, {
  value: 'Asia/Ulan_Bator',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Ulan_Bator', 'chat-viber')
}, {
  value: 'Asia/Urumqi',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Urumqi', 'chat-viber')
}, {
  value: 'Asia/Ust-Nera',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Ust-Nera', 'chat-viber')
}, {
  value: 'Asia/Vientiane',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Vientiane', 'chat-viber')
}, {
  value: 'Asia/Vladivostok',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Vladivostok', 'chat-viber')
}, {
  value: 'Asia/Yakutsk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Yakutsk', 'chat-viber')
}, {
  value: 'Asia/Yangon',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Yangon', 'chat-viber')
}, {
  value: 'Asia/Yekaterinburg',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Yekaterinburg', 'chat-viber')
}, {
  value: 'Asia/Yerevan',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Yerevan', 'chat-viber')
}, {
  value: 'Atlantic/Azores',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Atlantic/Azores', 'chat-viber')
}, {
  value: 'Atlantic/Bermuda',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Atlantic/Bermuda', 'chat-viber')
}, {
  value: 'Atlantic/Canary',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Atlantic/Canary', 'chat-viber')
}, {
  value: 'Atlantic/Cape_Verde',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Atlantic/Cape_Verde', 'chat-viber')
}, {
  value: 'Atlantic/Faeroe',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Atlantic/Faeroe', 'chat-viber')
}, {
  value: 'Atlantic/Faroe',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Atlantic/Faroe', 'chat-viber')
}, {
  value: 'Atlantic/Jan_Mayen',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Atlantic/Jan_Mayen', 'chat-viber')
}, {
  value: 'Atlantic/Madeira',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Atlantic/Madeira', 'chat-viber')
}, {
  value: 'Atlantic/Reykjavik',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Atlantic/Reykjavik', 'chat-viber')
}, {
  value: 'Atlantic/South_Georgia',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Atlantic/South_Georgia', 'chat-viber')
}, {
  value: 'Atlantic/St_Helena',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Atlantic/St_Helena', 'chat-viber')
}, {
  value: 'Atlantic/Stanley',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Atlantic/Stanley', 'chat-viber')
}, {
  value: 'Australia/ACT',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/ACT', 'chat-viber')
}, {
  value: 'Australia/Adelaide',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Adelaide', 'chat-viber')
}, {
  value: 'Australia/Brisbane',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Brisbane', 'chat-viber')
}, {
  value: 'Australia/Broken_Hill',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Broken_Hill', 'chat-viber')
}, {
  value: 'Australia/Canberra',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Canberra', 'chat-viber')
}, {
  value: 'Australia/Currie',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Currie', 'chat-viber')
}, {
  value: 'Australia/Darwin',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Darwin', 'chat-viber')
}, {
  value: 'Australia/Eucla',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Eucla', 'chat-viber')
}, {
  value: 'Australia/Hobart',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Hobart', 'chat-viber')
}, {
  value: 'Australia/LHI',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/LHI', 'chat-viber')
}, {
  value: 'Australia/Lindeman',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Lindeman', 'chat-viber')
}, {
  value: 'Australia/Lord_Howe',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Lord_Howe', 'chat-viber')
}, {
  value: 'Australia/Melbourne',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Melbourne', 'chat-viber')
}, {
  value: 'Australia/NSW',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/NSW', 'chat-viber')
}, {
  value: 'Australia/North',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/North', 'chat-viber')
}, {
  value: 'Australia/Perth',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Perth', 'chat-viber')
}, {
  value: 'Australia/Queensland',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Queensland', 'chat-viber')
}, {
  value: 'Australia/South',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/South', 'chat-viber')
}, {
  value: 'Australia/Sydney',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Sydney', 'chat-viber')
}, {
  value: 'Australia/Tasmania',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Tasmania', 'chat-viber')
}, {
  value: 'Australia/Victoria',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Victoria', 'chat-viber')
}, {
  value: 'Australia/West',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/West', 'chat-viber')
}, {
  value: 'Australia/Yancowinna',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Yancowinna', 'chat-viber')
}, {
  value: 'Brazil/Acre',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Brazil/Acre', 'chat-viber')
}, {
  value: 'Brazil/DeNoronha',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Brazil/DeNoronha', 'chat-viber')
}, {
  value: 'Brazil/East',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Brazil/East', 'chat-viber')
}, {
  value: 'Brazil/West',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Brazil/West', 'chat-viber')
}, {
  value: 'CET',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('CET', 'chat-viber')
}, {
  value: 'CST6CDT',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('CST6CDT', 'chat-viber')
}, {
  value: 'Canada/Atlantic',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Canada/Atlantic', 'chat-viber')
}, {
  value: 'Canada/Central',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Canada/Central', 'chat-viber')
}, {
  value: 'Canada/Eastern',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Canada/Eastern', 'chat-viber')
}, {
  value: 'Canada/Mountain',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Canada/Mountain', 'chat-viber')
}, {
  value: 'Canada/Newfoundland',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Canada/Newfoundland', 'chat-viber')
}, {
  value: 'Canada/Pacific',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Canada/Pacific', 'chat-viber')
}, {
  value: 'Canada/Saskatchewan',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Canada/Saskatchewan', 'chat-viber')
}, {
  value: 'Canada/Yukon',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Canada/Yukon', 'chat-viber')
}, {
  value: 'Chile/Continental',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Chile/Continental', 'chat-viber')
}, {
  value: 'Chile/EasterIsland',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Chile/EasterIsland', 'chat-viber')
}, {
  value: 'Cuba',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Cuba', 'chat-viber')
}, {
  value: 'EET',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('EET', 'chat-viber')
}, {
  value: 'EST',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('EST', 'chat-viber')
}, {
  value: 'EST5EDT',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('EST5EDT', 'chat-viber')
}, {
  value: 'Egypt',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Egypt', 'chat-viber')
}, {
  value: 'Eire',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Eire', 'chat-viber')
}, {
  value: 'Etc/GMT',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT', 'chat-viber')
}, {
  value: 'Etc/GMT+0',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT+0', 'chat-viber')
}, {
  value: 'Etc/GMT+1',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT+1', 'chat-viber')
}, {
  value: 'Etc/GMT+10',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT+10', 'chat-viber')
}, {
  value: 'Etc/GMT+11',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT+11', 'chat-viber')
}, {
  value: 'Etc/GMT+12',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT+12', 'chat-viber')
}, {
  value: 'Etc/GMT+2',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT+2', 'chat-viber')
}, {
  value: 'Etc/GMT+3',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT+3', 'chat-viber')
}, {
  value: 'Etc/GMT+4',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT+4', 'chat-viber')
}, {
  value: 'Etc/GMT+5',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT+5', 'chat-viber')
}, {
  value: 'Etc/GMT+6',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT+6', 'chat-viber')
}, {
  value: 'Etc/GMT+7',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT+7', 'chat-viber')
}, {
  value: 'Etc/GMT+8',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT+8', 'chat-viber')
}, {
  value: 'Etc/GMT+9',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT+9', 'chat-viber')
}, {
  value: 'Etc/GMT-0',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-0', 'chat-viber')
}, {
  value: 'Etc/GMT-1',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-1', 'chat-viber')
}, {
  value: 'Etc/GMT-10',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-10', 'chat-viber')
}, {
  value: 'Etc/GMT-11',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-11', 'chat-viber')
}, {
  value: 'Etc/GMT-12',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-12', 'chat-viber')
}, {
  value: 'Etc/GMT-13',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-13', 'chat-viber')
}, {
  value: 'Etc/GMT-14',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-14', 'chat-viber')
}, {
  value: 'Etc/GMT-2',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-2', 'chat-viber')
}, {
  value: 'Etc/GMT-3',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-3', 'chat-viber')
}, {
  value: 'Etc/GMT-4',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-4', 'chat-viber')
}, {
  value: 'Etc/GMT-5',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-5', 'chat-viber')
}, {
  value: 'Etc/GMT-6',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-6', 'chat-viber')
}, {
  value: 'Etc/GMT-7',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-7', 'chat-viber')
}, {
  value: 'Etc/GMT-8',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-8', 'chat-viber')
}, {
  value: 'Etc/GMT-9',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-9', 'chat-viber')
}, {
  value: 'Etc/GMT0',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT0', 'chat-viber')
}, {
  value: 'Etc/Greenwich',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/Greenwich', 'chat-viber')
}, {
  value: 'Etc/UCT',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/UCT', 'chat-viber')
}, {
  value: 'Etc/UTC',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/UTC', 'chat-viber')
}, {
  value: 'Etc/Universal',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/Universal', 'chat-viber')
}, {
  value: 'Etc/Zulu',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/Zulu', 'chat-viber')
}, {
  value: 'Europe/Amsterdam',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Amsterdam', 'chat-viber')
}, {
  value: 'Europe/Andorra',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Andorra', 'chat-viber')
}, {
  value: 'Europe/Astrakhan',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Astrakhan', 'chat-viber')
}, {
  value: 'Europe/Athens',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Athens', 'chat-viber')
}, {
  value: 'Europe/Belfast',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Belfast', 'chat-viber')
}, {
  value: 'Europe/Belgrade',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Belgrade', 'chat-viber')
}, {
  value: 'Europe/Berlin',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Berlin', 'chat-viber')
}, {
  value: 'Europe/Bratislava',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Bratislava', 'chat-viber')
}, {
  value: 'Europe/Brussels',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Brussels', 'chat-viber')
}, {
  value: 'Europe/Bucharest',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Bucharest', 'chat-viber')
}, {
  value: 'Europe/Budapest',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Budapest', 'chat-viber')
}, {
  value: 'Europe/Busingen',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Busingen', 'chat-viber')
}, {
  value: 'Europe/Chisinau',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Chisinau', 'chat-viber')
}, {
  value: 'Europe/Copenhagen',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Copenhagen', 'chat-viber')
}, {
  value: 'Europe/Dublin',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Dublin', 'chat-viber')
}, {
  value: 'Europe/Gibraltar',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Gibraltar', 'chat-viber')
}, {
  value: 'Europe/Guernsey',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Guernsey', 'chat-viber')
}, {
  value: 'Europe/Helsinki',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Helsinki', 'chat-viber')
}, {
  value: 'Europe/Isle_of_Man',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Isle_of_Man', 'chat-viber')
}, {
  value: 'Europe/Istanbul',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Istanbul', 'chat-viber')
}, {
  value: 'Europe/Jersey',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Jersey', 'chat-viber')
}, {
  value: 'Europe/Kaliningrad',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Kaliningrad', 'chat-viber')
}, {
  value: 'Europe/Kiev',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Kiev', 'chat-viber')
}, {
  value: 'Europe/Kirov',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Kirov', 'chat-viber')
}, {
  value: 'Europe/Lisbon',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Lisbon', 'chat-viber')
}, {
  value: 'Europe/Ljubljana',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Ljubljana', 'chat-viber')
}, {
  value: 'Europe/London',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/London', 'chat-viber')
}, {
  value: 'Europe/Luxembourg',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Luxembourg', 'chat-viber')
}, {
  value: 'Europe/Madrid',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Madrid', 'chat-viber')
}, {
  value: 'Europe/Malta',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Malta', 'chat-viber')
}, {
  value: 'Europe/Mariehamn',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Mariehamn', 'chat-viber')
}, {
  value: 'Europe/Minsk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Minsk', 'chat-viber')
}, {
  value: 'Europe/Monaco',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Monaco', 'chat-viber')
}, {
  value: 'Europe/Moscow',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Moscow', 'chat-viber')
}, {
  value: 'Europe/Nicosia',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Nicosia', 'chat-viber')
}, {
  value: 'Europe/Oslo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Oslo', 'chat-viber')
}, {
  value: 'Europe/Paris',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Paris', 'chat-viber')
}, {
  value: 'Europe/Podgorica',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Podgorica', 'chat-viber')
}, {
  value: 'Europe/Prague',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Prague', 'chat-viber')
}, {
  value: 'Europe/Riga',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Riga', 'chat-viber')
}, {
  value: 'Europe/Rome',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Rome', 'chat-viber')
}, {
  value: 'Europe/Samara',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Samara', 'chat-viber')
}, {
  value: 'Europe/San_Marino',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/San_Marino', 'chat-viber')
}, {
  value: 'Europe/Sarajevo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Sarajevo', 'chat-viber')
}, {
  value: 'Europe/Saratov',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Saratov', 'chat-viber')
}, {
  value: 'Europe/Simferopol',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Simferopol', 'chat-viber')
}, {
  value: 'Europe/Skopje',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Skopje', 'chat-viber')
}, {
  value: 'Europe/Sofia',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Sofia', 'chat-viber')
}, {
  value: 'Europe/Stockholm',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Stockholm', 'chat-viber')
}, {
  value: 'Europe/Tallinn',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Tallinn', 'chat-viber')
}, {
  value: 'Europe/Tirane',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Tirane', 'chat-viber')
}, {
  value: 'Europe/Tiraspol',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Tiraspol', 'chat-viber')
}, {
  value: 'Europe/Ulyanovsk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Ulyanovsk', 'chat-viber')
}, {
  value: 'Europe/Uzhgorod',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Uzhgorod', 'chat-viber')
}, {
  value: 'Europe/Vaduz',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Vaduz', 'chat-viber')
}, {
  value: 'Europe/Vatican',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Vatican', 'chat-viber')
}, {
  value: 'Europe/Vienna',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Vienna', 'chat-viber')
}, {
  value: 'Europe/Vilnius',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Vilnius', 'chat-viber')
}, {
  value: 'Europe/Volgograd',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Volgograd', 'chat-viber')
}, {
  value: 'Europe/Warsaw',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Warsaw', 'chat-viber')
}, {
  value: 'Europe/Zagreb',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Zagreb', 'chat-viber')
}, {
  value: 'Europe/Zaporozhye',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Zaporozhye', 'chat-viber')
}, {
  value: 'Europe/Zurich',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Zurich', 'chat-viber')
}, {
  value: 'GB',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('GB', 'chat-viber')
}, {
  value: 'GB-Eire',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('GB-Eire', 'chat-viber')
}, {
  value: 'GMT',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('GMT', 'chat-viber')
}, {
  value: 'GMT+0',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('GMT+0', 'chat-viber')
}, {
  value: 'GMT-0',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('GMT-0', 'chat-viber')
}, {
  value: 'GMT0',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('GMT0', 'chat-viber')
}, {
  value: 'Greenwich',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Greenwich', 'chat-viber')
}, {
  value: 'HST',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('HST', 'chat-viber')
}, {
  value: 'Hongkong',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Hongkong', 'chat-viber')
}, {
  value: 'Iceland',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Iceland', 'chat-viber')
}, {
  value: 'Indian/Antananarivo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Indian/Antananarivo', 'chat-viber')
}, {
  value: 'Indian/Chagos',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Indian/Chagos', 'chat-viber')
}, {
  value: 'Indian/Christmas',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Indian/Christmas', 'chat-viber')
}, {
  value: 'Indian/Cocos',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Indian/Cocos', 'chat-viber')
}, {
  value: 'Indian/Comoro',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Indian/Comoro', 'chat-viber')
}, {
  value: 'Indian/Kerguelen',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Indian/Kerguelen', 'chat-viber')
}, {
  value: 'Indian/Mahe',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Indian/Mahe', 'chat-viber')
}, {
  value: 'Indian/Maldives',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Indian/Maldives', 'chat-viber')
}, {
  value: 'Indian/Mauritius',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Indian/Mauritius', 'chat-viber')
}, {
  value: 'Indian/Mayotte',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Indian/Mayotte', 'chat-viber')
}, {
  value: 'Indian/Reunion',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Indian/Reunion', 'chat-viber')
}, {
  value: 'Iran',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Iran', 'chat-viber')
}, {
  value: 'Israel',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Israel', 'chat-viber')
}, {
  value: 'Jamaica',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Jamaica', 'chat-viber')
}, {
  value: 'Japan',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Japan', 'chat-viber')
}, {
  value: 'Kwajalein',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Kwajalein', 'chat-viber')
}, {
  value: 'Libya',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Libya', 'chat-viber')
}, {
  value: 'MET',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('MET', 'chat-viber')
}, {
  value: 'MST',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('MST', 'chat-viber')
}, {
  value: 'MST7MDT',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('MST7MDT', 'chat-viber')
}, {
  value: 'Mexico/BajaNorte',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Mexico/BajaNorte', 'chat-viber')
}, {
  value: 'Mexico/BajaSur',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Mexico/BajaSur', 'chat-viber')
}, {
  value: 'Mexico/General',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Mexico/General', 'chat-viber')
}, {
  value: 'NZ',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('NZ', 'chat-viber')
}, {
  value: 'NZ-CHAT',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('NZ-CHAT', 'chat-viber')
}, {
  value: 'Navajo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Navajo', 'chat-viber')
}, {
  value: 'PRC',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('PRC', 'chat-viber')
}, {
  value: 'PST8PDT',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('PST8PDT', 'chat-viber')
}, {
  value: 'Pacific/Apia',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Apia', 'chat-viber')
}, {
  value: 'Pacific/Auckland',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Auckland', 'chat-viber')
}, {
  value: 'Pacific/Bougainville',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Bougainville', 'chat-viber')
}, {
  value: 'Pacific/Chatham',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Chatham', 'chat-viber')
}, {
  value: 'Pacific/Chuuk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Chuuk', 'chat-viber')
}, {
  value: 'Pacific/Easter',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Easter', 'chat-viber')
}, {
  value: 'Pacific/Efate',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Efate', 'chat-viber')
}, {
  value: 'Pacific/Enderbury',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Enderbury', 'chat-viber')
}, {
  value: 'Pacific/Fakaofo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Fakaofo', 'chat-viber')
}, {
  value: 'Pacific/Fiji',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Fiji', 'chat-viber')
}, {
  value: 'Pacific/Funafuti',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Funafuti', 'chat-viber')
}, {
  value: 'Pacific/Galapagos',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Galapagos', 'chat-viber')
}, {
  value: 'Pacific/Gambier',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Gambier', 'chat-viber')
}, {
  value: 'Pacific/Guadalcanal',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Guadalcanal', 'chat-viber')
}, {
  value: 'Pacific/Guam',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Guam', 'chat-viber')
}, {
  value: 'Pacific/Honolulu',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Honolulu', 'chat-viber')
}, {
  value: 'Pacific/Johnston',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Johnston', 'chat-viber')
}, {
  value: 'Pacific/Kiritimati',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Kiritimati', 'chat-viber')
}, {
  value: 'Pacific/Kosrae',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Kosrae', 'chat-viber')
}, {
  value: 'Pacific/Kwajalein',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Kwajalein', 'chat-viber')
}, {
  value: 'Pacific/Majuro',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Majuro', 'chat-viber')
}, {
  value: 'Pacific/Marquesas',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Marquesas', 'chat-viber')
}, {
  value: 'Pacific/Midway',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Midway', 'chat-viber')
}, {
  value: 'Pacific/Nauru',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Nauru', 'chat-viber')
}, {
  value: 'Pacific/Niue',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Niue', 'chat-viber')
}, {
  value: 'Pacific/Norfolk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Norfolk', 'chat-viber')
}, {
  value: 'Pacific/Noumea',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Noumea', 'chat-viber')
}, {
  value: 'Pacific/Pago_Pago',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Pago_Pago', 'chat-viber')
}, {
  value: 'Pacific/Palau',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Palau', 'chat-viber')
}, {
  value: 'Pacific/Pitcairn',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Pitcairn', 'chat-viber')
}, {
  value: 'Pacific/Pohnpei',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Pohnpei', 'chat-viber')
}, {
  value: 'Pacific/Ponape',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Ponape', 'chat-viber')
}, {
  value: 'Pacific/Port_Moresby',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Port_Moresby', 'chat-viber')
}, {
  value: 'Pacific/Rarotonga',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Rarotonga', 'chat-viber')
}, {
  value: 'Pacific/Saipan',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Saipan', 'chat-viber')
}, {
  value: 'Pacific/Samoa',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Samoa', 'chat-viber')
}, {
  value: 'Pacific/Tahiti',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Tahiti', 'chat-viber')
}, {
  value: 'Pacific/Tarawa',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Tarawa', 'chat-viber')
}, {
  value: 'Pacific/Tongatapu',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Tongatapu', 'chat-viber')
}, {
  value: 'Pacific/Truk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Truk', 'chat-viber')
}, {
  value: 'Pacific/Wake',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Wake', 'chat-viber')
}, {
  value: 'Pacific/Wallis',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Wallis', 'chat-viber')
}, {
  value: 'Pacific/Yap',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Yap', 'chat-viber')
}, {
  value: 'Poland',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Poland', 'chat-viber')
}, {
  value: 'Portugal',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Portugal', 'chat-viber')
}, {
  value: 'ROC',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('ROC', 'chat-viber')
}, {
  value: 'ROK',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('ROK', 'chat-viber')
}, {
  value: 'Singapore',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Singapore', 'chat-viber')
}, {
  value: 'Turkey',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Turkey', 'chat-viber')
}, {
  value: 'UCT',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('UCT', 'chat-viber')
}, {
  value: 'US/Alaska',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('US/Alaska', 'chat-viber')
}, {
  value: 'US/Aleutian',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('US/Aleutian', 'chat-viber')
}, {
  value: 'US/Arizona',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('US/Arizona', 'chat-viber')
}, {
  value: 'US/Central',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('US/Central', 'chat-viber')
}, {
  value: 'US/East-Indiana',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('US/East-Indiana', 'chat-viber')
}, {
  value: 'US/Eastern',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('US/Eastern', 'chat-viber')
}, {
  value: 'US/Hawaii',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('US/Hawaii', 'chat-viber')
}, {
  value: 'US/Indiana-Starke',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('US/Indiana-Starke', 'chat-viber')
}, {
  value: 'US/Michigan',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('US/Michigan', 'chat-viber')
}, {
  value: 'US/Mountain',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('US/Mountain', 'chat-viber')
}, {
  value: 'US/Pacific',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('US/Pacific', 'chat-viber')
}, {
  value: 'US/Pacific-New',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('US/Pacific-New', 'chat-viber')
}, {
  value: 'US/Samoa',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('US/Samoa', 'chat-viber')
}, {
  value: 'UTC',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('UTC', 'chat-viber')
}, {
  value: 'Universal',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Universal', 'chat-viber')
}, {
  value: 'W-SU',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('W-SU', 'chat-viber')
}, {
  value: 'WET',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('WET', 'chat-viber')
}, {
  value: 'Zulu',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Zulu', 'chat-viber')
}];
function Edit(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    buttonSize,
    buttonType,
    borderRadius,
    text,
    info,
    title,
    online,
    offline,
    textAlignment,
    iconTarget,
    visibility,
    numberInput,
    imageUrl,
    timeZone,
    mondayStartTime,
    mondayEndTime,
    tuesdayStartTime,
    tuesdayEndTime,
    wednesdayStartTime,
    wednesdayEndTime,
    thursdayStartTime,
    thursdayEndTime,
    fridayStartTime,
    fridayEndTime,
    saturdayStartTime,
    saturdayEndTime,
    sundayStartTime,
    sundayEndTime
  } = attributes;

  // Timezone select and filter //
  const [filteredOptions, setFilteredOptions] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(timezones);
  function onInputChange(value) {
    setFilteredOptions(timezones.filter(timezone => timezone.label.toLowerCase().includes(value.toLowerCase())));
  }
  function onFontSizeChange(value) {
    setAttributes({
      timeZone: value
    });
  }

  // Image upload  //
  const onSelectImage = image => {
    setAttributes({
      imageUrl: image.url
    });
  };
  const onChangeAlignment = newAlignment => {
    setAttributes({
      textAlignment: newAlignment
    });
  };
  const onChangeText = newText => {
    setAttributes({
      text: newText
    });
  };
  const advancedBtnInfo = newInfo => {
    setAttributes({
      info: newInfo
    });
  };
  const advancedBtnTitle = newTitle => {
    setAttributes({
      title: newTitle
    });
  };
  const advancedBtnOnlineBadge = newOnline => {
    setAttributes({
      online: newOnline
    });
  };
  const advancedBtnOfflineBadge = newOnline => {
    setAttributes({
      offline: newOnline
    });
  };
  const onIconTarget = iconTargets => {
    setAttributes({
      iconTarget: iconTargets
    });
  };
  const textClasses = classnames__WEBPACK_IMPORTED_MODULE_5___default()(`text-box-align-${textAlignment}`);
  const classes = classnames__WEBPACK_IMPORTED_MODULE_5___default()(`vChat-button-4 vc-btn-bg`);
  const buttonSizeOptions = [{
    value: 'size-small',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Small', 'chat-viber')
  }, {
    value: 'size-medium',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Medium', 'chat-viber')
  }, {
    value: 'size-large',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Large', 'chat-viber')
  }];
  const buttonTypeOptions = [{
    value: 'basic-button',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Basic Button', 'chat-viber')
  }, {
    value: 'advance-button',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Advance Button', 'chat-viber')
  }];
  const borderRadiusOptions = [{
    value: 'border-squared',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Squared', 'chat-viber')
  }, {
    value: 'border-rounded',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Rounded', 'chat-viber')
  }];
  const visibilityOn = [{
    value: '',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Everywhere', 'chat-viber')
  }, {
    value: 'vc-desktop-only',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Desktop only', 'chat-viber')
  }, {
    value: 'vc-tablet-only',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tablets only', 'chat-viber')
  }, {
    value: 'vc-mobile-tablet-only',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Mobile and tablets', 'chat-viber')
  }, {
    value: 'vc-mobile-only',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Mobile only', 'chat-viber')
  }];
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Button Type', 'chat-viber'),
    value: buttonType,
    options: buttonTypeOptions.map(_ref => {
      let {
        value,
        label
      } = _ref;
      return {
        value,
        label
      };
    }),
    onChange: newButton => {
      setAttributes({
        buttonType: newButton
      });
    },
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Choose the type of button', 'chat-viber')
  }))), buttonType === 'basic-button' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Ganerel settings', 'chat-viber'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Number', 'chat-viber'),
    value: numberInput,
    onChange: value => setAttributes({
      numberInput: value
    }),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add your viber number including country code. eg: +8801235445452', 'chat-viber')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Button label', 'chat-viber'),
    value: text,
    onChange: value => setAttributes({
      text: value
    }),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add Custom Button Label', 'chat-viber')
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Appearance settings', 'chat-viber'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Visibility on', 'chat-viber'),
    value: visibility,
    options: visibilityOn.map(_ref2 => {
      let {
        value,
        label
      } = _ref2;
      return {
        value,
        label
      };
    }),
    onChange: newSize => {
      setAttributes({
        visibility: newSize
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Size', 'chat-viber'),
    value: buttonSize,
    options: buttonSizeOptions.map(_ref3 => {
      let {
        value,
        label
      } = _ref3;
      return {
        value,
        label
      };
    }),
    onChange: newSize => {
      setAttributes({
        buttonSize: newSize
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add Icon', 'chat-viber'),
    checked: iconTarget,
    onChange: onIconTarget
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'chat-viber'),
    value: borderRadius,
    options: borderRadiusOptions.map(_ref4 => {
      let {
        value,
        label
      } = _ref4;
      return {
        value,
        label
      };
    }),
    onChange: newSize => {
      setAttributes({
        borderRadius: newSize
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.AlignmentToolbar, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Allignment', 'chat-viber'),
    value: textAlignment,
    onChange: onChangeAlignment
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.AlignmentToolbar, {
    value: textAlignment,
    onChange: onChangeAlignment
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `button-wrapper vchat-editor ${textClasses}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({
    className: `${classes} ${buttonSize} ${borderRadius} ${visibility}`
  }), iconTarget && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: "dashicons dashicons-share-alt"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    onChange: onChangeText,
    value: text,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('How can I help you?', 'chat-viber'),
    tagName: "span",
    allowedFormats: []
  })))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Ganeral Setting', 'chat-viber'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Number', 'chat-viber'),
    value: numberInput,
    onChange: value => setAttributes({
      numberInput: value
    }),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add your viber number including country code. eg: +8801235445452', 'chat-viber')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Agent photo', 'chat-viber'),
    onSelect: onSelectImage,
    allowedTypes: ['image'],
    render: _ref5 => {
      let {
        open
      } = _ref5;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        onClick: open,
        style: {
          marginBottom: '20px',
          fontSize: '16px'
        }
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
        className: "dashicons dashicons-cloud-upload"
      }), ' ', "Upload Image");
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Agent Info', 'chat-viber'),
    value: info,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add agent name and designation to show in button', 'chat-viber'),
    onChange: value => setAttributes({
      info: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Button label', 'chat-viber'),
    value: title,
    onChange: value => setAttributes({
      title: value
    }),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add Custom Button Label', 'chat-viber')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Online badge text', 'chat-viber'),
    value: online,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add Custom badge text when user in online', 'chat-viber'),
    onChange: value => setAttributes({
      online: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Offline badge text', 'chat-viber'),
    value: offline,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add Custom badge text when user in offline', 'chat-viber'),
    onChange: value => setAttributes({
      offline: value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Chat Settings', 'chat-viber'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ComboboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Timezone', 'chat-viber'),
    value: timeZone,
    options: filteredOptions,
    onChange: onFontSizeChange,
    onInputChange: onInputChange,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('When using the date and time from the user browser you can transform it to your current timezone (in case your user is in a different timezone)', 'chat-viber')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Monday', 'chat-viber'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Start Time:', 'chat-viber'),
    value: mondayStartTime,
    onChange: value => setAttributes({
      mondayStartTime: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('00:01', 'chat-viber')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('End Time:', 'chat-viber'),
    value: mondayEndTime,
    onChange: value => setAttributes({
      mondayEndTime: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('23:59', 'chat-viber')
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tuesday', 'chat-viber'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Start Time:', 'chat-viber'),
    value: tuesdayStartTime,
    onChange: value => setAttributes({
      tuesdayStartTime: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('00:01', 'chat-viber')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('End Time:', 'chat-viber'),
    value: tuesdayEndTime,
    onChange: value => setAttributes({
      tuesdayEndTime: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('23:59', 'chat-viber')
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Wednesday', 'chat-viber'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Start Time:', 'chat-viber'),
    value: wednesdayStartTime,
    onChange: value => setAttributes({
      wednesdayStartTime: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('00:01', 'chat-viber')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('End Time:', 'chat-viber'),
    value: wednesdayEndTime,
    onChange: value => setAttributes({
      wednesdayEndTime: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('23:59', 'chat-viber')
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Thursday', 'chat-viber'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Start Time:', 'chat-viber'),
    value: thursdayStartTime,
    onChange: value => setAttributes({
      thursdayStartTime: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('00:01', 'chat-viber')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('End Time:', 'chat-viber'),
    value: thursdayEndTime,
    onChange: value => setAttributes({
      thursdayEndTime: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('23:59', 'chat-viber')
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Friday', 'chat-viber'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Start Time:', 'chat-viber'),
    value: fridayStartTime,
    onChange: value => setAttributes({
      fridayStartTime: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('00:01', 'chat-viber')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('End Time:', 'chat-viber'),
    value: fridayEndTime,
    onChange: value => setAttributes({
      fridayEndTime: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('23:59', 'chat-viber')
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Saturday', 'chat-viber'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Start Time:', 'chat-viber'),
    value: saturdayStartTime,
    onChange: value => setAttributes({
      saturdayStartTime: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('00:01', 'chat-viber')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('End Time:', 'chat-viber'),
    value: saturdayEndTime,
    onChange: value => setAttributes({
      saturdayEndTime: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('23:59', 'chat-viber')
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Sunday', 'chat-viber'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Start Time:', 'chat-viber'),
    value: sundayStartTime,
    onChange: value => setAttributes({
      sundayStartTime: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('00:01', 'chat-viber')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('End Time:', 'chat-viber'),
    value: sundayEndTime,
    onChange: value => setAttributes({
      sundayEndTime: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('23:59', 'chat-viber')
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Appearence settings', 'chat-viber'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Visibility on', 'chat-viber'),
    value: visibility,
    options: visibilityOn.map(_ref6 => {
      let {
        value,
        label
      } = _ref6;
      return {
        value,
        label
      };
    }),
    onChange: newSize => {
      setAttributes({
        visibility: newSize
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Size', 'chat-viber'),
    value: buttonSize,
    options: buttonSizeOptions.map(_ref7 => {
      let {
        value,
        label
      } = _ref7;
      return {
        value,
        label
      };
    }),
    onChange: newSize => {
      setAttributes({
        buttonSize: newSize
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'chat-viber'),
    value: borderRadius,
    options: borderRadiusOptions.map(_ref8 => {
      let {
        value,
        label
      } = _ref8;
      return {
        value,
        label
      };
    }),
    onChange: newSize => {
      setAttributes({
        borderRadius: newSize
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.AlignmentToolbar, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Allignment', 'chat-viber'),
    value: textAlignment,
    onChange: onChangeAlignment
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.AlignmentToolbar, {
    value: textAlignment,
    onChange: onChangeAlignment
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `button-wrapper vchat-editor ${textClasses}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({
    className: `avatar-active vcButtons ${classes} ${buttonSize} ${borderRadius} ${visibility}`
  }), {
    "data-timezone": timeZone,
    "data-btnavailablety": `{ "monday":"${mondayStartTime}-${mondayEndTime}", "tuesday":"${tuesdayStartTime}-${tuesdayEndTime}", "wednesday":"${wednesdayStartTime}-${wednesdayEndTime}", "thursday":"${thursdayStartTime}-${thursdayEndTime}", "friday":"${fridayStartTime}-${fridayEndTime}", "saturday":"${saturdayStartTime}-${saturdayEndTime}", "sunday":"${sundayStartTime}-${sundayEndTime}" }`
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
    src: imageUrl ? imageUrl : agentImage,
    alt: "agent"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "info-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    onChange: advancedBtnInfo,
    value: info,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Robert / Sales Support', 'chat-viber'),
    tagName: "p",
    allowedFormats: [],
    className: "info"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    onChange: advancedBtnTitle,
    value: title,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('How can I help you?', 'chat-viber'),
    tagName: "p",
    allowedFormats: [],
    className: "title"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    onChange: advancedBtnOnlineBadge,
    value: online,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("I'm available", 'chat-viber'),
    tagName: "p",
    allowedFormats: [],
    className: "online"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    onChange: advancedBtnOfflineBadge,
    value: offline,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("I'm offline", 'chat-viber'),
    tagName: "p",
    allowedFormats: [],
    className: "offline"
  }))))));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../block.json */ "./block.json");






// const x = 0;

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);




const agentImage = __webpack_require__(/*! ./image/user.jpg */ "./src/image/user.jpg");
function save(_ref) {
  let {
    attributes
  } = _ref;
  const {
    buttonSize,
    borderRadius,
    buttonType,
    text,
    info,
    title,
    online,
    offline,
    textAlignment,
    buttonLinkTarget,
    numberInput,
    visibility,
    iconTarget,
    imageUrl,
    timeZone,
    mondayStartTime,
    mondayEndTime,
    tuesdayStartTime,
    tuesdayEndTime,
    wednesdayStartTime,
    wednesdayEndTime,
    thursdayStartTime,
    thursdayEndTime,
    fridayStartTime,
    fridayEndTime,
    saturdayStartTime,
    saturdayEndTime,
    sundayStartTime,
    sundayEndTime
  } = attributes;
  const viberLink = `viber://chat?number=${numberInput}`;
  const textClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()(`text-box-align-${textAlignment}`);
  const basicBtnClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()(`vChat-button-4 vc-btn-bg`);
  const advanceBtnClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()(`vcButtons viber__target vChat-button-4 vc-btn-bg`);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, buttonType === 'basic-button' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `button-wrapper ${textClasses}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    href: viberLink
  }, _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
    className: `viber__target ${basicBtnClasses} ${buttonSize} ${borderRadius} ${visibility}`
  })), iconTarget && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: "dashicons dashicons-share-alt"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "span",
    value: text
  }))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `button-wrapper ${textClasses}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
    className: `${advanceBtnClasses} ${buttonSize} ${borderRadius} ${visibility}`
  }), {
    "data-timezone": timeZone,
    "data-btnavailablety": `{ "monday":"${mondayStartTime}-${mondayEndTime}", "tuesday":"${tuesdayStartTime}-${tuesdayEndTime}", "wednesday":"${wednesdayStartTime}-${wednesdayEndTime}", "thursday":"${thursdayStartTime}-${thursdayEndTime}", "friday":"${fridayStartTime}-${fridayEndTime}", "saturday":"${saturdayStartTime}-${saturdayEndTime}", "sunday":"${sundayStartTime}-${sundayEndTime}" }`
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
    src: imageUrl ? imageUrl : agentImage,
    alt: "agent"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "info-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    value: info,
    tagName: "p",
    className: "info"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    value: title,
    tagName: "p",
    className: "title"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    value: online,
    tagName: "p",
    className: "online"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    value: offline,
    tagName: "p",
    className: "offline"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", {
    href: viberLink
  }))));
}

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/image/user.jpg":
/*!****************************!*\
  !*** ./src/image/user.jpg ***!
  \****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/user.ed3f4cb9.jpg";

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./block.json":
/*!********************!*\
  !*** ./block.json ***!
  \********************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"create-block/vchat-block","version":"0.1.0","title":"vChat-block","category":"viber-block","icon":"share-alt","description":"Allow your users to send you direct Viber messages by clicking floating chat button and buttons with vChat block.","textdomain":"chat-viber","editorScript":"file:./build/index.js","editorStyle":"file:./build/index.css","style":"file:./build/style-index.css","keywords":["viber","vChat","chat","viberChat"],"supports":{"html":false,"color":{"background":true,"text":true,"hover":true},"spacing":{},"typography":{}},"example":{"attributes":{"text":"How can I help you?"}},"attributes":{"text":{"type":"string","default":"How can I help you?"},"info":{"type":"string","default":"Robert / Sales Support"},"title":{"type":"string","default":"How can I help you?"},"online":{"type":"string","default":"I\'m available"},"offline":{"type":"string","default":"I\'m offline"},"buttonType":{"type":"string","default":"basic-button"},"buttonSize":{"type":"string","default":"size-medium"},"borderRadius":{"type":"string","default":"border-squared"},"visibility":{"type":"string","default":""},"textAlignment":{"type":"string","default":"left"},"iconTarget":{"type":"boolean","default":false},"numberInput":{"type":"string","default":""},"imageUrl":{"type":"string","default":""},"timeZone":{"type":"string","default":""},"mondayStartTime":{"type":"string","default":"00:01"},"mondayEndTime":{"type":"string","default":"23:59"},"tuesdayStartTime":{"type":"string","default":"00:01"},"tuesdayEndTime":{"type":"string","default":"23:59"},"wednesdayStartTime":{"type":"string","default":"00:01"},"wednesdayEndTime":{"type":"string","default":"23:59"},"thursdayStartTime":{"type":"string","default":"00:01"},"thursdayEndTime":{"type":"string","default":"23:59"},"fridayStartTime":{"type":"string","default":"00:01"},"fridayEndTime":{"type":"string","default":"23:59"},"saturdayStartTime":{"type":"string","default":"00:01"},"saturdayEndTime":{"type":"string","default":"23:59"},"sundayStartTime":{"type":"string","default":"00:01"},"sundayEndTime":{"type":"string","default":"23:59"}}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkvchat_block"] = self["webpackChunkvchat_block"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map