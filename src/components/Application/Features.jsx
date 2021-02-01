import React from "react";
import {
	Grid,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	ListItemSecondaryAction,
	Button,
	Typography,
	makeStyles,
} from "@material-ui/core";

import {
	Done as DoneIcon,
	Delete as DeleteIcon,
	CheckCircleOutline as CheckCircleOutlineIcon,
	Add as AddIcon,
	AddBox as AddBoxIcon,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
	demo: { backgroundColor: theme.palette.background.paper },
	iconSmall: {
		width: theme.spacing(3),
		height: theme.spacing(3),
		stroke: "green",
	},
	deleteIcon: {
		color: "red",
		opacity: 0.2,
		cursor: "pointer",
		"&:hover": {
			opacity: 1,
		},
	},
	addIcon: {
		width: theme.spacing(4),
		height: theme.spacing(4),
		stroke: theme.palette.text.primary,
	},
}));

function generate(element) {
	return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((value) =>
		React.cloneElement(element, {
			key: value,
		})
	);
}

const Features = () => {
	const [dense, setDense] = React.useState(false);
	const [secondary, setSecondary] = React.useState(false);
	const classes = useStyles();
	return (
		<Grid container>
			<Grid item xs={12} md={6} className={classes.demo}>
				<List dense={dense}>
					<ListItem>
						<ListItemText>
							<Typography variant="subtitle1">
								Total: 15
							</Typography>
						</ListItemText>
						<ListItemSecondaryAction
							edge="end"
							style={{ textAlign: "right" }}
						>
							<Button
								variant="outlined"
								color="secondary"
								startIcon={<AddBoxIcon />}
							>
								Add
							</Button>
						</ListItemSecondaryAction>
					</ListItem>
					{generate(
						<ListItem divider={true}>
							<ListItemIcon>
								<CheckCircleOutlineIcon
									className={classes.iconSmall}
								/>
							</ListItemIcon>
							<ListItemText
								primary="Single-line item"
								primaryTypographyProps={{
									variant: "subtitle2",
								}}
								secondary={secondary ? "Secondary text" : null}
							/>
							<ListItemSecondaryAction>
								<DeleteIcon className={classes.deleteIcon} />
							</ListItemSecondaryAction>
						</ListItem>
					)}
				</List>
			</Grid>
		</Grid>
	);
};

export default Features;
