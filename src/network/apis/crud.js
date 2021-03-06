import { all, call, put } from 'redux-saga/effects';
import * as NOTIFYACTIONS from '../../store/Notify/action';
import * as ACTIONS from '../../store/sagas/actionCommonApi';
import { axiosInstance } from './index';
import { getCookie } from '../../utils/helper';
const handlerEnabled = false;

function* getList(payload) {
	try {
		const response = yield call(() =>
			axiosInstance.get(payload.path, {
				handlerEnabled,
				headers: {
					'x-api-key': getCookie('token')
				}
			})
		);
		yield put(
			ACTIONS.actionAPISuccess({
				data: response.data.results,
				action: payload.action
			})
		);
	} catch (error) {
		console.log(error);
	}
}

function* create(payload) {
	try {
		const response = yield call(() =>
			axiosInstance.post(`${payload.path}/`, payload.data, {
				handlerEnabled,
				headers: {
					'x-api-key': getCookie('token')
				}
			})
		);
		yield put(
			ACTIONS.actionAPISuccess({
				data: response.data.results,
				action: payload.action
			})
		);
		yield put(
			NOTIFYACTIONS.enqueueSnackbar({
				message: 'Create successfull',
				options: {
					key: new Date().getTime() + Math.random(),
					variant: 'success'
				}
			})
		);
	} catch (error) {
		const errorDetail = [];
		for (const key in error.response.data.detail) {
			if (Object.hasOwnProperty.call(error.response.data.detail, key)) {
				errorDetail.push(`${key}: ${error.response.data.detail[key]}`);
			}
		}
		const actions = errorDetail.map((message) => {
			return NOTIFYACTIONS.enqueueSnackbar({
				message: message,
				options: {
					key: new Date().getTime() + Math.random(),
					variant: 'error'
				}
			});
		});
		yield all(actions.map((ac) => put(ac)));
	}
}

function* update(payload) {
	try {
		const response = yield call(() =>
			axiosInstance.put(`${payload.path}/${payload.id}/`, payload.data, {
				handlerEnabled,
				headers: {
					'x-api-key': getCookie('token')
				}
			})
		);
		yield put(
			ACTIONS.actionAPISuccess({
				data: response,
				action: payload.action
			})
		);
		yield put(
			NOTIFYACTIONS.enqueueSnackbar({
				message: 'Update successfull',
				options: {
					key: new Date().getTime() + Math.random(),
					variant: 'success'
				}
			})
		);
	} catch (error) {
		const errorDetail = [];
		for (const key in error.response.data.detail) {
			if (Object.hasOwnProperty.call(error.response.data.detail, key)) {
				errorDetail.push(`${key}: ${error.response.data.detail[key]}`);
			}
		}
		const actions = errorDetail.map((message) => {
			return NOTIFYACTIONS.enqueueSnackbar({
				message: message,
				options: {
					key: new Date().getTime() + Math.random(),
					variant: 'error'
				}
			});
		});
		yield all(actions.map((ac) => put(ac)));
	}
}

function* getOne(payload) {
	try {
		const response = yield call(() =>
			axiosInstance.get(`${payload.path}/${payload.id}/`, {
				handlerEnabled,
				headers: {
					'x-api-key': getCookie('token')
				}
			})
		);
		yield put(
			ACTIONS.actionAPISuccess({
				data: response.data,
				action: payload.action
			})
		);
	} catch (error) {
		yield put(
			NOTIFYACTIONS.enqueueSnackbar({
				message: error.response.data.detail,
				options: {
					key: new Date().getTime() + Math.random(),
					variant: 'error'
				}
			})
		);
	}
}

function* remove(payload) {
	try {
		const response = yield call(() =>
			axiosInstance.delete(`${payload.path}/${payload.id}/`, {
				handlerEnabled,
				headers: {
					'x-api-key': getCookie('token')
				}
			})
		);
		yield put(
			ACTIONS.actionAPISuccess({
				data: { data: response.data, id: payload.id },
				action: payload.action
			})
		);
		yield put(
			NOTIFYACTIONS.enqueueSnackbar({
				message: 'Delete successful',
				options: {
					key: new Date().getTime() + Math.random(),
					variant: 'success'
				}
			})
		);
	} catch (error) {
		yield put(
			NOTIFYACTIONS.enqueueSnackbar({
				message: error.response.data.detail,
				options: {
					key: new Date().getTime() + Math.random(),
					variant: 'error'
				}
			})
		);
	}
}
export default {
	getList,
	create,
	getOne,
	update,
	remove
};
