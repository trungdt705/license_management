import { Typography, makeStyles, useTheme } from '@material-ui/core';
import { VerifiedUser } from '@material-ui/icons';
import moment from 'moment-timezone';
import ApplicationTab from '../../components/Tab/CustomTab';
import LargeIcon from '../../components/Icon/LargeIcon';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import * as Types from '../../store/sagas/commonType';
import * as ActionTypes from '../../store/Application/Types';

const useStyles = makeStyles((theme) => ({
	publish: {
		marginBottom: 10,
		marginTop: 10
	}
}));

const ApplicationInfo = (props) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const { id } = useParams();
	const application = useSelector((state) => state.Application.one);
	useEffect(() => {
		dispatch({
			type: Types.GET_ONE,
			payload: {
				id,
				action: ActionTypes.APPLICATION_GET_ONE,
				path: 'applications'
			}
		});
	}, []);
	return (
		<React.Fragment>
			<Typography variant="h4">
				{application.name} <LargeIcon component={VerifiedUser} />
			</Typography>
			<Typography
				variant="subtitle2"
				component="div"
				align="right"
				className={classes.publish}
			>
				Publish at:{' '}
				{application.publish_at
					? moment(application.publish_at).format('DD-MM-YYYY')
					: 'Published yet!!'}
			</Typography>
			{application.id && <ApplicationTab appId={id} />}
		</React.Fragment>
	);
};

export default ApplicationInfo;
