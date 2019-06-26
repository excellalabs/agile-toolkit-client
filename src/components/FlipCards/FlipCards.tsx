import * as React from 'react'
import gql from 'graphql-tag'
import { withStyles } from '@material-ui/core'
import { Mutation } from 'react-apollo'
import { constants } from 'http2';
import { constants as appConstants } from '../../constants'

interface Props {
  flipCards: Function
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

const FLIP_CARDS_MUTATION = gql`
mutation flipCards($id: String) {
  flip(id: $id) {
    _id
    name
    votes {
      value
    }
    flipped
  }
}
`

const FlipCards = () => {
  let input

  return (
    <Mutation 
      mutation={FLIP_CARDS_MUTATION}
    >
      {(flipCards, { data }) => (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault()
              flipCards({
                variables: {
                  id: appConstants.local_session_id
                }
              })
            }}
          >
          <button type="submit">Flip</button>
          </form>
        </div>
      )}
    </Mutation>
  )
}

export default styled(FlipCards)
