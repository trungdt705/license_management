import React from 'react';
import {
	Apps as AppsIcon,
	ViewModule as ViewModuleIcon,
	VpnKey as VpnKeyIcon,
	SettingsApplications as SettingsApplicationsIcon
} from '@material-ui/icons';

export const MENU = [
	{
		name: 'Application',
		link: '/applications',
		icon: <AppsIcon fontSize="large" color="secondary" />,
		title: 'Application'
	},
	// {
	// 	name: "Modules",
	// 	link: "/packages",
	// 	icon: <ViewModuleIcon fontSize="large" color="secondary" />,
	// 	title: "Module",
	// },
	{
		name: 'License',
		link: '/license-management',
		icon: <VpnKeyIcon fontSize="large" color="secondary" />,
		title: 'License'
	},
	{
		name: 'Setting',
		link: '/setting',
		icon: <SettingsApplicationsIcon fontSize="large" color="secondary" />,
		title: 'Setting'
	}
];
