import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Home, PlanningPoker } from './pages';
import { routes } from './routes';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div>
          <Route path={routes.home} exact={true} component={Home}/>
          <Route path={routes.planningPoker} component={PlanningPoker} />
        </div>
      </Router>
    );
  }
}

export default App;
