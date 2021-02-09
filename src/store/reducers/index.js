import { combineReducers } from "redux";
import Application from "../Application/reducer";
import Feature from "../Feature/reducer";
import Package from "../Package/reducer";
import LicenseType from "../LicenseType/reducer";
import License from "../License/reducer";
import TitleBar from "../TitleBar/reducer";

export default combineReducers({
	Application,
	Feature,
	Package,
	LicenseType,
	License,
	TitleBar,
});
