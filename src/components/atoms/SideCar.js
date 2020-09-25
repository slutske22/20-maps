import styled from 'styled-components';

const SideCar = styled.div`
   position: ${(props) => (props.floating ? absolute : 'static')};
   top: ${(props) => (props.floating ? '5px' : null)};
   left: ${(props) => (props.floating ? '5px' : null)};
   width: ${(props) => (props.floating ? '24%' : '30%')};
   height: 100vh;
   min-height: 500px;
   max-height: 800px;
   border: 2px solid orange;
   padding: 2em;
`;

SideCar.Title = styled.h3`
   font-family: 'Helvetica', sans-serif;
   font-weight: 700;
   font-size: 1.5em;
   font-style: italic;
   margin-top: 0;
`;

SideCar.Text = styled.p`
   font-size: 1.2em;
   text-align: justify;
`;

export default SideCar;
