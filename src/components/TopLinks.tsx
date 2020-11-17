import React, { useContext } from 'react';
import styled from 'styled-components';
import TrackVisibility from 'react-visibility-sensor';
import { ShareButtonOutline } from 'react-custom-share';
import { FaGithub, FaFacebook, FaTwitter } from 'react-icons/fa';
import { Context } from '../context';

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

const IconWrapper = styled.div<{
	github: boolean;
}>`
	font-size: 2em;
	padding-left: 7px;
	height: 44px;
	width: 44px;
	display: flex;
	align-items: center;
	transition: all 250ms;
	&:hover {
		color: ${(props) => (props.github ? '#b392f0' : '')};
		transition: all 250ms;
	}
`;

const TopLinks = () => {
	const { dispatch } = useContext(Context);

	return (
		<TrackVisibility
			onChange={(isVisible) => {
				if (isVisible) {
					dispatch({
						type: 'SET_NAV',
						payload: 'home',
					});
				}
			}}
		>
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
				<IconWrapper
					as="a"
					href="https://github.com/slutske22/20-maps"
					target="_blank"
					github
				>
					<FaGithub />
				</IconWrapper>
			</Wrapper>
		</TrackVisibility>
	);
};

export default TopLinks;
