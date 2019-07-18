import * as React from 'react'
import { withStyles } from '@material-ui/core';
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

interface Props {
  clearVotes: Function
}

interface Classes {
  fab: string
}

const styled = withStyles(theme => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  }
}))

const CLEAR_VOTES_MUTATION = gql`
  mutation clearVotes($sessionId: String!) {
    clearVotes(sessionId: $sessionId) {
      _id,
      votes {
        value
      }
    }
  }
`

const ClearVotes = props => (
  <Mutation 
    mutation={CLEAR_VOTES_MUTATION}
  >
    {(clearVotes: Function) => (
      <button
        onClick={e => clearVotes({ variables: { sessionId: '5d30eb3fedef94007010441a' }})}
      >
        {/* The above sessionId is hardcoded to test for now, must be made dynamic */}
        Clear Votes
      </button>
    )}
  </Mutation>
)

export default styled(ClearVotes)
