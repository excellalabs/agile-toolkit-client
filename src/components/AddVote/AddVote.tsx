import * as React from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { constants } from '../../constants'

const ADD_VOTE = gql`
  mutation AddVote($sessionId: String, $value: String) {
    createVote(sessionId: $sessionId, value: $value) {
      _id
      votes {
        value
      }
    }
  }
`

const AddVote = () => {
  let input

  return (
    <Mutation mutation={ADD_VOTE}>
      {(addVote, { data }) => (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault()
              addVote({
                variables: {
                  sessionId: constants.local_session_id,
                  value: input.value
                }
              })
              input.value = ''
            }}
          >
            <input
              ref={node => {
                input = node
              }}
            />
            <button type="submit">Add Vote</button>
          </form>
        </div>
      )}
    </Mutation>
  )
}

export default AddVote
