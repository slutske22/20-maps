import React from 'react';
import styled from 'styled-components';
import slides from './slides';

const Wrapper = styled.aside`
	position: absolute;
	background-color: transparent;
	padding: 10px;
	top: 0px;
	right: 0px;
	width: 20%;
	max-width: 200px;
	height: 100%;
`;

const SlideContainer = styled.div`
	cursor: pointer;
	margin-bottom: 10px;
	border: 1px solid #fff;
	overflow: hidden;
`;

const SlideImg = styled.img`
	width: 100%;
`;

const SlideTitle = styled.div`
	position: absolute;
	bottom: 0px;
	width: 100%;
	background-color: rgba(225, 255, 255, 0.8);
`;

const Slides = ({ view }) => {
	return (
		<Wrapper>
			{slides.map((slide) => (
				<SlideContainer
					key={slide.name}
					onClick={() => {
						view.goTo(slide.slide.viewpoint.camera);
					}}
				>
					<SlideImg src={slide.slide.thumbnail} />
					<SlideTitle>{slide.name}</SlideTitle>
				</SlideContainer>
			))}
		</Wrapper>
	);
};

export default Slides;
