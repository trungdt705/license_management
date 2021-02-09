import { rootSaga as commonApi } from "./takeCommonApi";
import { fork, all } from "redux-saga/effects";

export function* watchSagas() {
	//Combine sagas with
	yield all([commonApi()]);
	// OR
	// yield all([fork(FeatureSaga1)]);
}
