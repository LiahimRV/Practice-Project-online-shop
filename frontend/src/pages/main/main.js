import React, { useEffect, useState } from 'react';
import { ProductCard, CategoriesSort } from './components';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { loadProductsAsync, setLoading } from '../../actions';
import { Icon, Loader } from '../../components';
import { selectLoader, selectProducts } from '../../selectors';

const MainContainer = ({ className }) => {
	const [loadingProducts, setLoadingProducts] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');
	const [sortType, setSortType] = useState('asc');
	const [selectedCategory, setSelectedCategory] = useState('Все товары');
	// переделать в будущем
	const [categories, setCategories] = useState([
		'Все товары',
		'Дерево',
		'Керамика',
		'Стекло',
		'Металл',
	]);

	const products = useSelector(selectProducts);
	const loader = useSelector(selectLoader);
	const dispatch = useDispatch();

	const filteredProducts = products.filter(
		(product) =>
			product.productName.toLowerCase().includes(searchQuery.toLowerCase()) &&
			(selectedCategory === 'Все товары' || product.category === selectedCategory),
	);

	const sortedProducts = filteredProducts.slice().sort((a, b) => {
		if (sortType === 'asc') {
			return a.price - b.price;
		} else {
			return b.price - a.price;
		}
	});

	const handleSearchInputChange = (event) => {
		setSearchQuery(event.target.value);
	};

	const handleSortTypeChange = () => {
		const newSortType = sortType === 'asc' ? 'desc' : 'asc';
		setSortType(newSortType);
	};

	const handleCategoryChange = (category) => {
		setSelectedCategory(category);
	};

	useEffect(() => {
		dispatch(setLoading(true));
		setLoadingProducts(true);

		dispatch(loadProductsAsync()).then(() => {
			dispatch(setLoading(false));
			setLoadingProducts(false);
		});
	}, [dispatch]);

	return (
		<div className={className}>
			{loader || loadingProducts ? (
				<div className="main__loader-container">
					<Loader />
				</div>
			) : (
				<>
					<div className="main__search-bar">
						<input
							type="text"
							value={searchQuery}
							onChange={handleSearchInputChange}
							placeholder="Поиск товаров..."
						/>
						<Icon id="fa-search" margin="0 0 4px 7px " color="black" />
					</div>
					<div className="main__sort-button">
						<span onClick={handleSortTypeChange}>
							Сортировать по стоймости{' '}
						</span>
					</div>

					<div className="main__content">
						<CategoriesSort
							selectedCategory={selectedCategory}
							handleCategoryChange={handleCategoryChange}
							categories={categories}
						/>

						<div className="main__products-list">
							{filteredProducts.length > 0 ? (
								sortedProducts.map(
									({ id, productName, imageUrl, price }) => (
										<ProductCard
											key={id}
											id={id}
											productName={productName}
											imageUrl={imageUrl}
											price={price}
										/>
									),
								)
							) : (
								<div className="main__no-products-found">
									Товары не найдены ...
								</div>
							)}
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export const Main = styled(MainContainer)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	& .main__content {
		display: flex;
	}

	& .main__products-list {
		display: flex;
		flex-wrap: wrap;
		padding: 20px 20px 80px;
	}

	& .main__no-products-found {
		font-size: 25px;
		margin: 60px 0 0 270px;
	}

	& .main__search-bar {
		margin: 25px 0 15px 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	& input {
		padding: 10px;
		height: 20px;
		border: 1px solid;
		border-radius: 5px;
		font-size: 16px;
		width: 500px;
		height: 40px;
	}

	& .main__sort-button {
		align-self: center;
		padding: 5px 10px;
		font-size: 14px;
		cursor: pointer;
		width: 200px;
		border-bottom: 1px solid black;
	}

	& .main__sort-button span {
		margin-right: 5px;
	}
`;
