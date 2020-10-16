import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const MapSpinner = () => (
	<Wrapper>
		{/* from loading.io */}
		<svg
			width="137px"
			height="137px"
			viewBox="0 0 100 100"
			preserveAspectRatio="xMidYMid"
		>
			<circle
				cx="50"
				cy="50"
				r="30"
				stroke="#333333"
				strokeWidth="10"
				fill="none"
			></circle>
			<circle
				cx="50"
				cy="50"
				r="30"
				stroke="#adadad"
				strokeWidth="6"
				strokeLinecap="round"
				fill="none"
			>
				<animateTransform
					attributeName="transform"
					type="rotate"
					repeatCount="indefinite"
					dur="1.8518518518518516s"
					values="0 50 50;180 50 50;720 50 50"
					keyTimes="0;0.5;1"
				></animateTransform>
				<animate
					attributeName="stroke-dasharray"
					repeatCount="indefinite"
					dur="1.8518518518518516s"
					values="18.84955592153876 169.64600329384882;94.2477796076938 94.24777960769377;18.84955592153876 169.64600329384882"
					keyTimes="0;0.5;1"
				></animate>
			</circle>
		</svg>
	</Wrapper>
);

export default MapSpinner;
