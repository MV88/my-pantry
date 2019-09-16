import { combineReducers, createStore } from 'redux'

import foods from './reducers'

const appReducers = combineReducers({
	foods,
})

export const store = createStore(appReducers);