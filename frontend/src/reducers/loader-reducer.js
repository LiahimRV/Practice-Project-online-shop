const initialState = false;

export const loaderReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_LOADING':
			return action.payload;
		default:
			return state;
	}
};
