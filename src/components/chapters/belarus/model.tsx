import React from 'react';
import Legend from 'esri/widgets/Legend';
import LayerList from 'esri/widgets/LayerList';
import { RefLink } from '../../atoms';
import { ModelSchema } from '../../../types';
import { conflictLayer, mask, countries } from './layers';

const model: ModelSchema = {
	metadata: {
		name: 'belarus',
		theme: 'dark',
		fullWidthMap: false,
	},
	sources: [
		{
			name: 'The Armed Conflict Location & Event Data Project',
			url:
				'https://www.arcgis.com/home/item.html?id=a6e330c275dd421a9a3dda6e8e546f3d',
		},
	],
	pages: [
		{
			title: 'Conflict in Belarus',
			content: (
				<>
					<p>
						Protests in 2020 were not limited to the United States. With the{' '}
						<RefLink
							theme="dark"
							link="https://theglobepost.com/2020/08/11/belarus-rigged-elections/"
							linkTitle={`"Potentially Rigged Elections in Belarus: What Did You Expect?", Hillman, A., Globe Post, Aug 11, 2020, Retrieved Dec 21, 2020`}
						>
							question election
						</RefLink>{' '}
						of President Alexander Lukashenko,{' '}
						<RefLink
							theme="dark"
							link="https://www.euronews.com/2020/05/25/belarus-hundreds-protest-in-minsk-against-president-lukashenko"
							linkTitle={`"Belarus: Hundreds protest in Minsk against President Lukashenko", Holroyd, M., Euronews, May 25, 2020, Retrieved Dec 21, 2020`}
						>
							protests erupted{' '}
						</RefLink>
						across the country in May. Lukashenko responded{' '}
						<RefLink
							theme="dark"
							link="https://www.dw.com/en/belarus-lukashenko-outlaws-protests-arrests-opponents/a-53651863"
							linkTitle={`"Belarus' Lukashenko outlaws protests, arrests opponents", dw.com, Jun 1, 2020, Retrieved Dec 21, 2020`}
						>
							with force
						</RefLink>
						, and a bitter battle between government and citizens{' '}
						<RefLink
							theme="dark"
							linkTitle={`"Thousands of protesters march in Belarus, dozens detained", Aljazeera, Dec 6, 2020, Retrieved Dec 21, 2020`}
							link="https://www.aljazeera.com/news/2020/12/6/belarus-opposition-rallies-in-latest-protest-amid-arrests"
						>
							continued
						</RefLink>{' '}
						through the end of the year.
					</p>
					<p>
						The red spots on the map represent protests. Click one for more
						details. This data, while not as detailed as the U.S. protest data,
						is part of a larger dataset documenting incidents of conflict around
						the world. Toggle off the mask layer and explore the globe to see
						what other conflicts occurred in 2020.
					</p>
				</>
			),
			mapState: {
				position: {
					center: [53, 28],
					zoom: 8,
				},
				basemap: 'dark-gray-vector',
				layers: [conflictLayer, mask],
			},
		},
	],
	customFeatures: ({ view }) => {
		// running out of time: default popup:
		view.when(() => {
			view.popup.defaultPopupTemplateEnabled = true;
		});

		// create mask from belarus border
		const query = countries.createQuery();
		query.where = "ISO = 'BY'";
		countries.queryFeatures(query).then(function (result) {
			const geometry = result.features[0].geometry;
			mask.geometry = geometry;
			view.goTo(geometry).catch(function (error) {
				if (error.name != 'AbortError') {
					console.error(error);
				}
			});
		});

		const layersList = new LayerList({
			view,
		});

		view.ui.add(layersList, 'top-right');
	},
};

export default model;
