import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import {MemoryRouter} from 'react-router-dom'

import App from './App';
import Loginform from './Loginform';

jest.mock('./Loginform')

describe('Test for App component', () =>{
  it('tests the presence of Loginform component',() => {
    Loginform.mockImplementation(()=><div>Mock of Loginform component</div>)
    render(
      <App/>,
      {wrapper: MemoryRouter}
    )
    expect(screen.getByText('Mock of Loginform component'))
      .toBeInTheDocument();
  })
})