import React from 'react';
import { Switch, Route } from 'react-router-dom'

import HomePage from './components/HomePage'
import TablePage from './components/TablePage';

const App = () => {
  return (
    <div className="container">
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path={'/city'} component={TablePage}/>
        <Route path={'/country'} component={TablePage}/>
        <Route path={'/all-buildings'} component={TablePage}/>
        <Route path={'/100m+'} component={TablePage}/>
        <Route path={'/150m+'} component={TablePage}/>
        <Route path={'/200m+'} component={TablePage}/>
        <Route path={'/300m+'} component={TablePage}/>
        <Route path={'/telecom-towers'} component={TablePage}/>
        <Route path={'/all-structures'} component={TablePage}/>
      </Switch>
    </div>
  )
}

export default App;
