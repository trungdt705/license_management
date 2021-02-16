import { call, put, take } from "redux-saga/effects";
import API from "../../network/apis/crud";
import * as ACTIONS from "./actionCommonApi";
import * as NOTIFYACTIONS from "../Notify/action";
import { all } from "redux-saga/effects";
import * as TYPES from "./commonType";
import { IconButton } from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";
import store from "../index";

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
			yield put(
				NOTIFYACTIONS.enqueueSnackbar({
					message: "Create successfull",
					options: {
						key: new Date().getTime() + Math.random(),
						variant: "success",
						action: (key) => (
							<IconButton
								onClick={() =>
									store.dispatch(
										NOTIFYACTIONS.closeSnackbar(key)
									)
								}
							>
								<CloseIcon></CloseIcon>
							</IconButton>
						),
					},
				})
			);
		} catch (err) {
			console.log(err);
			// dispatchSnackbarError(err.response.data);
		}
	}
}

function* dispatchClick(key) {
	yield put(NOTIFYACTIONS.closeSnackbar(key));
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
			yield put(
				NOTIFYACTIONS.enqueueSnackbar({
					message: "Update successfull",
					options: {
						key: new Date().getTime() + Math.random(),
						variant: "success",
						action: (key) => (
							<IconButton
								onClick={() =>
									store.dispatch(
										NOTIFYACTIONS.closeSnackbar(key)
									)
								}
							>
								<CloseIcon></CloseIcon>
							</IconButton>
						),
					},
				})
			);
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
			const response = yield call(API.remove, payload);
			console.log("response");
			yield put(
				ACTIONS.actionDelete({
					data: { data: response.data, id: payload.id },
					action: payload.action,
				})
			);
			yield put(
				NOTIFYACTIONS.enqueueSnackbar({
					message: "Delete successfull",
					options: {
						key: new Date().getTime() + Math.random(),
						variant: "success",
						action: (key) => (
							<IconButton
								onClick={() =>
									store.dispatch(
										NOTIFYACTIONS.closeSnackbar(key)
									)
								}
							>
								<CloseIcon></CloseIcon>
							</IconButton>
						),
					},
				})
			);
		} catch (err) {
			console.log(err);
			// dispatchSnackbarError(err.response.data);
		}
	}
}

export function* rootSaga() {
	yield all([
		create(),
		list(),
		getOne(),
		update(),
		remove(),
		dispatchClick(),
	]);
}
