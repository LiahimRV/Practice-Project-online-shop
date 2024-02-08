import { Button, H2 } from '../../../components';
import styled from 'styled-components';

const AnOrderCardContainer = ({ className, totalPrice }) => {
	return (
		<div className={className}>
			<H2 margin="20px ">Итоговая сумма: </H2>
			<div className="an-order-card__total-price">{totalPrice} руб.</div>

			<Button margin="110px 20px 0 20px" width="260px" height="50px">
				Оформить заказ
			</Button>
		</div>
	);
};

export const AnOrderCard = styled(AnOrderCardContainer)`
	width: 300px;
	height: 350px;
	border: 2px solid #2d2c2c;
	border-radius: 9px;
	margin-left: 100px;

	& .an-order-card__total-price {
		font-size: 30px;
		margin: 60px 20px 0 20px;
		border-bottom: 1px solid #2d2c2c;
	}
`;
