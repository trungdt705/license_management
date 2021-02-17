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
	}
};
