import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import "./App.css";
import Usertouser from './Usertouser';
import Usertocomp from './Usertocomp';
import Home from './Home';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/planetspark/">
              <Home />
          </Route>
          <Route exact path="/planetspark/usertouser">
             <Usertouser />
          </Route>
          <Route exact path="/planetspark/usertocomp">
             <Usertocomp />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
