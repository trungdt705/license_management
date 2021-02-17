import { all, fork, take } from 'redux-saga/effects';
import API from '../../network/apis/crud';
import * as TYPES from './commonType';

function* create() {
	while (true) {
		const { payload } = yield take(TYPES.CREATE);
		try {
			yield fork(API.create, payload);
		} catch (err) {
			console.log(err);
			// dispatchSnackbarError(err.response.data);
		}
	}
}

function* list() {
	while (true) {
		const { payload } = yield take(TYPES.GET_LIST);
		try {
			yield fork(API.getList, payload);
		} catch (err) {
			console.log(err);
			// dispatchSnackbarError(err.response.data);
		}
	}
}

function* getOne() {
	while (true) {
		const { payload } = yield take(TYPES.GET_ONE);
		try {
			yield fork(API.getOne, payload);
		} catch (err) {
			console.log(err);
			// dispatchSnackbarError(err.response.data);
		}
	}
}

function* update() {
	while (true) {
		const { payload } = yield take(TYPES.UPDATE);
		try {
			yield fork(API.update, payload);
		} catch (err) {
			console.log(err);
			// dispatchSnackbarError(err.response.data);
		}
	}
}

function* remove() {
	while (true) {
		const { payload } = yield take(TYPES.DELETE);
		try {
			yield fork(API.remove, payload);
		} catch (err) {
			console.log(err);
			// dispatchSnackbarError(err.response.data);
		}
	}
}

export function* rootSaga() {
	yield all([create(), list(), getOne(), update(), remove()]);
}
