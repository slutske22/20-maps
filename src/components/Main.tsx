import React, { Suspense } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Intro from './Intro';
// import Chapter2 from './chapters/protests_us/Chapter';
// import Chapter3 from './chapters/wildfires_aus/Chapter';
// import Chapter4 from './chapters/arctic_ice/Chapter';

const Chapter2 = React.lazy(() => import('./chapters/protests_us/Chapter'));
const Chapter3 = React.lazy(() => import('./chapters/wildfires_aus/Chapter'));
const Chapter4 = React.lazy(() => import('./chapters/arctic_ice/Chapter'));

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
			<Suspense fallback={<div>Loading...</div>}>
				<Header />
				<Intro />
				<Chapter2 />
				<Chapter3 />
				<Chapter4 />
			</Suspense>
		</Wrapper>
	);
};

export default Main;
