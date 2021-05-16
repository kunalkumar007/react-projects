import React from 'react';
import './style.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeScreen from "./Screens/Homescreen";
import PieScreen from "./Screens/pieScreen";
export default function App() {
  return (
    <Router>
      <Route exact path="/" component={HomeScreen} />
      <Route  path="/data" component={PieScreen} />
    </Router>
  );
}
