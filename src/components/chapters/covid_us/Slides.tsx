import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div<{ screens: number }>`
	position: absolute;
	top: 0px;
	right: 0px;
	width: 300px;
	height: ${(props) => `${props.screens * 100}vh`};
	/* border: 2px solid blue; */
	pointer-events: none;
`;

const Page = styled.div`
	height: 100vh;
	width: 100%;
	/* border: 2px solid orange; */
	padding: 15px;
	pointer-events: none;
	& * {
		pointer-events: auto;
	}
`;

interface SlidesProps {
	screens: number;
}

const Slides = ({ screens }: SlidesProps) => {
	let pages = [];
	for (let i = 0; i < screens; i++) {
		pages.push(<Page key={`SlidePage=${i}`} />);
	}

	return <Wrapper screens={screens}>{pages}</Wrapper>;
};

export default Slides;
