import styled from 'styled-components';

type TextBlockProps = {
	padding?: string;
};

const TextBlock = styled.p<TextBlockProps>`
	width: 100%;
	padding: ${(props) => props.padding || '3em 5em'};
	text-align: justify;
	color: #333;
	font-size: 1.2em;
	line-height: 1.5em;
`;

export default TextBlock;
