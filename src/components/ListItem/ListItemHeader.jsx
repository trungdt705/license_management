import React from "react";
import {
	ListItem,
	ListItemText,
	Typography,
	ListItemSecondaryAction,
} from "@material-ui/core";

const ListItemHeader = (props) => {
	const { content, component: Component } = props;
	return (
		<ListItem>
			<ListItemText>
				<Typography variant="subtitle1">{content}</Typography>
			</ListItemText>
			<ListItemSecondaryAction edge="end">
				<Component />
			</ListItemSecondaryAction>
		</ListItem>
	);
};

export default ListItemHeader;
