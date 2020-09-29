import React from 'react';
import TrackVisibility from 'react-on-screen';
import {
	Chapter,
	MapContainer,
	SideCar,
	Page,
	PageText,
	PageTitle,
} from '../atoms';
import WildfiresAus from '../maps/aus_wildfires/WildfiresAus';

const Chapter1 = () => {
	return (
		<Chapter>
			<SideCar>
				<Page>
					<PageTitle>Coronavirus Across the Globe</PageTitle>
					<PageText>
						COVID-19 is the first pandemic in 100 years, and the first of
						the information age. Originating in Wuhan, China in late 2019,
						the virus made its way across Europe and the United States in
						early 2020, and by
					</PageText>
				</Page>
				<Page>
					<Page.Title>Coronavirus Across the Globe</Page.Title>
					<Page.Text>
						COVID-19 is the first pandemic in 100 years, and the first of
						the information age. Originating in Wuhan, China in late 2019,
						the virus made its way across Europe and the United States in
						early 2020, and by
					</Page.Text>
				</Page>
			</SideCar>
			<MapContainer>
				<TrackVisibility className="visibility-tracker" partialVisibility>
					{({ isVisible }) => isVisible && <WildfiresAus />}
				</TrackVisibility>
			</MapContainer>
		</Chapter>
	);
};

export default Chapter1;
