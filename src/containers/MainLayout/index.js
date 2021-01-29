import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CustomAppBar from './AppBar';
import CustomDrawer from './Drawer';
import { Container, Grid, Typography } from '@material-ui/core';
import Footer from './Footer';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex'
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	menuButton: {
		marginRight: 36
	},
	hide: {
		display: 'none'
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap'
	},
	drawerOpen: {
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	drawerClose: {
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		overflowX: 'hidden',
		width: theme.spacing(7) + 1,
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing(9) + 1
		}
	},
	toolbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(2, 1, 2, 1),
		marginBottom: '10%'
	},
	footer: {
		position: 'fixed',
		left: 0,
		bottom: 0,
		width: '100%',
		background: '#2e2a29',
		color: 'white',
		textAlign: 'center'
	}
}));

export default function MainLayout(props) {
	const classes = useStyles();
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);
	const { component: ContentComponent } = props;
	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<div className={classes.root}>
			<CustomAppBar open={open} onHandleDrawerOpen={handleDrawerOpen} />
			{/* <CustomDrawer open={open} onHandleDrawerClose={handleDrawerClose} /> */}
			<Container>
				<main className={classes.content}>
					<div className={classes.toolbar}></div>
					<ContentComponent />
				</main>
				<div className={classes.footer}>
					<Typography variant="subtitle1">
						license management - copyright &#169; 2021
					</Typography>
				</div>
			</Container>
		</div>
	);
}
