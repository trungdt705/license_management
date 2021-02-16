import { Grid, List } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddButton from "../Button/AddButton";
import ListItemContent from "../ListItem/ListItemContent";
import ListItemHeader from "../ListItem/ListItemHeader";
import * as Types from "../../store/sagas/commonType";
import * as ActionTypes from "../../store/Feature/Types";
import { useHistory } from "react-router-dom";

// const useStyles = makeStyles((theme) => ({}));

const Features = (props) => {
	const [dense] = React.useState(false);
	const history = useHistory();
	const features = useSelector((state) => state.Feature.data);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch({
			type: Types.GET_LIST,
			payload: {
				action: ActionTypes.FEATURE_GET_LIST,
				path: `features?app=${props.appId}`,
			},
		});
		// return () => {
		// 	dispatch({ type: "destroy_session" });
		// };
	}, []);
	const addFeature = () => {
		history.push("/features/create", { title: "Create feature" });
	};
	return (
		<Grid container>
			<Grid item xs={12} md={12}>
				<List dense={dense}>
					<ListItemHeader
						component={() => <AddButton action={addFeature} />}
						content={"Total: 15"}
					/>
					{features.length > 0 &&
						features.map((item) => {
							return (
								<ListItemContent
									text={item.name}
									id={item.id}
									key={item.id}
									// deleteAction={ActionTypes.FEATURE_DELETE}
								/>
							);
						})}
				</List>
			</Grid>
		</Grid>
	);
};

export default Features;
