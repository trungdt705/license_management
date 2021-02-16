import { makeStyles, IconButton } from "@material-ui/core";
import { DeleteForever as DeleteForeverIcon } from "@material-ui/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AlertDialog from "../../components/Dialog/index";

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

const DeleteIconButton = (props) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const handleClickOpen = (event) => {
		event.stopPropagation();
		dispatch({
			type: "SHOW_DIALOG",
			payload: {
				open: true,
				payload: props.actionPayload,
			},
		});
	};
	return (
		<React.Fragment>
			<IconButton
				size="small"
				color="primary"
				className={classes.delete}
				onClick={handleClickOpen}
			>
				<DeleteForeverIcon />
			</IconButton>
		</React.Fragment>
	);
};

export default DeleteIconButton;
