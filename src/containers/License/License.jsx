import {
	Typography,
	Grid,
	Paper,
	makeStyles,
	CssBaseline,
	Grow,
} from "@material-ui/core";
import {
	Visibility as VisibilityIcon,
	VerifiedUser as VerifiedUserIcon,
	Error as ErrorIcon,
	AccessAlarm as AccessAlarmIcon,
} from "@material-ui/icons";
import CustomDialog from "../../components/Dialog";
import React from "react";
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(1),
		textAlign: "left",
		color: theme.palette.text.secondary,
		borderRadius: 10,
		position: "relative",
		borderLeft: `10px solid ${theme.palette.error.main}`,
	},
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

const LicenseManagement = () => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	return (
		<React.Fragment>
			<CssBaseline />
			<Grid container spacing={2}>
				<Grid item xs={12} lg={4} onClick={handleClickOpen}>
					<Grow in={true}>
						<Paper className={classes.paper}>
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
										trung.dt1@cmctelecom.vn
									</Typography>
								</Grid>
							</Grid>
							<Grid container>
								<Grid sm={5} xs={5}>
									<Typography variant="subtitle2">
										Start date:
									</Typography>
								</Grid>
								<Grid item xs={6}>
									<Typography variant="subtitle2">
										01/01/2021
									</Typography>
								</Grid>
							</Grid>
							<Grid container>
								<Grid sm={5} xs={5}>
									<Typography variant="subtitle2">
										End Date:
									</Typography>
								</Grid>
								<Grid item xs={6}>
									<Typography variant="subtitle2">
										21/12/2021 (1 year)
									</Typography>
								</Grid>
							</Grid>
							<Grid container>
								<Grid sm={5} xs={5}>
									<Typography variant="subtitle2">
										Remain/Limit:
									</Typography>
								</Grid>
								<Grid item xs={6}>
									<Typography variant="subtitle2">
										80/100
									</Typography>
								</Grid>
							</Grid>
							<Typography variant="caption">
								<Grid container>
									<Grid item xs={10}>
										<Typography>
											LICENSE KEY: ********
										</Typography>
									</Grid>
									<Grid item xs={2}>
										<VisibilityIcon />
									</Grid>
								</Grid>
							</Typography>
						</Paper>
					</Grow>
				</Grid>
			</Grid>
			<CustomDialog open={open} onHandleClose={handleClose} />
		</React.Fragment>
	);
};

export default LicenseManagement;
