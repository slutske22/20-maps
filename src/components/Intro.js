import React from 'react'
import styled from 'styled-components'
import backsplash from '../assets/images/20maps2.png'

const Wrapper = styled.div`
   width: 100%;
   padding: 5px;
   color: white;
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

const Title = styled.h1`
   font-size: 4em;
   margin-left: 5%;
`;

const Intro = () => (
   <Wrapper>
      <Title>20 Maps for 2020</Title>
   </Wrapper>
)

export default Intro