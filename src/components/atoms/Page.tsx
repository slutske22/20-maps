import styled from 'styled-components';

type PageContentProps = {
	floating: boolean;
	theme: string;
};

export const Page = styled.div`
	position: relative;
	width: 100%;
	height: 100vh;
	min-height: 500px;
	max-height: 1200px;
	// border: 2px solid yellow;
`;

export const PageContent = styled.div<PageContentProps>`
	padding: ${(props) => (props.floating ? '1.5em' : '2em')};
	margin: ${(props) => (props.floating ? '15px' : '')};
	height: ${(props) => (props.floating ? '' : '100%')};
	background-color: ${(props) =>
		props.theme === 'dark' || props.theme === 'dark-blue' ? '#242424' : ''};
	color: ${(props) =>
		props.theme === 'dark' || props.theme === 'dark-blue' ? '#d1d1d1' : ''};
	border: ${(props) =>
		props.floating && (props.theme === 'dark' || props.theme === 'dark-blue')
			? '1px solid darkgrey'
			: ''};
	box-shadow: ${(props) =>
		props.floating && (props.theme === 'dark' || props.theme === 'dark-blue')
			? '0 1px 2px rgba(0, 0, 0, 0.3)'
			: ''};
	pointer-events: auto;
`;

export const PageTitle = styled.h3`
	font-family: 'Helvetica', sans-serif;
	font-weight: 700;
	font-size: 1.5em;
	font-style: italic;
	margin-top: 0;
`;

export const PageText = styled.p`
	font-size: 1.1em;
	text-align: justify;
`;
