import * as types from './commonType';

//Replace action name and update action types
// export const actionRequest = () => ({
// 	type: types.GET_DATA_REQUEST
// });

export const actionAPISuccess = (payload) => {
	return {
		type: payload.action,
		payload: payload.data
	};
};

export const actionAPIError = (payload) => {
	return {
		type: payload.action,
		payload: payload.data
	};
};
