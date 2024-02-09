import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {
	appReducer,
	userReducer,
	usersReducer,
	productReducer,
	productsReducer,
	cartReducer,
	loaderReducer,
	productsEditPageReducer,
} from './reducers';

const reducer = combineReducers({
	app: appReducer,
	user: userReducer,
	users: usersReducer,
	product: productReducer,
	products: productsReducer,
	editProducts: productsEditPageReducer,
	cart: cartReducer,
	loading: loaderReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
