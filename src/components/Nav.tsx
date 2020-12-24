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

const NavLink = styled.a`
	padding: 10px 20px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const NavLinkDot = styled.div<{ active: boolean }>`
	width: 8px;
	height: 8px;
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
		name: 'Locusts in Africa',
		hash: 'locusts',
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
		name: 'Shutdown Pollution',
		hash: 'covid_pollution',
	},
	{
		name: 'Shelter Animals',
		hash: 'shelter_animals',
	},
	{
		name: 'Iditarod',
		hash: 'iditarod',
	},
	{
		name: 'US Protests',
		hash: 'US_protests',
	},
	{
		name: 'Belarus Protests',
		hash: 'belarus',
	},
	{
		name: 'Blast in Beirut',
		hash: 'beirut',
	},
	{
		name: 'California Wildfires',
		hash: 'wildfires_california',
	},
	{
		name: 'Hurricanes',
		hash: 'hurricanes',
	},
	{
		name: 'Arctic Sea Ice',
		hash: 'artic_ice',
	},
	{
		name: 'Renewable Energy',
		hash: 'renewables',
	},
	{
		name: 'Lunar Geology',
		hash: 'moon',
	},
	{
		name: 'Mars: Curiosity',
		hash: 'mars',
	},
	{
		name: 'Voter Turnout U.S.',
		hash: 'voter_turnout_us',
	},
	{
		name: 'Olympics 2021',
		hash: 'japan_olympics',
	},
	{
		name: 'The Vaccine',
		hash: 'vaccine',
	},
];

const Nav = () => {
	const { dispatch } = useContext(Context);

	const {
		state: { activeNavLink },
	} = useContext(Context);

	const scroll = (hash) => {
		const app = document.querySelector('.App');
		const hashDiv: HTMLElement = document.querySelector(`section#${hash}`);
		if (hash === 'home') {
			app.scrollTop = 0;
			dispatch({
				type: 'SET_NAV',
				payload: 'home',
			});
		} else {
			app.scrollTop = hashDiv.offsetTop;
		}
	};

	return (
		<Wrapper>
			<NavLinkHome
				active={activeNavLink === 'home'}
				href={`#home`}
				onClick={() => scroll('home')}
			>
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
						href={`#${link.hash}`}
						onClick={() => scroll(link.hash)}
					>
						<NavLinkDot active={link.hash === activeNavLink} />
					</NavLink>
					<NavToolTip
						id={link.hash}
						place="right"
						type="dark"
						border
						borderColor="darkgrey"
						effect="solid"
						delayHide={10}
						className="tooltip"
						offset={{ left: 10 }}
					>
						{link.name}
					</NavToolTip>
				</Fragment>
			))}
		</Wrapper>
	);
};

export default Nav;
