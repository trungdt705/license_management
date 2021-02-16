import * as Types from "./Types";

export const enqueueSnackbar = (notification) => {
	const key = notification.options && notification.options.key;

	return {
		type: Types.ENQUEUE_SNACKBAR,
		notification: {
			...notification,
			key: key || new Date().getTime() + Math.random(),
		},
	};
};

export const closeSnackbar = (key) => ({
	type: Types.CLOSE_SNACKBAR,
	dismissAll: !key, // dismiss all if no key has been defined
	key,
});

export const removeSnackbar = (key) => ({
	type: Types.REMOVE_SNACKBAR,
	key,
});
