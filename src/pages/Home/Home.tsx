import * as React from 'react';
import Cards from 'src/components/Cards';
import FlexView from 'react-flexview';

const session = {
  flipped: true,
  votes: [ {value: '1', voter: 'Test'},{value: '2', voter: 'Test2'}]
}

const Home = () => (
  <div>
    <h1>Agile Toolkit</h1>
    <FlexView wrap={true} hAlignContent='center'>
      <Cards session={session}/>
    </FlexView>
    
  </div>
)

export { Home }
