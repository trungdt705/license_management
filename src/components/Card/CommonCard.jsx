import React from "react";
import { makeStyles, Grid, Paper, Avatar, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	centerCard: {
		display: "flex",
		alignItems: "center",
	},
	paper: {
		padding: theme.spacing(1),
	},
}));

const CommonCard = (props) => {
	const classes = useStyles();
	const history = useHistory();
	const applicationInfoPage = () => {
		history.push("/applications/123");
	};
	const {
		cardIcon: CardIcon,
		cardContent: CardContent,
		cardAction: CardAction,
	} = props;
	console.log(CardIcon);
	return (
		<Grid item xs={12} lg={4} onClick={applicationInfoPage}>
			<Paper className={classes.paper}>
				<Grid container className={classes.centerCard}>
					<Grid item lg={2} xs={2}>
						<CardIcon />
					</Grid>
					<Grid item xs={7} lg={8} justify="flex-end">
						<CardContent />
					</Grid>
					<Grid item xs={3} lg={2}>
						<CardAction />
					</Grid>
				</Grid>
			</Paper>
		</Grid>
	);
};

export default CommonCard;
