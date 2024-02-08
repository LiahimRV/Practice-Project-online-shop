import { ACTION_TYPE } from './action-type';

export const addProductInCart = (prod) => ({
	type: ACTION_TYPE.ADD_PRODUCT_IN_CART,
	payload: prod,
});
