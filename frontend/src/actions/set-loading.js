import { ACTION_TYPE } from './action-type';

export const setLoading = (loading) => ({
	type: ACTION_TYPE.SET_LOADING,
	payload: loading,
});
