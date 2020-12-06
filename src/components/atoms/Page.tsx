import styled from 'styled-components';

type PageProps = {
	floating: boolean;
	padding?: string;
	margin?: string;
};

type PageContentProps = {
	floating: boolean;
	theme: string;
	width?: string;
	padding?: string;
	margin?: string;
};

export const Page = styled.div<PageProps>`
	position: relative;
	width: 100%;
	height: 100vh;
	min-height: 500px;
	max-height: 1200px;
	padding: ${(props) =>
		props.padding ? props.padding : props.floating ? '15px' : ''};
	scroll-snap-stop: always;
	scroll-snap-align: start;
`;

export const PageContent = styled.div<PageContentProps>`
	display: ${(props) => (props.floating ? '' : 'flex')};
	flex-direction: ${(props) => (props.floating ? '' : 'column')};
	padding: ${(props) =>
		props.padding ? props.padding : props.floating ? '1.5em' : '2em'};
	height: ${(props) => (props.floating ? '' : '100%')};
	width: ${(props) => props.width || ''};
	background-color: ${(props) =>
		props.theme === 'dark' || props.theme === 'dark-blue'
			? '#242424'
			: 'white'};
	color: ${(props) =>
		props.theme === 'dark' || props.theme === 'dark-blue' ? '#d1d1d1' : ''};
	border: ${(props) =>
		props.floating && (props.theme === 'dark' || props.theme === 'dark-blue')
			? '1px solid darkgrey'
			: '#242424'};
	box-shadow: ${(props) =>
		props.floating && (props.theme === 'dark' || props.theme === 'dark-blue')
			? '0 1px 2px rgba(0, 0, 0, 0.3)'
			: '0 1px 2px rgba(56, 56, 56, 0.4)'};
	pointer-events: auto;
`;

export const PageTitle = styled.h3`
	font-family: 'Helvetica', sans-serif;
	font-weight: 700;
	font-size: 1.5em;
	font-style: italic;
	margin: 0;
`;

export const PageText = styled.div<{ floating: boolean }>`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	font-size: ${(props) => (props.floating ? '1.1em' : '1.2em')};
	font-family: 'Avenir Next', 'Helvetica Neue', Helvetica, Arial, sans-serif;
	line-height: 1.3em;
	/* text-align: justify; */
`;
