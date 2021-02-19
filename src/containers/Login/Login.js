import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { makeStyles } from '@material-ui/core/styles';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Notifier from '../../components/Notifier';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	margin: {
		marginBottom: theme.spacing(1)
	},
	withoutLabel: {
		marginTop: theme.spacing(3)
	}
}));

export default function LoginForm(props) {
	const [values, setValues] = useState({
		email: '',
		token: '',
		showPassword: false
	});
	const [cookies, setCookie, removeCookie] = useCookies(['token']);
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
			type: 'LOGIN',
			payload: {
				api_key: values.password
			}
		});
	};
	useEffect(() => {
		if (current.api_key) {
			setCookie('token', current.api_key, { maxAge: 86400 });
			history.push('/');
		}
		// setCookie('token', current.api_key);
		// history.push('/');
	}, [current.api_key]);

	return (
		<Container maxWidth="sm">
			<Notifier />
			<Grid
				container
				spacing={0}
				direction="column"
				alignItems="center"
				justify="center"
				style={{ minHeight: '100vh' }}
			>
				<form className={classes.root} noValidate autoComplete="off">
					{/* <FormControl
						fullWidth
						className={clsx(classes.margin, classes.textField)}
						variant="outlined"
						size="small"
					>
						<InputLabel htmlFor="namespace">Namespace</InputLabel>
						<OutlinedInput
							id="namespace"
							type="text"
							value={values.email}
							onChange={handleChange('email')}
							labelWidth={70}
						/>
					</FormControl> */}
					<FormControl
						className={clsx(classes.margin)}
						variant="outlined"
						size="small"
					>
						<InputLabel htmlFor="token">Token</InputLabel>
						<OutlinedInput
							id="token"
							type={values.showPassword ? 'text' : 'password'}
							value={values.password}
							onChange={handleChange('password')}
							endAdornment={
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle password visibility"
										onClick={handleClickShowPassword}
										onMouseDown={handleMouseDownPassword}
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
				</form>
				<div style={{ textAlign: 'center' }}>
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
		</Container>
	);
}
