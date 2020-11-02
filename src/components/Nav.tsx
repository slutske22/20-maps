import React, { Fragment, useContext } from 'react';
import Tooltip from 'react-tooltip';
import styled from 'styled-components';
import { FaHome } from 'react-icons/fa';
import { Context } from '../context';

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

const NavLinkHome = styled.a<{ active: boolean }>`
	margin: 10px 20px;
	color: ${(props) => (props.active ? 'white' : 'grey')};
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
		hash: 'wildfires_australia',
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
		hash: 'US_protests',
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
		hash: 'artic_ice',
	},
	{
		name: 'Mars: Curiosity',
		hash: 'mars',
	},
	{
		name: '10',
		hash: '10',
	},
	{
		name: '11',
		hash: '11',
	},
	{
		name: '12',
		hash: '12',
	},
	{
		name: '13',
		hash: '13',
	},
	{
		name: '14',
		hash: '14',
	},
	{
		name: '15',
		hash: '15',
	},
	{
		name: '16',
		hash: '16',
	},
	{
		name: '17',
		hash: '17',
	},
	{
		name: '18',
		hash: '18',
	},
	{
		name: '19',
		hash: '19',
	},
	{
		name: '20',
		hash: '20',
	},
];

const Nav = () => {
	const {
		state: { activeNavLink },
	} = useContext(Context);

	return (
		<Wrapper>
			<NavLinkHome active={activeNavLink === 'home'}>
				<FaHome data-tip data-for={'nav-home'} />
			</NavLinkHome>
			<NavToolTip
				id="nav-home"
				place="right"
				type="dark"
				border
				borderColor="darkgrey"
				effect="solid"
				delayHide={100}
				className="tooltip"
				offset={{ left: -10 }}
			>
				"Home"
			</NavToolTip>
			{chapterlinks.map((link) => (
				<Fragment key={link.hash}>
					<NavLink
						data-tip
						data-for={link.hash}
						active={link.hash === activeNavLink}
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
				</Fragment>
			))}
		</Wrapper>
	);
};

export default Nav;
