import styled from 'styled-components';

const SideCar = styled.div`
	position: ${(props) => (props.floating ? absolute : 'static')};
	top: ${(props) => (props.floating ? '5px' : null)};
	left: ${(props) => (props.floating ? '5px' : null)};
	width: ${(props) => (props.floating ? '24%' : '30%')};
	border: 2px solid orange;
`;

export default SideCar;
