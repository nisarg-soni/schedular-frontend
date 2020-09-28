import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

import InterviewForm from './components/Interviewform';
import Interview from './components/Interviews';

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				{/* <header className="App-header" /> */}
				<Interview />
				<InterviewForm />
			</div>
		</Provider>
	);
}

export default App;
