import { Grid, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	centerCard: {
		display: "flex",
		alignItems: "center",
	},
	paper: {
		padding: theme.spacing(1),
		"&:hover": {
			backgroundColor: "#c0c0c0",
			cursor: "pointer",
		},
	},
}));

const CommonCard = (props) => {
	const classes = useStyles();
	const history = useHistory();
	// const applicationInfoPage = (id) => {
	// 	history.push(`/applications/${id}/detail`, {
	// 		title: "Application Detail",
	// 	});
	// };
	const {
		cardIcon: CardIcon,
		cardContent: CardContent,
		cardAction: CardAction,
		data,
		variant,
	} = props;
	return (
		<React.Fragment>
			<Grid
				item
				xs={12}
				lg={4}
				// onClick={() => applicationInfoPage(data.id)}
			>
				<Paper
					className={classes.paper}
					variant={variant ? variant : "elevation"}
				>
					<Grid container className={classes.centerCard}>
						<Grid item lg={2} xs={2}>
							<CardIcon data={data} />
						</Grid>
						<Grid item xs={7} lg={8}>
							<CardContent data={data} />
						</Grid>
						<Grid item xs={3} lg={2}>
							<CardAction data={data} />
						</Grid>
					</Grid>
				</Paper>
			</Grid>
		</React.Fragment>
	);
};

export default CommonCard;
