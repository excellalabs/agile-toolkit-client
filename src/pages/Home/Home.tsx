import * as React from 'react'
import Cards from '../../components/Cards'
import FlexView from 'react-flexview'
import { Session } from '../../models/session'
import CardFlipper from '../../components/CardFlipper'
import AddVote from '../../components/AddVote'

class Home extends React.Component<{}, Session> {
  constructor(props) {
    super(props)
  }

  flipCards() {
    // This doesn't do anything now
    this.setState({ flipped: true })
  }

  public render() {
    return (
      <div>
        <div>
          <h1>Agile Toolkit</h1>
          <FlexView wrap={true} hAlignContent="center">
            <Cards />
          </FlexView>
          <FlexView wrap={true} hAlignContent="center">
            <AddVote />
          </FlexView>
          <FlexView wrap={true} hAlignContent="center">
            <CardFlipper flipCards={this.flipCards.bind(this)} />
          </FlexView>
        </div>
      </div>
    )
  }
}

export { Home }
