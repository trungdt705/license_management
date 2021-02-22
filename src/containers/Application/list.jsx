import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	makeStyles,
	Grid,
	Typography,
	Avatar,
	IconButton,
	Paper
} from "@material-ui/core";
import { Ballot as BallotIcon, AddBox as AddBoxIcon } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { pink } from "@material-ui/core/colors";
import moment from "moment-timezone";
import * as Types from "../../store/sagas/commonType";
import * as ActionTypes from "../../store/Application/Types";
import CommonCard from "../../components/Card/CommonCard";
import DeleteIconButton from "../../components/Button/DeleteIconButton";
import EditIconButton from "../../components/Button/EditIconButton";
import CustomsizeIcon from "../../components/Icon/LargeIcon";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	avatarColor: {
		backgroundColor: theme.palette.secondary.main,
		width: theme.spacing(4),
		height: theme.spacing(4)
	},
	add: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		minHeight: 57,
		border: "3px dashed #d1cfd4",
		backgroundColor: "#e9e6ed"
	},
	showLink: {
		"&:hover": {
			textDecoration: "underline"
		}
	}
}));

const CardIcon = (props) => {
	const classes = useStyles();
	return (
		<Avatar className={classes.avatarColor}>
			<BallotIcon fontSize="small" />
		</Avatar>
	);
};

const CardContent = (props) => {
	const { data } = props;
	const history = useHistory();
	const classes = useStyles();
	const applicationInfoPage = (id) => {
		history.push(`/applications/${id}/detail`, {
			title: "Application Detail"
		});
	};
	return (
		<div onClick={() => applicationInfoPage(data.id)}>
			<Typography variant="subtitle2" className={classes.showLink}>
				{data.name}
			</Typography>
			<Typography variant="caption">
				Published:{" "}
				{data.publish_at
					? moment(data.publish_at).format("DD-MM-YYYY")
					: "Published yet!!"}
			</Typography>
		</div>
	);
};

const CardAction = (props) => {
	const history = useHistory();
	const { data } = props;
	const dispatch = useDispatch();
	const goToEdit = (event) => {
		event.stopPropagation();
		history.push(`/applications/${data.id}/edit`, {
			title: "Edit application"
		});
	};
	return (
		<React.Fragment>
			<EditIconButton onGotoEdit={goToEdit} />
			<DeleteIconButton
				actionPayload={{
					type: "DELETE",
					payload: {
						id: data.id,
						path: "applications",
						action: ActionTypes.APPLICATION_DELETE
					}
				}}
			/>
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
				path: "applications"
			}
		});
		// return () => {
		// 	dispatch({ type: "destroy_session" });
		// };
	}, []);
	const showDialog = () => {};
	return (
		<React.Fragment>
			<Grid container spacing={1}>
				<Grid item xs={12} lg={4}>
					<Paper className={classes.add} elevation={0}>
						<IconButton
							onClick={() =>
								history.push("/applications/create", {
									title: "Create Application"
								})
							}
						>
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
								variant="outlined"
							/>
						);
					})}
			</Grid>
		</React.Fragment>
	);
}
