import React, { useState } from 'react';
import { Icon } from '../../../../../components';
import { EditProductModal } from './edit-product-modal';
import styled from 'styled-components';

const LoadedProductFormContainer = ({
	className,
	id,
	productName,
	quantity,
	imageUrl,
	price,
	description,
	category,
	handleDeleteProduct,
	handleUpdateProduct,
}) => {
	const [expandedDescription, setExpandedDescription] = useState(false);
	const [expandedImageUrl, setExpandedImageUrl] = useState(false);
	const [showEditModal, setShowEditModal] = useState(false);

	const handleToggleExpandDescription = () => {
		setExpandedDescription(!expandedDescription);
	};

	const handleToggleExpandImageUrl = () => {
		setExpandedImageUrl(!expandedImageUrl);
	};

	const handleToggleEditModal = () => {
		setShowEditModal(!showEditModal);
	};

	return (
		<div className={className}>
			<div className="loaded-product__id">{id}</div>
			<div className="loaded-product__product-name">{productName}</div>
			<div className="loaded-product__category">{category}</div>
			<div className="loaded-product__price">{price}</div>
			<div
				className={`loaded-product__description ${
					expandedDescription ? 'expanded' : ''
				}`}
				onClick={handleToggleExpandDescription}
			>
				{expandedDescription ? description : 'Описание товара...'}
			</div>
			<div className="loaded-product__quantity">{quantity}</div>
			<div
				className={`loaded-product__imageUrl ${
					expandedImageUrl ? 'expanded' : ''
				}`}
				onClick={handleToggleExpandImageUrl}
			>
				{expandedImageUrl ? imageUrl : 'Url...'}
			</div>
			<div className="loaded-product__buttons">
				<Icon
					id="fa-magic"
					margin="15px"
					color="black"
					onClick={handleToggleEditModal}
				/>
				<Icon
					id="fa-times"
					color="black"
					margin="15px"
					hooverColor="tomato"
					onClick={handleDeleteProduct}
				/>
			</div>
			{showEditModal && (
				<EditProductModal
					product={{
						id,
						productName,
						quantity,
						imageUrl,
						price,
						description,
						category,
					}}
					handleUpdateProduct={handleUpdateProduct}
				/>
			)}
		</div>
	);
};
export const LoadedProductForm = styled(LoadedProductFormContainer)`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 10px;
	text-align: center;
	text-overflow: ellipsis;
	word-wrap: break-word;
	margin: 15px 0 5px 15px;
	border: 1px solid black;
	border-radius: 5px;

	& .loaded-product__id {
		width: 210px;
	}

	& .loaded-product__product-name {
		width: 120px;
	}

	& .loaded-product__category {
		width: 60px;
	}

	& .loaded-product__price {
		width: 60px;
	}

	& .loaded-product__description {
		cursor: pointer;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		width: 150px;
	}

	& .loaded-product__imageUrl {
		cursor: pointer;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;

		max-width: 40px;
		width: 37px;
	}

	& .loaded-product__quantity {
		width: 50px;
	}

	& .loaded-product__description.expanded {
		width: auto;
		white-space: normal;
		border: 1px solid black;
	}

	& .loaded-product__imageUrl.expanded {
		width: auto;
		white-space: normal;
	}

	& .loaded-product__buttons {
		display: flex;
		width: 115px;
	}
`;
