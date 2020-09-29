import styled from 'styled-components';

type MapContainerProps = {
	fullWidth?: boolean;
};

const MapContainer = styled.div<MapContainerProps>`
	position: sticky;
	top: 0;
	width: ${(props) => (props.fullWidth ? '100%' : '70%')};
	height: 100vh;
	min-height: 500px;
	max-height: 1200px;
	border: 2px solid green;
`;

export default MapContainer;
