import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from '../routes/Home';
import Detail from '../routes/Detail';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Route exact path="/" component={Home} />
      <Route path="/:id" component={Detail} /> 
    </Router>
  )
}

export default App;
