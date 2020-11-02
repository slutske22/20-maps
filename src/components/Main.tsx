import React, { Suspense } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Intro from './Intro';
import { ChapterSpinner } from './atoms';

const CovidGlobal = React.lazy(() => import('./chapters/covid_global'));
const WildfiresAus = React.lazy(() => import('./chapters/wildfires_aus'));
const Locusts = React.lazy(() => import('./chapters/locusts'));
const ProtestsUS = React.lazy(() => import('./chapters/protests_us'));
const ArcticIce = React.lazy(() => import('./chapters/arctic_ice'));
const Beirut = React.lazy(() => import('./chapters/beirut'));
const CovidPollution = React.lazy(() => import('./chapters/covid_pollution'));
const Mars = React.lazy(() => import('./chapters/mars'));

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
