import React from 'react';
import { mount } from 'enzyme';
import Loginform from './Loginform';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';
import { waitFor } from '@testing-library/dom';
import { act } from '@testing-library/react';
import Button from './Loginform';

configure({adapter: new Adapter()});

jest.mock('./Loginform')

describe('Test for Button component', () =>{
  it('tests the presence of Button component',() => {
    Loginform.mockImplementation(()=><div>Mock of button component</div>)
    render(
      <Button />,
      {wrapper: MemoryRouter}
    )
    expect(screen.getByText('Mock of Loginform component'))
      .toBeInTheDocument();
  })
})

describe('<Loginform>', function() {

    it('Should capture username or email correctly onChange', function(){
        const component = mount(<Loginform />);
        const input = component.find('input').at(0);
        input.instance().value = 'abc@gmail.com';
        input.simulate('change');
        expect(component.state().email).toEqual('abc@gmail.com');
    })

    it('Should capture password correctly onChange', function(){

        const component = mount(<Loginform />);
        const input = component.find('input').at(1);
        input.instance().value = '12345678';
        input.simulate('change');
        expect(component.state().password).toEqual('12345678');
    })

    it('Should capture email correctly onChange and change the props accordingly', function(){

        const component = mount(<Loginform />);
        const input = component.find('input').at(0);
        // input.simulate('change', {target: {email: 'mail@hotmail.com'}}); -- this does not work
        
        input.instance().value = 'abc@gmail.com';
        input.simulate('change');
        expect(component.find('input').at(0).props().value).toEqual('abc@gmail.com');
        // Alternatively, can check state
        // expect(component.state().email).toEqual('mail@hotmail.com');
    })

    // it('Should capture email correctly onChange and change the state accordingly', function(){

    //     const component = mount(<Form />);
    //     const input = component.find('input').at(0);        
    //     input.instance().value = 'mail@hotmail.com';
    //     input.simulate('change');
    //     expect(component.state().email).toEqual('mail@hotmail.com');
    // })

    it('Should call alert() when submit button is clicked', function(){
        
        const state = {
         email:'abc@gmail.com', password:12345678,
        };
        const expectedArg = "email: abc@gmail.com, password: 12345678";
        const component = mount(<Loginform />);
        window.alert = jest.fn();
        component.setState(state)
        
        component.find('form').simulate('submit')
        expect(window.alert).toHaveBeenCalledWith(expectedArg);
    })
})