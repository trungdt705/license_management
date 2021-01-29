import React, { useState, useEffect } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
// import rtl from 'jss-rtl';
import { create } from 'jss';
import { StylesProvider, jssPreset } from '@material-ui/styles';
import { useSelector } from 'react-redux';
import App from './containers/App';

function ThemeApp() {
	// const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
	const lang = useSelector((state) => state.lang);
	// const [direction, setDirection] = useState(lang === 'en' ? 'ltr' : 'rtl');

	useEffect(() => {
		// setDirection(lang === 'en' ? 'ltr' : 'rtl');
	}, []);

	const theme = createMuiTheme({
		// direction: direction,
		typography: {
			fontFamily: [
				'-apple-system',
				'BlinkMacSystemFont',
				'"Segoe UI"',
				'Roboto',
				'"Helvetica Neue"',
				'Arial',
				'sans-serif',
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"'
			].join(',')
		},
		palette: {
			text: {
				secondary: '#3b1716'
			},
			primary: {
				main: '#1976d2'
			},
			secondary: {
				main: '#ac4556'
			}
		}
	});
	return (
		<StylesProvider>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</StylesProvider>
	);
}

export default ThemeApp;
