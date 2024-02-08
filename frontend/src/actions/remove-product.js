import { ACTION_TYPE } from './action-type';

export const removeProduct = (prodId) => () => {
	return {
		type: ACTION_TYPE.REMOVE_PRODUCT,
		payload: prodId,
	};
};
