import React from 'react';
import Tooltip from 'react-tooltip';
import styled from 'styled-components';
import { FaHome } from 'react-icons/fa';

const Wrapper = styled.nav`
	display: flex;
	flex-direction: column;
	height: 100vh;
	position: sticky;
	top: 0px;
	background-color: #303030;
	color: white;
	align-items: center;
	justify-content: center;
	z-index: 5;
`;

const NavLink = styled.a<{ active: boolean }>`
	width: 8px;
	height: 8px;
	margin: 10px 20px;
	border-radius: 50%;
	background-color: ${(props) => (props.active ? 'white' : 'grey')};
`;

const NavToolTip = styled(Tooltip)`
	padding: 1em;
	z-index: 5;
`;

const chapterlinks = [
	{
		name: 'Global Coronavirus',
		hash: 'covid_global',
	},
	{
		name: 'Australian Wildfires',
		hash: 'wildfires_aus',
	},
	{
		name: 'COVID in Italy',
		hash: 'covid_italy',
	},
	{
		name: 'COVID in the US',
		hash: 'covid_us',
	},
	{
		name: 'US Protests',
		hash: 'protests_us',
	},
	{
		name: 'Blast in Beirut',
		hash: 'beirut',
	},
	{
		name: 'California Wildfires',
		hash: 'wildfires_us',
	},
	{
		name: 'Arctic Sea Ice',
		hash: 'sea_ice',
	},
];

const Nav = () => {
	return (
		<Wrapper>
			<FaHome style={{ marginBottom: '10px' }} />
			{chapterlinks.map((link) => (
				<>
					<NavLink
						key={link.hash}
						data-tip
						data-for={link.hash}
						active={link.hash === 'beirut'}
					/>
					<NavToolTip
						id={link.hash}
						place="right"
						type="dark"
						border
						borderColor="darkgrey"
						effect="solid"
						delayHide={100}
						className="tooltip"
						offset={{ left: -10 }}
					>
						{link.name}
					</NavToolTip>
				</>
			))}
		</Wrapper>
	);
};

export default Nav;
