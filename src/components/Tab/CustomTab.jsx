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
import Modules from "../Application/Modules";
import LicenseTypes from "../Application/LicenseType";
const CustomTab = withStyles((theme) => ({
	root: {
		borderBottom: "1px solid #e8e8e8",
	},
	indicator: {
		backgroundColor: theme.palette.secondary.main,
	},
}))(Tabs);

const AntTab = withStyles((theme) => ({
	root: {
		textTransform: "none",
		minWidth: 72,
		fontWeight: theme.typography.fontWeightRegular,
		marginRight: theme.spacing(1),
		"&:hover": {
			color: theme.palette.secondary.main,
			opacity: 1,
		},
		"&$selected": {
			color: theme.palette.secondary.main,
			fontWeight: theme.typography.fontWeightMedium,
		},
		"&:focus": {
			color: theme.palette.secondary.main,
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
				<Features />
			</TabPanel>
			<TabPanel index={1} value={value}>
				<Modules />
			</TabPanel>
			<TabPanel index={2} value={value}>
				<LicenseTypes />
			</TabPanel>
		</div>
	);
};

export default ApplicationTab;
