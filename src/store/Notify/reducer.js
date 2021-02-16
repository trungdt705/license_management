import * as Types from "./Types";

const defaultState = {
	notifications: [],
};

export default (state = defaultState, action) => {
	switch (action.type) {
		case Types.ENQUEUE_SNACKBAR:
			return {
				...state,
				notifications: [
					...state.notifications,
					{
						key: action.key,
						...action.notification,
					},
				],
			};

		case Types.CLOSE_SNACKBAR:
			return {
				...state,
				notifications: state.notifications.map((notification) =>
					action.dismissAll || notification.key === action.key
						? { ...notification, dismissed: true }
						: { ...notification }
				),
			};

		case Types.REMOVE_SNACKBAR:
			return {
				...state,
				notifications: state.notifications.filter(
					(notification) => notification.key !== action.key
				),
			};

		default:
			return state;
	}
};
