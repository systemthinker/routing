import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  
} from "react-router-dom";

import DiscoverMoviesPage from './pages/DiscoverMoviesPage'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import MoviePage from './pages/MoviePage'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div className="App">
    
    <Navbar />
    <Switch>
    
      <Route exact path="/discover" component={DiscoverMoviesPage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/discover/:imdb_id" component={MoviePage} />
    
  </Switch>
  
  </div>
  );
}





