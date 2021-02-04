import React from "react";
import {
	Grid,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	ListItemSecondaryAction,
	makeStyles,
} from "@material-ui/core";
import { CheckCircleOutline as CheckCircleOutlineIcon } from "@material-ui/icons";
import DeleteIconButton from "../Button/DeleteIconButton";
import AddButton from "../Button/AddButton";
import CustomsizeIcon from "../Icon/LargeIcon";
import ListItemHeader from "../ListItem/ListItemHeader";
import ListItemContent from "../ListItem/ListItemContent";

const useStyles = makeStyles((theme) => ({}));

const Features = () => {
	const [dense] = React.useState(false);
	return (
		<Grid container>
			<Grid item xs={12} md={12}>
				<List dense={dense}>
					<ListItemHeader
						component={AddButton}
						content={"Total: 15"}
					/>
					<ListItemContent />
				</List>
			</Grid>
		</Grid>
	);
};

export default Features;
