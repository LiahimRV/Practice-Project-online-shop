import React from 'react';
import { H2 } from '../../../../components';
import styled from 'styled-components';

const CategoriesSortContainer = ({
	className,
	selectedCategory,
	handleCategoryChange,
	categories,
}) => {
	return (
		<div className={className}>
			<H2>Категории: </H2>
			<div className="categories">
				{categories.map((category) => (
					<span
						key={category}
						className={selectedCategory === category ? 'active' : ''}
						onClick={() => handleCategoryChange(category)}
					>
						{category}
					</span>
				))}
			</div>
		</div>
	);
};

export const CategoriesSort = styled(CategoriesSortContainer)`
	border-radius: 5px;
	margin-left: 60px;
	padding: 5px;
	display: flex;
	flex-direction: column;
	text-align: center;
	font-size: 18px;

	& span {
		margin: 10px;
		cursor: pointer;
	}

	& .active {
		background-color: lightgray;
		border-radius: 10px;
	}

	& .categories {
		display: grid;
		width: 200px;
	}
`;
