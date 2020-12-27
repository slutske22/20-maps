import React, { Suspense } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Intro from './Intro';
import Outro from './Outro';
import { MapSpinner } from './atoms';

const CovidGlobal = React.lazy(() => import('./chapters/covid_global'));
const WildfiresAus = React.lazy(() => import('./chapters/wildfires_aus'));
const Locusts = React.lazy(() => import('./chapters/locusts'));
const CovidItaly = React.lazy(() => import('./chapters/covid_italy'));
const CovidUS = React.lazy(() => import('./chapters/covid_us'));
const ProtestsUS = React.lazy(() => import('./chapters/protests_us'));
const Belarus = React.lazy(() => import('./chapters/belarus'));
const WildfiresCalifornia = React.lazy(() =>
	import('./chapters/wildfires_california')
);
const ArcticIce = React.lazy(() => import('./chapters/arctic_ice'));
const Beirut = React.lazy(() => import('./chapters/beirut'));
const CovidPollution = React.lazy(() => import('./chapters/covid_pollution'));
const Mars = React.lazy(() => import('./chapters/mars'));
const VoterTurnout = React.lazy(() => import('./chapters/voter_turnout_us'));
const ShelterAnimals = React.lazy(() => import('./chapters/shelter_animals'));
const Iditarod = React.lazy(() => import('./chapters/iditarod'));
const JapanOlympics = React.lazy(() => import('./chapters/japan_olympics'));
const Moon = React.lazy(() => import('./chapters/moon'));
const Hurricanes = React.lazy(() => import('./chapters/hurricanes'));
const Renewables = React.lazy(() => import('./chapters/renewables'));
const Vaccine = React.lazy(() => import('./chapters/vaccine'));

const Wrapper = styled.main`
	height: 100%;
	width: 100%;
	padding: 0;
	margin: 0;
	flex: 1;
`;

const Main = () => {
	return (
		<Wrapper>
			<Header />
			<Intro />

			<Suspense fallback={<MapSpinner suspense />}>
				<CovidGlobal />
			</Suspense>

			<Suspense fallback={<MapSpinner suspense />}>
				<WildfiresAus />
			</Suspense>

			<Suspense fallback={<MapSpinner suspense />}>
				<Locusts />
			</Suspense>

			<Suspense fallback={<MapSpinner suspense />}>
				<CovidItaly />
			</Suspense>

			<Suspense fallback={<MapSpinner suspense />}>
				<CovidUS />
			</Suspense>

			<Suspense fallback={<MapSpinner suspense />}>
				<CovidPollution />
			</Suspense>

			<Suspense fallback={<MapSpinner suspense />}>
				<ShelterAnimals />
			</Suspense>

			<Suspense fallback={<MapSpinner suspense />}>
				<Iditarod />
			</Suspense>

			<Suspense fallback={<MapSpinner suspense />}>
				<ProtestsUS />
			</Suspense>

			<Suspense fallback={<MapSpinner suspense />}>
				<Belarus />
			</Suspense>

			<Suspense fallback={<MapSpinner suspense />}>
				<Beirut />
			</Suspense>

			<Suspense fallback={<MapSpinner suspense />}>
				<WildfiresCalifornia />
			</Suspense>

			<Suspense fallback={<MapSpinner suspense />}>
				<Hurricanes />
			</Suspense>

			<Suspense fallback={<MapSpinner suspense />}>
				<ArcticIce />
			</Suspense>

			<Suspense fallback={<MapSpinner suspense />}>
				<Renewables />
			</Suspense>

			<Suspense fallback={<MapSpinner suspense />}>
				<Moon />
			</Suspense>

			<Suspense fallback={<MapSpinner suspense />}>
				<Mars />
			</Suspense>

			<Suspense fallback={<MapSpinner suspense />}>
				<VoterTurnout />
			</Suspense>

			<Suspense fallback={<MapSpinner suspense />}>
				<Vaccine />
			</Suspense>

			<Suspense fallback={<MapSpinner suspense />}>
				<JapanOlympics />
			</Suspense>

			<Outro />
		</Wrapper>
	);
};

export default Main;
