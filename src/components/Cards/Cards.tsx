import * as React from 'react'
import { withStyles } from '@material-ui/core'
import VoteCard from '../VoteCard/VoteCard'
import { Session } from '../../models/session'
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { constants } from "../../constants"

interface IProps {
  classes: IClasses
  session: Session
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

class Cards extends React.Component<IProps> {
  constructor(props) {
    super(props)
  }

  public render() {
    return (
      <Query 
        query={GET_SESSION_QUERY}
        variables= {{ id: constants.local_session_id }}
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
