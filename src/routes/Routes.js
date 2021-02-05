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
import Packages from '../containers/Modules';
import Upsert from '../components/Upsert';

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
						path="/applications/action/create"
						exact
						render={(props) => {
							return (
								<MainLayout
									component={Upsert}
									dataConfig={{
										title: 'Create Application',
										attributes: {
											name: {
												label: 'Name',
												type: 'TextField'
											},
											description: {
												label: 'Description',
												type: 'TextField'
											},
											publishAt: {
												label: 'Publish At',
												type: 'DateTime'
											}
										},
										api: {
											path: '/application',
											method: 'POST'
										},
										actions: {
											create: true,
											edit: false,
											cancel: true
										}
									}}
								/>
							);
						}}
					/>
					<Route
						path="/packages"
						exact
						render={(props) => {
							return <MainLayout component={Packages} />;
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
