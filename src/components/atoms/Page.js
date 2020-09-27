import styled from 'styled-components';

const Page = styled.div`
	width: 100%;
	height: 100vh;
	min-height: 500px;
	max-height: 800px;
	border: 2px solid yellow;
	padding: 2em;
`;

Page.Title = styled.h3`
	font-family: 'Helvetica', sans-serif;
	font-weight: 700;
	font-size: 1.5em;
	font-style: italic;
	margin-top: 0;
`;

Page.Text = styled.p`
	font-size: 1.2em;
	text-align: justify;
`;

export default Page;
