import React, {Component} from 'react';
import MainPage from '../mainPage';
import CoffeePage from '../pageCoffee';
import PleasurePage from '../pleasurePage';
import ItemPage from '../itemPage';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Footer from '../appFooter';
import './style.css';

export default class App extends Component {

  render() {

    return (
      <Router>
        <div className="app">
          <Route path='/' exact component={MainPage} />
          <Route path='/pagecoffee' exact component={CoffeePage} />
          <Route path='/pleasurepage' component={PleasurePage} />
          <Route path="/itempage" component = {ItemPage}/>
          <Footer />
        </div>
      </Router>
    );
  }
}