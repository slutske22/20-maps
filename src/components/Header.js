import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.header`
   width: 100%;
   padding: 5px;
   color: white;
   background-color: darkgrey;
`;

const Header = () => (
   <Wrapper>
      This is the header
   </Wrapper>
)

export default Header