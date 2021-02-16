export const models = {
	application: {
		name: {
			label: "Name",
			type: "TextField",
		},
		description: {
			label: "Description",
			type: "TextField",
		},
		publish_at: {
			label: "Publish At",
			type: "DateTime",
		},
	},
	feature: {
		name: {
			label: "Name",
			type: "TextField",
		},
		description: {
			label: "Description",
			type: "TextField",
		},
		app: {
			label: "Application",
			type: "Select",
			apiRef: true,
		},
	},
};
