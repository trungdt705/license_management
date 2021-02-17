import { combineReducers } from "redux";
import Application from "../Application/reducer";
import Feature from "../Feature/reducer";
import Package from "../Package/reducer";
import LicenseType from "../LicenseType/reducer";
import License from "../License/reducer";
import TitleBar from "../TitleBar/reducer";
import Dialog from "../Dialog/reducer";
import Notify from "../Notify/reducer";
import Partner from "../Partner/reducer";
// Combine all reducers.
const appReducer = combineReducers({
	Application,
	Feature,
	Package,
	LicenseType,
	License,
	TitleBar,
	Dialog,
	Notify,
	Partner,
});

const rootReducer = (state, action) => {
	// Clear all data in redux store to initial.
	if (action.type === "REMOVE_ONE") {
		state[action.payload.label].one = {};
	}

	return appReducer(state, action);
};
export default rootReducer;
