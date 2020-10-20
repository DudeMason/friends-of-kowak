import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './shared/Home';
import Contact from './shared/Contact';
import About from './shared/About';
import NoMatch from './shared/NoMatch';
import Navbar from './shared/Navbar';

const App = () => (

  <div>
    <Navbar/>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/contact' component={Contact}/>
      <Route exact path='/about' component={About}/>
      <Route component={NoMatch}/>
    </Switch>
  </div>
)

export default App;
