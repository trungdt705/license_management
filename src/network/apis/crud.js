import { call, put, all } from 'redux-saga/effects';
import { IconButton } from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import * as ACTIONS from '../../store/sagas/actionCommonApi';
import * as NOTIFYACTIONS from '../../store/Notify/action';
import { axiosInstance } from './index';
import store from '../../store';
const handlerEnabled = false;

// async function test(payload) {
// 	return await axiosInstance.get(payload.path, {
// 		handlerEnabled,
// 		headers: {
// 			'x-api-key': 'HIXNBTV3VY4COKVRCELRJIRD'
// 		}
// 	});
// }

// Replace endpoint and change api name
function* getList(payload) {
	try {
		const response = yield call(() =>
			axiosInstance.get(payload.path, {
				handlerEnabled,
				headers: {
					'x-api-key': 'HIXNBTV3VY4COKVRCELRJIRD'
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
					'x-api-key': 'HIXNBTV3VY4COKVRCELRJIRD'
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

function* update(payload) {
	try {
		const response = yield call(() =>
			axiosInstance.put(`${payload.path}/${payload.id}/`, payload.data, {
				handlerEnabled,
				headers: {
					'x-api-key': 'HIXNBTV3VY4COKVRCELRJIRD'
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

function* getOne(payload) {
	try {
		const response = yield call(() =>
			axiosInstance.get(`${payload.path}/${payload.id}/`, {
				handlerEnabled,
				headers: {
					'x-api-key': 'HIXNBTV3VY4COKVRCELRJIRD'
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
					'x-api-key': 'HIXNBTV3VY4COKVRCELRJIRD'
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
			})
		);
	} catch (error) {
		yield put(
			NOTIFYACTIONS.enqueueSnackbar({
				message: error.response.data.detail,
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
