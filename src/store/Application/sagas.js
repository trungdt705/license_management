import { call, put, take } from 'redux-saga/effects';
import API from './apis';
import * as ACTIONS from './action';
import { takeLatest } from 'redux-saga/effects';
import * as TYPES from './Types';

export function* Application() {
	while (true) {
		// yield take(TYPES.GET_LIST);
		// try {
		// 	const response = yield call(API.getList);
		// 	yield put(ACTIONS.actionReceive(response.data));
		// } catch (err) {
		// 	console.log(err);
		// 	// dispatchSnackbarError(err.response.data);
		// }

		yield take(TYPES.CREATE);
		try {
			const response = yield call((payload) => API.create(payload));
			yield put(ACTIONS.actionCreate(response.data));
		} catch (err) {
			console.log(err);
			// dispatchSnackbarError(err.response.data);
		}
	}
}
