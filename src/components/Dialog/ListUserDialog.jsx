import {
	makeStyles,
	Dialog,
	DialogContent,
	DialogTitle,
	IconButton,
	useMediaQuery,
	useTheme,
	Grid
} from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import React from 'react';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
	backDrop: {
		background: 'rgba(180, 180, 180, 0.5)'
	}
}));

export default function AlertDialog(props) {
	const classes = useStyles();
	const { content: ContentComponent } = props;
	const dispatch = useDispatch();
	const [fullWidth, setFullWidth] = React.useState(true);
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<div>
			<Dialog
				fullScreen={fullScreen}
				fullWidth={fullWidth}
				open={props.open}
				onClose={props.onHandleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
				BackdropProps={{
					classes: {
						root: classes.backDrop
					}
				}}
			>
				<DialogTitle
					id="alert-dialog-title"
					style={{
						borderBottom: '1px solid #f5f0f0'
					}}
				>
					<Grid container>
						<Grid item xs={10}>
							List User
						</Grid>
						<Grid item xs={2}>
							<IconButton
								edge="end"
								color="inherit"
								onClick={props.onHandleClose}
								aria-label="close"
							>
								<CloseIcon />
							</IconButton>
						</Grid>
					</Grid>
				</DialogTitle>
				<DialogContent style={{ padding: 0 }}>
					<ContentComponent licenseId={props.licenseId} />
				</DialogContent>
				{/* <DialogActions>
					<Button
						variant="outlined"
						color="primary"
						size="small"
						startIcon={<DeleteIcon />}
						onClick={removeItem}
					>
						Agree
					</Button>
					<Button onClick={handleClose} color="secondary" autoFocus>
						Cancel
					</Button>
				</DialogActions> */}
			</Dialog>
		</div>
	);
}
