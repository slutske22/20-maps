import React from 'react';
import styled from 'styled-components';

interface SpinnerProps {
	suspense?: boolean;
}

const Wrapper = styled.div<SpinnerProps>`
	width: 100%;
	height: ${(props) => (props.suspense ? '100vh' : '100%')};
	position: ${(props) => (props.suspense ? '' : 'absolute')};
	top: ${(props) => (props.suspense ? '' : '0')};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	pointer-events: none;
`;

const MapSpinner = ({ suspense }: SpinnerProps) => (
	<Wrapper suspense={suspense}>
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
