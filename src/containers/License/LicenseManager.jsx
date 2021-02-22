import {
	CssBaseline,
	Fab,
	Grid,
	Grow,
	IconButton,
	List,
	ListItem,
	ListItemSecondaryAction,
	ListItemText,
	makeStyles,
	Paper,
	Typography
} from "@material-ui/core";
import {
	Add as AddIcon,
	Brightness1 as Brightness1Icon,
	Visibility as VisibilityIcon,
	VisibilityOff as VisibilityOffIcon
} from "@material-ui/icons";
import clsx from "clsx";
import moment from "moment-timezone";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ListUserDialog from "../../components/Dialog/ListUserDialog";
import * as ActionTypes from "../../store/License/Types";
import * as Types from "../../store/sagas/commonType";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	paper: {
		padding: theme.spacing(1),
		textAlign: "left",
		color: theme.palette.text.secondary,
		borderRadius: 10,
		position: "relative",
		borderLeft: `10px solid ${theme.palette.error.main}`
	},
	pending: {
		borderLeft: `10px solid #e8dd13`
	},
	activated: {
		borderLeft: `10px solid green`
	},
	deactivated: {
		borderLeft: `10px solid red`
	},
	margin: {
		margin: theme.spacing(1)
	},
	bottomBtn: {
		position: "fixed",
		bottom: theme.spacing(9),
		right: theme.spacing(2)
	},
	activatedUser: {
		color: "green"
	},
	deactivatedUser: {
		color: "grey"
	},
	userList: {
		color: "green",
		marginLeft: 20,
		"&:hover": {
			textDecoration: "underline",
			cursor: "pointer"
		}
	},
	visibility: {
		"&:hover": {
			cursor: "pointer"
		}
	}
	// watermark: {
	// 	alignItems: "center",
	// 	display: "flex",
	// 	justifyContent: "center",
	// 	position: "absolute",
	// 	top: "20%",
	// 	right: "1%",
	// 	width: "100%",
	// },
	// watermarkContentVerified: {
	// 	color: "rgba(60, 179, 113, 0.5)",
	// 	fontSize: "3rem",
	// 	fontWeight: "bold",
	// 	userSelect: "none",
	// },
	// watermarkContentBlock: {
	// 	color: "rgba(0, 0, 0, 0.5)",
	// 	fontSize: "3rem",
	// 	fontWeight: "bold",
	// 	userSelect: "none",
	// },
	// watermarkContentPending: {
	// 	color: "rgb(255, 0, 0, 0.5)",
	// 	fontSize: "3rem",
	// 	fontWeight: "bold",
	// 	userSelect: "none",
	// },
}));

const ListUser = (props) => {
	const [checked, setChecked] = React.useState(["wifi"]);
	const license = useSelector((state) => state.License.one);
	const classes = useStyles();
	const dispatch = useDispatch();
	// const handleToggle = (value) => () => {
	// 	const currentIndex = checked.indexOf(value);
	// 	const newChecked = [...checked];

	// 	if (currentIndex === -1) {
	// 		newChecked.push(value);
	// 	} else {
	// 		newChecked.splice(currentIndex, 1);
	// 	}

	// 	setChecked(newChecked);
	// };
	useEffect(() => {
		dispatch({
			type: Types.GET_ONE,
			payload: {
				id: props.licenseId,
				action: ActionTypes.LICENSE_GET_ONE,
				path: "licenses"
			}
		});
		// return () => {
		// 	dispatch({
		// 		type: 'REMOVE_ONE',
		// 		payload: {
		// 			label: 'License'
		// 		}
		// 	});
		// };
	}, []);

	return (
		<React.Fragment>
			<List>
				{license && license.user_license
					? license.user_license.map((item) => {
							return (
								<ListItem key={item.id}>
									<ListItemText
										id="switch-list-label-wifi"
										primary={
											<React.Fragment>
												<Typography
													variant="subtitle2"
													color="textPrimary"
													display="inline"
												>
													{item.user}
												</Typography>
											</React.Fragment>
										}
									/>
									<ListItemSecondaryAction>
										<Brightness1Icon
											fontSize="small"
											className={
												item.status === "ACTIVATED"
													? classes.activatedUser
													: classes.deactivatedUser
											}
										/>
									</ListItemSecondaryAction>
								</ListItem>
							);
					  })
					: ""}
			</List>
		</React.Fragment>
	);
};

const LicenseManagement = () => {
	const classes = useStyles();
	const history = useHistory();
	const [open, setOpen] = React.useState(false);
	const [id, setId] = React.useState("");
	const [isShowLicense, setIsShowLicense] = React.useState(false);
	const handleClickOpen = (id) => {
		setId(id);
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	const showLicense = (item) => (event) => {
		event.stopPropagation();
		setId(item.id);
		setIsShowLicense(false);
	};

	const hideLicense = (item) => (event) => {
		event.stopPropagation();
		setId(item.id);
		setIsShowLicense(true);
	};

	const licenses = useSelector((state) => state.License.data);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch({
			type: Types.GET_LIST,
			payload: {
				action: ActionTypes.LICENSE_GET_LIST,
				path: `licenses`
			}
		});
	}, []);
	return (
		<React.Fragment>
			<CssBaseline />
			<Grid container spacing={2}>
				{licenses.length > 0 &&
					licenses.map((item) => {
						return (
							<Grid item xs={12} lg={4} key={item.id}>
								<Grow in={true}>
									<Paper
										className={clsx(
											classes.paper,
											item.status === "PENDING" &&
												classes.pending,
											item.status === "ACTIVATED" &&
												classes.activated,
											item.status === "DEACTIVATED" &&
												classes.deactivated
										)}
									>
										{/* <div className={classes.watermark}>
								<div
									className={classes.watermarkContentVerified}
								>
									<VerifiedUserIcon
										style={{ fontSize: "5rem" }}
									/>
								</div>
							</div> */}
										<Grid container>
											<Grid item sm={12} xs={12}>
												<Typography variant="subtitle2">
													Organization:
												</Typography>
											</Grid>
											<Grid item sm={12} xs={12}>
												<Typography variant="subtitle2">
													{item.namespace}
												</Typography>
											</Grid>
										</Grid>
										<Grid container>
											<Grid item sm={5} xs={5}>
												<Typography variant="subtitle2">
													Start date:
												</Typography>
											</Grid>
											<Grid item xs={6}>
												<Typography variant="subtitle2">
													{moment(
														item.start_date
													).format("DD-MM-YYYY")}
												</Typography>
											</Grid>
										</Grid>
										<Grid container>
											<Grid item sm={5} xs={5}>
												<Typography variant="subtitle2">
													End Date:
												</Typography>
											</Grid>
											<Grid item xs={6}>
												<Typography variant="subtitle2">
													{moment(
														item.end_date
													).format("DD-MM-YYYY")}
												</Typography>
											</Grid>
										</Grid>
										<Grid container>
											<Grid item sm={5} xs={5}>
												<Typography variant="subtitle2">
													Remain/Limit:
												</Typography>
											</Grid>
											<Grid item xs={7}>
												<Typography
													variant="subtitle2"
													component="span"
												>
													{item.activated_user}/
													{item.user_limit}
												</Typography>
												<Typography
													variant="subtitle2"
													component="a"
													onClick={() =>
														handleClickOpen(item.id)
													}
													className={classes.userList}
												>
													Detail
												</Typography>
											</Grid>
										</Grid>
										<Typography variant="caption">
											<Grid
												container
												style={{
													display: "flex",
													alignItems: "center"
												}}
											>
												<Grid item xs={10}>
													<Typography variant="subtitle2">
														LICENSE KEY:
														{id === item.id &&
														isShowLicense
															? item.license
															: "*********"}
													</Typography>
												</Grid>
												<Grid item xs={2}>
													{id == item.id &&
													isShowLicense ? (
														<IconButton
															onClick={showLicense(
																item
															)}
														>
															<VisibilityIcon
															// className={
															// 	classes.visibility
															// }
															/>
														</IconButton>
													) : (
														<IconButton
															onClick={hideLicense(
																item
															)}
														>
															<VisibilityOffIcon />
														</IconButton>
													)}
												</Grid>
											</Grid>
										</Typography>
									</Paper>
								</Grow>
							</Grid>
						);
					})}
			</Grid>
			<div className={classes.bottomBtn}>
				<Fab
					size="small"
					color="secondary"
					aria-label="add"
					className={classes.margin}
					onClick={() => history.push("/license/create")}
				>
					<AddIcon />
				</Fab>
			</div>

			<ListUserDialog
				open={open}
				onHandleClose={handleClose}
				title={"List User"}
				licenseId={id}
				content={ListUser}
			/>
		</React.Fragment>
	);
};

export default LicenseManagement;
