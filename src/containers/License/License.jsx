import {
	CssBaseline,
	Grid,
	Grow,
	List,
	ListItem,
	ListItemSecondaryAction,
	ListItemText,
	makeStyles,
	Paper,
	Switch,
	Typography
} from '@material-ui/core';
import {
	Visibility as VisibilityIcon,
	VisibilityOff as VisibilityOffIcon
} from '@material-ui/icons';
import clsx from 'clsx';
import moment from 'moment-timezone';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomDialog from '../../components/Dialog';
import * as ActionTypes from '../../store/License/Types';
import * as Types from '../../store/sagas/commonType';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	paper: {
		padding: theme.spacing(1),
		textAlign: 'left',
		color: theme.palette.text.secondary,
		borderRadius: 10,
		position: 'relative',
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

const ListUser = () => {
	const [checked, setChecked] = React.useState(['wifi']);
	const handleToggle = (value) => () => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setChecked(newChecked);
	};
	return (
		<List>
			<ListItem>
				<ListItemText
					id="switch-list-label-wifi"
					primary={
						<React.Fragment>
							<Typography
								variant="subtitle2"
								color="textPrimary"
								display="inline"
							>
								dinhthanhtrung7051992@gmai .com fffff
							</Typography>
						</React.Fragment>
					}
				/>
				<ListItemSecondaryAction>
					<Switch
						edge="end"
						onChange={handleToggle('wifi')}
						checked={checked.indexOf('wifi') !== -1}
						inputProps={{
							'aria-labelledby': 'switch-list-label-wifi'
						}}
					/>
				</ListItemSecondaryAction>
			</ListItem>
		</List>
	);
};

const LicenseManagement = () => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const [id, setId] = React.useState('');
	const [isShowLicense, setIsShowLicense] = React.useState(false);
	const handleClickOpen = () => {
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
							<Grid
								item
								xs={12}
								lg={4}
								onClick={handleClickOpen}
								key={item.id}
							>
								<Grow in={true}>
									<Paper
										className={clsx(
											classes.paper,
											item.status === 'PENDING' &&
												classes.pending,
											item.status === 'ACTIVATED' &&
												classes.activated,
											item.status === 'DEACTIVATED' &&
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
											<Grid item sm={5} xs={12}>
												<Typography variant="subtitle2">
													Organization:
												</Typography>
											</Grid>
											<Grid item sm={7} xs={12}>
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
													).format('DD-MM-YYYY')}
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
													).format('DD-MM-YYYY')}
												</Typography>
											</Grid>
										</Grid>
										<Grid container>
											<Grid item sm={5} xs={5}>
												<Typography variant="subtitle2">
													Remain/Limit:
												</Typography>
											</Grid>
											<Grid item xs={6}>
												<Typography variant="subtitle2">
													{item.activated_user}/
													{item.user_limit}
												</Typography>
											</Grid>
										</Grid>
										<Typography variant="caption">
											<Grid container>
												<Grid item xs={11}>
													<Typography variant="subtitle2">
														LICENSE KEY:
														{id === item.id &&
														isShowLicense
															? item.license
															: '*********'}
													</Typography>
												</Grid>
												<Grid item xs={1}>
													{id == item.id &&
													isShowLicense ? (
														<VisibilityIcon
															onClick={showLicense(
																item
															)}
														/>
													) : (
														<VisibilityOffIcon
															onClick={hideLicense(
																item
															)}
														/>
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
			<CustomDialog
				open={open}
				onHandleClose={handleClose}
				title={'List User'}
				content={ListUser}
			/>
		</React.Fragment>
	);
};

export default LicenseManagement;
