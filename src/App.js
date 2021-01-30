import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Education from './components/pages/Education';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Marketing from './components/pages/Marketing';
import Projects from "./components/pages/Projects";
import MechanicalDesign from "./components/pages/MechanicalDesign";
import WebPages from "./components/pages/WebPages";
import Development from "./components/pages/Development";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/MechanicalDesign' component={MechanicalDesign} />
        <Route path='/Education' component={Education} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/marketing' component={Marketing} />
        <Route path='/Projects' component={Projects} />
        <Route path='/WebPages' component={WebPages} />
        <Route path='/Development' component={Development} />
      </Switch>
    </Router>
  );
}

export default App;
