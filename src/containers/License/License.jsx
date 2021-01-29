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
		borderRadius: 20
	},
	title: {
		marginBottom: theme.spacing(3)
	}
}));

const LicenseManagement = () => {
	const classes = useStyles();
	return (
		<React.Fragment>
			<Grid container spacing={3}>
				<Typography variant="h4">License management</Typography>
				<Grid item xs={12} lg={4}>
					<Paper className={classes.paper}>
						<Grid container>
							<Grid item xs={12}>
								<Typography variant="caption">
									<Typography component="span">
										Organization
									</Typography>
									<Typography
										variant="subtitle2"
										component="span"
									>
										trung.dt1@cmctelecom.vn
									</Typography>
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<Typography variant="caption">
									<Typography component="span">
										Organization
									</Typography>
									<Typography
										variant="subtitle2"
										component="span"
									>
										trung.dt1@cmctelecom.vn
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
