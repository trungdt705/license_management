import React from "react";
import { IntlProvider } from "react-intl";
import { connect } from "react-redux";
import Routes from "../routes/Routes";
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
