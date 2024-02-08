import { ACTION_TYPE } from '../actions';

const initialProductstate = {
	id: '',
	productName: '',
	imageUrl: '',
	price: '',
	quantity: '',
	category: '',
	description: '',
};

export const productReducer = (state = initialProductstate, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_PRODUCT_DATA:
			return {
				...state,
				...action.payload,
			};
		case ACTION_TYPE.RESET_PRODUCT_DATA:
			return initialProductstate;
		default:
			return state;
	}
};
