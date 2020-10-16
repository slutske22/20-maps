import React, { Suspense } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Intro from './Intro';
import { ChapterSpinner } from './atoms';

const ProtestsUS = React.lazy(() => import('./chapters/protests_us'));
const WildfiresAus = React.lazy(() => import('./chapters/wildfires_aus'));
const ArcticIce = React.lazy(() => import('./chapters/arctic_ice'));
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
			<Suspense fallback={<ChapterSpinner />}>
				<ProtestsUS />
			</Suspense>
			<Suspense fallback={<ChapterSpinner />}>
				<WildfiresAus />
			</Suspense>
			<Suspense fallback={<ChapterSpinner />}>
				<ArcticIce />
			</Suspense>
			<Suspense fallback={<ChapterSpinner />}>
				<CovidPollution />
			</Suspense>
			<Suspense fallback={<ChapterSpinner />}>
				<Mars />
			</Suspense>
		</Wrapper>
	);
};

export default Main;
