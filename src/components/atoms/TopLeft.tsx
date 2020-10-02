import styled from 'styled-components';

type TopLeftProps = {
	floating?: boolean;
};

const TopLeft = styled.div<TopLeftProps>`
	position: absolute;
	top: 15px;
	left: ${(props) => (props.floating ? 'calc(30% + 15px)' : '15px')};
`;

export default TopLeft;
