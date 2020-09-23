import { createActions } from 'redux-actions';
import { createActionType } from '../utils';

const DOMAIN = '@user';

const TYPES = {
	REQUEST_LOGIN: createActionType(DOMAIN, 'REQUEST_LOGIN'),
	LOGGED_IN: createActionType(DOMAIN, 'LOGGED_IN'),
	LOGGED_OUT: createActionType(DOMAIN, 'LOGGED_OUT')
};

const {
	requestLogin,
	loggedIn,
	loggedOut
} = createActions({
	[TYPES.REQUEST_LOGIN]: null,
	[TYPES.LOGGED_IN]: ({ data }) => ({ data }),
	[TYPES.LOGGED_OUT]: null,
}).user;

export {
	TYPES,
	requestLogin,
	loggedIn,
	loggedOut
};
