import React from "react";
import Friend from "./components/exercise1/Friend";
import DogGallery from "./components/exercise2/DogGallery";
import RandomJoke from "./components/exercise3/RandomJoke";
import NavBar from "./components/layout/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
const App = () => {
  return (
    <Router>
      <NavBar />
      <div className='container '>
        <Switch>
          <Route exact path='/' component={Friend} />
          <Route exact path='/exercise2' component={DogGallery} />
          <Route exact path='/exercise3' component={RandomJoke} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
