import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Delete as DeleteIcon } from '@material-ui/icons';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
	backDrop: {
		background: 'rgba(180, 180, 180, 0.5)'
	}
}));

export default function AlertDialog(props) {
	const classes = useStyles();
	const dispatch = useDispatch();
	const open = useSelector((state) => state['Dialog'].open);
	const payload = useSelector((state) => state['Dialog'].payload);
	const handleClose = () => {
		dispatch({
			type: 'SHOW_DIALOG',
			payload: {
				open: false
			}
		});
	};
	const removeItem = () => {
		dispatch(payload);
		handleClose();
	};

	return (
		<div>
			<Dialog
				open={open}
				onClose={handleClose}
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
					{'Do you want to remove this item?'}
				</DialogTitle>
				{/* <DialogContent>
					<DialogContentText id="alert-dialog-description">
						
					</DialogContentText>
				</DialogContent> */}
				<DialogActions>
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
				</DialogActions>
			</Dialog>
		</div>
	);
}
