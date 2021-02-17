import * as types from "./Types";
import { remove } from "lodash";

const INITIAL_STATE = {
	data: [],
	one: {},
};

// Replace with you own reducer
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.LICENSETYPE_GET_LIST:
			return {
				...state,
				data: action.payload,
			};
		case types.LICENSETYPE_CREATE:
			return {
				...state,
				...action.payload,
			};
		case types.LICENSETYPE_GET_ONE:
			return {
				...state,
				one: action.payload,
			};
		case types.LICENSETYPE_DELETE:
			let newData = [...state.data];
			remove(newData, (item) => item.id === action.payload.id);
			return {
				...state,
				data: newData,
			};
		default:
			return state;
	}
};
