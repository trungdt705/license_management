import React from "react";
import {
	withStyles,
	Tab,
	Tabs,
	Typography,
	makeStyles,
} from "@material-ui/core";
import TabPanel from "./TabPanel";
import Features from "../Application/Features";
const AntTabs = withStyles({
	root: {
		borderBottom: "1px solid #e8e8e8",
	},
	indicator: {
		backgroundColor: "#1890ff",
	},
})(Tabs);

const AntTab = withStyles((theme) => ({
	root: {
		textTransform: "none",
		minWidth: 72,
		fontWeight: theme.typography.fontWeightRegular,
		marginRight: theme.spacing(1),
		fontFamily: [
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(","),
		"&:hover": {
			color: "#40a9ff",
			opacity: 1,
		},
		"&$selected": {
			color: "#1890ff",
			fontWeight: theme.typography.fontWeightMedium,
		},
		"&:focus": {
			color: "#40a9ff",
		},
	},
	selected: {},
}))((props) => <Tab disableRipple {...props} />);

function a11yProps(index) {
	return {
		id: `scrollable-auto-tab-${index}`,
		"aria-controls": `scrollable-auto-tabpanel-${index}`,
	};
}

const useStyles = makeStyles((theme) => ({
	demo: { backgroundColor: theme.palette.background.paper },
}));

const ApplicationTab = (props) => {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<div className={classes.demo}>
			<AntTabs
				value={value}
				onChange={handleChange}
				aria-label="ant example"
			>
				<AntTab label="Features" {...a11yProps(0)} />
				<AntTab label="Modules" {...a11yProps(1)} />
				<AntTab label="License type" {...a11yProps(2)} />
			</AntTabs>
			<TabPanel index={0} value={value}>
				<Features />
			</TabPanel>
			<TabPanel index={1} value={value}>
				modules
			</TabPanel>
			<TabPanel index={2} value={value}>
				license type
			</TabPanel>
		</div>
	);
};

export default ApplicationTab;
