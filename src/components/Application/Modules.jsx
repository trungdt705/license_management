import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Typography,
	Grid,
	Accordion,
	AccordionDetails,
	AccordionSummary,
	IconButton
} from '@material-ui/core';
import {
	ExpandMore as ExpandMoreIcon,
	Delete as DeleteIcon,
	Check
} from '@material-ui/icons/';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%'
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		flexBasis: '33.33%',
		flexShrink: 0
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary
	},
	equalContent: {
		display: 'flex',
		alignItems: 'center'
	}
}));

export default function ControlledAccordions() {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<div className={classes.root}>
			<Accordion
				expanded={expanded === 'panel1'}
				onChange={handleChange('panel1')}
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
					<Grid container className={classes.equalContent}>
						<Grid item xs={2}>
							<Check />
						</Grid>
						<Grid item xs={8}>
							Feature 1
						</Grid>
						<Grid item xs={2}>
							<IconButton aria-label="delete">
								{' '}
								<DeleteIcon />
							</IconButton>
						</Grid>
					</Grid>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === 'panel2'}
				onChange={handleChange('panel2')}
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
					<Typography>
						Donec placerat, lectus sed mattis semper, neque lectus
						feugiat lectus, varius pulvinar diam eros in elit.
						Pellentesque convallis laoreet laoreet.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === 'panel3'}
				onChange={handleChange('panel3')}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel3bh-content"
					id="panel3bh-header"
				>
					<Typography className={classes.heading}>
						Module 3
					</Typography>
					<Typography className={classes.secondaryHeading}>
						Filtering has been entirely disabled for whole web
						server
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Nunc vitae orci ultricies, auctor nunc in, volutpat
						nisl. Integer sit amet egestas eros, vitae egestas
						augue. Duis vel est augue.
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}
