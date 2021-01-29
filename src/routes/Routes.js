import React, { Suspense, useEffect } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import * as LazyComponent from '../utils/LazyLoaded';
import PrivateRoute from '../utils/PrivateRoute';
import store from '../store';
import MainLayout from '../containers/MainLayout';
import Application from '../containers/Application/list';
import Home from '../containers/Home/Home';
import ApplicationInfo from '../containers/Application/id';
import Setting from '../containers/Setting/Setting';
import LicenseManagement from '../containers/License/License';

const Routes = (props) => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<BrowserRouter>
				<Switch>
					<Route path="/login" exact />
					<Route
						path="/applications/:id"
						exact
						render={(props) => {
							return <MainLayout component={ApplicationInfo} />;
						}}
					/>
					<Route
						path="/applications"
						exact
						render={(props) => {
							return <MainLayout component={Application} />;
						}}
					/>
					<Route
						path="/setting"
						exact
						render={(props) => {
							return <MainLayout component={Setting} />;
						}}
					/>
					<Route
						path="/license-management"
						exact
						render={(props) => {
							console.log('123');
							return <MainLayout component={LicenseManagement} />;
						}}
					/>
					<Route
						path="/"
						exact
						render={(props) => {
							return <MainLayout component={Home} />;
						}}
					/>
					{/* <PrivateRoute
						component={LazyComponent.Home}
						path="/:lang/"
						exact
					/> */}
					{/* <Redirect from="**" to={`/${lang}/`} exact /> */}
				</Switch>
			</BrowserRouter>
		</Suspense>
	);
};

export default Routes;