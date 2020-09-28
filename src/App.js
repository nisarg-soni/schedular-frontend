import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './components/Home';
import EditInterview from './components/Editinterview';

function App() {
	return (
		<Provider store={store}>
			<Router>
				<div className="App">
					<Route exact path="/" component={Home} />
					<Route path="/:id" component={EditInterview} />
				</div>
			</Router>
		</Provider>
	);
}

export default App;
