import {
	Button,
	FormControl,
	Grid,
	InputLabel,
	makeStyles,
	MenuItem,
	OutlinedInput,
	Select,
	Typography,
} from "@material-ui/core";
import { Delete as DeleteIcon, Send as SendIcon } from "@material-ui/icons";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
	root: {
		"& .MuiTextField-root": {
			margin: theme.spacing(1),
			width: "100%",
		},
	},
	isShow: {
		display: "none",
	},
	button: {
		marginRight: theme.spacing(1),
	},
}));

const Upsert = (props) => {
	console.log("Upsert");
	const classes = useStyles();
	const dispatch = useDispatch();
	const [data, setData] = React.useState({});
	const states = useSelector((state) => state);
	const { type, dataConfig } = props;

	const handleChange = (event) => {
		setData((prevState) => ({
			...prevState,
			[event.target.name]: event.target.value,
		}));
	};

	const call = () => {
		dispatch({
			type: dataConfig.sagaType,
			payload: {
				action: dataConfig.actionType,
				path: dataConfig.api.path,
				data: data,
			},
		});
	};

	useEffect(() => {
		if (dataConfig.apiRef && dataConfig.apiRef.length > 0) {
			dataConfig.apiRef.forEach((item) => {
				dispatch({
					type: item.saga,
					payload: {
						action: item.action,
						path: item.path,
					},
				});
			});
		}
	}, []);
	return (
		<React.Fragment>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Typography variant="h5">{dataConfig.title}</Typography>
				</Grid>
				{Object.keys(dataConfig.attributes).map((item) => {
					return (
						<Grid item xs={12} lg={4} md={6} key={item}>
							<FormControl
								variant="outlined"
								className={
									dataConfig.attributes[item].type ===
									"TextField"
										? ""
										: classes.isShow
								}
								fullWidth
								size="small"
							>
								<InputLabel htmlFor="component-outlined">
									{dataConfig.attributes[item].label}
								</InputLabel>
								<OutlinedInput
									name={item}
									id="component-outlined"
									onChange={handleChange}
									label={dataConfig.attributes[item].label}
								/>
							</FormControl>
							<FormControl
								variant="outlined"
								fullWidth
								className={
									dataConfig.attributes[item].type ===
									"Select"
										? ""
										: classes.isShow
								}
								fullWidth
								size="small"
							>
								<InputLabel id="demo-simple-select-outlined-label">
									{dataConfig.attributes[item].label}
								</InputLabel>
								<Select
									name={item}
									labelId="demo-simple-select-outlined-label"
									id="demo-simple-select-outlined"
									onChange={handleChange}
									label={dataConfig.attributes[item].label}
								>
									<MenuItem value="">
										<em>None</em>
									</MenuItem>
									{states[
										dataConfig.attributes[item].label
									] &&
										states[
											dataConfig.attributes[item].label
										].data.map((item) => {
											return (
												<MenuItem value={item.id}>
													{item.name}
												</MenuItem>
											);
										})}
								</Select>
							</FormControl>
							<FormControl
								variant="outlined"
								fullWidth
								className={
									dataConfig.attributes[item].type ===
									"DateTime"
										? ""
										: classes.isShow
								}
								fullWidth
								size="small"
							>
								<InputLabel id="demo-simple-select-outlined-label">
									{dataConfig.attributes[item].label}
								</InputLabel>
								<OutlinedInput
									name={item}
									id="datetime-local"
									label="Next appointment"
									type="datetime-local"
									defaultValue="2017-05-24T10:30"
									onChange={handleChange}
								/>
							</FormControl>
						</Grid>
					);
				})}
				<Grid item xs={12} lg={12} style={{ textAlign: "right" }}>
					<Button
						variant="outlined"
						color="primary"
						className={classes.button}
						endIcon={<SendIcon></SendIcon>}
						size="small"
						onClick={call}
					>
						Save
					</Button>
					<Button
						variant="outlined"
						color="secondary"
						className={classes.button}
						startIcon={<DeleteIcon />}
						size="small"
					>
						Delete
					</Button>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

export default Upsert;
