import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
	Typography,
	Grid,
	Accordion,
	AccordionDetails,
	AccordionSummary,
} from "@material-ui/core";
import { ExpandMore as ExpandMoreIcon } from "@material-ui/icons/";
import Features from "./Features";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		flexBasis: "33.33%",
		flexShrink: 0,
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary,
	},
}));

export default function ApplicationModules() {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<div className={classes.root}>
			<Accordion
				expanded={expanded === "panel1"}
				onChange={handleChange("panel1")}
				elevation={0}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1bh-content"
					id="panel1bh-header"
				>
					<Typography className={classes.heading}>
						Module 1
					</Typography>
					<Typography className={classes.secondaryHeading}>
						I am an accordion
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Grid container>
						<Features />
					</Grid>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === "panel2"}
				onChange={handleChange("panel2")}
				elevation={0}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel2bh-content"
					id="panel2bh-header"
				>
					<Typography className={classes.heading}>
						Module 2
					</Typography>
					<Typography className={classes.secondaryHeading}>
						Module 2
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Grid container>
						<Features />
					</Grid>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}
