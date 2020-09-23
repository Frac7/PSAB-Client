import { handleActions } from 'redux-actions';
import { loggedIn, loggedOut, requestLogin } from './action';

const defaultState = {
	data: null,
	isLoading: false
};

const user = handleActions({
	[requestLogin]: (state) => Object.assign({}, state, {
		isLoading: true
	}),
	[loggedIn]: (state, { payload: { data }}) => Object.assign({}, state, {
		data,
		isLoading: false
	}),
	[loggedOut]: (state) => Object.assign({}, state, {
		data: null
	})
}, defaultState);

const Selector = {
	getUser: (state) => state.user
};

export default user;
export { Selector };
