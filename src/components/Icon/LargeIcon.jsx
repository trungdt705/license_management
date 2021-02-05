import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	iconLarge: (props) => ({
		width: theme.spacing(props.spacing) || theme.spacing(3),
		height: theme.spacing(props.spacing) || theme.spacing(3),
		color: 'green'
	})
}));

const CustomsizeIcon = (props) => {
	const classes = useStyles(props);
	const { component: ComponentIcon } = props;
	return <ComponentIcon className={classes.iconLarge} />;
};

export default CustomsizeIcon;
