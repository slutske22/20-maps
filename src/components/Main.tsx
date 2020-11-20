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
			{/* Chapter 1 */}
			<Suspense fallback={<ChapterSpinner />}>
				<WildfiresCalifornia />
			</Suspense>
			{/* Chapter 1 */}
			<Suspense fallback={<ChapterSpinner />}>
				<VoterTurnout />
			</Suspense>
			{/* Chapter 1 */}
			<Suspense fallback={<ChapterSpinner />}>
				<CovidUS />
			</Suspense>
			{/* Chapter 1 */}
			<Suspense fallback={<ChapterSpinner />}>
				<CovidGlobal />
			</Suspense>
			{/* Chapter 2 */}
			<Suspense fallback={<ChapterSpinner />}>
				<WildfiresAus />
			</Suspense>
			{/* Chapter 3 */}
			<Suspense fallback={<ChapterSpinner />}>
				<Locusts />
			</Suspense>
			{/* Chapter 3 */}
			<Suspense fallback={<ChapterSpinner />}>
				<CovidItaly />
			</Suspense>
			{/* Chapter 4 */}
			<Suspense fallback={<ChapterSpinner />}>
				<ProtestsUS />
			</Suspense>
			{/* Chapter 4 */}
			<Suspense fallback={<ChapterSpinner />}>
				<Beirut />
			</Suspense>
			{/* Chapter 5 */}
			<Suspense fallback={<ChapterSpinner />}>
				<ArcticIce />
			</Suspense>
			{/* Chapter 6 */}
			<Suspense fallback={<ChapterSpinner />}>
				<CovidPollution />
			</Suspense>
			{/* Chapter 7 */}
			<Suspense fallback={<ChapterSpinner />}>
				<Mars />
			</Suspense>
		</Wrapper>
	);
};

export default Main;
