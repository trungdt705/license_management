import {
	Container,
	Divider,
	Typography,
	Grid,
	Paper,
	makeStyles,
	Grow
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
import { MENU as menu } from '../../utils/contants/home';
// import { actionRequest } from '../../store/Feature1/FeatureAction';
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	paper: {
		padding: theme.spacing(1),
		textAlign: 'center',
		color: theme.palette.text.secondary
	},
	removeLinkLine: {
		textDecoration: 'none'
	}
}));

const Home = () => {
	const classes = useStyles();
	return (
		<React.Fragment>
			<Grid container spacing={2}>
				{menu.map((item) => {
					return (
						<Grid item xs={6} lg={3}>
							<Link
								to={item.link}
								className={classes.removeLinkLine}
							>
								<Grow in={true}>
									<Paper className={classes.paper}>
										{item.icon}
										<Typography variant="h6">
											{item.name}
										</Typography>
									</Paper>
								</Grow>
							</Link>
						</Grid>
					);
				})}
			</Grid>
		</React.Fragment>
	);
};

export default Home;
