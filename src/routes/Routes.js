import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Upsert from '../components/Upsert';
import ApplicationInfo from '../containers/Application/id';
import Application from '../containers/Application/list';
import Home from '../containers/Home/Home';
import LicenseManagement from '../containers/License/LicenseManager';
import MainLayout from '../containers/MainLayout';
import Packages from '../containers/Modules';
import Setting from '../containers/Setting/Setting';
import Login from '../containers/Login/Login';
import { routeConfigData as RouteConfig } from '../utils/contants/config';
import PrivateRoute from '../utils/PrivateRoute';

const Routes = (props) => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<BrowserRouter>
				<Switch>
					<Route path="/login" exact component={Login} />
					<PrivateRoute
						path="/applications/:id/detail"
						exact
						render={(props) => {
							return <MainLayout component={ApplicationInfo} />;
						}}
					/>
					<PrivateRoute
						path="/applications/:id/edit"
						exact
						render={(props) => {
							return (
								<MainLayout
									component={Upsert}
									dataConfig={RouteConfig.application.update}
								/>
							);
						}}
					/>
					<PrivateRoute
						path="/applications/create"
						exact
						render={(props) => {
							return (
								<MainLayout
									component={Upsert}
									dataConfig={RouteConfig.application.create}
								/>
							);
						}}
					/>
					<PrivateRoute
						path="/applications"
						exact
						render={(props) => {
							return <MainLayout component={Application} />;
						}}
					/>
					<PrivateRoute
						path="/features/create"
						exact
						render={(props) => {
							return (
								<MainLayout
									component={Upsert}
									dataConfig={RouteConfig.feature.create}
								/>
							);
						}}
					/>
					<PrivateRoute
						path="/features/:id/edit"
						exact
						render={(props) => {
							return (
								<MainLayout
									component={Upsert}
									dataConfig={RouteConfig.feature.update}
								/>
							);
						}}
					/>
					<PrivateRoute
						path="/packages"
						exact
						render={(props) => {
							return <MainLayout component={Packages} />;
						}}
					/>
					<PrivateRoute
						path="/packages/create"
						exact
						render={(props) => {
							return (
								<MainLayout
									component={Upsert}
									dataConfig={RouteConfig.packages.create}
								/>
							);
						}}
					/>
					<PrivateRoute
						path="/packages/:id/edit"
						exact
						render={(props) => {
							return (
								<MainLayout
									component={Upsert}
									dataConfig={RouteConfig.packages.update}
								/>
							);
						}}
					/>
					<PrivateRoute
						path="/license-types/create"
						exact
						render={(props) => {
							return (
								<MainLayout
									component={Upsert}
									dataConfig={RouteConfig.licenseTypes.create}
								/>
							);
						}}
					/>
					<PrivateRoute
						path="/license-types/:id/edit"
						exact
						render={(props) => {
							return (
								<MainLayout
									component={Upsert}
									dataConfig={RouteConfig.licenseTypes.update}
								/>
							);
						}}
					/>
					<PrivateRoute
						path="/license/create"
						exact
						render={(props) => {
							return (
								<MainLayout
									component={Upsert}
									dataConfig={RouteConfig.license.create}
								/>
							);
						}}
					/>
					<PrivateRoute
						path="/setting"
						exact
						render={(props) => {
							return <MainLayout component={Setting} />;
						}}
					/>
					<PrivateRoute
						path="/license-management"
						exact
						render={(props) => {
							return <MainLayout component={LicenseManagement} />;
						}}
					/>
					<PrivateRoute
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
