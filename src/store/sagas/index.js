import { Application } from '../Application/sagas';
import { fork, all } from 'redux-saga/effects';

export function* watchSagas() {
	//Combine sagas with
	yield all([Application()]);
	// OR
	// yield all([fork(FeatureSaga1)]);
}
