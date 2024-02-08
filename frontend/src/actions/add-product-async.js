import { request } from '../utils/request';
import { addProduct } from './add-product';

export const addProductAsync = (product) => (dispatch) => {
	request('/products/edit/new-product', 'POST', product).then((response) => {
		dispatch(addProduct(response.data));
	});
};
