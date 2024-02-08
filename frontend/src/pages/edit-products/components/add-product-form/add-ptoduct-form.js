// в будущем переделать

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProductAsync } from '../../../../actions';
import styled from 'styled-components';

const AddProductFormContainer = ({ className }) => {
	const dispatch = useDispatch();
	const [productName, setProductName] = useState('');
	const [category, setCategory] = useState('');
	const [price, setPrice] = useState('');
	const [quantity, setQuantity] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const [description, setDescription] = useState('');
	const [isFormValid, setIsFormValid] = useState(false);
	const [isUrlValid, setIsUrlValid] = useState(true);
	const [isPriceValid, setIsPriceValid] = useState(true);
	const [isQuantityValid, setIsQuantityValid] = useState(true);

	const validateForm = () => {
		if (
			productName.trim() !== '' &&
			category.trim() !== '' &&
			price.trim() !== '' &&
			quantity.trim() !== '' &&
			imageUrl.trim() !== '' &&
			description.trim() !== ''
		) {
			setIsFormValid(true);
		} else {
			setIsFormValid(false);
		}
	};

	const validateUrl = (url) => {
		const pattern = /^(ftp|http|https):\/\/[^ "]+$/;
		setIsUrlValid(pattern.test(url));
	};

	const validatePrice = (value) => {
		setIsPriceValid(/^\d+$/.test(value));
	};

	const validateQuantity = (value) => {
		setIsQuantityValid(/^\d+$/.test(value));
	};

	const handleProductNameChange = (event) => {
		setProductName(event.target.value);
		validateForm();
	};

	const handleCategoryChange = (event) => {
		setCategory(event.target.value);
		validateForm();
	};

	const handlePriceChange = (event) => {
		const value = event.target.value;
		setPrice(value);
		validatePrice(value);
		validateForm();
	};

	const handleQuantityChange = (event) => {
		const value = event.target.value;
		setQuantity(value);
		validateQuantity(value);
		validateForm();
	};

	const handleImageUrlChange = (event) => {
		const url = event.target.value;
		setImageUrl(url);
		validateUrl(url);
		validateForm();
	};

	const handleDescriptionChange = (event) => {
		setDescription(event.target.value);
		validateForm();
	};

	const handleAddProduct = () => {
		if (!isUrlValid || !isPriceValid || !isQuantityValid) {
			return;
		}

		const productData = {
			productName,
			category,
			price,
			quantity,
			imageUrl,
			description,
		};

		dispatch(addProductAsync(productData));

		setProductName('');
		setCategory('');
		setPrice('');
		setQuantity('');
		setImageUrl('');
		setDescription('');
	};

	return (
		<div className={className}>
			<div className="form-container">
				<h2>Добавить продукт</h2>
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
						className={!isPriceValid ? 'invalid' : ''}
					/>
					{!isPriceValid && (
						<span className="error-message">Введите цифры</span>
					)}
				</div>
				<div className="form-group">
					<label htmlFor="quantity">Количество на складе:</label>
					<input
						type="text"
						id="quantity"
						value={quantity}
						onChange={handleQuantityChange}
						className={!isQuantityValid ? 'invalid' : ''}
					/>
					{!isQuantityValid && (
						<span className="error-message">Введите цифры</span>
					)}
				</div>
				<div className={`form-group ${!isUrlValid ? 'invalid' : ''}`}>
					<label htmlFor="imageUrl">URL фотографии:</label>
					<input
						type="text"
						id="imageUrl"
						value={imageUrl}
						onChange={handleImageUrlChange}
						className={!isUrlValid ? 'invalid' : ''}
					/>
					{!isUrlValid && (
						<span className="error-message">Недействительный URL</span>
					)}
				</div>
				<div className="form-group">
					<label htmlFor="description">Описание товара:</label>
					<textarea
						id="description"
						value={description}
						onChange={handleDescriptionChange}
					/>
				</div>
				<button onClick={handleAddProduct} disabled={!isFormValid}>
					Добавить
				</button>
			</div>
		</div>
	);
};

export const AddProductPageForm = styled(AddProductFormContainer)`
  display: flex;
  justify-content: left;
  align-items: center;
  height: 80vh;
  margin-left: 5px;

  & .error-message {
    color: red;
  }

  & .form-group input.invalid {
    border-color: red;
  }

  .form-container {
    width: 400px;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    h2 {
      text-align: center;
      margin-bottom: 20px;
    }

    .form-group {
      margin-bottom: 20px;

      label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
      }

      input,
      textarea {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
      }
    }

    & button {
      display: block;
      width: 100%;
      padding: 10px;
      background-color: ${(props) => (props.disabled ? '#ccc' : '#4caf50')};
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    }
  }
};
`;
