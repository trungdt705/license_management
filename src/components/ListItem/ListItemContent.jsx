import React from "react";
import {
	ListItem,
	ListItemIcon,
	ListItemText,
	ListItemSecondaryAction,
} from "@material-ui/core";
import { CheckCircleOutline as CheckCircleOutlineIcon } from "@material-ui/icons";
import DeleteIconButton from "../Button/DeleteIconButton";
import CustomsizeIcon from "../Icon/LargeIcon";

const ListItemContent = (props) => {
	const { text } = props;
	return (
		<ListItem divider={true}>
			<ListItemIcon>
				<CustomsizeIcon component={CheckCircleOutlineIcon} />
			</ListItemIcon>
			<ListItemText
				primary={text}
				primaryTypographyProps={{
					variant: "subtitle2",
				}}
			/>
			<ListItemSecondaryAction>
				<DeleteIconButton />
			</ListItemSecondaryAction>
		</ListItem>
	);
};

export default ListItemContent;
