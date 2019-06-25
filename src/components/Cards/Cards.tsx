import * as React from 'react'
import { withStyles } from '@material-ui/core'
import VoteCard from '../VoteCard/VoteCard'
import { Session } from '../../models/session'
import { Query } from "react-apollo";
import gql from "graphql-tag";

interface IProps {
  classes: IClasses
  session: Session
}

const GET_SESSION_QUERY = gql`
{
  session(id: "5d129f7829310c00b55a0dfe") {
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
      <Query query={GET_SESSION_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;

            console.log("Flipped? " + data.session.flipped);
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
