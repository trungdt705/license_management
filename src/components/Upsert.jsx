import MomentFnsUtils from '@date-io/moment'; // choose your lib
import {
	Button,
	Checkbox,
	FormControl,
	FormControlLabel,
	Grid,
	InputLabel,
	makeStyles,
	MenuItem,
	OutlinedInput,
	Select,
	Typography
} from '@material-ui/core';
import { Delete as DeleteIcon, Send as SendIcon } from '@material-ui/icons';
import {
	KeyboardDateTimePicker,
	MuiPickersUtilsProvider
} from '@material-ui/pickers';
import { pick } from 'lodash';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			width: '100%'
		}
	},
	isShow: {
		display: 'none'
	},
	button: {
		marginRight: theme.spacing(1)
	}
}));

const Upsert = (props) => {
	const { dataConfig } = props;
	const { id } = useParams();
	const classes = useStyles();
	const dispatch = useDispatch();
	const history = useHistory();

	const states = useSelector((state) => state);
	const one = useSelector((state) => state[dataConfig.label].one);
	const [selectedDate, handleDateChange] = React.useState(new Date());
	const [data, setData] = React.useState(() => {
		const initialState = {};
		Object.keys(dataConfig.attributes).forEach((item) => {
			if (dataConfig.attributes[item].type === 'MultipleChoice') {
				initialState[item] = [];
			} else {
				initialState[item] = '';
			}
		});
		return initialState;
	});
	const handleChange = (event, key) => {
		// handle for time picker
		if (!event.target) {
			handleDateChange(event);
			setData((prevState) => ({
				...prevState,
				[key]: event
			}));
		} else {
			setData((prevState) => ({
				...prevState,
				[key]: event.target.value
			}));
		}
	};
	const handleMultipleChoice = (event, key) => {
		let choices = data[key];
		if (event.target.checked) {
			setData((prevState) => {
				choices.push(event.target.value);
				return {
					...prevState,
					[key]: choices
				};
			});
		} else {
			choices = choices.filter((choice) => choice !== event.target.value);
			setData((prevState) => ({
				...prevState,
				[key]: choices
			}));
		}
	};
	const submit = () => {
		dispatch({
			type: dataConfig.sagaType,
			payload: {
				id: id,
				action: dataConfig.actionType,
				path: `${dataConfig.api.path}`,
				data: data
			}
		});
		setTimeout(() => {
			goBack();
		}, 2000);
	};
	// if (states[dataConfig.label].getOne === "success") {
	// 	setData(states[dataConfig.label].one);
	// }
	const goBack = () => {
		history.goBack();
	};
	useEffect(() => {
		if (id) {
			dispatch({
				type: 'GET_ONE',
				payload: {
					id: id,
					action: dataConfig.extraActionType,
					path: dataConfig.api.path
				}
			});
		}
		if (one.id && history.location.pathname.indexOf('/create') < 0) {
			// setData(pick(one, Object.keys(dataConfig.attributes)));
			setData(() => {
				for (const key in dataConfig.attributes) {
					const data = [];
					if (dataConfig.attributes[key].type === 'MultipleChoice') {
						one[key].forEach((item) => {
							data.push(item.id);
						});
						one[key] = data;
					}
				}
				return pick(one, Object.keys(dataConfig.attributes));
			});
		}
		if (dataConfig.apiRef && dataConfig.apiRef.length > 0) {
			dataConfig.apiRef.forEach((item) => {
				dispatch({
					type: item.saga,
					payload: {
						action: item.action,
						path: item.path
					}
				});
			});
		}
		// return () => {
		// 	dispatch({ type: "destroy_session" });
		// };
	}, [one.id, one.updated_at]);
	return (
		<React.Fragment>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Typography variant="h5">{dataConfig.title}</Typography>
				</Grid>
				{Object.keys(dataConfig.attributes).map((attribute) => {
					return (
						<Grid item xs={12} lg={4} md={6} key={attribute}>
							{dataConfig.attributes[attribute].type ===
							'TextField' ? (
								<FormControl
									variant="outlined"
									fullWidth
									size="small"
								>
									<InputLabel htmlFor="component-outlined">
										{dataConfig.attributes[attribute].label}
									</InputLabel>
									<OutlinedInput
										id="component-outlined"
										onChange={(e) =>
											handleChange(e, attribute)
										}
										label={
											dataConfig.attributes[attribute]
												.label
										}
										value={
											data[attribute]
												? data[attribute]
												: ''
										}
									/>
								</FormControl>
							) : (
								''
							)}
							{dataConfig.attributes[attribute].type ===
							'Select' ? (
								<FormControl
									variant="outlined"
									fullWidth
									size="small"
								>
									<InputLabel id={attribute}>
										{dataConfig.attributes[attribute].label}
									</InputLabel>
									<Select
										labelId={attribute}
										id="demo-simple-select-outlined"
										onChange={(e) =>
											handleChange(e, attribute)
										}
										label={
											dataConfig.attributes[attribute]
												.label
										}
										defaultValue={''}
										value={
											data[attribute]
												? data[attribute]
												: ''
										}
									>
										<MenuItem value="">
											<em>None</em>
										</MenuItem>
										{states[
											dataConfig.attributes[attribute]
												.label
										] &&
											states[
												dataConfig.attributes[attribute]
													.label
											].data.map((item) => {
												return (
													<MenuItem
														value={item.id}
														key={item.id}
													>
														{item.name}
													</MenuItem>
												);
											})}
									</Select>
								</FormControl>
							) : (
								''
							)}
							{dataConfig.attributes[attribute].type ===
							'DateTime' ? (
								<FormControl fullWidth size="small">
									<MuiPickersUtilsProvider
										utils={MomentFnsUtils}
									>
										<KeyboardDateTimePicker
											inputVariant="outlined"
											ampm={false}
											label={
												dataConfig.attributes[attribute]
													.label
											}
											value={
												data[attribute]
													? data[attribute]
													: selectedDate
											}
											onChange={(e) =>
												handleChange(e, attribute)
											}
											disablePast
											format="yyyy/MM/dd HH:mm"
										/>
									</MuiPickersUtilsProvider>
								</FormControl>
							) : (
								''
							)}
							{dataConfig.attributes[attribute].type ===
							'MultipleChoice' ? (
								<React.Fragment>
									<Typography>
										{dataConfig.attributes[attribute].label}
									</Typography>
									{states[
										dataConfig.attributes[attribute].label
									] &&
										states[
											dataConfig.attributes[attribute]
												.label
										].data.map((item) => {
											return (
												<FormControlLabel
													key={item.id}
													control={
														<Checkbox
															checked={data[
																attribute
															].includes(item.id)}
															id={item.id}
															onChange={(e) =>
																handleMultipleChoice(
																	e,
																	attribute,
																	item.id
																)
															}
															name={item.name}
															value={item.id}
														/>
													}
													label={item.name}
												/>
											);
										})}
								</React.Fragment>
							) : (
								''
							)}
						</Grid>
					);
				})}
				<Grid item xs={12} lg={12} style={{ textAlign: 'right' }}>
					<Button
						variant="outlined"
						color="primary"
						className={classes.button}
						endIcon={<SendIcon></SendIcon>}
						size="small"
						onClick={submit}
					>
						Save
					</Button>
					<Button
						variant="outlined"
						color="secondary"
						className={classes.button}
						startIcon={<DeleteIcon />}
						size="small"
						onClick={goBack}
					>
						Cancel
					</Button>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

export default Upsert;
