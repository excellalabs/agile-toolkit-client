import * as React from 'react'
import Cards from '../../components/Cards'
import AddVote from '../../components/AddVote'
import FlexView from 'react-flexview'
import { func } from 'prop-types'

const session = {
  flipped: true,
  votes: [{ value: '1', voter: 'Test' }, { value: '2', voter: 'Test2' }]
}

const addVote = function(value) {
  session.votes.push({ value: value, voter: 'Test3' })
}

const Home = () => (
  <div>
    <div>
      <h1>Agile Toolkit</h1>
      <FlexView wrap={true} hAlignContent="center">
        <Cards session={session} />
      </FlexView>
      <FlexView wrap={true} hAlignContent="center">
        <AddVote addVote={addVote} />
      </FlexView>
    </div>
  </div>
)

export { Home }
