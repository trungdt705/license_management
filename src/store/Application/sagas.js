// import { call, put, take } from "redux-saga/effects";
// import API from "./apis";
// import * as ACTIONS from "./action";
// import { takeLatest, all } from "redux-saga/effects";
// import * as TYPES from "./Types";

// function* create() {
// 	while (true) {
// 		const { payload } = yield take(TYPES.CREATE);
// 		try {
// 			const response = yield call(API.create, payload);
// 			yield put(ACTIONS.actionCreate(response.data));
// 		} catch (err) {
// 			console.log(err);
// 			// dispatchSnackbarError(err.response.data);
// 		}
// 	}
// }

// function* list() {
// 	while (true) {
// 		yield take(TYPES.GET_LIST);
// 		try {
// 			const response = yield call(API.getList);
// 			yield put(ACTIONS.actionReceive(response.data));
// 		} catch (err) {
// 			console.log(err);
// 			// dispatchSnackbarError(err.response.data);
// 		}
// 	}
// }

// function* getOne() {
// 	while (true) {
// 		yield take(TYPES.GET_ONE);
// 		try {
// 			const response = yield call(API.getList);
// 			yield put(ACTIONS.actionReceive(response.data));
// 		} catch (err) {
// 			console.log(err);
// 			// dispatchSnackbarError(err.response.data);
// 		}
// 	}
// }

// function* update() {
// 	while (true) {
// 		yield take(TYPES.UPDATE);
// 		try {
// 			const response = yield call(API.getList);
// 			yield put(ACTIONS.actionReceive(response.data));
// 		} catch (err) {
// 			console.log(err);
// 			// dispatchSnackbarError(err.response.data);
// 		}
// 	}
// }

// export function* rootSaga() {
// 	yield all([create(), list(), getOne(), update()]);
// }
