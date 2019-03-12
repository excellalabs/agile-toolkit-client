import * as React from 'react'

interface Props {
  //classes: Classes
  addVote: Function
}

interface Classes {
  fab: string
}

class AddVote extends React.Component<Props> {
  updateVoteValue(event) {
    this.voteValue = event.target.value
  }

  addVote() {
    this.props.addVote(this.voteValue)
  }
  voteValue

  public render() {
    return (
      <div>
        <input type="text" onChange={event => this.updateVoteValue(event)} />
        {/* <button onClick={() => this.addVote()} disabled={this.state.hasVoted}>Add Vote</button> */}
        <button onClick={() => this.addVote()}>Add Vote</button>
      </div>
    )
  }
}

export default AddVote
