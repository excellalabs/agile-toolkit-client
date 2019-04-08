import * as React from 'react'

interface Props {
  addVote: Function
}

class AddVote extends React.Component<Props> {
  voteValue: string = ''

  updateVoteValue(event: React.ChangeEvent<HTMLInputElement>) {
    this.voteValue = event.target.value
  }

  addVote() {
    this.props.addVote(this.voteValue)
  }

  public render() {
    return (
      <div>
        <input type="text" onChange={event => this.updateVoteValue(event)} />
        <button onClick={() => this.addVote()}>Add Vote</button>
      </div>
    )
  }
}

export default AddVote
