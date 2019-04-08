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

interface IClasses {}

class Cards extends React.Component<IProps> {
  constructor(props) {
    super(props)
  }

  public render() {
    return (
      <Query
        query={gql`
          {
            sessions {
              _id
              data
              votes {
                value
              }
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;

          return data.sessions[0].votes.map(({ value }, index) => (
            <VoteCard
              key={index}
              value={value}
              showValue={true}
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
