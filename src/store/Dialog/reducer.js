const INITIAL_STATE = {
	open: false,
};

// Replace with you own reducer
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "SHOW_DIALOG":
			return {
				...state,
				...action.payload,
			};
		default:
			return state;
	}
};
