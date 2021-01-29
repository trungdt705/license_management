import React from 'react';
class Login extends React.Component {
	// this method is only to trigger route guards , remove and use your own logic
	handleLogin = () => {
		localStorage.setItem('token', 'token');
	};

	render() {
		return (
			<div className="container my-5">
				<h1>Login Page</h1>
			</div>
		);
	}
}

export default Login;
