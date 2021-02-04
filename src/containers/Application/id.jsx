import { Typography, makeStyles, useTheme } from "@material-ui/core";
import { VerifiedUser } from "@material-ui/icons";
import ApplicationTab from "../../components/Tab/CustomTab";
import LargeIcon from "../../components/Icon/LargeIcon";
import React from "react";

const useStyles = makeStyles((theme) => ({
	publish: {
		marginBottom: 10,
		marginTop: 10,
	},
}));

const ApplicationInfo = () => {
	const classes = useStyles();
	const theme = useTheme();
	return (
		<React.Fragment>
			<Typography variant="h4">
				Tên phần mềm <LargeIcon component={VerifiedUser} />
			</Typography>
			<Typography
				variant="subtitle2"
				component="div"
				align="right"
				className={classes.publish}
			>
				Publish at: 01/01/2021
			</Typography>
			<ApplicationTab />
		</React.Fragment>
	);
};

export default ApplicationInfo;
