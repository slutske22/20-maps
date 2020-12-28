import React from 'react';
import styled from 'styled-components';
import TopLinks from './TopLinks';
import backsplash from '../assets/images/20maps2.png';

const Wrapper = styled.div`
	position: relative;
	width: 100%;
	color: white;
	padding: 5px;
	height: 50vh;
	min-height: 500px;
	display: flex;
	align-items: center;
	background: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.75),
			rgba(0, 0, 0, 0.75)
		),
		url(${backsplash});
	background-size: cover;
`;

const TitleBlock = styled.div`
	margin-left: 5%;
`;

const Title = styled.h1`
	font-size: 4em;
	margin-bottom: 0.25em;
`;

const SubTitle = styled.h2`
	font-weight: normal;
	font-style: italic;
	margin-top: 0;
`;

const TimeTitle = styled.h2`
	font-weight: normal;
	font-size: 1.3em;
	margin-top: 0;
`;

const ByLine = styled.h3`
	font-weight: normal;
	position: absolute;
	font-style: italic;
	font-size: 1.3em;
	bottom: 1em;
	right: 3em;
`;

const Header = () => (
	<Wrapper>
		<TopLinks />
		<TitleBlock>
			<Title>20 Maps for 2020</Title>
			<SubTitle>
				Global Upheaval is Far More Palatable When you Visualize it with Pretty
				Colors
			</SubTitle>
			<TimeTitle>🕑 20 minute read</TimeTitle>
		</TitleBlock>
		<ByLine>
			Seth Lutske <br />
			December 2020
		</ByLine>
	</Wrapper>
);

export default Header;
