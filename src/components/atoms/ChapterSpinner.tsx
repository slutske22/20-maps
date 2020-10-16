import React from 'react';
import styled from 'styled-components';
import LoadingGif from '../../assets/icons/globe-loading.gif';

const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const ChapterSpinner = () => (
	<Wrapper>
		<h4>Loading . . .</h4>
		<img src={LoadingGif} />
	</Wrapper>
);

export default ChapterSpinner;
