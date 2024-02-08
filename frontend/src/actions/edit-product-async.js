import { request } from '../utils';
import { editProduct } from './edit-product';

export const editProductAsync = (productData, id) => (dispatch) => {
	request(`/products/edit/edit-product/${id}`, 'PUT', productData).then((response) => {
		dispatch(editProduct(response.data));
	});
};
