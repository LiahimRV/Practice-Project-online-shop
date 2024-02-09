import { ACTION_TYPE } from './action-type';

export const setProductsEditPageData = (productsData) => {
	return { type: ACTION_TYPE.SET_PRODUCTS_EDIT_PAGE_DATA, payload: productsData };
};
