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
	error: null,
	isLoading: false,
	isError: false
};

const user = handleActions({
	[requestLogin]: (state) => Object.assign({}, state, {
		isError: false,
		isLoading: true
	}),
	[requestLogout]: (state) => Object.assign({}, state, {
		isError: false,
		isLoading: true
	}),
	[requestUser]: (state) => Object.assign({}, state, {
		isError: false,
		isLoading: true
	}),
	[loggedIn]: (state, { payload: { data }}) => Object.assign({}, state, {
		data,
		isError: false,
		isLoading: false
	}),
	[loggedOut]: (state) => Object.assign({}, state, {
		data: null,
		isError: false,
		isLoading: false
	}),
	[userReceived]: (state, { payload: { data }}) => Object.assign({}, state, {
		data,
		isError: false,
		isLoading: false
	}),
	[userError]: (state, { payload: { error }}) => Object.assign({}, state, {
		error,
		isError: true,
		isLoading: false
	})
}, defaultState);

const Selector = {
	getUser: (state) => state.user
};

export default user;
export { Selector };
