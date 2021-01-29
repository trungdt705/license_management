import { Typography, Grid, Paper, makeStyles } from '@material-ui/core';
import React from 'react';
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	paper: {
		padding: theme.spacing(1),
		textAlign: 'left',
		color: theme.palette.text.secondary,
		borderRadius: 10
	},
	title: {
		marginBottom: theme.spacing(3)
	},
	alignDetail: {
		marginLeft: '5%'
	}
}));

const LicenseManagement = () => {
	const classes = useStyles();
	return (
		<React.Fragment>
			<Grid container spacing={3}>
				<Grid item xs={12} lg={12}>
					<Typography variant="h4">License management</Typography>
				</Grid>

				<Grid item xs={12} lg={4}>
					<Paper className={classes.paper}>
						<Grid container>
							<Grid item xs={12}>
								<Typography variant="caption">
									<Typography component="span">
										Organization:
									</Typography>
									<Typography
										variant="subtitle2"
										component="span"
										className={classes.alignDetail}
									>
										trung.dt1@cmctelecom.vn
									</Typography>
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<Typography variant="caption">
									<Typography component="span">
										Start date:
									</Typography>
									<Typography
										variant="subtitle2"
										component="span"
										className={classes.alignDetail}
									>
										01/01/2021
									</Typography>
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<Typography variant="caption">
									<Typography component="span">
										End date:
									</Typography>
									<Typography
										variant="subtitle2"
										component="span"
									>
										01/01/2021 (265 days)
									</Typography>
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<Typography variant="caption">
									<Typography component="span">
										User limit:
									</Typography>
									<Typography
										variant="subtitle2"
										component="span"
									>
										100
									</Typography>
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<Typography variant="caption">
									<Typography component="span">
										Activated User:
									</Typography>
									<Typography
										variant="subtitle2"
										component="span"
									>
										89 (Remain: 11)
									</Typography>
								</Typography>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

export default LicenseManagement;
