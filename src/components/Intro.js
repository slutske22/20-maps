import React from 'react';
import styled from 'styled-components';
import Container from './atoms/Container';
import TextBlock from './atoms/TextBlock';
import DropCaps from './atoms/DropCaps';
import NutShell from '../assets/images/2020FireMeme.jpg';

const Meme = styled.figure`
   width: 40%;
   max-width: 400px;
   margin: 20px auto;
   padding: 1em;
`;

const MemeImg = styled.img`
   width: 100%;
`;

const MemeCap = styled.figcaption`
   text-align: center;
   font-size: 1.1em;
   font-style: italic;
`;

const Intro = () => (
   <Container>
      <TextBlock padding="3em 5em 1em 5em">
         <DropCaps>2020</DropCaps> has been a landmark year in many ways. We've
         had the first global pandemic in 100 years, some of the largest
         wildfires on record in Australia and the United States, political
         upheaval and riots on a worldwide scale, and that was all before July.
         The following image of the August wildfires in California became an
         internet icon for "2020 wrapped up in a single image":
      </TextBlock>
      <Meme>
         <MemeImg src={NutShell} />
         <MemeCap>The mayans must have been off a bit.</MemeCap>
      </Meme>
      <TextBlock padding="1em 5em 3em 5em">
         While the word "unprecedented" has been thrown around a lot, it can be
         hard to understand the magnitude of what has happened this year beyond
         our own personal bubbles. The following maps attempt to relay the scope
         of a few of these phenomena in ways that you may not have thought of
         before.
      </TextBlock>
   </Container>
);

export default Intro;
