import { request } from '../utils/request';
import { setProductsData } from './set-products-data';

export const loadProductsAsync = () => (dispatch) =>
	request(`/products`).then(({ data }) => {
		if (data) {
			dispatch(setProductsData(data));
		}

		return { data };
	});
