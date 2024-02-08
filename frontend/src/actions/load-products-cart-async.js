import { request } from '../utils/request';
import { setProductsData } from './set-products-data';

export const loadProductsCartAsync = () => (dispatch) =>
	request(`/products/edit`).then(({ data }) => {
		if (data) {
			dispatch(setProductsData(data));
		}

		return { data };
	});
