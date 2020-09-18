import { all } from 'redux-saga/effects';

import userSaga from '../user/saga';

function* rootSaga() {
	yield all([
		...userSaga
	]);
}

export default rootSaga;
