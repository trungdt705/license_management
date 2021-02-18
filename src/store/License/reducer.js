import * as types from './Types';

const INITIAL_STATE = {
	data: [],
	one: {}
};

// Replace with you own reducer
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.LICENSE_GET_LIST:
			return {
				...state,
				data: action.payload
			};
		case types.LICENSE_CREATE:
			return {
				...state,
				...action.payload
			};
		default:
			return state;
	}
};
