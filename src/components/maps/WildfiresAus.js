import React, { useRef, useEffect } from 'react';
import Map from 'esri/Map';
import MapView from 'esri/views/MapView';

const WildfiresAustralia = () => {
	const element = useRef();

	useEffect(() => {
		const map = new Map({
			basemap: 'gray-vector',
		});

		const view = new MapView({
			container: element.current,
			center: [-100, 38],
			zoom: 4,
			map: map,
		});
	}, []);

	return <div className="arcgis-map" ref={element} />;
};

export default WildfiresAustralia;
