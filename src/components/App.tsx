import React from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';

import GlobalStyles from './GlobalStyles';
import Nav from './Nav';
import Main from './Main';

const Wrapper = styled.div`
	height: 100vh;
	overflow-y: scroll;
	scroll-snap-type: y proximity;
	width: 100%;
	padding: 0;
	margin: 0;
	display: flex;
	position: relative;
`;

const App = () => (
	<Wrapper>
		<GlobalStyles />
		<Nav />
		<Main />
	</Wrapper>
);

export default hot(module)(App);
