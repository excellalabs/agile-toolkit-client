import * as React from 'react'
import { withStyles } from '@material-ui/core'
import VoteCard from '../VoteCard/VoteCard'
import { Session } from '../../models/session'

interface IProps {
  classes: IClasses
  session: Session
}

interface IClasses {}

const styled = withStyles(theme => ({
  fab: {
    bottom: theme.spacing.unit * 2,
    position: 'absolute',
    right: theme.spacing.unit * 2
  }
}))

class Cards extends React.Component<IProps> {
  constructor(props) {
    super(props)
  }

  public render() {
    return this.props.session.votes.map(v => (
      <VoteCard
        key={v.voter}
        value={v.value}
        showValue={this.props.session.flipped}
      />
    ))
  }
}

export default styled(Cards)
