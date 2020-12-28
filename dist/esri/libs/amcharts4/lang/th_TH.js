// COPYRIGHT © 2020 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports"],(function(e,_){"use strict";Object.defineProperty(_,"__esModule",{value:!0}),_.default={_decimalSeparator:".",_thousandSeparator:",",_big_number_suffix_3:"k",_big_number_suffix_6:"M",_big_number_suffix_9:"G",_big_number_suffix_12:"T",_big_number_suffix_15:"P",_big_number_suffix_18:"E",_big_number_suffix_21:"Z",_big_number_suffix_24:"Y",_small_number_suffix_3:"m",_small_number_suffix_6:"μ",_small_number_suffix_9:"n",_small_number_suffix_12:"p",_small_number_suffix_15:"f",_small_number_suffix_18:"a",_small_number_suffix_21:"z",_small_number_suffix_24:"y",_byte_suffix_B:"B",_byte_suffix_KB:"KB",_byte_suffix_MB:"MB",_byte_suffix_GB:"GB",_byte_suffix_TB:"TB",_byte_suffix_PB:"PB",_date_millisecond:"mm:ss SSS",_date_second:"HH:mm:ss",_date_minute:"HH:mm",_date_hour:"HH:mm",_date_day:"MMM dd",_date_week:"ww",_date_month:"MMM",_date_year:"yyyy",_duration_millisecond:"SSS",_duration_millisecond_second:"ss.SSS",_duration_millisecond_minute:"mm:ss SSS",_duration_millisecond_hour:"hh:mm:ss SSS",_duration_millisecond_day:"d'd' mm:ss SSS",_duration_millisecond_week:"d'd' mm:ss SSS",_duration_millisecond_month:"M'm' dd'd' mm:ss SSS",_duration_millisecond_year:"y'y' MM'm' dd'd' mm:ss SSS",_duration_second:"ss",_duration_second_minute:"mm:ss",_duration_second_hour:"hh:mm:ss",_duration_second_day:"d'd' hh:mm:ss",_duration_second_week:"d'd' hh:mm:ss",_duration_second_month:"M'm' dd'd' hh:mm:ss",_duration_second_year:"y'y' MM'm' dd'd' hh:mm:ss",_duration_minute:"mm",_duration_minute_hour:"hh:mm",_duration_minute_day:"d'd' hh:mm",_duration_minute_week:"d'd' hh:mm",_duration_minute_month:"M'm' dd'd' hh:mm",_duration_minute_year:"y'y' MM'm' dd'd' hh:mm",_duration_hour:"hh'h'",_duration_hour_day:"d'd' hh'h'",_duration_hour_week:"d'd' hh'h'",_duration_hour_month:"M'm' dd'd' hh'h'",_duration_hour_year:"y'y' MM'm' dd'd' hh'h'",_duration_day:"d'd'",_duration_day_week:"d'd'",_duration_day_month:"M'm' dd'd'",_duration_day_year:"y'y' MM'm' dd'd'",_duration_week:"w'w'",_duration_week_month:"w'w'",_duration_week_year:"w'w'",_duration_month:"M'm'",_duration_month_year:"y'y' MM'm'",_duration_year:"y'y'",_era_ad:"ค.ศ.",_era_bc:"ก่อน ค.ศ.",A:"a",P:"p",AM:"ก่อนเที่ยง",PM:"หลังเที่ยง","A.M.":"ก่อนเที่ยง","P.M.":"หลังเที่ยง",January:"มกราคม",February:"กุมภาพันธ์",March:"มีนาคม",April:"เมษายน",May:"พฤษภาคม",June:"มิถุนายน",July:"กรกฎาคม",August:"สิงหาคม",September:"กันยายน",October:"ตุลาคม",November:"พฤศจิกายน",December:"ธันวาคม",Jan:"ม.ค.",Feb:"ก.พ.",Mar:"มี.ค.",Apr:"เม.ย.","May(short)":"พ.ค.",Jun:"มิ.ย.",Jul:"ก.ค.",Aug:"ส.ค.",Sep:"ก.ย.",Oct:"ต.ค.",Nov:"พ.ย.",Dec:"ธ.ค.",Sunday:"วันอาทิตย์",Monday:"วันจันทร์",Tuesday:"วันอังคาร",Wednesday:"วันพุธ",Thursday:"วันพฤหัสบดี",Friday:"วันศุกร์",Saturday:"วันเสาร์",Sun:"อา.",Mon:"จ.",Tue:"อ.",Wed:"พ.",Thu:"พฤ.",Fri:"ศ.",Sat:"ส.",_dateOrd:function(e){var _="th";if(e<11||e>13)switch(e%10){case 1:_="st";break;case 2:_="nd";break;case 3:_="rd"}return _},"Zoom Out":"ขยาย",Play:"เล่น",Stop:"หยุด",Legend:"คำอธิบายสัญลักษณ์","Click, tap or press ENTER to toggle":"",Loading:"กำลังโหลด",Home:"หน้าหลัก",Chart:"","Serial chart":"","X/Y chart":"","Pie chart":"","Gauge chart":"","Radar chart":"","Sankey diagram":"","Flow diagram":"","Chord diagram":"","TreeMap chart":"","Sliced chart":"",Series:"","Candlestick Series":"","OHLC Series":"","Column Series":"","Line Series":"","Pie Slice Series":"","Funnel Series":"","Pyramid Series":"","X/Y Series":"",Map:"","Press ENTER to zoom in":"","Press ENTER to zoom out":"","Use arrow keys to zoom in and out":"","Use plus and minus keys on your keyboard to zoom in and out":"",Export:"พิมพ์",Image:"รูปภาพ",Data:"ข้อมูล",Print:"พิมพ์","Click, tap or press ENTER to open":"","Click, tap or press ENTER to print.":"","Click, tap or press ENTER to export as %1.":"",'To save the image, right-click this link and choose "Save picture as..."':"",'To save the image, right-click thumbnail on the left and choose "Save picture as..."':"","(Press ESC to close this message)":"","Image Export Complete":"","Export operation took longer than expected. Something might have gone wrong.":"","Saved from":"",PNG:"",JPG:"",GIF:"",SVG:"",PDF:"",JSON:"",CSV:"",XLSX:"","Use TAB to select grip buttons or left and right arrows to change selection":"","Use left and right arrows to move selection":"","Use left and right arrows to move left selection":"","Use left and right arrows to move right selection":"","Use TAB select grip buttons or up and down arrows to change selection":"","Use up and down arrows to move selection":"","Use up and down arrows to move lower selection":"","Use up and down arrows to move upper selection":"","From %1 to %2":"จาก %1 ถึง %2","From %1":"จาก %1","To %1":"ถึง %1","No parser available for file: %1":"","Error parsing file: %1":"","Unable to load file: %1":"","Invalid date":""}}));