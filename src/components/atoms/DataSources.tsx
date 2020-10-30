import React from 'react';
import styled from 'styled-components';
import { BiLinkExternal } from 'react-icons/bi';

const Wrapper = styled.div<{ theme: string }>`
	color: ${(props) => (props.theme === 'light' ? '#6e6e6e' : '')};
	background-color: ${(props) =>
		props.theme === 'light' ? 'white' : '#242424'};
	min-width: 400px;
	padding: 10px;
	margin-right: 5px;
`;

const Link = styled.a`
	color: inherit;
	display: block;
	margin-bottom: 2px;
`;

const DataSources = ({ sources, theme }) => {
	return (
		<Wrapper theme={theme}>
			{sources.map((source) => (
				<Link
					href={source.url}
					target="_blank"
					rel="noopener noreferrer"
					key={source.url}
				>
					{source.name} <BiLinkExternal color={'white'} />
				</Link>
			))}
		</Wrapper>
	);
};

export default DataSources;
