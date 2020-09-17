import React from 'react';
import styled from 'styled-components';
import { ShareButtonOutline } from 'react-custom-share';
import { FaGithub, FaFacebook, FaTwitter } from 'react-icons/fa';

const Wrapper = styled.header`
	position: absolute;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
	top: 0;
	left: 0;
	right: 0;
	width: 100%;
	padding: 10px;
	color: white;
	background-color: transparent;
`;

const IconWrapper = styled.div`
	font-size: 2em;
	padding-left: 10px;
	height: 44px;
	width: 44px;
	display: flex;
	align-items: center;
`;

const TopLinks = () => (
	<Wrapper>
		<ShareButtonOutline
			className="top-link-button"
			url="https://slutske22.github.io/20-maps/"
			network="Facebook"
			text="Give it a try - react-custom-share component"
			longtext="Social sharing buttons for React. Use one of the build-in themes or create a custom one from the scratch."
		>
			<FaFacebook />
		</ShareButtonOutline>
		<ShareButtonOutline
			className="top-link-button"
			url="https://slutske22.github.io/20-maps/"
			network="Twitter"
			text="Give it a try - react-custom-share component"
			longtext="Social sharing buttons for React. Use one of the build-in themes or create a custom one from the scratch."
		>
			<FaTwitter />
		</ShareButtonOutline>
		<IconWrapper as="a" href="https://github.com/slutske22/20-maps">
			<FaGithub />
		</IconWrapper>
	</Wrapper>
);

export default TopLinks;
