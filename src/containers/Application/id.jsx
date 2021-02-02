import {
	Grid,
	Typography,
	List,
	ListItem,
	ListItemText,
	ListItemSecondaryAction,
	makeStyles,
	ListItemIcon,
	Divider
} from '@material-ui/core';
import {
	Delete as DeleteIcon,
	Done as DoneIcon,
	VerifiedUser,
	Add as AddIcon
} from '@material-ui/icons';
import TabPanel from '../../components/Tab/TabPanel';
import ApplicationTab from '../../components/Tab/AntTab';
import React from 'react';

const useStyles = makeStyles((theme) => ({
	iconLarge: {
		width: theme.spacing(3),
		height: theme.spacing(3),
		color: 'green'
	}
}));

const ApplicationInfo = () => {
	const classes = useStyles();
	return (
		<React.Fragment>
			<Typography variant="h4">
				Tên phần mềm <VerifiedUser className={classes.iconLarge} />
			</Typography>
			<Typography
				variant="subtitle2"
				component="div"
				align="right"
				style={{ marginBottom: 10, marginTop: 10 }}
			>
				Publish at: 01/01/2021
			</Typography>
			<ApplicationTab />
		</React.Fragment>
	);
};

export default ApplicationInfo;
