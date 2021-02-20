import {
	Button,
	Paper,
	Container,
	FormControl,
	Grid,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import Notifier from "../../components/Notifier";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		backgroundColor: theme.palette.primary.main,
	},
	margin: {
		marginBottom: theme.spacing(1),
		marginTop: theme.spacing(1),
	},
	withoutLabel: {
		marginTop: theme.spacing(3),
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
	},
}));

export default function LoginForm(props) {
	const [values, setValues] = useState({
		email: "",
		token: "",
		showPassword: false,
	});
	const [cookies, setCookie, removeCookie] = useCookies(["token"]);
	const current = useSelector((state) => state.Partner.current);
	const history = useHistory();
	const dispatch = useDispatch();
	const classes = useStyles();

	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	const handleClickShowPassword = () => {
		setValues({ ...values, showPassword: !values.showPassword });
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const login = async () => {
		dispatch({
			type: "LOGIN",
			payload: {
				api_key: values.password,
			},
		});
	};
	useEffect(() => {
		if (current.api_key) {
			setCookie("token", current.api_key, { maxAge: 86400 });
			history.push("/");
		}
		// setCookie('token', current.api_key);
		// history.push('/');
	}, [current.api_key]);

	return (
		<Container className={classes.root}>
			<Notifier />
			<Grid
				container
				spacing={2}
				direction="column"
				alignItems="center"
				justify="center"
				style={{ minHeight: "100vh" }}
			>
				<Paper className={classes.paper} variant="outlined">
					<Grid item xs={12}>
						<Typography variant="h5">Login</Typography>
						<FormControl
							fullWidth
							className={clsx(classes.margin)}
							variant="outlined"
							size="small"
						>
							<InputLabel htmlFor="token">Token</InputLabel>
							<OutlinedInput
								id="token"
								type={values.showPassword ? "text" : "password"}
								value={values.password}
								onChange={handleChange("password")}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											onMouseDown={
												handleMouseDownPassword
											}
											edge="end"
										>
											{values.showPassword ? (
												<Visibility />
											) : (
												<VisibilityOff />
											)}
										</IconButton>
									</InputAdornment>
								}
								labelWidth={70}
							/>
						</FormControl>
						<div>
							<Button
								variant="outlined"
								size="medium"
								color="primary"
								onClick={login}
								className={classes.margin}
							>
								Verify
							</Button>
						</div>
					</Grid>
				</Paper>
			</Grid>
		</Container>
	);
}
