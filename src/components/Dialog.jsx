import {
	Button,
	Dialog,
	DialogActions as MuiDialogActions,
	DialogContent as MuiDialogContent,
	DialogTitle as MuiDialogTitle,
	IconButton,
	makeStyles,
	Typography,
	useMediaQuery,
} from "@material-ui/core/";
import { useTheme, withStyles } from "@material-ui/core/styles";
import { Close as CloseIcon } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) => ({
	inline: {
		display: "inline",
	},
	hide: {
		display: "none",
	},
}));
const styles = (theme) => ({
	root: {
		margin: 0,
		padding: theme.spacing(2),
	},
	closeButton: {
		position: "absolute",
		right: theme.spacing(1),
		top: theme.spacing(1),
		color: theme.palette.grey[500],
	},
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
		padding: theme.spacing(0),
	},
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
	root: {
		margin: 0,
		padding: theme.spacing(1),
	},
}))(MuiDialogActions);

export default function CustomizedDialogs(props) {
	const {
		showAction = false,
		title = "List User",
		content: ComponentContent,
	} = props;
	const theme = useTheme();
	const classes = useStyles();
	const [fullWidth, setFullWidth] = React.useState(true);
	const [maxWidth, setMaxWidth] = React.useState("sm");
	const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
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
					{title}
				</DialogTitle>
				<DialogContent dividers>
					<ComponentContent config={props.dataConfig} />
				</DialogContent>
				<DialogActions className={showAction ? "" : classes.hide}>
					<Button
						autoFocus
						onClick={props.onHandleClose}
						color="primary"
					>
						Save changes
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
