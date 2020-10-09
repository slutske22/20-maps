import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Intro from './Intro';
import Chapter2 from './chapters/protests_us/Chapter';
import Chapter3 from './chapters/wildfires_aus/Chapter';
import Chapter4 from './chapters/arctic_ice/Chapter';

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
			<Chapter2 />
			<Chapter3 />
			<Chapter4 />
		</Wrapper>
	);
};

export default Main;
