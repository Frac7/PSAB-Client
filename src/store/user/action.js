import { createActions } from 'redux-actions';
import { createActionType } from '../utils';

const DOMAIN = '@user';

const TYPES = {
	REQUEST_USER: createActionType(DOMAIN, 'REQUEST_USER'),
	USER_RECEIVED: createActionType(DOMAIN, 'USER_RECEIVED'),
	REQUEST_LOGIN: createActionType(DOMAIN, 'REQUEST_LOGIN'),
	LOGGED_IN: createActionType(DOMAIN, 'LOGGED_IN'),
	REQUEST_LOGOUT: createActionType(DOMAIN, 'REQUEST_LOGOUT'),
	LOGGED_OUT: createActionType(DOMAIN, 'LOGGED_OUT'),
	USER_ERROR: createActionType(DOMAIN, 'USER_ERROR')
};

const {
	requestLogin,
	requestLogout,
	requestUser,
	loggedIn,
	loggedOut,
	userReceived,
	userError
} = createActions({
	[TYPES.REQUEST_LOGIN]: null,
	[TYPES.REQUEST_LOGOUT]: null,
	[TYPES.REQUEST_USER]: null,
	[TYPES.LOGGED_IN]: ({ data }) => ({ data }),
	[TYPES.LOGGED_OUT]: null,
	[TYPES.USER_RECEIVED]: ({ data }) => ({ data }),
	[TYPES.USER_ERROR]: ({ error }) => ({ error })
}).user;

export {
	TYPES,
	requestLogin,
	requestLogout,
	requestUser,
	loggedIn,
	loggedOut,
	userReceived,
	userError
};
