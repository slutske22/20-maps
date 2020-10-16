import React from 'react';
import styled from 'styled-components';
import Tooltip from 'react-tooltip';
import { BiLinkExternal } from 'react-icons/bi';

const StyledToolTip = styled(Tooltip)`
	padding: 2em;
	box-shadow: 0px 0px 10px 5px #242424;
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
				href="link"
				target="_blank"
				rel="noopener noreferer"
			>
				{children}
			</a>
			<StyledToolTip
				id={link}
				place="right"
				type={theme === 'light' ? 'light' : 'dark'}
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
