import React from "react";
import Routes from "../routes/Routes";
import { IntlProvider } from "react-intl";
import { connect } from "react-redux";
class App extends React.Component {
	render() {
		const { lang, loading } = this.props;
		return (
			<React.Fragment>
				<IntlProvider locale="en">
					<Routes />
				</IntlProvider>
			</React.Fragment>
		);
	}
}

const mapStateToProps = ({ lang, loading }) => ({
	lang,
	loading,
});

export default connect(mapStateToProps, {})(App);
