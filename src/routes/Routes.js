import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Upsert from "../components/Upsert";
import ApplicationInfo from "../containers/Application/id";
import Application from "../containers/Application/list";
import Home from "../containers/Home/Home";
import LicenseManagement from "../containers/License/License";
import MainLayout from "../containers/MainLayout";
import Packages from "../containers/Modules";
import Setting from "../containers/Setting/Setting";

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
						path="/applications/action/create"
						exact
						render={(props) => {
							return (
								<MainLayout
									component={Upsert}
									dataConfig={{
										title: "Create Application",
										attributes: {
											name: {
												label: "Name",
												type: "TextField",
											},
											description: {
												label: "Description",
												type: "TextField",
											},
											publishAt: {
												label: "Publish At",
												type: "DateTime",
											},
										},
										sagaType: "CREATE",
										actionType: "APPLICATION_CREATE",
										api: {
											path: "/applications",
											method: "POST",
										},
										actions: {
											create: true,
											edit: false,
											cancel: true,
										},
									}}
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
						path="/features/action/create"
						exact
						render={(props) => {
							return (
								<MainLayout
									component={Upsert}
									dataConfig={{
										title: "Create Features",
										apiRef: [
											{
												saga: "GET_LIST",
												action: "APPLICATION_GET_LIST",
												path: "applications",
												label: "Application",
											},
										],
										attributes: {
											name: {
												label: "Name",
												type: "TextField",
											},
											description: {
												label: "Description",
												type: "TextField",
											},
											app: {
												label: "Application",
												type: "Select",
												apiRef: true,
											},
										},
										sagaType: "CREATE",
										actionType: "FEATURE_CREATE",
										api: {
											path: "features",
											method: "POST",
										},
										actions: {
											create: true,
											edit: false,
											cancel: true,
										},
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
