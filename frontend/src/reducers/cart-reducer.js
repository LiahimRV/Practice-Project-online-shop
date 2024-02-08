import { ACTION_TYPE } from '../actions';

const initialCartState = {
	itemsInCart: JSON.parse(localStorage.getItem('cartItems')) || [],
};

export const cartReducer = (state = initialCartState, action) => {
	switch (action.type) {
		case ACTION_TYPE.ADD_PRODUCT_IN_CART:
			const isProductInCart = state.itemsInCart.some(
				(item) => item.id === action.payload.id,
			);

			if (isProductInCart) {
				return state;
			}

			const updatedCart = {
				...state,
				itemsInCart: [...state.itemsInCart, action.payload],
			};

			localStorage.setItem('cartItems', JSON.stringify(updatedCart.itemsInCart));

			return updatedCart;
		case ACTION_TYPE.REMOVE_PRODUCT_FROM_CART:
			const updatedItems = state.itemsInCart.filter(
				(item) => item.id !== action.payload,
			);

			const updatedState = {
				...state,
				itemsInCart: updatedItems,
			};

			localStorage.setItem('cartItems', JSON.stringify(updatedItems));

			return updatedState;
		case ACTION_TYPE.RESET_PRODUCT_CART:
			localStorage.removeItem('cartItems');
			return {
				...state,
				itemsInCart: [],
			};
		default:
			return state;
	}
};
