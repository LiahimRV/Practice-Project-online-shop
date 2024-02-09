import { ACTION_TYPE } from '../actions';

const initialProductsState = {
	products: [],
};

export const productsReducer = (state = initialProductsState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_PRODUCTS_DATA:
			return {
				...state,
				products: action.payload,
			};
		case ACTION_TYPE.ADD_PRODUCT:
			return {
				...state,
				products: [...state.products, action.payload],
			};
		case ACTION_TYPE.REMOVE_PRODUCT:
			return {
				...state,
				products: state.products.filter(
					(product) => product.id !== action.payload,
				),
			};
		case ACTION_TYPE.EDIT_PRODUCT:
			return {
				...state,
				products: state.products.map((product) =>
					product.id === action.payload.id ? action.payload : product,
				),
			};
		default:
			return state;
	}
};
