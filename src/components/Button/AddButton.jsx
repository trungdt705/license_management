import React from 'react';
import { Button } from '@material-ui/core';
import { AddBox as AddBoxIcon } from '@material-ui/icons';

const AddButton = (props) => {
	return (
		<Button
			variant="outlined"
			color="secondary"
			startIcon={<AddBoxIcon />}
			onClick={props.action}
			size="small"
		>
			Add
		</Button>
	);
};

export default AddButton;
