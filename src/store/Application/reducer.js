import * as types from "./Types";
import { remove } from "lodash";

const INITIAL_STATE = {
	data: [],
	one: {},
	tabIndex: 0
};

// Replace with you own reducer
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.APPLICATION_GET_LIST:
			return {
				...state,
				data: action.payload
			};
		case types.APPLICATION_CREATE:
			return {
				...state,
				...action.payload
			};
		case types.APPLICATION_GET_ONE:
			return {
				...state,
				one: action.payload
			};
		case types.APPLICATION_DELETE:
			let newData = [...state.data];
			remove(newData, (item) => item.id === action.payload.id);
			return {
				...state,
				data: newData
			};
		case types.TAB_INDEX:
			return {
				...state,
				tabIndex: action.payload
			};
		default:
			return state;
	}
};
