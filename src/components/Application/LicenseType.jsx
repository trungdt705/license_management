import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import * as Types from '../../store/Application/Types';
import { pink } from '@material-ui/core/colors';
import { Grid, Typography, Avatar } from '@material-ui/core';
import { Apps as AppsIcon, Pageview as PageviewIcon } from '@material-ui/icons';
import CommonCard from '../Card/CommonCard';
import DeleteIconButton from '../Button/DeleteIconButton';
import StyledBadge from '../../components/Badge/BadgeCustom';

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1)
		}
	}
}));

const CardIcon = (props) => {
	const classes = useStyles();
	return (
		<Avatar className={classes.avatarColor}>
			<PageviewIcon fontSize="small" />
		</Avatar>
	);
};

const CardContent = (props) => {
	return (
		<React.Fragment>
			<Typography variant="subtitle2">DEMO</Typography>
			<Typography variant="caption">Published: 01/01/2021</Typography>
			<Typography>
				<StyledBadge
					badgeContent={4}
					color="secondary"
					style={{ marginRight: 20 }}
				>
					<AppsIcon />
				</StyledBadge>
				<StyledBadge badgeContent={4} color="primary">
					<AppsIcon />
				</StyledBadge>
			</Typography>
		</React.Fragment>
	);
};

const CardAction = () => {
	return (
		<React.Fragment>
			<DeleteIconButton />
		</React.Fragment>
	);
};

export default function LicenseTypes() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch({ type: Types.GET_LIST });
	}, []);

	return (
		<React.Fragment>
			<Grid container spacing={2} style={{ marginTop: 4 }}>
				<CommonCard
					cardIcon={CardIcon}
					cardContent={CardContent}
					cardAction={CardAction}
				/>
			</Grid>
		</React.Fragment>
	);
}
