import { takeLatest, put, call } from 'redux-saga/effects';

import {
	loggedIn, loggedOut,
	TYPES, userError, userReceived
} from './action';

import { Auth } from '@aws-amplify/auth';

function* handleLogin ({ payload: { data }}) {
	try {
		const { email, password } = data;

		const { result, error } = yield call(
			() => Auth.signIn(email, password)
				.then((result) => {
					return { result };
				})
				.catch((error) => {
					return { error };
				}));

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
		yield call(() => Auth.signOut());
		yield put(loggedOut());
	} catch (error) {
		yield put(userError({ error }));
	}
}

function* getUser () {
	try {
		const { result, error } = yield call(() => Auth.currentUserInfo()
			.then((result) => {
				return { result };
			})
			.catch((error) => {
				return { error };
			}));

		if (result) {
			yield put(userReceived({ data: result }));
		} else {
			yield put(userError({ error }));
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
