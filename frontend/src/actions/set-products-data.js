import { ACTION_TYPE } from './action-type';

export const setProductsData = (productsData) => {
	return { type: ACTION_TYPE.SET_PRODUCTS_DATA, payload: productsData };
};
