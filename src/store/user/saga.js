import { takeLatest, put, call } from 'redux-saga/effects';

import {
	loggedIn, loggedOut,
	TYPES, userError, userReceived
} from './action';

import { currentUserInfo, signIn, signOut } from '../../api/user';

function* handleLogin ({ payload: { data }}) {
	try {
		const { address, password } = data;

		const { result, error } = yield call(signIn, address, password);

		if (result) {
			yield put(loggedIn({ data: result }));
		} else {
			yield put(userError({ error }));
		}
	} catch (error) {
		yield put(userError({ error }));
	}
}

function* handleLogout () {
	try {
		yield call(signOut);
		yield put(loggedOut());
	} catch (error) {
		yield put(userError({ error }));
	}
}

function* getUser () {
	try {
		const { result, error } = yield call(currentUserInfo);

		if (error) {
			yield put(userError({ error }));
		} else {
			yield put(userReceived({ data: result }));
		}
	} catch (error) {
		yield put(userError({ error }));
	}
}

const userSaga = [
	takeLatest(TYPES.REQUEST_LOGIN, handleLogin),
	takeLatest(TYPES.REQUEST_LOGOUT, handleLogout),
	takeLatest(TYPES.REQUEST_USER, getUser),
];

export default userSaga;
export {
	handleLogin,
	handleLogout,
	getUser
}
