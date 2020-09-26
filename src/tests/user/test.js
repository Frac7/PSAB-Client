import {
	loggedIn,
	loggedOut,
	requestLogin,
	requestLogout,
	requestUser,
	TYPES,
	userReceived
} from '../../store/user/action';
import { getUser, handleLogin, handleLogout } from '../../store/user/saga';

import configureMockStore from 'redux-mock-store';
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


