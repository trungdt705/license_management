import * as types from "./Types";
import { remove } from "lodash";

const INITIAL_STATE = {
	current: {},
	application: 0,
	license: 0,
	package: 0,
};

// Replace with you own reducer
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.PARTNER_STORE:
			return {
				...state,
				current: action.payload.detail,
				application: action.payload.extra_info["total_applications"],
				license: action.payload.extra_info["total_licenses"],
				package: action.payload.extra_info["total_packages"],
			};
		default:
			return state;
	}
};
