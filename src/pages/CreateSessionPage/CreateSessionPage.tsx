import * as React from 'react'
import CreateSession from '../../components/CreateSession'

class CreateSessionPage extends React.Component<{}> {
    constructor(props) {
        super(props)
      }

    public render() {
        return (
            <div>
                <CreateSession/>
            </div>
        )
    }
}

export { CreateSessionPage }