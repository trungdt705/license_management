import { rootSaga as commonApi } from "./takeCommonApi";
import { partnerSaga } from "../Partner/saga";
import { fork, all } from "redux-saga/effects";

export function* watchSagas() {
	//Combine sagas with
	yield all([commonApi(), partnerSaga()]);
	// OR
	// yield all([fork(FeatureSaga1)]);
}
