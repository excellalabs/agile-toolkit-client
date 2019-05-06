import * as React from 'react'
import Cards from '../../components/Cards'
import FlexView from 'react-flexview'
import { Session } from '../../models/session'
import FlipCards from '../../components/FlipCards'
import AddVote from '../../components/AddVote'
import ClearVotes from '../../components/ClearVotes'
import gql from "graphql-tag";
import { Query } from "react-apollo";

const GET_SESSIONS = gql`
  {
    sessions {
      _id
    }
  }
`

const CREATE_SESSION = gql`
  mutation CreateSession($data: String) {
    createSession(data: $data) {
      _id
    }
  }
`

class Home extends React.Component<{}, Session> {
  constructor(props) {
    super(props)
  }

  flipCards() {
    // This doesn't do anything now
    this.setState({ flipped: true })
  }

  clearVotes() {
    this.setState({ flipped: false, votes: [] })
  }

  homePage = (sessionId) => {
    return (
      <div>
        <div>
          <h1>Agile Toolkit</h1>
          <FlexView wrap={true} hAlignContent="center">
            <Cards sessionId={sessionId} />
          </FlexView>
          <FlexView wrap={true} hAlignContent="center">
            <AddVote />
          </FlexView>
          <FlexView wrap={true} hAlignContent="center">
            <FlipCards />
          </FlexView>
          <FlexView wrap={true} hAlignContent="center">
            <ClearVotes clearVotes={this.clearVotes.bind(this)} />
          </FlexView>
        </div>
      </div>
    )
  }

  public render() {

    return (
      <Query
        query={GET_SESSIONS}
      >
      {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;
          let sessionId = data.sessions[0]._id;
          if (sessionId) {
            return this.homePage(sessionId)
          }
          // else {
          //   return (
          //     <Mutation
          //     >

          //     </Mutation>
          //   )
          // }
        }}
      </Query>

    )
  }
}

export { Home }
