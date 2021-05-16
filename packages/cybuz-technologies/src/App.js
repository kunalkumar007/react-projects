import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DashBoardScreen from './screens/DashBoardScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

const App = () => {
	return (
		<Router>
			<Route path="/" exact component={HomeScreen} />
			<Route path="/login" component={LoginScreen} />
			<Route path="/dashboard" component={DashBoardScreen} />
		</Router>
	);
};

export default App;
