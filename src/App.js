import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import MovieDetail from './components/MovieDetail';
import PageNotFound from './components/PageNotFound';
// import Modal from '@material-ui/core/Modal';


function App() {
  
  return (
    <div className="App">
      <Router>
          <Header/>
          <div className="container">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/movie/:imdbID" component={MovieDetail} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
      </Router>
    </div>
  );
}

export default App;
