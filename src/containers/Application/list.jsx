import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { makeStyles, Grid, Typography, Avatar } from "@material-ui/core";
import { Pageview as PageviewIcon } from "@material-ui/icons";
import { pink } from "@material-ui/core/colors";
import * as Types from "../../store/Application/Types";
import CommonCard from "../../components/Card/CommonCard";
import DeleteIconButton from "../../components/Button/DeleteIconButton";
import EditIconButton from "../../components/Button/EditIconButton";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	avatarColor: {
		color: theme.palette.getContrastText(pink[500]),
		backgroundColor: pink[500],
		width: theme.spacing(4),
		height: theme.spacing(4),
	},
}));

const CardIcon = (props) => {
	const classes = useStyles();
	return (
		<Avatar className={classes.avatarColor}>
			<PageviewIcon fontSize="small" />
		</Avatar>
	);
};

const CardContent = (props) => {
	return (
		<React.Fragment>
			<Typography variant="subtitle2">SMS Cloud</Typography>
			<Typography variant="caption">Published: 01/01/2021</Typography>
		</React.Fragment>
	);
};

const CardAction = () => {
	return (
		<React.Fragment>
			<EditIconButton />
			<DeleteIconButton />
		</React.Fragment>
	);
};

export default function FolderList() {
	const classes = useStyles();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch({ type: Types.GET_LIST });
	}, []);

	return (
		<React.Fragment>
			<Grid container spacing={3}>
				<CommonCard
					cardIcon={CardIcon}
					cardContent={CardContent}
					cardAction={CardAction}
				/>
			</Grid>
		</React.Fragment>
	);
}
