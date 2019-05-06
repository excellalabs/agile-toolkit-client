import * as React from 'react'
import { withStyles } from '@material-ui/core'
import VoteCard from '../VoteCard/VoteCard'
import { Session } from '../../models/session'
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { constants } from "../../constants"

interface IProps {
  sessionId: String
}

const GET_SESSION_QUERY = gql`
  query session($id: String) {
    session(id: $id) {
      _id
      name
      votes {
        value
      }
      flipped
    }
  }
`

interface IClasses {}

const GET_SESSION = gql`
  query session($id: String) {
    session(id: $id) {
      _id
      data
      votes {
        value
      }
    }
  }
`

class Cards extends React.Component<IProps> {
  constructor(props) {
    super(props)
  }

  public render() {
    return (
      <Query
        query={GET_SESSION}
        variables={{ id: this.props.sessionId }}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;
          return data.session.votes.map(({ value }, index) => (
            <VoteCard
              key={index}
              value={value}
              showValue={data.session.flipped}
            />
          ));
        }}
      </Query>
    )
  }  
};

const styled = withStyles(theme => ({
  fab: {
    bottom: theme.spacing.unit * 2,
    position: 'absolute',
    right: theme.spacing.unit * 2
  }
}))

export default styled(Cards)
