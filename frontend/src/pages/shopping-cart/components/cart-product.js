import { useDispatch } from 'react-redux';
import { ProductImage, Icon } from '../../../components';
import { removeProductFromCart } from '../../../actions';
import styled from 'styled-components';

const ContentProductContainer = ({
	className,
	productImageSrc,
	id,
	name,
	count,
	price,
}) => {
	const dispatch = useDispatch();

	const handleDelete = () => {
		dispatch(removeProductFromCart(id));
	};

	return (
		<div className={className}>
			<ProductImage
				alt="Photo"
				src={productImageSrc}
				height="120px"
				width="120px"
			/>
			<div className="content-product__block">
				<div className="content-product__id">id товара: {id}</div>
				<div className="content-product__product-name">{name}</div>
			</div>
			<div className="content-product__prod-count">{count}</div>
			<div className="content-product__price">Цена: {price}</div>

			<div className="content-product__delete-icon" onClick={handleDelete}>
				<Icon
					id="fa-times"
					color="black"
					transform="scale(1)"
					hooverColor="tomato"
				/>
			</div>
		</div>
	);
};

export const ContentProduct = styled(ContentProductContainer)`
	border-bottom: 2px solid black;
	margin: 15px 0 0 5px;
	padding: 10px;
	display: flex;
	height:auto;
	min-height: 140px;
	min-width: 700px;
	width 700px;


	& .content-product__block {
		margin: 0 60px 0 50px;
		width:180px;

	}

	& .content-product__id {
		font-size: 13px;
	}

	& .content-product__product-name {
		margin: 20px 0 0 0;
		font-size: 30px;
		width: 200px;

	}

	& .content-product__price {
		font-size: 20px;
        width:120px;
		text-decoration: 1px underline ;
		margin: 70px 0 0 50px;


	}

	& .content-product__delete-icon {
		position: relative;
		bottom: 10px;
		left: 80px;

`;
