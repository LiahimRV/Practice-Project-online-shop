import { request } from '../utils/request';
import { setProductData } from './set-product-data';

export const savePostAsync = (id, newPostData) => (dispatch) => {
	const saveRequest = id
		? request(`/products/${id}`, 'PATCH', newPostData)
		: request('/products', 'POST', newPostData);

	return saveRequest.then((updatedPost) => {
		dispatch(setProductData(updatedPost.data));

		return updatedPost.data;
	});
};
