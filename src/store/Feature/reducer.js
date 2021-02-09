import * as types from "./Types";

const INITIAL_STATE = {
	data: [],
};

// Replace with you own reducer
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.FEATURE_GET_LIST:
			return {
				...state,
				data: action.payload,
			};
		case types.FEATURE_CREATE:
			return {
				...state,
				...action.payload,
			};
		default:
			return state;
	}
};
