import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';


const App = () => (
  <>
    <Route path="/" exact component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
  </>
)

export default App;
