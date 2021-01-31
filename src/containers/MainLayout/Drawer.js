import React from "react";
import clsx from "clsx";
import {
	Drawer,
	IconButton,
	Divider,
	List,
	makeStyles,
	useTheme,
	Hidden,
} from "@material-ui/core";
import { ChevronLeft as ChevronLeftIcon } from "@material-ui/icons";
import ListItemLink from "../../components/ListItem/ListItem";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: "nowrap",
	},
	drawerOpen: {
		width: drawerWidth,
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerClose: {
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		overflowX: "hidden",
		width: theme.spacing(7) + 1,
		[theme.breakpoints.up("sm")]: {
			width: theme.spacing(9) + 1,
		},
	},
}));

const CustomDrawer = (props) => {
	const { component: ContentComponent } = props;
	const theme = useTheme();
	const classes = useStyles();
	return (
		<React.Fragment>
			<Drawer
				variant="permanent"
				className={clsx(classes.drawer, {
					[classes.drawerOpen]: props.open,
					[classes.drawerClose]: !props.open,
				})}
				classes={{
					paper: clsx({
						[classes.drawerOpen]: props.open,
						[classes.drawerClose]: !props.open,
					}),
				}}
			>
				<div className={classes.toolbar}>
					<IconButton onClick={props.onHandleDrawerClose}>
						<ChevronLeftIcon />
					</IconButton>
				</div>
				<Divider />
				<List>
					{/* {menu.map((item) => (
						<ListItemLink
							key={item.link}
							to={item.link}
							name={item.name}
							icon={item.icon}
						/>
					))} */}
				</List>
			</Drawer>
		</React.Fragment>
	);
};

export default CustomDrawer;
