import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import * as Types from '../../store/Application/Types';
import { pink } from '@material-ui/core/colors';
import { Grid, Paper, Typography, Badge, IconButton } from '@material-ui/core';
import {
	DeleteForever as DeleteForeverIcon,
	Mail as MailIcon,
	Apps as AppsIcon
} from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1)
		}
	},
	paper: {
		padding: theme.spacing(1),
		color: theme.palette.text.secondary
		// backgroundColor: theme.palette.text.secondary
	},
	leftContent: {
		textAlign: 'left'
	},
	rightContent: {
		textAlign: 'right'
	},
	pink: {
		color: theme.palette.getContrastText(pink[500]),
		backgroundColor: pink[500],
		width: theme.spacing(4),
		height: theme.spacing(4)
	},
	equalContent: {
		alignItems: 'center'
	},
	button: {
		margin: theme.spacing(1)
	},
	deleteIcon: {
		color: 'red',
		opacity: 0.5,
		cursor: 'pointer',
		'&:hover': {
			opacity: 1
		}
	},
	publish: {
		marginTop: theme.spacing(1)
	}
}));

const StyledBadge = withStyles((theme) => ({
	badge: {
		right: -1,
		top: 5,
		border: `2px solid ${theme.palette.background.paper}`
	}
}))(Badge);

export default function LicenseTypes() {
	const classes = useStyles();
	const dispatch = useDispatch();
	const history = useHistory();
	useEffect(() => {
		dispatch({ type: Types.GET_LIST });
	}, []);

	const applicationInfoPage = () => {
		history.push('/applications/123');
	};

	const handleDelete = () => {
		console.info('You clicked the delete icon.');
	};

	return (
		<React.Fragment>
			<Grid container spacing={2} style={{ marginTop: 4 }}>
				<Grid item xs={12} lg={4} md={4} onClick={applicationInfoPage}>
					<Paper className={classes.paper} variant="outlined">
						<Grid
							container
							style={{
								display: 'flex',
								alignItems: 'center'
							}}
						>
							<Grid
								item
								xs={10}
								lg={10}
								justify="flex-end"
								className={classes.leftContent}
							>
								<Typography variant="h6">DEMO</Typography>
								<Typography variant="caption">
									Published: 01/01/2021
								</Typography>
								<Typography>
									<StyledBadge
										badgeContent={4}
										color="secondary"
										style={{ marginRight: 20 }}
									>
										<AppsIcon />
									</StyledBadge>
									<StyledBadge
										badgeContent={4}
										color="primary"
									>
										<AppsIcon />
									</StyledBadge>
								</Typography>
							</Grid>
							<Grid
								item
								xs={2}
								lg={2}
								justify="flex-end"
								className={classes.rightContent}
							>
								<DeleteForeverIcon
									className={classes.deleteIcon}
								/>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
				<Grid item xs={12} lg={4} md={4} onClick={applicationInfoPage}>
					<Paper className={classes.paper} variant="outlined">
						<Grid
							container
							style={{
								display: 'flex',
								alignItems: 'center'
							}}
						>
							<Grid
								item
								xs={10}
								lg={10}
								justify="flex-end"
								className={classes.leftContent}
							>
								<Typography variant="h6">DEMO</Typography>
								<Typography variant="caption">
									Published: 01/01/2021
								</Typography>
								<Typography>
									<StyledBadge
										badgeContent={4}
										color="secondary"
										style={{ marginRight: 20 }}
									>
										<AppsIcon />
									</StyledBadge>
									<StyledBadge
										badgeContent={4}
										color="primary"
									>
										<AppsIcon />
									</StyledBadge>
								</Typography>
							</Grid>
							<Grid
								item
								xs={2}
								lg={2}
								justify="flex-end"
								className={classes.rightContent}
							>
								<DeleteForeverIcon
									className={classes.deleteIcon}
								/>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}
