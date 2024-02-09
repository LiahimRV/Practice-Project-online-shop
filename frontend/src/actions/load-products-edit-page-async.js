import { request } from '../utils/request';
import { setProductsEditPageData } from './set-products-edit-page-data';

export const loadProductsEditPageAsync = () => (dispatch) =>
	request(`/products/edit`).then(({ data }) => {
		if (data) {
			dispatch(setProductsEditPageData(data));
		}
		return { data };
	});
