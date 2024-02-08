import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ProductContent } from './components';
import { Error, Loader } from '../../components';
import { loadProductAsync, setLoading } from '../../actions';
import { selectLoader, selectProduct } from '../../selectors';
import styled from 'styled-components';

const ProductContainer = ({ className }) => {
	const [error, setError] = useState(null);
	const dispatch = useDispatch();
	const params = useParams();
	const productName = useSelector(selectProduct);
	const loading = useSelector(selectLoader);

	useEffect(() => {
		dispatch(setLoading(true));

		dispatch(loadProductAsync(params.id)).then((productData) => {
			dispatch(setLoading(false));

			setError(productData.error);
		});
	}, [dispatch, params.id]);

	return error ? (
		<Error error={error} />
	) : loading ? (
		<div className="loader-container">
			<Loader />
		</div>
	) : (
		<ProductContent product={productName} />
	);
};

export const Product = styled(ProductContainer)``;
