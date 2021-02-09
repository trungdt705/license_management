import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	makeStyles,
	Grid,
	Typography,
	Avatar,
	IconButton,
	Paper,
} from "@material-ui/core";
import {
	Pageview as PageviewIcon,
	AddBox as AddBoxIcon,
} from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { pink } from "@material-ui/core/colors";
import * as Types from "../../store/sagas/commonType";
import CommonCard from "../../components/Card/CommonCard";
import DeleteIconButton from "../../components/Button/DeleteIconButton";
import EditIconButton from "../../components/Button/EditIconButton";
import CustomsizeIcon from "../../components/Icon/LargeIcon";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	avatarColor: {
		color: theme.palette.getContrastText(pink[500]),
		backgroundColor: pink[500],
		width: theme.spacing(4),
		height: theme.spacing(4),
	},
	add: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		minHeight: 57,
		border: "3px dashed #d1cfd4",
		backgroundColor: "#e9e6ed",
	},
}));

const CardIcon = (props) => {
	const classes = useStyles();
	return (
		<Avatar className={classes.avatarColor}>
			<PageviewIcon fontSize="small" />
		</Avatar>
	);
};

const CardContent = (props) => {
	const { data } = props;
	return (
		<React.Fragment>
			<Typography variant="subtitle2">{data.name}</Typography>
			<Typography variant="caption">Published: 01/01/2021</Typography>
		</React.Fragment>
	);
};

const CardAction = () => {
	return (
		<React.Fragment>
			<EditIconButton />
			<DeleteIconButton />
		</React.Fragment>
	);
};

export default function ApplicationList() {
	const classes = useStyles();
	const history = useHistory();
	const dispatch = useDispatch();
	const applications = useSelector((state) => state.Application.data);
	useEffect(() => {
		dispatch({
			type: Types.GET_LIST,
			payload: {
				action: "APPLICATION_GET_LIST",
				path: "applications",
			},
		});
	}, []);
	const showDialog = () => {
		console.log("ok");
	};
	return (
		<React.Fragment>
			<Grid container spacing={2}>
				<Grid item xs={12} lg={4}>
					<Paper
						className={classes.add}
						elevation={0}
						onClick={() =>
							history.push("/applications/action/create", {
								title: "Create Application",
							})
						}
					>
						<IconButton>
							<CustomsizeIcon
								component={AddBoxIcon}
								spacing={4}
							/>
						</IconButton>
					</Paper>
				</Grid>
				{applications.length > 0 &&
					applications.map((item) => {
						return (
							<CommonCard
								key={item.id}
								data={item}
								cardIcon={CardIcon}
								cardContent={CardContent}
								cardAction={CardAction}
							/>
						);
					})}
			</Grid>
		</React.Fragment>
	);
}
