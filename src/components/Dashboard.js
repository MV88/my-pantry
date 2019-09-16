import React from 'react';

import Grid from '@material-ui/core/Grid';

import EarlyExpiration from './EarlyExpiration';

const DashBoard = ({foodsEarly, foodsMedium}) => {
	return (<Grid container  spacing={2}>
		<EarlyExpiration title="Early Expiration food" foods={foodsEarly}/>
		<EarlyExpiration title="Medium Expiration food" foods={foodsMedium}/>
	</Grid>);
}

export default DashBoard;