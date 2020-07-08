import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from '../routes/Home';
import Detail from '../routes/Detail';

function App() {
  console.log(process.env.PUBLIC_URL);
  return (
    <Router basename={'/'}>
      <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
      <Route path={`${process.env.PUBLIC_URL}/:id}`} component={Home} /> 
    </Router>
  )
}

export default App;
