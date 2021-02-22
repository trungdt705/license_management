import { makeStyles, Tab, Tabs, withStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Features from "../Application/Features";
import LicenseTypes from "../Application/LicenseType";
import Modules from "../Application/Modules";
import TabPanel from "./TabPanel";
const CustomTab = withStyles((theme) => ({
	root: {
		borderBottom: "1px solid #e8e8e8"
	},
	indicator: {
		backgroundColor: theme.palette.secondary.main
	}
}))(Tabs);

const AntTab = withStyles((theme) => ({
	root: {
		textTransform: "none",
		minWidth: 72,
		fontWeight: theme.typography.fontWeightRegular,
		marginRight: theme.spacing(1),
		"&:hover": {
			color: theme.palette.secondary.main,
			opacity: 1
		},
		"&$selected": {
			color: theme.palette.secondary.main,
			fontWeight: theme.typography.fontWeightMedium
		},
		"&:focus": {
			color: theme.palette.secondary.main
		}
	},
	selected: {}
}))((props) => <Tab disableRipple {...props} />);

function a11yProps(index) {
	return {
		id: `scrollable-auto-tab-${index}`,
		"aria-controls": `scrollable-auto-tabpanel-${index}`
	};
}

const useStyles = makeStyles((theme) => ({
	demo: { backgroundColor: theme.palette.background.paper }
}));

const ApplicationTab = (props) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const value = useSelector((state) => state.Application.tabIndex);
	const handleChange = (event, newValue) => {
		dispatch({ type: "TAB_INDEX", payload: newValue });
	};
	useEffect(() => {
		// return () => {
		// 	dispatch({ type: "TAB_INDEX", payload: 0 });
		// };
	}, []);
	return (
		<div className={classes.demo}>
			<CustomTab
				value={value}
				onChange={handleChange}
				aria-label="ant example"
			>
				<AntTab label="Features" {...a11yProps(0)} />
				<AntTab label="Modules" {...a11yProps(1)} />
				<AntTab label="License type" {...a11yProps(2)} />
			</CustomTab>
			<TabPanel index={0} value={value}>
				<Features appId={props.appId} />
			</TabPanel>
			<TabPanel index={1} value={value}>
				<Modules appId={props.appId} />
			</TabPanel>
			<TabPanel index={2} value={value}>
				<LicenseTypes appId={props.appId} />
			</TabPanel>
		</div>
	);
};

export default ApplicationTab;
