import * as ApplicationTypes from '../../store/Application/Types';
import * as FeatureTypes from '../../store/Feature/Types';
import * as PackageTypes from '../../store/Package/Types';
import * as LicenseTypes from '../../store/LicenseType/Types';
import * as CommonTypes from '../../store/sagas/commonType';
import * as License from '../../store/License/Types';
import { models } from './model';

export const routeConfigData = {
	application: {
		create: {
			title: 'Create Application',
			label: 'Application',
			attributes: { ...models.application },
			sagaType: CommonTypes.CREATE,
			actionType: ApplicationTypes.APPLICATION_CREATE,
			api: {
				path: '/applications',
				method: 'POST'
			},
			actions: {
				create: true,
				edit: false,
				cancel: true
			}
		},
		update: {
			title: 'Update Application',
			label: 'Application',
			attributes: { ...models.application },
			sagaType: CommonTypes.UPDATE,
			actionType: ApplicationTypes.APPLICATION_UPDATE,
			extraActionType: ApplicationTypes.APPLICATION_GET_ONE,
			api: {
				path: '/applications',
				method: 'PUT'
			},
			actions: {
				create: true,
				edit: false,
				cancel: true
			}
		}
	},
	feature: {
		create: {
			title: 'Create Feature',
			label: 'Feature',
			attributes: { ...models.feature },
			sagaType: CommonTypes.CREATE,
			actionType: FeatureTypes.FEATURE_CREATE,
			apiRef: [
				{
					saga: 'GET_LIST',
					action: 'APPLICATION_GET_LIST',
					path: 'applications',
					label: 'Application'
				}
			],
			api: {
				path: '/features',
				method: 'POST'
			},
			actions: {
				create: true,
				edit: false,
				cancel: true
			}
		},
		update: {
			title: 'Update Feature',
			label: 'Feature',
			attributes: { ...models.feature },
			sagaType: CommonTypes.UPDATE,
			actionType: FeatureTypes.FEATURE_UPDATE,
			extraActionType: FeatureTypes.FEATURE_GET_ONE,
			apiRef: [
				{
					saga: CommonTypes.GET_LIST,
					action: ApplicationTypes.APPLICATION_GET_LIST,
					path: 'applications',
					label: 'Application'
				}
			],
			api: {
				path: '/features',
				method: 'PUT'
			},
			actions: {
				create: true,
				edit: false,
				cancel: true
			}
		}
	},
	packages: {
		create: {
			title: 'Create Packages',
			label: 'Package',
			attributes: { ...models.module },
			sagaType: CommonTypes.CREATE,
			actionType: PackageTypes.PACKAGE_CREATE,
			apiRef: [
				{
					saga: 'GET_LIST',
					action: 'APPLICATION_GET_LIST',
					path: 'applications',
					label: 'Application'
				},
				{
					saga: 'GET_LIST',
					action: 'FEATURE_GET_LIST',
					path: 'features',
					label: 'Feature'
				}
			],
			api: {
				path: '/packages',
				method: 'POST'
			},
			actions: {
				create: true,
				edit: false,
				cancel: true
			}
		},
		update: {
			title: 'Update Packages',
			label: 'Package',
			attributes: { ...models.module },
			sagaType: CommonTypes.UPDATE,
			actionType: PackageTypes.PACKAGE_UPDATE,
			extraActionType: PackageTypes.PACKAGE_GET_ONE,
			apiRef: [
				{
					saga: CommonTypes.GET_LIST,
					action: ApplicationTypes.APPLICATION_GET_LIST,
					path: 'applications',
					label: 'Application'
				},
				{
					saga: CommonTypes.GET_LIST,
					action: FeatureTypes.FEATURE_GET_LIST,
					path: 'features',
					label: 'Feature'
				}
			],
			api: {
				path: '/packages',
				method: 'PUT'
			},
			actions: {
				create: true,
				edit: false,
				cancel: true
			}
		}
	},
	licenseTypes: {
		create: {
			title: 'Create License Type',
			label: 'LicenseType',
			attributes: { ...models.licenseType },
			sagaType: CommonTypes.CREATE,
			actionType: LicenseTypes.LICENSETYPE_CREATE,
			apiRef: [
				{
					saga: 'GET_LIST',
					action: 'APPLICATION_GET_LIST',
					path: 'applications',
					label: 'Application'
				},
				{
					saga: 'GET_LIST',
					action: 'PACKAGE_GET_LIST',
					path: 'packages',
					label: 'Package'
				}
			],
			api: {
				path: '/license_types',
				method: 'POST'
			},
			actions: {
				create: true,
				edit: false,
				cancel: true
			}
		},
		update: {
			title: 'Update License Type',
			label: 'LicenseType',
			attributes: { ...models.licenseType },
			sagaType: CommonTypes.UPDATE,
			actionType: LicenseTypes.LICENSETYPE_UPDATE,
			extraActionType: LicenseTypes.LICENSETYPE_GET_ONE,
			apiRef: [
				{
					saga: CommonTypes.GET_LIST,
					action: ApplicationTypes.APPLICATION_GET_LIST,
					path: 'applications',
					label: 'Application'
				},
				{
					saga: 'GET_LIST',
					action: 'PACKAGE_GET_LIST',
					path: 'packages',
					label: 'Package'
				}
			],
			api: {
				path: '/license_types',
				method: 'PUT'
			},
			actions: {
				create: true,
				edit: false,
				cancel: true
			}
		}
	},
	license: {
		create: {
			title: 'Create License',
			label: 'License',
			attributes: { ...models.license },
			sagaType: CommonTypes.CREATE,
			actionType: License.LICENSE_CREATE,
			extraActionType: License.LICENSE_GET_ONE,
			apiRef: [
				{
					saga: CommonTypes.GET_LIST,
					action: LicenseTypes.LICENSETYPE_GET_LIST,
					path: 'license_types',
					label: 'LicenseType'
				}
			],
			api: {
				path: '/licenses',
				method: 'POST'
			},
			actions: {
				create: true,
				edit: false,
				cancel: true
			}
		}
	}
};
