import React, { useEffect, useRef } from 'react';
import EsriMap from 'esri/Map';
import MapView from 'esri/views/MapView';
import LayerList from 'esri/widgets/LayerList';
import TimeSlider from 'esri/widgets/TimeSlider';
import loadArcGISCSS from '../../../utils/arcgis.css.loader';
import './styles.scss';

const Map = ({ metadata, mapState: { basemap, layers, zoom, center } }) => {
	const element = useRef(null);

	useEffect(() => {
		loadArcGISCSS(metadata.theme || 'dark');

		const map = new EsriMap({
			basemap: basemap || null,
			layers: layers,
		});

		const view = new MapView({
			container: element.current,
			map,
			zoom,
			center,
			highlightOptions: {
				fillOpacity: 0,
				color: [50, 50, 50],
			},
			navigation: {
				mouseWheelZoomEnabled: false,
				browserTouchPanEnabled: false,
			},
		});

		// save layerviews to apply filters in timeSlider.watch
		var layerViews = [];
		layers.forEach((layer) => {
			view.whenLayerView(layer).then((layerView) => {
				layerViews.push(layerView);
			});

			const customLegend = document.querySelector(
				'.esri-component.esri-legend.esri-widget.esri-widget--panel'
			);
			const bottomLeft = document.querySelector(
				'.esri-ui-bottom-left.esri-ui-corner'
			);
			bottomLeft.appendChild(customLegend);
			customLegend.style.display = 'flex';
		});

		// Layer List
		var layerList = new LayerList({
			view,
			statusIndicatorsVisible: false,
			listItemCreatedFunction: function (e) {
				switch (e.item.layer.id) {
					case 'racial':
						e.item.title = 'Race Related';
						break;
					case 'covid':
						e.item.title = 'Coronavirus Related';
						break;
					case 'other':
						e.item.title = 'Other';
						break;
				}
			},
		});

		view.ui.add(layerList, 'top-right');

		// timeslider
		var timeSlider = new TimeSlider({
			container: 'timeSlider',
			playRate: 100,
			mode: 'cumulative-from-start',
			loop: false,
			fullTimeExtent: {
				start: new Date(2020, 0, 1),
				end:
					new Date(2020, 11, 31) > new Date()
						? new Date()
						: new Date(2020, 11, 31),
			},
			stops: {
				interval: {
					value: 1,
					unit: 'days',
				},
			},
			tickConfigs: [
				{
					mode: 'count',
					values:
						new Date(2020, 11, 31) > new Date()
							? new Date().getMonth() + 1
							: 12,
					labelsVisible: true,
					labelFormatFunction: (value) => {
						const date = new Date(value);
						return date.toLocaleString('default', { month: 'short' });
					},
				},
			],
		});

		view.ui.add(timeSlider, 'bottom-right');

		// update layer view filter to reflect current timeExtent, all protests in layer up to timeExtend
		timeSlider.watch('timeExtent', function (value) {
			const dateString = value.end.getTime();

			layerViews.forEach((layerView) => {
				layerView.effect = {
					filter: {
						where: `Date <= '${dateString}'`,
					},
					excludedEffect: 'opacity(0%)',
				};
			});
		});
	}, []);

	return (
		<>
			<div className={`arcgis-map ${metadata.name}`} ref={element} />
			{/* Copied and customized from esri legend widget */}
			<div
				className="esri-component esri-legend esri-widget esri-widget--panel"
				style={{ display: 'none' }}
			>
				<div>
					<div className="esri-legend__service">
						<h3 className="esri-widget__heading esri-legend__service-label">
							Protests 2020
						</h3>
						<div className="esri-legend__layer">
							<div className="esri-legend__layer-table esri-legend__layer-table--size-ramp">
								<div className="esri-legend__layer-caption">
									No. of Attendees
								</div>
								<div className="esri-legend__layer-body">
									<div className="esri-legend__layer-row">
										<div className="esri-legend__layer-cell esri-legend__layer-cell--symbols esri-legend__size-ramp">
											<div className="esri-legend__symbol">
												<div style={{ opacity: 1 }}>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="40"
														height="40"
													>
														<defs></defs>
														<g transform="matrix(0.9836065769195557,0,0,0.9836065769195557,0.32786884903907776,0.32786884903907776)">
															<circle
																fillRule="evenodd"
																fill="rgba(255, 255, 255, 0)"
																stroke="rgba(255, 255, 255, 1)"
																strokeWidth="0.6666666666666666"
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeDasharray="none"
																strokeMiterlimit="4"
																cx="20"
																cy="20"
																r="20"
															></circle>
														</g>
													</svg>
												</div>
											</div>
										</div>
										<div className="esri-legend__layer-cell esri-legend__layer-cell--info">
											&gt; 100,000
										</div>
									</div>
									<div className="esri-legend__layer-row">
										<div className="esri-legend__layer-cell esri-legend__layer-cell--symbols esri-legend__size-ramp">
											<div className="esri-legend__symbol">
												<div style={{ opacity: 1 }}>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="14"
														height="14"
													>
														<defs></defs>
														<g transform="matrix(1,0,0,1,0.3333333432674408,0.3333333432674408)">
															<circle
																fillRule="evenodd"
																fill="rgba(255, 255, 255, 0)"
																stroke="rgba(255, 255, 255, 1)"
																strokeWidth="0.6666666666666666"
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeDasharray="none"
																strokeMiterlimit="4"
																cx="6.666666666666667"
																cy="6.666666666666667"
																r="6.666666666666667"
															></circle>
														</g>
													</svg>
												</div>
											</div>
										</div>
										<div className="esri-legend__layer-cell esri-legend__layer-cell--info">
											500
										</div>
									</div>
									<div className="esri-legend__layer-row">
										<div className="esri-legend__layer-cell esri-legend__layer-cell--symbols esri-legend__size-ramp">
											<div className="esri-legend__symbol">
												<div style={{ opacity: 1 }}>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="4"
														height="4"
													>
														<defs></defs>
														<g transform="matrix(0.8571428656578064,0,0,0.8571428656578064,0.2857142984867096,0.2857142984867096)">
															<circle
																fillRule="evenodd"
																fill="rgba(255, 255, 255, 0)"
																stroke="rgba(255, 255, 255, 1)"
																strokeWidth="0.6666666666666666"
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeDasharray="none"
																strokeMiterlimit="4"
																cx="2"
																cy="2"
																r="2"
															></circle>
														</g>
													</svg>
												</div>
											</div>
										</div>
										<div className="esri-legend__layer-cell esri-legend__layer-cell--info">
											&lt; 1 or No Data
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div>
					<div className="esri-legend__service protest-subject">
						<h3 className="esri-widget__heading esri-legend__service-label">
							&nbsp;
						</h3>
						<div className="esri-legend__layer">
							<div className="esri-legend__layer-table esri-legend__layer-table--size-ramp">
								<div className="esri-legend__layer-caption">
									Description Mentions:
								</div>
								<div className="esri-legend__layer-body">
									<div className="esri-legend__layer-row protest-subject">
										<div className="esri-legend__layer-cell esri-legend__layer-cell--symbols esri-legend__size-ramp">
											<div className="esri-legend__symbol">
												<div style={{ opacity: 1 }}>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="14"
														height="14"
													>
														<defs></defs>
														<g transform="matrix(1,0,0,1,0.3333333432674408,0.3333333432674408)">
															<circle
																fillRule="evenodd"
																fill="rgba(153, 51, 51, 0.5)"
																stroke="rgba(153, 51, 51, 1)"
																strokeWidth="0.6666666666666666"
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeDasharray="none"
																strokeMiterlimit="4"
																cx="6.666666666666667"
																cy="6.666666666666667"
																r="6.666666666666667"
															></circle>
														</g>
													</svg>
												</div>
											</div>
										</div>
										<div className="esri-legend__layer-cell esri-legend__layer-cell--info">
											"Racial" or "Police"
										</div>
									</div>
									<div className="esri-legend__layer-row  protest-subject">
										<div className="esri-legend__layer-cell esri-legend__layer-cell--symbols esri-legend__size-ramp">
											<div className="esri-legend__symbol">
												<div style={{ opacity: 1 }}>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="14"
														height="14"
													>
														<defs></defs>
														<g transform="matrix(1,0,0,1,0.3333333432674408,0.3333333432674408)">
															<circle
																fillRule="evenodd"
																fill="rgba(255, 102, 0, 0.5)"
																stroke="rgba(255, 102, 0, 1)"
																strokeWidth="0.6666666666666666"
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeDasharray="none"
																strokeMiterlimit="4"
																cx="6.666666666666667"
																cy="6.666666666666667"
																r="6.666666666666667"
															></circle>
														</g>
													</svg>
												</div>
											</div>
										</div>
										<div className="esri-legend__layer-cell esri-legend__layer-cell--info">
											"Coronavirus"
										</div>
									</div>
									<div className="esri-legend__layer-row  protest-subject">
										<div className="esri-legend__layer-cell esri-legend__layer-cell--symbols esri-legend__size-ramp">
											<div className="esri-legend__symbol">
												<div style={{ opacity: 1 }}>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="14"
														height="14"
													>
														<defs></defs>
														<g transform="matrix(1,0,0,1,0.3333333432674408,0.3333333432674408)">
															<circle
																fillRule="evenodd"
																fill="rgba(124,185,232, 0.5)"
																stroke="rgba(124,185,232, 1)"
																strokeWidth="0.6666666666666666"
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeDasharray="none"
																strokeMiterlimit="4"
																cx="6.666666666666667"
																cy="6.666666666666667"
																r="6.666666666666667"
															></circle>
														</g>
													</svg>
												</div>
											</div>
										</div>
										<div className="esri-legend__layer-cell esri-legend__layer-cell--info">
											Other
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Map;
