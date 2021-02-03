import React from 'react';
import { withStyles, useTheme } from '@material-ui/core/styles';
import {
	Button,
	Dialog,
	DialogTitle as MuiDialogTitle,
	DialogContent as MuiDialogContent,
	DialogActions as MuiDialogActions,
	IconButton,
	useMediaQuery,
	Typography,
	Grid,
	List,
	ListItem,
	ListItemIcon,
	ListItemSecondaryAction,
	ListItemText,
	Paper,
	Switch,
	makeStyles
} from '@material-ui/core/';
import { Close as CloseIcon, Wifi, Wifi as WifiIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
	inline: {
		display: 'inline'
	}
}));
const styles = (theme) => ({
	root: {
		margin: 0,
		padding: theme.spacing(2)
	},
	closeButton: {
		position: 'absolute',
		right: theme.spacing(1),
		top: theme.spacing(1),
		color: theme.palette.grey[500]
	}
});

const DialogTitle = withStyles(styles)((props) => {
	const { children, classes, onClose, ...other } = props;
	return (
		<MuiDialogTitle disableTypography className={classes.root} {...other}>
			<Typography variant="h6">{children}</Typography>
			{onClose ? (
				<IconButton
					aria-label="close"
					className={classes.closeButton}
					onClick={onClose}
				>
					<CloseIcon />
				</IconButton>
			) : null}
		</MuiDialogTitle>
	);
});

const DialogContent = withStyles((theme) => ({
	root: {
		padding: theme.spacing(0)
	}
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
	root: {
		margin: 0,
		padding: theme.spacing(1)
	}
}))(MuiDialogActions);

export default function CustomizedDialogs(props) {
	const theme = useTheme();
	const classes = useStyles();
	const [fullWidth, setFullWidth] = React.useState(true);
	const [maxWidth, setMaxWidth] = React.useState('sm');
	const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
	const [checked, setChecked] = React.useState(['wifi']);

	const handleToggle = (value) => () => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setChecked(newChecked);
	};
	return (
		<div>
			<Dialog
				onClose={props.onHandleClose}
				aria-labelledby="customized-dialog-title"
				open={props.open}
				fullWidth={fullWidth}
				maxWidth={maxWidth}
				fullScreen={fullScreen}
			>
				<DialogTitle
					id="customized-dialog-title"
					onClose={props.onHandleClose}
				>
					List User
				</DialogTitle>
				<DialogContent dividers>
					<List>
						<ListItem>
							<ListItemText
								id="switch-list-label-wifi"
								primary={
									<React.Fragment>
										<Typography
											variant="subtitle2"
											color="textPrimary"
											display="inline"
										>
											dinhthanhtrung7051992@gmai .com
											fffff
										</Typography>
									</React.Fragment>
								}
							/>
							<ListItemSecondaryAction>
								<Switch
									edge="end"
									onChange={handleToggle('wifi')}
									checked={checked.indexOf('wifi') !== -1}
									inputProps={{
										'aria-labelledby':
											'switch-list-label-wifi'
									}}
								/>
							</ListItemSecondaryAction>
						</ListItem>
					</List>
				</DialogContent>
				{/* <DialogActions>
					<Button
						autoFocus
						onClick={props.onHandleClose}
						color="primary"
					>
						Save changes
					</Button>
				</DialogActions> */}
			</Dialog>
		</div>
	);
}
