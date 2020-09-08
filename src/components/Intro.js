import React from 'react'
import styled from 'styled-components'
import backsplash from '../assets/images/20maps2.png'
import DropCaps from './atoms/DropCaps'

const Wrapper = styled.div`
   width: 100%;
   color: white;
`;

const BackSplash = styled.div`
   width: 100%;
   padding: 5px;
   height: 60vh;
   min-height: 500px;
   display: flex;
   align-items: center;
   background: linear-gradient(
      to bottom,
      rgba(0,0,0,0.7),
      rgba(0,0,0,0.7)
   ),url(${backsplash});
   background-size: cover;
`;

const SubHeader = styled.p`
   width: 100%;
   padding: 3em 5em;
   text-align: justify;
   color: #333;
`

const Title = styled.h1`
   font-size: 4em;
   margin-left: 5%;
`;

const Intro = () => (
   <Wrapper>
      <BackSplash>
         <Title>20 Maps for 2020</Title>
      </BackSplash>
      <SubHeader>
         <DropCaps>2020</DropCaps> has been a landmark year in many ways.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac lorem neque. Quisque feugiat leo non felis porta, at aliquet leo dapibus. Nulla rutrum lobortis quam. In lectus nibh, ultricies ut malesuada vel, sollicitudin vitae nunc. Ut leo eros, pharetra vel neque ac, bibendum porta tortor. Nullam tristique ullamcorper ante, ut vestibulum ante interdum nec. Nullam massa velit, tristique vel egestas vel, porttitor at tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam eget nulla felis. Proin sit amet lorem orci. Morbi sodales ligula nec mi ultricies dapibus.
      </SubHeader>
   </Wrapper>
)

export default Intro