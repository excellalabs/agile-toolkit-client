import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Home, PlanningPoker } from './pages'
import { routes } from './routes'
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { CreateSessionPage } from './pages/CreateSessionPage';

const client = new ApolloClient({
    uri: "http://localhost:4000"
});

class App extends React.Component {
  public render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div>
            <Route path={routes.home} exact={true} component={Home} />
            <Route path={routes.planningPoker} component={PlanningPoker} />
            <Route path={routes.createSession} component={CreateSessionPage} />
          </div>
        </Router>
      </ApolloProvider>
    )
  }
}

export default App
