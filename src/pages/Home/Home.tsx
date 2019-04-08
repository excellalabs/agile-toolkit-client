import * as React from 'react'
import Cards from '../../components/Cards'
import AddVote from '../../components/AddVote'
import FlexView from 'react-flexview'
import { Session } from '../../models/session'
import CardFlipper from '../../components/CardFlipper'
import ClearVotes from '../../components/ClearVotes'
const session = {
  flipped: false,
  votes: [{ value: '1', voter: 'Test' }, { value: '2', voter: 'Test2' }]
}

class Home extends React.Component<{}, Session> {
  constructor(props) {
    super(props)
    this.state = session
  }

  addVote(value) {
    this.setState({
      votes: [
        ...this.state.votes,
        { value: value, voter: 'Test' + (this.state.votes.length + 1) }
      ]
    })
  }

  flipCards() {
    this.setState({ flipped: true })
  }

  clearVotes() {
    this.setState({ flipped: false, votes: [] })
  }

  public render() {
    return (
      <div>
        <div>
          <h1>Agile Toolkit</h1>
          <FlexView wrap={true} hAlignContent="center">
            <Cards session={this.state} />
          </FlexView>
          <FlexView wrap={true} hAlignContent="center">
            <AddVote addVote={this.addVote.bind(this)} />
          </FlexView>
          <FlexView wrap={true} hAlignContent="center">
            <CardFlipper flipCards={this.flipCards.bind(this)} />
          </FlexView>
          <FlexView wrap={true} hAlignContent="center">
            <ClearVotes clearVotes={this.clearVotes.bind(this)} />
          </FlexView>
        </div>
      </div>
    )
  }
}

export { Home }
