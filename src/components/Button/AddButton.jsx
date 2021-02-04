import React from "react";
import { Button } from "@material-ui/core";
import { AddBox as AddBoxIcon } from "@material-ui/icons";

const AddButton = () => {
	return (
		<Button variant="outlined" color="secondary" startIcon={<AddBoxIcon />}>
			Add
		</Button>
	);
};

export default AddButton;
