import React from 'react';
import styled from 'styled-components';
import Tooltip from 'react-tooltip';
import { BiLinkExternal } from 'react-icons/bi';

const StyledToolTip = styled(Tooltip)<{ theme: string }>`
	padding: 2em;
	max-width: 60vw;
	box-shadow: ${(props) =>
		props.theme === 'light'
			? '0px 0px 10px 5px rgba(220,220,220,0.5)'
			: '0px 0px 10px 5px #242424'};
`;

type RefLinkProps = {
	linkTitle: string;
	link: string;
	theme: string;
	children: React.ReactNode;
};

const RefLink = ({ children, linkTitle, link, theme }: RefLinkProps) => {
	return (
		<>
			<a
				data-tip
				data-for={link}
				href={link}
				target="_blank"
				rel="noopener noreferer"
			>
				{children}
			</a>
			<StyledToolTip
				id={link}
				place="right"
				wrapper="span"
				type={theme === 'light' ? 'light' : 'dark'}
				theme={theme}
				border
				borderColor="darkgrey"
				effect="solid"
				delayHide={500}
				className="tooltip"
			>
				<a href={link} target="_blank" rel="noopener noreferer">
					{linkTitle} <BiLinkExternal />
				</a>
			</StyledToolTip>
		</>
	);
};

export default RefLink;
