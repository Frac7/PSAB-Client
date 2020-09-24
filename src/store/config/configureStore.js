import { compose, createStore } from 'redux';

import rootReducer from './reducers';

const configureStore = () => {
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	return createStore(rootReducer, composeEnhancers());
};

export default configureStore;
