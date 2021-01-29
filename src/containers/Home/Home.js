import {
	Container,
	Divider,
	Typography,
	Grid,
	Paper,
	makeStyles
} from '@material-ui/core';
import {
	Apps as AppsIcon,
	ViewModule as ViewModuleIcon,
	VpnKey as VpnKeyIcon,
	SettingsApplications as SettingsApplicationsIcon
} from '@material-ui/icons';
import React from 'react';
// import messages from './../../assets/Local/messages';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { actionRequest } from '../../store/Feature1/FeatureAction';
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
		borderRadius: 20
	},
	title: {
		marginBottom: theme.spacing(3)
	},
	removeLinkLine: {
		textDecoration: 'none'
	}
}));

const Home = () => {
	const classes = useStyles();
	return (
		<React.Fragment>
			<Grid container spacing={3}>
				<Grid item xs={6} lg={3}>
					<Link to="/applications" className={classes.removeLinkLine}>
						<Paper className={classes.paper}>
							<AppsIcon fontSize="large" color="secondary" />
							<Typography variant="h6">Application</Typography>
						</Paper>
					</Link>
				</Grid>
				<Grid item xs={6} lg={3}>
					<Link to="/modules" className={classes.removeLinkLine}>
						<Paper className={classes.paper}>
							<ViewModuleIcon fontSize="large" />
							<Typography variant="h6">Modules</Typography>
						</Paper>
					</Link>
				</Grid>
				<Grid item xs={6} lg={3}>
					<Link
						to="/license-management"
						className={classes.removeLinkLine}
					>
						<Paper className={classes.paper}>
							<VpnKeyIcon fontSize="large" color="secondary" />
							<Typography variant="h6">License</Typography>
						</Paper>
					</Link>
				</Grid>
				<Grid item xs={6} lg={3}>
					<Link to="/setting" className={classes.removeLinkLine}>
						<Paper className={classes.paper}>
							<SettingsApplicationsIcon
								fontSize="large"
								color="secondary"
							/>
							<Typography variant="h6">Setting</Typography>
						</Paper>
					</Link>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

export default Home;
