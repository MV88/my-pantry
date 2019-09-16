import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { addFood } from '../actions/foods';
import DashBoard from '../components/Dashboard';
import { calculateExpiration } from '../utils/utils';

// selectors
export const foodsSelector = state => state.foods || [];

export const foodSelectors = createSelector(
	[foodsSelector],
	(foods) => ({
		foodsEarly: foods.filter(f => calculateExpiration(f) < 4),
		foodsMedium: foods.filter(f => calculateExpiration(f) < 4), // calculateExpiration(f) >= 4 && calculateExpiration(f) < 10),
		foodsLong: foods.filter(f => calculateExpiration(f) > 10),
	})
);

const mapStateToProps = (state) => ({
	...foodSelectors(state),
});

  
const mapDispatchToProps = (dispatch, ownProps) => ({
	onClick: () => { dispatch(addFood(ownProps.filter)) },
})


const DashboardContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(DashBoard);
  
export default DashboardContainer;