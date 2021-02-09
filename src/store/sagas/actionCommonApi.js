import * as types from "./commonType";

//Replace action name and update action types
// export const actionRequest = () => ({
// 	type: types.GET_DATA_REQUEST
// });

export const actionReceive = (payload) => {
	console.log(payload.action);
	return {
		type: payload.action,
		payload: payload.data,
	};
};

export const actionCreate = (payload) => {
	return {
		type: payload.action,
		payload: payload.data,
	};
};
