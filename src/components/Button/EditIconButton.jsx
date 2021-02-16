import React from "react";
import { IconButton, makeStyles } from "@material-ui/core";
import { Edit as EditIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
	edit: {
		opacity: 0.5,
		cursor: "pointer",
		"&:hover": {
			opacity: 1,
		},
	},
}));

const EditIconButton = (props) => {
	const classes = useStyles();
	return (
		<IconButton
			size="small"
			className={classes.edit}
			onClick={props.onGotoEdit}
		>
			<EditIcon />
		</IconButton>
	);
};

export default EditIconButton;
