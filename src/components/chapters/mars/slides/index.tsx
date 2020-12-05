import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { AiOutlineClose } from 'react-icons/ai';
import styled from 'styled-components';
import slides from './slides';

const SlidesWrapper = styled.aside`
	position: absolute;
	background-color: transparent;
	padding: 10px;
	top: 0px;
	right: 0px;
	width: 20%;
	max-width: 200px;
	min-width: 120px;
	height: calc(100% - 60px);
`;

const SlideContainer = styled.div`
	max-height: calc(100% / 6 - 10px);
	position: relative;
	cursor: pointer;
	margin-bottom: 10px;
	border: 1px solid #fff;
	overflow: hidden;
`;

const SlideImg = styled.img`
	width: 100%;
	display: block;
`;

const SlideTitle = styled.div`
	position: absolute;
	bottom: 0px;
	width: 100%;
	background-color: rgba(255, 255, 255, 0.8);
	font-family: 'Avenir Next', 'Helvetica Neue', Helvetica, Arial, sans-serif;
	font-size: 0.8em;
	padding: 2px;
	text-align: center;
	opacity: 0;
	transition: opacity 250ms;
	${SlideContainer}:hover & {
		opacity: 1;
		transition: opacity 250ms;
	}
`;

const DescriptionWrapper = styled.div`
	position: absolute;
	bottom: 20px;
	left: 20px;
	width: 500px;
	padding: 1.5em;
	background-color: #242424;
	color: #d1d1d1;
	border: 1px solid darkgrey;
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
	font-family: 'Avenir Next', 'Helvetica Neue', Helvetica, Arial, sans-serif;
`;

const DescriptionTitle = styled.h3`
	margin-top: 0;
	font-weight: bold;
`;

const DescriptionCloseButton = styled.button`
	background-color: transparent;
	border: none;
	color: #d1d1d1;
	position: absolute;
	top: 10px;
	right: 10px;
	cursor: pointer;
`;

const DescriptionText = styled.p``;

const Slides = ({ view }) => {
	const [info, setInfo] = useState(null);

	return (
		<>
			<SlidesWrapper>
				{slides.map((slide) => (
					<SlideContainer
						key={slide.name}
						onClick={() => {
							setInfo(slide.name);
							view.goTo(slide.slide.viewpoint.camera);
						}}
					>
						<SlideImg src={slide.slide.thumbnail} />
						<SlideTitle>{slide.name}</SlideTitle>
					</SlideContainer>
				))}
			</SlidesWrapper>
			{info && (
				<DescriptionWrapper>
					<DescriptionCloseButton onClick={() => setInfo(null)}>
						<AiOutlineClose style={{ stroke: '#d1d1d1' }} />
					</DescriptionCloseButton>
					<DescriptionTitle>
						{slides.filter((s) => s.name === info)[0].name}
					</DescriptionTitle>
					<DescriptionText>
						{slides.filter((s) => s.name === info)[0].description}
					</DescriptionText>
				</DescriptionWrapper>
			)}
		</>
	);
};

export default Slides;
