import {
	loggedIn,
	loggedOut,
	requestLogin,
	requestLogout,
	requestUser,
	userError,
	userReceived,
	TYPES
} from '../../store/user/action';
import { getUser, handleLogin, handleLogout } from '../../store/user/saga';

import configureMockStore from 'redux-mock-store';
import { expectSaga, testSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';
import * as matchers from 'redux-saga-test-plan/matchers';
import createSagaMiddleware from 'redux-saga';

import { Auth } from '@aws-amplify/auth';

describe('User actions test: synchronous', () => {
	it('Requests login', () => {
		const expectedAction = {
			type: TYPES.REQUEST_LOGIN
		}
		expect(requestLogin()).toEqual(expectedAction);
	});

	it('Logs in', () => {
		const expectedAction = {
			type: TYPES.LOGGED_IN,
			payload: { data: 'Some user data' }
		}
		expect(loggedIn({ data: 'Some user data' })).toEqual(expectedAction);
	});

	it('Requests logout', () => {
		const expectedAction = {
			type: TYPES.REQUEST_LOGOUT
		}
		expect(requestLogout()).toEqual(expectedAction);
	});

	it('Logs out', () => {
		const expectedAction = {
			type: TYPES.LOGGED_OUT,
		}
		expect(loggedOut()).toEqual(expectedAction);
	});
	it('Requests user', () => {
		const expectedAction = {
			type: TYPES.REQUEST_USER
		}
		expect(requestUser()).toEqual(expectedAction);
	});

	it('Receives user', () => {
		const expectedAction = {
			type: TYPES.USER_RECEIVED,
			payload: { data: 'Some user data' }
		}
		expect(userReceived({ data: 'Some user data' })).toEqual(expectedAction);
	});
});

describe('User actions test: asynchronous', () => {
	afterEach(() => {
		jest.restoreAllMocks();
	});

	it('Requests login and logs in successfully', () => {
		Auth.signIn =
			jest.fn().mockImplementation((email, password) => {
				return Promise
					.resolve('Some user data');
		});

		const sagaMiddleware = createSagaMiddleware();
		const mockStore = configureMockStore([sagaMiddleware]);

		const store = mockStore({
			user: {
				data: null,
				error: null,
				isLoading: false,
				isError: false
			}
		});
		sagaMiddleware.run(handleLogin, {
			payload: { data: { email: 'user@email.com', password: '12345678' }}});

		const expectedActions = [
			{ type: TYPES.REQUEST_LOGIN },
			{ type: TYPES.LOGGED_IN, payload: { data: 'Some user data' }}
		];

		store.dispatch(requestLogin());

		store.subscribe(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});

	it('Requests login and doesn\'t log in', () => {
		Auth.signIn =
			jest.fn().mockImplementation((email, password) => {
				return Promise
					.reject(new Error('User error'));
			});

		const sagaMiddleware = createSagaMiddleware();
		const mockStore = configureMockStore([sagaMiddleware]);

		const store = mockStore({
			user: {
				data: null,
				error: null,
				isLoading: false,
				isError: false
			}
		});
		sagaMiddleware.run(handleLogin, {
			payload: { data: { email: 'user@email.com', password: '12345678' }}});

		const expectedActions = [
			{ type: TYPES.REQUEST_LOGIN },
			{ type: TYPES.USER_ERROR, payload: { error: new Error('User error') }}
		];

		store.dispatch(requestLogin());

		store.subscribe(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});

	it('Requests logout and logs in successfully', () => {
		Auth.signOut =
			jest.fn().mockImplementation(() => {
				return Promise.resolve();
			});

		const sagaMiddleware = createSagaMiddleware();
		const mockStore = configureMockStore([sagaMiddleware]);

		const store = mockStore({
			user: {
				data: 'Some user data',
				error: null,
				isLoading: false,
				isError: false
			}
		});
		sagaMiddleware.run(handleLogout);

		const expectedActions = [
			{ type: TYPES.REQUEST_LOGOUT },
			{ type: TYPES.LOGGED_OUT }
		];

		store.dispatch(requestLogout());

		store.subscribe(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});

	it('Requests logout and doesn\'t log in', () => {
		Auth.signOut =
			jest.fn().mockImplementation(() => {
				return Promise.reject(new Error('User error'));
			});

		const sagaMiddleware = createSagaMiddleware();
		const mockStore = configureMockStore([sagaMiddleware]);

		const store = mockStore({
			user: {
				data: 'Some user data',
				error: null,
				isLoading: false,
				isError: false
			}
		});
		sagaMiddleware.run(handleLogout);

		const expectedActions = [
			{ type: TYPES.REQUEST_LOGOUT },
			{ type: TYPES.USER_ERROR, payload: { error: new Error('User error') }}
		];

		store.dispatch(requestLogout());

		store.subscribe(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});

	it('Requests user and receives in successfully', () => {
		Auth.currentUserInfo =
			jest.fn().mockImplementation(() => {
				return Promise
					.resolve('Some user data');
			});

		const sagaMiddleware = createSagaMiddleware();
		const mockStore = configureMockStore([sagaMiddleware]);

		const store = mockStore({
			user: {
				data: 'Some user data',
				error: null,
				isLoading: false,
				isError: false
			}
		});
		sagaMiddleware.run(getUser);

		const expectedActions = [
			{ type: TYPES.REQUEST_USER },
			{ type: TYPES.USER_RECEIVED, payload: { data: 'Some user data' }}
		];

		store.dispatch(requestUser());

		store.subscribe(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});

	it('Requests user and doesn\'t receives user', () => {
		Auth.currentUserInfo =
			jest.fn().mockImplementation(() => {
				return Promise.reject(new Error('User error'));
			});

		const sagaMiddleware = createSagaMiddleware();
		const mockStore = configureMockStore([sagaMiddleware]);

		const store = mockStore({
			user: {
				data: 'Some user data',
				error: null,
				isLoading: false,
				isError: false
			}
		});
		sagaMiddleware.run(getUser);

		const expectedActions = [
			{ type: TYPES.REQUEST_USER },
			{ type: TYPES.USER_ERROR, payload: { error: new Error('User error') }}
		];

		store.dispatch(requestUser());

		store.subscribe(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});
});

describe('User sagas test: "testSaga"', () => {
	// TODO: fix these tests in call effect
	it('Logs in', () => {
		testSaga(handleLogin, {
			payload: {
				data: {
					email: 'user@email.com', password: '12345678'
				}}})
			.next()
			.call(() => Auth.signIn('user@email.com', '12345678'))
			.next({ result: 'Some user data' })
			.put(loggedIn({ data: 'Some user data' }))
			.next()
			.isDone();
	});


	it('Doesn\'t log in', () => {
		testSaga(handleLogin, {
			payload: {
				data: {
					email: 'user@email.com', password: '12345678'
				}}})
			.next()
			.call(() => Auth.signIn('user@email.com', '12345678'))
			.throw(new Error('User error'))
			.put(userError({ error: new Error('User error') }))
			.next()
			.isDone();
	});


	it('Logs out', () => {
		testSaga(handleLogout)
			.next()
			.call(() => Auth.signOut())
			.next()
			.put(loggedOut())
			.next()
			.isDone();
	});


	it('Doesn\'t log out', () => {
		testSaga(handleLogout)
			.next()
			.call(() => Auth.signOut())
			.throw(new Error('User error'))
			.put(userError({ error: new Error('User error') }))
			.next()
			.isDone();
	});

	it('Receives user', () => {
		testSaga(getUser)
			.next()
			.call(() => Auth.currentUserInfo())
			.next({ result: 'Some user data' })
			.put(userReceived({ data: 'Some user data' }))
			.next()
			.isDone();
	});


	it('Doesn\'t log in', () => {
		testSaga(getUser)
			.next()
			.call(() => Auth.currentUserInfo())
			.throw(new Error('User error'))
			.put(userError({ error: new Error('User error') }))
			.next()
			.isDone();
	});
});

describe('User sagas test: "expectSaga"', () => {
	it('Logs in', () => { // TODO: fix this test
		expectSaga(handleLogin, {
			payload: { data: { email: 'user@email.com', password: '12345678'} }
		})
			.provide([
				[matchers.call.fn(
					() => Auth.signIn('user@email.com', '12345678')), {
					result: 'Some user data'
				}]
			])
			.put(loggedIn({ data: 'Some user data' }))
			.run();
	});


	it('Doesn\'t log in', () => {
		expectSaga(handleLogin, {
			payload: { data: { email: 'user@email.com', password: '12345678'} }
		})
			.provide([
				[matchers.call.fn(() => Auth.signIn('user@email.com', '12345678')), throwError(new Error('User error'))]
			])
			.put(userError({ error: new Error('User error') }))
			.run();
	});


	it('Logs out', () => { // TODO: fix this
		expectSaga(handleLogout)
			.provide([
				[matchers.call.fn(() => Auth.signOut())]
			])
			.put(loggedOut())
			.run();
	});


	it('Doesn\'t log out', () => {
		expectSaga(handleLogout)
			.provide([
				[matchers.call.fn(() => Auth.signOut()), throwError(new Error('User error'))]
			])
			.put(userError({ error: new Error('User error') }))
			.run();
	});


	it('Receives user', () => { // TODO: fix this test
		expectSaga(getUser)
			.provide([
				[matchers.call.fn(
					() => Auth.currentUserInfo()), {
					result: 'Some user data'
				}]
			])
			.put(userReceived({ data: 'Some user data' }))
			.run();
	});


	it('Doesn\'t log in', () => {
		expectSaga(getUser)
			.provide([
				[matchers.call.fn(() => Auth.currentUserInfo()), throwError(new Error('User error'))]
			])
			.put(userError({ error: new Error('User error') }))
			.run();
	});
});


