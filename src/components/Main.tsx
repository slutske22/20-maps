import React, { Suspense } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Intro from './Intro';
import { ChapterSpinner } from './atoms';

const CovidGlobal = React.lazy(() => import('./chapters/covid_global'));
const WildfiresAus = React.lazy(() => import('./chapters/wildfires_aus'));
const Locusts = React.lazy(() => import('./chapters/locusts'));
const CovidItaly = React.lazy(() => import('./chapters/covid_italy'));
const CovidUS = React.lazy(() => import('./chapters/covid_us'));
const ProtestsUS = React.lazy(() => import('./chapters/protests_us'));
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
			{/* Chapter 7 */}
			<Suspense fallback={<ChapterSpinner />}>
				<Moon />
			</Suspense>

			{/* <Suspense fallback={<ChapterSpinner />}>
				<Mars />
			</Suspense>

			<Suspense fallback={<ChapterSpinner />}>
				<JapanOlympics />
			</Suspense>

			<Suspense fallback={<ChapterSpinner />}>
				<Iditarod />
			</Suspense>

			<Suspense fallback={<ChapterSpinner />}>
				<ShelterAnimals />
			</Suspense>

			<Suspense fallback={<ChapterSpinner />}>
				<WildfiresCalifornia />
			</Suspense>

			<Suspense fallback={<ChapterSpinner />}>
				<VoterTurnout />
			</Suspense>

			<Suspense fallback={<ChapterSpinner />}>
				<CovidUS />
			</Suspense>

			<Suspense fallback={<ChapterSpinner />}>
				<CovidGlobal />
			</Suspense>

			<Suspense fallback={<ChapterSpinner />}>
				<WildfiresAus />
			</Suspense>

			<Suspense fallback={<ChapterSpinner />}>
				<Locusts />
			</Suspense>

			<Suspense fallback={<ChapterSpinner />}>
				<CovidItaly />
			</Suspense>

			<Suspense fallback={<ChapterSpinner />}>
				<ProtestsUS />
			</Suspense>

			<Suspense fallback={<ChapterSpinner />}>
				<Beirut />
			</Suspense>

			<Suspense fallback={<ChapterSpinner />}>
				<ArcticIce />
			</Suspense>

			<Suspense fallback={<ChapterSpinner />}>
				<CovidPollution />
			</Suspense> */}
		</Wrapper>
	);
};

export default Main;
