import { handleActions } from 'redux-actions';
import { loggedIn } from './action';

const defaultState = {
	data: null
};

const user = handleActions({
	[loggedIn]: (state, { payload: { data }}) => Object.assign({}, state, { data })
}, defaultState);

const Selector = {
	getUser: (state) => state.user
};

export default user;
export { Selector };
