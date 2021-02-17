import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Upsert from '../components/Upsert';
import ApplicationInfo from '../containers/Application/id';
import Application from '../containers/Application/list';
import Home from '../containers/Home/Home';
import LicenseManagement from '../containers/License/License';
import MainLayout from '../containers/MainLayout';
import Packages from '../containers/Modules';
import Setting from '../containers/Setting/Setting';
import { routeConfigData as RouteConfig } from '../utils/contants/config';

const Routes = (props) => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<BrowserRouter>
				<Switch>
					<Route path="/login" exact />
					<Route
						path="/applications/:id/detail"
						exact
						render={(props) => {
							return <MainLayout component={ApplicationInfo} />;
						}}
					/>
					<Route
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
					<Route
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
					<Route
						path="/applications"
						exact
						render={(props) => {
							return <MainLayout component={Application} />;
						}}
					/>
					<Route
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
					<Route
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
					<Route
						path="/packages"
						exact
						render={(props) => {
							return <MainLayout component={Packages} />;
						}}
					/>
					<Route
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
					<Route
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
					<Route
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
					<Route
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
