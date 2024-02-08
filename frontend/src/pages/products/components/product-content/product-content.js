import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, ProductImage } from '../../../../components';
import { selectProduct, selectUserRole } from '../../../../selectors';
import { useDispatch } from 'react-redux';
import { addProductInCart } from '../../../../actions';
import { ROLE } from '../../../../constants';
import styled from 'styled-components';
import { PathPanel } from '../path-panel/path-panel';

const ProductContentContainer = ({ className, product, productName }) => {
	const loadedProd = useSelector(selectProduct);
	const roleId = useSelector(selectUserRole);
	const dispatch = useDispatch();
	const [isAdded, setIsAdded] = useState(false);

	const addButtonLabel = isAdded ? 'Добавлено' : 'Добавить в корзину';

	const handleAddProd = () => {
		dispatch(addProductInCart(product));
		setIsAdded(true);
	};

	return (
		<div className={className}>
			<PathPanel>Главная / {loadedProd.productName}</PathPanel>
			<div className="product-info-data">
				<div className="product-info-data__image-wrapper">
					<ProductImage alt="Photo" height="400px" src={product.imageUrl} />
				</div>
				<div className="product-info-data__product-information-panel">
					<div className="product-info-data__product-information">
						<div className="product-info-data__product-name">
							{product.productName}
						</div>
						<div className="product-info-data__product-description">
							Описание товара: {product.description}
						</div>
						<div className="product-info-data__product-quantity">
							Осталось на складе: {product.quantity}
						</div>
						<div className="product-info-data__product-price">
							Стоймость: {product.price} руб
						</div>
					</div>
					<div className="product-info-data__product-add-to-cart-button">
						{roleId === ROLE.GUEST ? (
							<StyledButton disabled>Добавить в корзину</StyledButton>
						) : (
							<StyledButton onClick={handleAddProd} disabled={isAdded}>
								{addButtonLabel}
							</StyledButton>
						)}
					</div>
				</div>
			</div>
			<span className="prod-id">ID продукта: {product.id}</span>
		</div>
	);
};

const StyledButton = styled(Button)`
	width: 300px;
	height: 50px;

	&:disabled {
		background-color: rgb(243, 199, 183);
		cursor: not-allowed;
	}
`;

export const ProductContent = styled(ProductContentContainer)`
	display: grid;
	padding-top: 100px;

	& .product-info-data__product-name {
		font-size: 30px;
	}

	& .product-info-data__product-description {
		height: 200px;
		max-height: 200px;
		width: 500px;
		max-width: 500px;
	}

	& .product-info-data__product-information {
		height: 400px;
	}

	& .product-info-data__product-information-panel {
		display: flex;
		flex-direction: column;
	}

	& .product-info-data__image-wrapper {
		margin-left: 10px;
	}

	& .product-info-data {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}

	& .prod-id {
		font-size: 13px;
		text-align: right;
		margin-right: 18px;
		margin-top: 100px;
		color: #888;
	}

	& .product-info-data__product-add-to-cart-button {
		margin-top: 20px;
	}

	& .product-info-data__product-price {
		font-weight: bold;
		margin-top: 10px;
	}

	& .product-info-data__product-quantity {
		margin-top: 10px;
	}

	& .product-info-data__product-description {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3; /* Show 3 lines of description */
		-webkit-box-orient: vertical;
	}

	& .product-info-data__image-wrapper {
		width: 300px;
		height: 300px;
	}

	& .product-info-data__product-information-panel {
		width: 500px;
	}

	& .product-info-data__product-add-to-cart-button button {
		width: 100%;
		height: 50px;
	}

	& .product-info-data__product-add-to-cart-button button:disabled {
		background-color: rgb(243, 199, 183);
		cursor: not-allowed;
	}
`;
