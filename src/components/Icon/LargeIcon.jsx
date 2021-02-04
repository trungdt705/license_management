import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	iconLarge: {
		width: theme.spacing(3),
		height: theme.spacing(3),
		color: "green",
	},
}));

const CustomsizeIcon = (props) => {
	const classes = useStyles();
	const { component: ComponentIcon } = props;
	return <ComponentIcon className={classes.iconLarge} />;
};

export default CustomsizeIcon;
