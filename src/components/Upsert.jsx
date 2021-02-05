import {
	Grid,
	Typography,
	makeStyles,
	FormControl,
	OutlinedInput,
	InputLabel,
	Select,
	MenuItem,
	Button
} from '@material-ui/core';
import {
	Delete as DeleteIcon,
	CloudUpload as CloudUploadIcon,
	Send as SendIcon,
	Edit as EditIcon
} from '@material-ui/icons';
import React, { Component } from 'react';
import { useDispatch } from 'react-redux';
import * as Types from '../store/Application/Types';

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
	const classes = useStyles();
	const dispatch = useDispatch();
	const [data, setData] = React.useState({});
	const { type, dataConfig } = props;

	const handleChange = (event) => {
		setData((prevState) => ({
			...prevState,
			[event.target.name]: event.target.value
		}));
	};
	const call = () => {
		console.log(data);
		dispatch({ type: Types.CREATE, payload: data });
	};
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
									'TextField'
										? ''
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
									'Select'
										? ''
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
									<MenuItem value={10}>Ten</MenuItem>
									<MenuItem value={20}>Twenty</MenuItem>
									<MenuItem value={30}>Thirty</MenuItem>
								</Select>
							</FormControl>
							<FormControl
								variant="outlined"
								fullWidth
								className={
									dataConfig.attributes[item].type ===
									'DateTime'
										? ''
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
									inputProps={{
										shrink: true
									}}
								/>
							</FormControl>
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
