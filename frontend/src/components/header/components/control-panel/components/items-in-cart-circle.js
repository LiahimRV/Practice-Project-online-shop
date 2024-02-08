import styled from 'styled-components';

const ItemsInCartCircleContainer = ({ className, quantity = 0 }) => {
	return quantity > 0 ? <div className={className}> {quantity}</div> : null;
};

export const ItemsInCartCircle = styled(ItemsInCartCircleContainer)`
	position: absolute;
	width: 17px;
	height: 17px;
	background-color: tomato;
	border-radius: 15px;
	font-size: 12px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	z-index: 2;
	margin: 4px 0 0 35px;
`;
