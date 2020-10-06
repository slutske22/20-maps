import styled from 'styled-components';

type ChapterProps = {
	height?: string;
	screensTall?: number;
};

const Chapter = styled.div<ChapterProps>`
	width: 100%;
	height: ${(props) =>
		props.height || `${props.screensTall * 100}vh` || `auto`};
	min-height: 500px;
	position: relative;
	display: flex;
	flex-direction: row;
	// border: 2px solid blue;
`;

export default Chapter;
