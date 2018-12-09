import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch
}  from 'react-router-dom';

import Footer from './components/shared/footer';
import Home from './containers/home';
import HeroPage from './containers/hero_page';
import 'bootstrap';
import 'styles/route.scss';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route exact path='/' component={Home}/>
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}
