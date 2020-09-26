import { handleActions } from 'redux-actions';
import {
	requestLogin,
	requestLogout,
	requestUser,
	loggedIn,
	loggedOut,
	userReceived,
	userError
} from './action';

const defaultState = {
	data: null,
	isLoading: false,
	isError: false
};

const user = handleActions({
	[requestLogin]: (state) => Object.assign({}, state, {
		isLoading: true
	}),
	[requestLogout]: (state) => Object.assign({}, state, {
		isLoading: true
	}),
	[requestUser]: (state) => Object.assign({}, state, {
		isLoading: true
	}),
	[loggedIn]: (state, { payload: { data }}) => Object.assign({}, state, {
		data,
		isLoading: false
	}),
	[loggedOut]: (state) => Object.assign({}, state, {
		data: null,
		isLoading: false
	}),
	[userReceived]: (state, { payload: { data }}) => Object.assign({}, state, {
		data,
		isLoading: false
	}),
	[userError]: (state, { payload: { error }}) => Object.assign({}, state, {
		isError: true,
		isLoading: false
	})
}, defaultState);

const Selector = {
	getUser: (state) => state.user
};

export default user;
export { Selector };
