import styled from 'styled-components';

const MapContainer = styled.div`
	position: sticky;
	top: 0;
	width: ${(props) => (props.fullWidth ? '100%' : '70%')};
	height: 100vh;
	min-height: 500px;
	max-height: 800px;
	border: 2px solid green;
`;

export default MapContainer;
