import * as React from 'react'
import Cards from '../../components/Cards'
import FlexView from 'react-flexview'
import { Session } from '../../models/session'
import CardFlipper from '../../components/CardFlipper'
import AddVote from '../../components/AddVote'
import ClearVotes from '../../components/ClearVotes'

const session = {
  flipped: false,
  votes: [{ value: '1', voter: 'Test' }, { value: '2', voter: 'Test2' }],
  name: 'Session 123'
}

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

  public render() {
    return (
      <div>
        <div>
          <h1>{this.state.name}</h1>
          <FlexView wrap={true} hAlignContent="center">
            <Cards />
          </FlexView>
          <FlexView wrap={true} hAlignContent="center">
            <AddVote />
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
