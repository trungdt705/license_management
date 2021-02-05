import * as types from './Types';

//Replace action name and update action types
// export const actionRequest = () => ({
// 	type: types.GET_DATA_REQUEST
// });

export const actionReceive = (payload) => ({
	type: types.GET_LIST,
	payload
});

export const actionCreate = (payload) => {
	console.log(123);
	return {
		type: types.CREATE,
		payload
	};
};
