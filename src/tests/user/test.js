import { loggedIn, loggedOut, requestLogin, TYPES } from '../../store/user/action';
import configureMockStore from 'redux-mock-store';

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

	it('Logs out', () => {
		const expectedAction = {
			type: TYPES.LOGGED_OUT,
		}
		expect(loggedOut()).toEqual(expectedAction);
	});
});

describe('User actions test: asynchronous', () => {
	afterEach(() => {
		jest.restoreAllMocks();
	});

	it('Requests login and logs in successfully', () => {
		global.fetch =
			jest.fn().mockImplementation(() => {
				return Promise
					.resolve({
						json: () => Promise.resolve({
							user: 'Some user data'
						})
					});
		});
		const mockStore = configureMockStore();

		const store = mockStore({
			user: {
				data: null
			}
		});

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
		global.fetch =
			jest.fn().mockImplementation(() => {
				return Promise
					.resolve({
						json: () => Promise.reject(new Error('User error'))
					});
			});
		const mockStore = configureMockStore();

		const store = mockStore({
			user: {
				data: null
			}
		});

		const expectedActions = [
			{ type: TYPES.REQUEST_LOGIN }
		];

		store.dispatch(requestLogin());

		store.subscribe(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});
});
