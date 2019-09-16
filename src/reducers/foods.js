import { ADD_FOOD } from '../actions/foods';
import foodsDB  from '../resources/foods';

const initialState = {
	foods: foodsDB,
};

const foods = (state = initialState, action) => {
	switch (action.type) {
	case ADD_FOOD:
	default:
		return state
	}
}
export default foods;