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

function generate(element) {
	return [0, 1, 2, 3, 4, 5, 6].map((value) =>
		React.cloneElement(element, {
			key: value,
		})
	);
}

const ListItemContent = () => {
	return (
		<React.Fragment>
			{generate(
				<ListItem divider={true}>
					<ListItemIcon>
						<CustomsizeIcon component={CheckCircleOutlineIcon} />
					</ListItemIcon>
					<ListItemText
						primary="Single-line item"
						primaryTypographyProps={{
							variant: "subtitle2",
						}}
					/>
					<ListItemSecondaryAction>
						<DeleteIconButton />
					</ListItemSecondaryAction>
				</ListItem>
			)}
		</React.Fragment>
	);
};

export default ListItemContent;
