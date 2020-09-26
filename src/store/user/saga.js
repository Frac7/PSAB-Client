import { takeLatest, put, call } from 'redux-saga/effects';

import {
	loggedIn, loggedOut,
	TYPES, userError, userReceived
} from './action';

import { Auth } from '@aws-amplify/auth';

function* handleLogin ({ data }) {
	try {
		const { email, password } = data;
		const result = yield call(Auth.signIn(email, password)
			.then((result) => {
				console.log(result);
				return result;
			}));
		yield put(loggedIn({ data: result }));
	} catch (error) {
		console.error(error);
		yield put(userError({ error }));
	}
}

function* handleLogout () {
	try {
		yield call(Auth.signOut());
		yield put(loggedOut());
	} catch (error) {
		console.error(error);
		yield put(userError({ error }));
	}
}

function* getUser () {
	try {
		const result = yield call(Auth.currentUserInfo()
			.then((result) => {
				console.log(result);
				return result;
			}));
		yield put(userReceived({ data: result }));
	} catch (error) {
		console.error(error);
		yield put(userError({ error }));
	}
}

const userSaga = [
	takeLatest(TYPES.REQUEST_LOGIN, handleLogin),
	takeLatest(TYPES.REQUEST_LOGOUT, handleLogout),
	takeLatest(TYPES.REQUEST_USER, getUser),
];

export default userSaga;
