import React, { Suspense } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Intro from './Intro';
// import Chapter2 from './chapters/protests_us/Chapter';
// import Chapter3 from './chapters/wildfires_aus/Chapter';
// import Chapter4 from './chapters/arctic_ice/Chapter';

const ProtestsUS = React.lazy(() => import('./chapters/protests_us'));
const WildfiresAus = React.lazy(() => import('./chapters/wildfires_aus'));
const ArcticIce = React.lazy(() => import('./chapters/arctic_ice'));
const CovidPollution = React.lazy(() => import('./chapters/covid_pollution'));

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
			<Suspense fallback={<div>Loading...</div>}>
				<ProtestsUS />
				<WildfiresAus />
				<ArcticIce />
				<CovidPollution />
			</Suspense>
		</Wrapper>
	);
};

export default Main;
