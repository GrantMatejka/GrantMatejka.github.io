import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AboutMe from './pages/aboutMe.js';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={AboutMe} />
        </Switch>
    </Router>
  );
}

export default App;
