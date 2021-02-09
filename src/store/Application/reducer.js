import * as types from "./Types";

const INITIAL_STATE = {
	data: [],
	one: {},
};

// Replace with you own reducer
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.APPLICATION_GET_LIST:
			return {
				...state,
				data: action.payload,
			};
		case types.APPLICATION_CREATE:
			return {
				...state,
				...action.payload,
			};
		case types.APPLICATION_GET_ONE:
			return {
				...state,
				one: action.payload,
			};
		default:
			return state;
	}
};
