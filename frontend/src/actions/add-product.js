import { ACTION_TYPE } from './action-type';

export const addProduct = (product) => ({
	type: ACTION_TYPE.ADD_PRODUCT,
	payload: product,
});
