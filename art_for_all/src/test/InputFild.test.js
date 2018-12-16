import React from 'react';
import Jest from 'jest';
import Enzyme from './Enzyme';
import { shallow} from 'enzyme';
import InputFild from '../components/forms/input/InputFild';

it('render correctly input fild component with type=text', () => {  
    const InputFildComponent = shallow(<InputFild />);
    expect(InputFildComponent).toMatchSnapshot();
});

it('render correctly input fild component with type=password', () => {  
    const InputFildComponent = shallow(<InputFild type="password"/>);
    expect(InputFildComponent).toMatchSnapshot();
});