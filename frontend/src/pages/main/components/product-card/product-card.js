import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProductCardContainer = ({ className, id, productName, imageUrl, price }) => {
	return (
		<div className={className}>
			<Link to={`/products/${id}`}>
				<div className="img-wrapper">
					<img src={imageUrl} alt={productName} />
				</div>
				<div className="product-card-footer">
					<h4>{productName}</h4>
					<div className="price">{price}</div>
				</div>
			</Link>
		</div>
	);
};

export const ProductCard = styled(ProductCardContainer)`
	display: flex;
	flex-direction: column;
	width: 280px;
	margin: 20px;
	border: 1px solid #ccc;
	border-radius: 8px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	transition: box-shadow 0.3s ease-in-out;

	&:hover {
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	}

	& img {
		display: block;
		height: 280px;
		width: 100%;
		border-top-left-radius: 8px;
		border-top-right-radius: 8px;
	}

	& .product-card-footer {
		padding: 10px;
		background-color: #f5f5f5;
		border-bottom-left-radius: 8px;
		border-bottom-right-radius: 8px;
	}

	& h4 {
		margin: 0;
		font-size: 18px;
		color: #333;
		height: 40px;
	}

	& .price {
		font-size: 15px;
		font-weight: bold;
		color: #333;
		margin-top: 10px;
	}
`;
