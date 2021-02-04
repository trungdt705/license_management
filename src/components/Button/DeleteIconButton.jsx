import { makeStyles, IconButton } from "@material-ui/core";
import { DeleteForever as DeleteForeverIcon } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) => ({
	delete: {
		color: theme.palette.error.main,
		opacity: 0.5,
		cursor: "pointer",
		"&:hover": {
			opacity: 1,
		},
	},
}));

const DeleteIconButton = () => {
	const classes = useStyles();
	return (
		<IconButton size="small" color="primary" className={classes.delete}>
			<DeleteForeverIcon />
		</IconButton>
	);
};

export default DeleteIconButton;
