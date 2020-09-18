import { createActions } from 'redux-actions';
import { createActionType } from '../utils';

const DOMAIN = '@user';

const TYPES = {
	LOGGED_IN: createActionType(DOMAIN, 'LOGGED_IN')
};

const {
	loggedIn
} = createActions({
	[TYPES.LOGGED_IN]: ({ data }) => ({ data })
}).user;

export {
	TYPES,
	loggedIn
};
