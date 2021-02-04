import React from "react";
import { withStyles, Badge } from "@material-ui/core";

const StyledBadge = withStyles((theme) => ({
	badge: {
		right: -1,
		top: 5,
		border: `2px solid ${theme.palette.background.paper}`,
	},
}))(Badge);

export default StyledBadge;
