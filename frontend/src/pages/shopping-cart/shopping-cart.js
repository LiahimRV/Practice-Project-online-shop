import React from 'react';
import { useSelector } from 'react-redux';
import { selectCart } from '../../selectors';
import { H2 } from '../../components';
import { ContentProduct, AnOrderCard } from './components';
import styled from 'styled-components';

const ShoppingCartContainer = ({ className }) => {
	const products = useSelector(selectCart);
	const totalPrice = products.reduce((acc, prod) => (acc += prod.price), 0);

	return (
		<div className={className}>
			<H2 margin="30px 0 0 0" textAlign="center">
				Корзина
			</H2>
			<div className="shopping-cart__wrapper">
				<div className="shopping-cart__product-list">
					{products.length > 0 ? (
						<div className="shopping-cart__content">
							<div className="shopping-cart__product">
								{products.map(({ id, productName, imageUrl, price }) => (
									<ContentProduct
										key={id}
										id={id}
										name={productName}
										productImageSrc={imageUrl}
										price={price}
									/>
								))}
							</div>
							<AnOrderCard totalPrice={totalPrice} />
						</div>
					) : (
						<div className="shopping-cart__cart-is-empty">
							Ваша корзина пуста
							<div className="shopping-cart__cart-is-empty__image">
								<img
									width="48"
									height="48"
									src="https://img.icons8.com/doodle/48/crying.png"
									alt=""
								/>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export const ShoppingCart = styled(ShoppingCartContainer)`
	padding-top: 18px;

	& .shopping-cart__product {
		margin: 15px 0 0 100px;
	}

	& .shopping-cart__content {
		display: flex;
		flex-wrap: wrap;
	}

	& .an-order-card {
		width: 270px;
		height: 300px;
		border: 2px solid #4f4c4c;
		border-radius: 8px;
	}

	& .shopping-cart__cart-is-empty {
		font-size: 30px;
		margin-top: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	& .shopping-cart__cart-is-empty__image {
		margin-left: 15px;
	}
`;
