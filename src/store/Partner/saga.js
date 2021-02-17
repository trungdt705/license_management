import { call, put, take } from "redux-saga/effects";
import API from "./apis";
import * as ACTIONS from "./action";
import { takeLatest, all } from "redux-saga/effects";
import * as TYPES from "./Types";

function* getInfo() {
	while (true) {
		yield take(TYPES.PARTNER_GET_INFO);
		try {
			const response = yield call(API.getInfo);
			yield put(ACTIONS.actionReceive(response.data));
		} catch (err) {
			console.log(err);
			// dispatchSnackbarError(err.response.data);
		}
	}
}

export function* partnerSaga() {
	yield all([getInfo()]);
}
