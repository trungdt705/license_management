import * as ApplicationTypes from "../../store/Application/Types";
import * as FeatureTypes from "../../store/Feature/Types";
import * as CommonTypes from "../../store/sagas/commonType";
import { models } from "./model";

export const routeConfigData = {
	application: {
		create: {
			title: "Create Application",
			label: "Application",
			attributes: { ...models.application },
			sagaType: CommonTypes.CREATE,
			actionType: ApplicationTypes.APPLICATION_CREATE,
			api: {
				path: "/applications",
				method: "POST",
			},
			actions: {
				create: true,
				edit: false,
				cancel: true,
			},
		},
		update: {
			title: "Update Application",
			label: "Application",
			attributes: { ...models.application },
			sagaType: CommonTypes.UPDATE,
			actionType: ApplicationTypes.APPLICATION_UPDATE,
			extraActionType: ApplicationTypes.APPLICATION_GET_ONE,
			api: {
				path: "/applications",
				method: "PUT",
			},
			actions: {
				create: true,
				edit: false,
				cancel: true,
			},
		},
	},
	feature: {
		create: {
			title: "Create Feature",
			label: "Feature",
			attributes: { ...models.feature },
			sagaType: CommonTypes.CREATE,
			actionType: FeatureTypes.FEATURE_CREATE,
			apiRef: [
				{
					saga: "GET_LIST",
					action: "APPLICATION_GET_LIST",
					path: "applications",
					label: "Application",
				},
			],
			api: {
				path: "/features",
				method: "POST",
			},
			actions: {
				create: true,
				edit: false,
				cancel: true,
			},
		},
		update: {
			title: "Update Feature",
			label: "Feature",
			attributes: { ...models.feature },
			sagaType: CommonTypes.UPDATE,
			actionType: FeatureTypes.FEATURE_UPDATE,
			extraActionType: FeatureTypes.FEATURE_GET_ONE,
			apiRef: [
				{
					saga: CommonTypes.GET_LIST,
					action: ApplicationTypes.APPLICATION_GET_LIST,
					path: "applications",
					label: "Application",
				},
			],
			api: {
				path: "/features",
				method: "PUT",
			},
			actions: {
				create: true,
				edit: false,
				cancel: true,
			},
		},
	},
};
