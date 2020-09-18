import styled from 'styled-components';

const Chapter = styled.div`
	width: 100%;
	height: ${(props) =>
		props.height || `${props.screensTall * 100}vh` || `auto`};
	min-height: 500px;
	position: relative;
	display: flex;
	flex-direction: row;
	border: 2px solid blue;
`;

export default Chapter;
