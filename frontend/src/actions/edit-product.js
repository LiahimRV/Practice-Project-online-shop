import { ACTION_TYPE } from './action-type';

export const editProduct = (product) => {
	return {
		type: ACTION_TYPE.EDIT_PRODUCT,
		payload: product,
	};
};
