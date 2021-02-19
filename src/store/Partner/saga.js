import { call, put, take } from 'redux-saga/effects';
import API from './apis';
import * as ACTIONS from './action';
import { all } from 'redux-saga/effects';
import * as TYPES from './Types';
import * as NOTIFYACTIONS from '../Notify/action';

function* getInfo() {
	while (true) {
		yield take(TYPES.PARTNER_GET_INFO);
		try {
			const response = yield call(API.getInfo);
			yield put(ACTIONS.actionPartnerStore(response.data));
		} catch (err) {
			console.log(err);
			// dispatchSnackbarError(err.response.data);
		}
	}
}

function* verify() {
	while (true) {
		const { payload } = yield take(TYPES.LOGIN);
		try {
			const response = yield call(API.verify, payload);
			yield put(ACTIONS.actionLoginSuccess(response.data));
		} catch (error) {
			const errorDetail = [];
			for (const key in error.response.data.detail) {
				if (
					Object.hasOwnProperty.call(error.response.data.detail, key)
				) {
					errorDetail.push(
						`${key}: ${error.response.data.detail[key]}`
					);
				}
			}
			const actions = errorDetail.map((message) => {
				return NOTIFYACTIONS.enqueueSnackbar({
					message: message,
					options: {
						key: new Date().getTime() + Math.random(),
						variant: 'error'
						// action: (key) => (
						// 	<IconButton
						// 		onClick={() =>
						// 			store.dispatch(NOTIFYACTIONS.closeSnackbar(key))
						// 		}
						// 	>
						// 		<CloseIcon></CloseIcon>
						// 	</IconButton>
						// )
					}
				});
			});
			yield all(actions.map((ac) => put(ac)));
		}
	}
}

export function* partnerSaga() {
	yield all([getInfo(), verify()]);
}
