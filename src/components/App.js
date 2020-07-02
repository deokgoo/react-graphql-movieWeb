import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Home from '../routes/Home';
import Detail from '../routes/Detail';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home}>home</Route>
      <Route path="/:id" component={Detail}>detail</Route>
    </Router>
  )
}

export default App;
