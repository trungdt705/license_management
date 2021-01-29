import {
	Grid,
	Paper,
	Typography,
	Avatar,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	ListItemSecondaryAction,
	IconButton,
	makeStyles,
	ListItemIcon,
	Fab,
	Divider
} from '@material-ui/core';
import {
	Delete as DeleteIcon,
	Folder as FolderIcon,
	Done as DoneIcon,
	Done,
	VerifiedUser,
	Add as AddIcon
} from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		maxWidth: 752
	},
	demo: {
		backgroundColor: theme.palette.background.paper,
		borderRadius: 10
	},
	title: {
		margin: theme.spacing(4, 0, 2)
	},
	iconSmall: {
		width: theme.spacing(3),
		height: theme.spacing(3),
		stroke: 'green',
		strokeWidth: 4
	},
	iconLarge: {
		width: theme.spacing(5),
		height: theme.spacing(5),
		color: 'green'
	},
	featureTitle: {
		paddingLeft: theme.spacing(2),
		paddingTop: theme.spacing(2),
		paddingBottom: theme.spacing(2)
	},
	deleteIcon: {
		color: 'red',
		opacity: 0.2,
		cursor: 'pointer',
		'&:hover': {
			opacity: 1
		}
	},
	paper: {
		borderRadius: '10px'
	},
	equalContent: {
		alignItems: 'center'
	}
}));

function generate(element) {
	return [0, 1, 2, 3, 4, 5].map((value) =>
		React.cloneElement(element, {
			key: value
		})
	);
}

const ApplicationInfo = () => {
	const classes = useStyles();
	const [dense, setDense] = React.useState(false);
	const [secondary, setSecondary] = React.useState(false);
	return (
		<React.Fragment>
			<img
				src="/cloudsms.png"
				style={{ width: '100%', height: '250px' }}
			></img>

			<Typography
				variant="h4"
				style={{ marginBottom: '5%', fontWeight: 'bold' }}
			>
				Tên phần mềm <VerifiedUser className={classes.iconLarge} />
			</Typography>
			<Grid container>
				<Grid item xs={12} md={6}>
					<Paper elevation={4} className={classes.paper}>
						<Grid container className={classes.equalContent}>
							<Grid item xs={10}>
								<Typography
									variant="h6"
									className={classes.featureTitle}
								>
									List features (15)
								</Typography>
							</Grid>
							<Grid item xs={2}>
								<Fab
									color="secondary"
									aria-label="add"
									size="small"
								>
									<AddIcon />
								</Fab>
							</Grid>
						</Grid>

						<Divider></Divider>
						<div className={classes.demo}>
							<List dense={dense}>
								{generate(
									<ListItem>
										<ListItemIcon>
											<DoneIcon
												className={classes.iconSmall}
											/>
										</ListItemIcon>
										<ListItemText
											primary="Single-line item"
											primaryTypographyProps={{
												variant: 'h6'
											}}
											secondary={
												secondary
													? 'Secondary text'
													: null
											}
										/>
										<ListItemSecondaryAction>
											<DeleteIcon
												className={classes.deleteIcon}
											/>
										</ListItemSecondaryAction>
										<Divider></Divider>
									</ListItem>
								)}
							</List>
						</div>
					</Paper>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

export default ApplicationInfo;
