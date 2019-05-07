import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import TableComponent from './container/component/TableComponent';

const App = () => {
  return (
    <div className="container">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path={'/city'} component={TableComponent}/>
        <Route path={'/country'} component={TableComponent}/>
        <Route path={'/all-buildings'} component={TableComponent}/>
        <Route path={'/100m+'} component={TableComponent}/>
        <Route path={'/150m+'} component={TableComponent}/>
        <Route path={'/200m+'} component={TableComponent}/>
        <Route path={'/300m+'} component={TableComponent}/>
        <Route path={'/telecom-towers'} component={TableComponent}/>
        <Route path={'/all-structures'} component={TableComponent}/>
      </Switch>
    </div>
  )
}

export default App;
