import React from 'react';
import {
	Apps as AppsIcon,
	ViewModule as ViewModuleIcon,
	VpnKey as VpnKeyIcon
} from '@material-ui/icons';

export const MENU = [
	{
		name: 'Application',
		link: '/applications',
		icon: <AppsIcon />
	},
	{
		name: 'Packages',
		link: '/packages',
		icon: <ViewModuleIcon />
	},
	{
		name: 'License',
		link: '/license',
		icon: <VpnKeyIcon />
	}
];
