import { ACTION_TYPE } from './action-type';

export const setShoppingCart = (shoppingCartData) => {
	return { type: ACTION_TYPE.SET_SHOPPING_CART_DATA, payload: shoppingCartData };
};
