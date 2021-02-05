import React from 'react';
import { Grid, List, makeStyles } from '@material-ui/core';
import AddButton from '../Button/AddButton';
import ListItemHeader from '../ListItem/ListItemHeader';
import ListItemContent from '../ListItem/ListItemContent';

const useStyles = makeStyles((theme) => ({}));

const Features = () => {
	const [dense] = React.useState(false);
	return (
		<Grid container>
			<Grid item xs={12} md={12}>
				<List dense={dense}>
					<ListItemHeader
						component={AddButton}
						content={'Total: 15'}
					/>
					<ListItemContent />
				</List>
			</Grid>
		</Grid>
	);
};

export default Features;
