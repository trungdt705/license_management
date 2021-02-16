import React from "react";
import {
	ListItem,
	ListItemIcon,
	ListItemText,
	ListItemSecondaryAction,
} from "@material-ui/core";
import { CheckCircleOutline as CheckCircleOutlineIcon } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import DeleteIconButton from "../Button/DeleteIconButton";
import EditIconButton from "../Button/EditIconButton";
import CustomsizeIcon from "../Icon/LargeIcon";
import * as ActionTypes from "../../store/Feature/Types";

const ListItemContent = (props) => {
	const { text, id } = props;
	const history = useHistory();
	const dispatch = useDispatch();
	// const removeItem = () => {
	// 	console.log("remove item");
	// 	dispatch({
	// 		type: "DELETE",
	// 		payload: {
	// 			id: id,
	// 			path: "features",
	// 		},
	// 	});
	// 	dispatch({
	// 		type: "SHOW_DIALOG",
	// 		payload: {
	// 			open: false,
	// 		},
	// 	});
	// };
	return (
		<ListItem divider={true}>
			<ListItemIcon>
				<CustomsizeIcon component={CheckCircleOutlineIcon} />
			</ListItemIcon>
			<ListItemText
				primary={text}
				primaryTypographyProps={{
					variant: "subtitle2",
					component: "p",
					noWrap: true,
				}}
			/>
			<ListItemSecondaryAction>
				<EditIconButton
					edge="end"
					onGotoEdit={() =>
						history.push(`/features/${id}/edit`, {
							title: "Edit feature",
						})
					}
				/>
				<DeleteIconButton
					edge="end"
					actionPayload={{
						type: "DELETE",
						payload: {
							id: id,
							path: "features",
							action: ActionTypes.FEATURE_DELETE,
						},
					}}
				/>
			</ListItemSecondaryAction>
		</ListItem>
	);
};

export default ListItemContent;
