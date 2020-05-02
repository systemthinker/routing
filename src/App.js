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
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div className="App">
    
    <Navbar />
    <Switch>
    
      <Route path="/discover" component={DiscoverMoviesPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/" component={HomePage} />
    
  </Switch>
  
  </div>
  );
}





