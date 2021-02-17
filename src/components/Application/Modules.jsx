import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Grid,
	Typography,
	List,
	Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
	AddBox as AddBoxIcon,
	ExpandMore as ExpandMoreIcon
} from '@material-ui/icons/';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as ActionTypes from '../../store/Package/Types';
// import Features from "./Features";
import * as Types from '../../store/sagas/commonType';
import AddButton from '../Button/AddButton';
import ListItemContent from '../ListItem/ListItemContent';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%'
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		flexBasis: '66.67%',
		flexShrink: 0
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary
	}
}));

export default function ApplicationModules(props) {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);
	const history = useHistory();
	const [dense] = React.useState(false);
	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	const packages = useSelector((state) => state.Package.data);
	const dispatch = useDispatch();
	useEffect(() => {
		console.log('useEffect');
		dispatch({
			type: Types.GET_LIST,
			payload: {
				action: ActionTypes.PACKAGE_GET_LIST,
				path: `packages?app=${props.appId}`
			}
		});
	}, []);

	return (
		<div className={classes.root}>
			<Typography
				component="h1"
				variant="h4"
				style={{ textAlign: 'right', marginBottom: 10 }}
			>
				<AddButton
					action={() => history.push('/packages/create')}
				></AddButton>
			</Typography>
			{packages.length > 0 &&
				packages.map((item) => {
					return (
						<React.Fragment>
							<Accordion
								expanded={expanded === item.id}
								onChange={handleChange(item.id)}
								elevation={0}
								key={item.id}
							>
								<AccordionSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls={`${item.id}-content`}
									id={`${item.id}-header`}
								>
									<Typography className={classes.heading}>
										{item.name}
									</Typography>
									{/* <Typography className={classes.secondaryHeading}>
								Priority: {item.priority}
							</Typography> */}
								</AccordionSummary>
								<AccordionDetails>
									<Grid container>
										{item.features.map((feature) => {
											return (
												<Grid item xs={12} md={12}>
													<List dense={dense}>
														<ListItemContent
															text={feature.name}
															id={feature.id}
														/>
													</List>
												</Grid>
											);
										})}
									</Grid>
								</AccordionDetails>
							</Accordion>
						</React.Fragment>
					);
				})}
		</div>
	);
}
