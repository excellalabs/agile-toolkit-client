import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import * as React from 'react'
import {Redirect} from 'react-router-dom';


const CREATE_SESSION_MUTATION = gql`
  mutation createSession($name: String){
  createSession(name: $name) {
    _id,
    name
  }
}`
const CreateSession = (props) => {
    let sessionNameInput;
  return (
    <Mutation mutation={CREATE_SESSION_MUTATION}>
      {(createSession, { data, loading }) => {
          if(loading) {
            return <p>Loading...</p>
          }
          if (data) {
            return <Redirect to={'/'}/>
          } 
        return (
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
        )
    }
    }
    </Mutation>
  )
}

export default CreateSession