import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import * as Types from "../../store/Application/Types";
import { pink } from "@material-ui/core/colors";
import { Grid, Paper, Typography, Avatar, Button } from "@material-ui/core";
import {
	Pageview as PageviewIcon,
	Add as AddIcon,
	DeleteForever as DeleteForeverIcon,
} from "@material-ui/icons";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(1),
		color: theme.palette.text.secondary,
		// backgroundColor: theme.palette.text.secondary
	},
	leftContent: {
		textAlign: "left",
	},
	rightContent: {
		textAlign: "right",
	},
	pink: {
		color: theme.palette.getContrastText(pink[500]),
		backgroundColor: pink[500],
		width: theme.spacing(4),
		height: theme.spacing(4),
	},
	equalContent: {
		alignItems: "center",
	},
	button: {
		margin: theme.spacing(1),
	},
	deleteIcon: {
		color: "red",
		opacity: 0.5,
		cursor: "pointer",
		"&:hover": {
			opacity: 1,
		},
	},
}));

export default function FolderList() {
	const classes = useStyles();
	const dispatch = useDispatch();
	const history = useHistory();
	useEffect(() => {
		dispatch({ type: Types.GET_LIST });
	}, []);

	const applicationInfoPage = () => {
		history.push("/applications/123");
	};

	return (
		<React.Fragment>
			<Grid container spacing={3}>
				<Grid item xs={12} lg={4} onClick={applicationInfoPage}>
					<Paper className={classes.paper}>
						<Grid
							container
							style={{ display: "flex", alignItems: "center" }}
						>
							<Grid item lg={2} xs={2}>
								<Avatar className={classes.pink}>
									<PageviewIcon fontSize="small" />
								</Avatar>
							</Grid>
							<Grid
								item
								xs={8}
								lg={8}
								justify="flex-end"
								className={classes.leftContent}
							>
								<Typography variant="h6">
									Tên phần mềm
								</Typography>
								<Typography variant="caption">
									Published: 01/01/2021
								</Typography>
							</Grid>
							<Grid
								item
								xs={2}
								lg={2}
								justify="flex-end"
								className={classes.rightContent}
							>
								<DeleteForeverIcon
									className={classes.deleteIcon}
								/>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}
