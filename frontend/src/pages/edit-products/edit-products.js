import { useDispatch } from 'react-redux';
import { AddProductPageForm, ProductsList } from './components';
import { editProductAsync } from '../../actions';
import styled from 'styled-components';

const EditProductsContainer = ({ className }) => {
	const dispatch = useDispatch();

	const handleUpdateProduct = (productData, id) => {
		dispatch(editProductAsync(productData, id));
		window.location.reload();
	};

	return (
		<div className={className}>
			<AddProductPageForm />
			<ProductsList handleUpdateProduct={handleUpdateProduct} />
		</div>
	);
};

export const EditProducts = styled(EditProductsContainer)`
	display: flex;
`;
