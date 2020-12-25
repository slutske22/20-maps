import React from 'react';
import styled from 'styled-components';
import Container from './atoms/Container';
import TextBlock from './atoms/TextBlock';
import WaveMeme from '../assets/images/2021WaveMeme.png';

const Meme = styled.figure`
	width: 40%;
	max-width: 400px;
	margin: 20px auto;
	padding: 1em;
`;

const MemeImg = styled.img`
	width: 100%;
`;

const MemeCap = styled.figcaption`
	text-align: center;
	font-size: 1.1em;
	font-style: italic;
`;

const Intro = () => (
	<Container>
		<TextBlock padding="3em 5em 1em 5em">
			2020, like this article, has been a journey. As we get ready to close
			out this year, we have a lot to reflect on. With the election of a new
			leader in the U.S. and the release of the COVID-vaccine, there is a lot
			to look forward to as well.
		</TextBlock>
		<Meme>
			<MemeImg src={WaveMeme} />
			<MemeCap>Hope springs eternal</MemeCap>
		</Meme>
		<TextBlock padding="1em 5em 3em 5em">
			This article was the culmination of months of research and data
			wrangling. Thank you to all of those who have spent their time
			recording, cataloging, and studying the near-infinite volumes of data.
			Living in the information age is simultaneously exhausting and
			enlightening, and the temptation to doomscroll is stronger than ever.
			Hopefully this article has given you some insight and new perspective,
			and even acted as a sort of cartographic catharsis.
		</TextBlock>
		<TextBlock />
	</Container>
);

export default Intro;
