import React from 'react';
import styled from 'styled-components';
import Container from './atoms/Container';
import TextBlock from './atoms/TextBlock';
import DropCaps from './atoms/DropCaps';

const Intro = () => (
	<Container>
		<TextBlock>
			<DropCaps>2020</DropCaps> has been a landmark year in many ways. Lorem
			ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac lorem
			neque. Quisque feugiat leo non felis porta, at aliquet leo dapibus.
			Nulla rutrum lobortis quam. In lectus nibh, ultricies ut malesuada vel,
			sollicitudin vitae nunc. Ut leo eros, pharetra vel neque ac, bibendum
			porta tortor. Nullam tristique ullamcorper ante, ut vestibulum ante
			interdum nec. Nullam massa velit, tristique vel egestas vel, porttitor
			at tellus. Pellentesque habitant morbi tristique senectus et netus et
			malesuada fames ac turpis egestas. Aliquam eget nulla felis. Proin sit
			amet lorem orci. Morbi sodales ligula nec mi ultricies dapibus.
		</TextBlock>
	</Container>
);

export default Intro;
