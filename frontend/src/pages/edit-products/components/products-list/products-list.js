import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProductsAsync, removeProductAsync, setLoading } from '../../../../actions';
import { LoadedProductForm } from './components';
import styled from 'styled-components';
import { selectProducts } from '../../../../selectors';

const ProductsListContainer = ({ className, handleUpdateProduct }) => {
	const dispatch = useDispatch();
	const products = useSelector(selectProducts);

	useEffect(() => {
		dispatch(setLoading(true));

		dispatch(loadProductsAsync()).then(() => {
			dispatch(setLoading(false));
		});
	}, [dispatch]);

	const handleDeleteProduct = (id) => {
		dispatch(removeProductAsync(id));
		window.location.reload();
	};

	return (
		<div className={className}>
			<div className="products-list__bar">
				<div className="products-list__id">id</div>
				<div className="products-list__product-name">Наименование</div>
				<div className="products-list__category">Кат-ия</div>
				<div className="products-list__price">Сто-ть</div>
				<div className="products-list__description">Описание </div>
				<div className="products-list__quantity">Кол-во</div>
				<div className="products-list__imageUrl">Фото</div>
				<div className="products-list__buttons-bar"></div>
			</div>
			<div className="products-list__products">
				{products.map(
					({
						id,
						productName,
						imageUrl,
						price,
						category,
						description,
						quantity,
					}) => (
						<LoadedProductForm
							key={id}
							id={id}
							productName={productName}
							imageUrl={imageUrl}
							price={price}
							category={category}
							description={description}
							quantity={quantity}
							handleDeleteProduct={() => handleDeleteProduct(id)}
							handleUpdateProduct={handleUpdateProduct}
						/>
					),
				)}
			</div>
		</div>
	);
};

export const ProductsList = styled(ProductsListContainer)`
	display: flex;
	flex-direction: column;
	margin-top: 50px;

	& .products-list__bar {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 10px;
		text-align: center;
		text-overflow: ellipsis;
		word-wrap: break-word;
		margin-left: 15px;
		border-bottom: 1px solid gray;
	}

	& .products-list__id {
		width: 210px;
	}

	& .products-list__product-name {
		width: 120px;
	}

	& .products-list__category {
		width: 60px;
	}

	& .products-list__price {
		width: 60px;
	}

	& .products-list__description {
		width: 150px;
	}

	& .products-list__quantity {
		width: 50px;
	}

	& .products-list__imageUrl {
		width: 37px;
	}

	& .products-list__buttons-bar {
		width: 115px;
	}
`;
