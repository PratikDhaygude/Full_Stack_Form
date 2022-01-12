import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Menu from './components/Menu';
import Project from './components/Project';
import Administrator from './components/Administrator';

import './App.css';

const App = () => {
  return (
    <Router>
      <Menu />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/project" >
            <Project/>
          </Route>
          <Route exact path="/administrator" component={Administrator} />
        </Switch>
      </main>
    </Router>
  )
}

export default App
