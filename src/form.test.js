import React from 'react'
import Loginform from './Loginform';
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
//import toJson from 'enzyme-to-json'
import Button from './Loginform'

configure({adapter: new Adapter()});

describe('<Button />', () => {
    describe('onClick()', () => {
        test('onClick called', () => {
            const mockOnClick = jest.fn()
            const wrapper = shallow(<Button onClick={mockOnClick}/>)
            wrapper.find('Loginform').find('.submitButton').simulate('click');
           //wrapper.find('button').at(1).simulate('click', 'Submit')
            expect(mockOnClick).toHaveBeenCalled()
          }) 
    });
  });
  