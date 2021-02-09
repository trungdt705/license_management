import { call, put, take } from "redux-saga/effects";
import API from "../../network/apis/crud";
import * as ACTIONS from "./actionCommonApi";
import { all } from "redux-saga/effects";
import * as TYPES from "./commonType";

function* create() {
	while (true) {
		const { payload } = yield take(TYPES.CREATE);
		try {
			const response = yield call(API.create, payload);
			yield put(
				ACTIONS.actionCreate({
					data: response.data,
					action: payload.action,
				})
			);
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
			const response = yield call(API.getList, payload);
			yield put(
				ACTIONS.actionReceive({
					data: response.data.results,
					action: payload.action,
				})
			);
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
			const response = yield call(API.getOne, payload);
			console.log(response);
			yield put(
				ACTIONS.actionReceive({
					data: response.data,
					action: payload.action,
				})
			);
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
			const response = yield call(API.update, payload);
			yield put(
				ACTIONS.actionReceive({
					data: response,
					action: payload.action,
				})
			);
		} catch (err) {
			console.log(err);
			// dispatchSnackbarError(err.response.data);
		}
	}
}

export function* rootSaga() {
	yield all([create(), list(), getOne(), update()]);
}
