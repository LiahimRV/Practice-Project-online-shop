import React, { useState } from 'react';
import styled from 'styled-components';

const EditProductModalContainer = ({ className, product, handleUpdateProduct }) => {
	const [productName, setProductName] = useState(product.productName);
	const [category, setCategory] = useState(product.category);
	const [price, setPrice] = useState(product.price);
	const [quantity, setQuantity] = useState(product.quantity);
	const [imageUrl, setImageUrl] = useState(product.imageUrl);
	const [description, setDescription] = useState(product.description);

	const handleProductNameChange = (event) => {
		setProductName(event.target.value);
	};

	const handleCategoryChange = (event) => {
		setCategory(event.target.value);
	};

	const handlePriceChange = (event) => {
		setPrice(event.target.value);
	};

	const handleQuantityChange = (event) => {
		setQuantity(event.target.value);
	};

	const handleImageUrlChange = (event) => {
		setImageUrl(event.target.value);
	};

	const handleDescriptionChange = (event) => {
		setDescription(event.target.value);
	};

	const handleSaveChanges = () => {
		const updatedProduct = {
			...product,
			productName,
			category,
			price,
			quantity,
			imageUrl,
			description,
		};

		handleUpdateProduct(updatedProduct, updatedProduct.id);
	};

	return (
		<div className={className}>
			<div className="modal-content">
				<h2>Редактировать товар</h2>
				<div className="form-group">
					<label htmlFor="productName">Название товара:</label>
					<input
						type="text"
						id="productName"
						value={productName}
						onChange={handleProductNameChange}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="category">Категория товара:</label>
					<input
						type="text"
						id="category"
						value={category}
						onChange={handleCategoryChange}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="price">Стоимость:</label>
					<input
						type="text"
						id="price"
						value={price}
						onChange={handlePriceChange}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="quantity">Количество на складе:</label>
					<input
						type="text"
						id="quantity"
						value={quantity}
						onChange={handleQuantityChange}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="imageUrl">URL фотографии:</label>
					<input
						type="text"
						id="imageUrl"
						value={imageUrl}
						onChange={handleImageUrlChange}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="description">Описание товара:</label>
					<textarea
						id="description"
						value={description}
						onChange={handleDescriptionChange}
					/>
				</div>
				<button onClick={handleSaveChanges}>Сохранить изменения</button>
			</div>
		</div>
	);
};

export const EditProductModal = styled(EditProductModalContainer)`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 9999;
	background-color: rgba(0, 0, 0, 0.5);

	& .modal-content {
		background-color: #fff;
		padding: 20px;
		border-radius: 5px;
		width: 400px;
		max-width: 90%;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
	}

	& h2 {
		margin-top: 0;
	}

	& .form-group {
		margin-bottom: 15px;
	}

	& label {
		display: block;
		margin-bottom: 5px;
	}

	& input[type='text'],
	& textarea {
		width: 100%;
		padding: 5px;
		border: 1px solid #ccc;
		border-radius: 3px;
	}

	& textarea {
		height: 100px;
	}

	& button {
		padding: 10px 15px;
		background-color: #007bff;
		color: #fff;
		border: none;
		border-radius: 3px;
		cursor: pointer;
	}
`;
