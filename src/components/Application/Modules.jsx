import { Avatar, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Ballot as BallotIcon } from "@material-ui/icons";
import React, { useEffect } from "react";
import DeleteIconButton from "../Button/DeleteIconButton";
import EditIconButton from "../Button/EditIconButton";
import CommonCard from "../Card/CommonCard";
import CustomsizeIcon from "../Icon/LargeIcon";
import { useDispatch, useSelector } from "react-redux";
import * as ActionTypes from "../../store/Package/Types";
import * as Types from "../../store/sagas/commonType";
import moment from "moment-timezone";
import AddButton from "../Button/AddButton";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1)
		}
	},
	avatarColor: {
		backgroundColor: theme.palette.secondary.main,
		width: theme.spacing(4),
		height: theme.spacing(4)
	}
}));

const CardIcon = (props) => {
	const classes = useStyles();
	return (
		<Avatar className={classes.avatarColor}>
			<BallotIcon />
		</Avatar>
	);
};

const CardContent = (props) => {
	const { data } = props;
	return (
		<React.Fragment>
			<Typography variant="subtitle2">{data.name}</Typography>
			<Typography variant="caption">
				Published: {moment(data.created_at).format("DD-MM-YYYY")}
			</Typography>
			{/* <Typography>
				<StyledBadge
					badgeContent={4}
					color="secondary"
					style={{ marginRight: 20 }}
				>
					<AppsIcon />
				</StyledBadge>
				<StyledBadge badgeContent={4} color="primary">
					<AppsIcon />
				</StyledBadge>
			</Typography> */}
		</React.Fragment>
	);
};

const CardAction = (props) => {
	const history = useHistory();
	const { data } = props;
	return (
		<React.Fragment>
			<EditIconButton
				edge="end"
				onGotoEdit={() =>
					history.push(`/packages/${data.id}/edit`, {
						title: "Edit Package"
					})
				}
			/>
			<DeleteIconButton
				actionPayload={{
					type: "DELETE",
					payload: {
						id: data.id,
						path: "packages",
						action: ActionTypes.PACKAGE_DELETE
					}
				}}
			/>
		</React.Fragment>
	);
};

export default function LicenseTypes(props) {
	const dispatch = useDispatch();
	const history = useHistory();
	const packages = useSelector((state) => state.Package.data);
	useEffect(() => {
		dispatch({
			type: Types.GET_LIST,
			payload: {
				action: ActionTypes.PACKAGE_GET_LIST,
				path: `packages?app=${props.appId}`
			}
		});
	}, []);

	return (
		<React.Fragment>
			<Typography
				component="h1"
				variant="h4"
				style={{ textAlign: "right" }}
			>
				<AddButton
					action={() => history.push("/packages/create")}
				></AddButton>
			</Typography>
			<Grid container spacing={1} style={{ marginTop: 4 }}>
				{packages.length > 0 &&
					packages.map((item) => {
						return (
							<CommonCard
								key={item.id}
								cardIcon={CardIcon}
								cardContent={CardContent}
								cardAction={CardAction}
								variant="outlined"
								data={item}
							/>
						);
					})}
			</Grid>
		</React.Fragment>
	);
}
