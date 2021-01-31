import { Grid, makeStyles, Paper, Typography, Link } from "@material-ui/core";
import {
	VerifiedUser,
	Apps as AppsIcon,
	ViewModule as ViewModuleIcon,
	VpnKey as VpnKeyIcon,
} from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) => ({
	infoTitle: {
		paddingLeft: theme.spacing(1),
		paddingTop: theme.spacing(1),
		paddingBottom: theme.spacing(1),
		fontWeight: "bold",
	},
	iconLarge: {
		width: theme.spacing(3),
		height: theme.spacing(3),
		color: "green",
	},
	publish: {
		paddingLeft: theme.spacing(1),
		paddingTop: theme.spacing(1),
		paddingBottom: theme.spacing(1),
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
		borderRadius: 20,
	},
	iconDetail: {
		paddingLeft: theme.spacing(1),
		paddingTop: theme.spacing(1),
		paddingBottom: theme.spacing(1),
		display: "flex",
		alignItems: "center",
	},
	numberDetail: {
		marginLeft: 10,
		fontWeight: "bold",
	},
}));

const Setting = () => {
	const classes = useStyles();
	return (
		<React.Fragment>
			<Grid container spacing={2}>
				<Grid item xs={12} lg={8}>
					<Paper>
						<Grid
							container
							style={{ display: "flex", alignItems: "center" }}
						>
							<Grid item xs={10} lg={11}>
								<Typography
									variant="h5"
									className={classes.infoTitle}
								>
									{"Công ty UI Template".toUpperCase()}
								</Typography>
								<Typography
									variant="caption"
									className={classes.publish}
								>
									Publish at: 01/01/2021
								</Typography>
								<Typography
									variant="subtitle2"
									className={classes.infoTitle}
								>
									API KEY: ***********************
								</Typography>
							</Grid>
							<Grid item xs={2} lg={1}>
								<VerifiedUser className={classes.iconLarge} />
							</Grid>
						</Grid>
					</Paper>
				</Grid>
				<Grid item xs={12} lg={4}>
					<Paper>
						<Grid container>
							<Grid item xs={10} lg={10}>
								<Typography
									variant="h6"
									className={classes.publish}
								>
									THÔNG TIN CHI TIẾT
								</Typography>
							</Grid>
							<Grid
								item
								xs={4}
								lg={4}
								className={classes.iconDetail}
							>
								<AppsIcon style={{ color: "green" }} />
								<span className={classes.numberDetail}>24</span>
							</Grid>
							<Grid
								item
								xs={4}
								lg={4}
								className={classes.iconDetail}
							>
								<ViewModuleIcon style={{ color: "orange" }} />
								<span className={classes.numberDetail}>30</span>
							</Grid>
							<Grid
								item
								xs={4}
								lg={4}
								className={classes.iconDetail}
							>
								<VpnKeyIcon style={{ color: "red" }} />
								<span className={classes.numberDetail}>
									100
								</span>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

export default Setting;
