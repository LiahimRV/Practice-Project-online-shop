import { request } from '../utils/request';
import { setProductData } from './set-product-data';

export const loadProductAsync = (productId) => (dispatch) =>
	request(`/products/${productId}`).then(({ data }) => {
		if (data) {
			dispatch(setProductData(data));
		}

		return { data };
	});
