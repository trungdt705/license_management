import * as types from "./Types";

const INITIAL_STATE = {};

// Replace with you own reducer
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.CHANGE_PAGE:
			return {
				...state,
				...action.payload,
			};
		default:
			return state;
	}
};
