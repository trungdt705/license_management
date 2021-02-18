export const models = {
	application: {
		name: {
			label: 'Name',
			type: 'TextField'
		},
		description: {
			label: 'Description',
			type: 'TextField'
		},
		publish_at: {
			label: 'Publish At',
			type: 'DateTime'
		}
	},
	feature: {
		name: {
			label: 'Name',
			type: 'TextField'
		},
		description: {
			label: 'Description',
			type: 'TextField'
		},
		app: {
			label: 'Application',
			type: 'Select',
			apiRef: true
		}
	},
	module: {
		name: {
			label: 'Name',
			type: 'TextField'
		},
		app: {
			label: 'Application',
			type: 'Select',
			apiRef: true
		},
		features: {
			label: 'Feature',
			type: 'MultipleChoice',
			apiRef: true
		}
	},
	licenseType: {
		name: {
			label: 'Name',
			type: 'TextField'
		},
		description: {
			label: 'description',
			type: 'TextField'
		},
		priority: {
			label: 'priority',
			type: 'TextField'
		},
		app: {
			label: 'Application',
			type: 'Select',
			apiRef: true
		},
		packages: {
			label: 'Package',
			type: 'MultipleChoice',
			apiRef: true
		}
	},
	license: {
		namespace: {
			label: 'Namespace',
			type: 'TextField'
		},
		start_date: {
			label: 'Start date',
			type: 'DateTime'
		},
		end_date: {
			label: 'End date',
			type: 'DateTime'
		},
		user_limit: {
			label: 'User limit',
			type: 'NumberField'
		},
		license_type: {
			label: 'LicenseType',
			type: 'SelectBox',
			apiRef: true
		}
	}
};
