import React from 'react';
import styled from 'styled-components';
import TopLinks from './TopLinks';
import backsplash from '../assets/images/20maps2.png';
import DropCaps from './atoms/DropCaps';

const Wrapper = styled.div`
	position: relative;
	width: 100%;
	color: white;
	padding: 5px;
	height: 50vh;
	min-height: 400px;
	display: flex;
	align-items: center;
	background: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.7),
			rgba(0, 0, 0, 0.7)
		),
		url(${backsplash});
	background-size: cover;
`;

const Title = styled.h1`
	font-size: 4em;
	margin-left: 5%;
`;

const Header = () => (
	<Wrapper>
		<TopLinks />
		<Title>20 Maps for 2020</Title>
	</Wrapper>
);

export default Header;
