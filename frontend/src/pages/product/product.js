import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ProductContent } from './components';
import { Error } from '../../components';
import { loadProductAsync } from '../../actions';
import { selectProduct } from '../../selectors';
import styled from 'styled-components';

const ProductContainer = ({ className }) => {
	const [error, setError] = useState(null);
	const dispatch = useDispatch();
	const params = useParams();
	const productName = useSelector(selectProduct);

	useEffect(() => {
		dispatch(loadProductAsync(params.id)).then((productData) => {
			setError(productData.error);
		});
	}, [dispatch, params.id]);

	return error ? <Error error={error} /> : <ProductContent product={productName} />;
};

export const Product = styled(ProductContainer)``;
