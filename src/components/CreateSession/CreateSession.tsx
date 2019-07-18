import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import * as React from 'react'


const CREATE_SESSION_MUTATION = gql`
  mutation createSession($name: String){
  createSession(name: $name) {
    _id,
    name
  }
}`
const CreateSession = () => {
    let sessionNameInput;
  return (
    <Mutation mutation={CREATE_SESSION_MUTATION}>
      {(createSession, { data }) => (
        <form onSubmit={e => {
            e.preventDefault()
            createSession({
                variables: {
                    name: sessionNameInput.value
                }
            }) 
        }}>
            <input id='sessionName'
                ref={node => {
                    sessionNameInput = node
                }}
            />
            <button type='submit'>Create Session</button>
        </form>
      )}
    </Mutation>
  )
}

export default CreateSession