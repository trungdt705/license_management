import { Grid, Grow, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { MENU as menu } from "../../utils/contants/home";
import * as Types from "../../store/TitleBar/Types";
// import { actionRequest } from '../../store/Feature1/FeatureAction';
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(1),
		textAlign: "center",
		color: theme.palette.text.secondary,
	},
	removeLinkLine: {
		textDecoration: "none",
	},
}));

const Home = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const history = useHistory();
	const gotoPage = (title, link) => {
		history.push(link, { title });
	};
	return (
		<React.Fragment>
			<Grid container spacing={2}>
				{menu.map((item) => {
					return (
						<Grid
							item
							xs={6}
							lg={3}
							onClick={() => gotoPage(item.title, item.link)}
							key={item.link}
						>
							<Grow in={true}>
								<Paper className={classes.paper}>
									{item.icon}
									<Typography variant="h6">
										{item.name}
									</Typography>
								</Paper>
							</Grow>
						</Grid>
					);
				})}
			</Grid>
		</React.Fragment>
	);
};

export default Home;
