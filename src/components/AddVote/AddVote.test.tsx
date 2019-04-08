import { ShallowWrapper, configure, shallow } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'
import AddVote from './AddVote'
import React from 'react'

configure({ adapter: new Adapter() });
describe('AddVote Component', () => {
    let addVoteFn = jest.fn()

    it('renders without crashing', () => {
        shallow(<AddVote addVote={addVoteFn} />)
    })

    describe('functions', () => {
        let wrapper: ShallowWrapper
        beforeEach(() => {
            wrapper = shallow(<AddVote addVote={addVoteFn} />)
            expect(wrapper).toBeTruthy()
        })

        it('should call the passed in addVote function on button click', () => {
            wrapper.find('button').simulate('click')
            expect(addVoteFn).toHaveBeenCalled()
        })

        it('should update the vote value on input change', () => {
            wrapper.find('input').simulate('change', {target: {value: 'foo'}})
            wrapper.find('button').simulate('click')
            expect(addVoteFn).toHaveBeenCalledWith('foo')
        })
    })
})
