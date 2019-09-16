import './App.css';

import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import MiniDrawer from './components/Drawer';
import foods from './reducers/foods';

const store = createStore(foods)

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				{<MiniDrawer/>}
			</div>
		</Provider>
	);
}

export default App;
