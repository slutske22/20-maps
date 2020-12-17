export const trackPopup = {
	content:
		"<font><b><font size='3' style=''>STORM NAME: </font></b><b><font size='3'>{STORMNAME}</font></b></font><font size='2'><i><font><br /></font></i><i><span style='font-family: Arial, sans-serif;'><br /></span></i><span style='font-family: Arial, sans-serif;'><a href='https://www.noaa.gov/' target='_blank'><b><span style='color: mediumturquoise;'>NOAA</span></b></a></span><span style='font-family: Arial, sans-serif;'> - </span><span style='font-family: Arial, sans-serif;'><a href='https://www.nhc.noaa.gov/' target='_blank'><b><font color='#dc143c'>National Hurricane Center</font></b></a></span></font>",
};

export const hurricanePopup = {
	content:
		"<b><font size='3'>OBSERVED STORMS TO DATE ({YEAR})</font></b>\n<br /> <br />\n<font size='3'><b>{STORMNAME} </b>was observed here on<b> {DTG}</b> and was classified as a <b>{expression/expr0}</b>.\n<br /><br />The maximum wind speed recorded was <b>{INTENSITY} knots</b>.</font>\n\n<br /><br /></font>\n\n<font size='2'><i>Longitude/Latitude: {LAT}, {LON}\n\n<br /></i>\n\n<i><span style='font-family: Arial, sans-serif;'><br /> </span></i>\n\n<span style='font-family: Arial, sans-serif;'><a href='https://www.noaa.gov/' target='_blank'>\n\n<b><span style='color: mediumturquoise;'>NOAA</span></b></a></span>\n\n<span style='font-family: Arial, sans-serif;'> - </span>\n\n<span style='font-family: Arial, sans-serif;'>\n\n<a href='https://www.nhc.noaa.gov/' style='' target='_blank'><b><font color='#b22222'>National Hurricane Center</font></b></a></span>\n",
	showAttachments: true,
	expressionInfos: [
		{
			name: 'expr0',
			title: 'Custom',
			expression:
				'var BASIN = $feature.BASIN\r\nvar INTENSITY = $feature.INTENSITY\r\n\r\nif (BASIN == "al" || BASIN =="cp" || BASIN == "EP" || BASIN == "ep" || BASIN == "NA" || BASIN == "SA" || BASIN == "SL" || BASIN == "CS" || BASIN =="GM"){\r\nWhen(INTENSITY<=33,"Tropical Depression", \r\nINTENSITY>33&&INTENSITY<=63,"Tropical Storm",\r\nINTENSITY>63&&INTENSITY<=82,"Category 1 Hurricane",\r\nINTENSITY>82&&INTENSITY<=95,"Category 2 Hurricane",\r\nINTENSITY>95&&INTENSITY<=112,"Category 3 Hurricane",\r\nINTENSITY>112&&INTENSITY<=136,"Category 4 Hurricane",\r\nINTENSITY>136,"Category 5 Hurricane","NO DATA")\r\n}\r\n\r\nelse if (BASIN == "WP") {\r\nWhen (INTENSITY <=33, "Tropical Depression",\r\nINTENSITY >33&&INTENSITY<=63, "Tropical Storm",\r\nINTENSITY >63&&INTENSITY<=129, "Typhoon",\r\nINTENSITY >129, "Super Typhoon", "NO DATA")\r\n}\r\n\r\nelse if (BASIN == "SH" || BASIN == "SP" || BASIN == "WA" || BASIN == "EA") {\r\nWhen (INTENSITY <=33, "Tropical Disturbance/Depression/Low",\r\nINTENSITY >34&&INTENSITY<=47, "Category 1 Tropical Cyclone",\r\nINTENSITY >48&&INTENSITY<=63, "Category 2 Tropical Cyclone",\r\nINTENSITY >64&&INTENSITY<=85, "Category 3 Tropical Cyclone",\r\nINTENSITY >86&&INTENSITY<=107, "Category 4 Tropical Cyclone",\r\nINTENSITY >108, "Category 5 Tropical Cyclone", "NO DATA")\r\n}\r\n\r\nelse if (BASIN == "IO" || BASIN == "NI" || BASIN == "AS" || BASIN == "BB") {\r\nWhen (INTENSITY <=17, "Low Pressure Area",\r\nINTENSITY >17&&INTENSITY<=27, "Depression",\r\nINTENSITY >28&&INTENSITY<=33, "Deep Depression",\r\nINTENSITY >34&&INTENSITY<=47, "Cyclonic Storm",\r\nINTENSITY >48&&INTENSITY<=63, "Severe Cyclonic Storm",\r\nINTENSITY >64&&INTENSITY<=89, "Very Severe Cyclonic Storm",\r\nINTENSITY >90&&INTENSITY<=119, "Extremely Severe Cyclonic Storm",\r\nINTENSITY >120, "Super Cyclonic Storm", "NO DATA")\r\n}\r\n\r\nelse if (BASIN == "SI") {\r\nWhen (INTENSITY <=28, "Zone of Disturbed Weather",\r\nINTENSITY >28&&INTENSITY<=29, "Tropical Disturbance",\r\nINTENSITY >30&&INTENSITY<=33, "Tropical Depression",\r\nINTENSITY >34&&INTENSITY<=47, "Moderate Tropical Storm",\r\nINTENSITY >48&&INTENSITY<=63, "Severe Tropical Storm",\r\nINTENSITY >64&&INTENSITY<=85, "Tropical Cyclone",\r\nINTENSITY >86&&INTENSITY<=113, "Intense Tropical Cyclone",\r\nINTENSITY >114, "Very Intense Tropical Cyclone", "NO DATA")\r\n}\r\n\r\nelse {\r\nreturn "Testing"\r\n}',
			returnType: 'string',
		},
	],
};

export const photoPopupTemplate = {
	content: [
		{
			type: 'text',
			text: `
            <h3>{Title}</h3>
            <h3 class="subtitle">{Date_Time}</h3>
            <p class="description">{Description}</p>
         `,
		},
		{
			type: 'attachments',
			displayType: 'preview',
		},
	],
};
