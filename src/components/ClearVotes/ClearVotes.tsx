import * as React from 'react'
import { withStyles } from '@material-ui/core'

interface Props {
  clearVotes: Function
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

const ClearVotes = props => (
  <button onClick={props.clearVotes}>Clear Votes</button>
)

export default styled(ClearVotes)
