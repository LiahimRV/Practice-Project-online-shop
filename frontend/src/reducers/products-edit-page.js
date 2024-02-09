import { ACTION_TYPE } from '../actions';

const initialProductsEditPageState = {
	products: [],
};

export const productsEditPageReducer = (state = initialProductsEditPageState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_PRODUCTS_EDIT_PAGE_DATA:
			return {
				...state,
				products: action.payload,
			};

		default:
			return state;
	}
};
