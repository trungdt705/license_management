import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import {
	Menu as MenuIcon,
	ArrowBack as ArrowBackIcon,
	AccountCircle,
} from "@material-ui/icons";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		backgroundImage: "url('/fire_wall.jpg')",
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: theme.spacing(1),
	},
	textInBar: {
		paddingRight: theme.spacing(1),
	},
	hide: {
		display: "none",
	},
	"@keyframes myEffect": {
		"0%": {
			opacity: 0,
			transform: "translateY(-200%)",
		},
		"100%": {
			opacity: 1,
			transform: "translateY(0)",
		},
	},
	logo: {
		fontWeight: "bold",
		fontSize: "1.2rem",
		textShadow: "2px 2px 5px #FAF7F7",
		// animation: `$myEffect 3000ms ${theme.transitions.easing.easeInOut}`,
	},
	title: {
		flexGrow: 1,
	},
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
					[classes.appBarShift]: props.open,
				})}
				elevation={2}
			>
				<Toolbar>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="open drawer"
					>
						<ArrowBackIcon />
					</IconButton>
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
					<Typography variant="h6" noWrap className={classes.title}>
						License Management
					</Typography>
					<IconButton
						edge="end"
						aria-label="account of current user"
						aria-controls="menu-appbar"
						aria-haspopup="true"
						color="inherit"
					>
						<AccountCircle />
					</IconButton>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default CustomAppBar;
