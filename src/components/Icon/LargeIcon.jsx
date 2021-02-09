import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	iconLarge: (props) => ({
		width: props.spacing ? theme.spacing(props.spacing) : theme.spacing(3),
		height: props.spacing ? theme.spacing(props.spacing) : theme.spacing(3),
		color: props.color ? props.color : "green",
	}),
}));

const CustomsizeIcon = (props) => {
	const classes = useStyles(props);
	const { component: ComponentIcon } = props;
	return <ComponentIcon className={classes.iconLarge} />;
};

export default CustomsizeIcon;
