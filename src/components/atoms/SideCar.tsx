import styled from 'styled-components';

type SideCarProps = {
	floating?: boolean;
};

const SideCar = styled.div<SideCarProps>`
	position: ${(props) => (props.floating ? 'absolute' : 'static')};
	top: ${(props) => (props.floating ? '0px' : null)};
	left: ${(props) => (props.floating ? '0px' : null)};
	width: 30%;
	border: 2px solid orange;
	z-index: 1;
`;

export default SideCar;
