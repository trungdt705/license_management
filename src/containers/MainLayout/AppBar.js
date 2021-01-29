import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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
	}
}));

const CustomAppBar = (props) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				color="secondary"
				position="fixed"
				className={clsx(classes.appBar, {
					[classes.appBarShift]: props.open
				})}
			>
				<Toolbar>
					{/* <IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={props.onHandleDrawerOpen}
						edge="start"
						className={clsx(classes.menuButton, {
							[classes.hide]: props.open
						})}
					>
						<MenuIcon />
					</IconButton> */}
					<Typography variant="h6" noWrap>
						License Management
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default CustomAppBar;
