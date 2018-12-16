import Jest from 'jest';
import Enzyme from './Enzyme';
import InputFild from '../components/forms/input/InputFild';

it('render correctly text component', () => {  
    const TextInputComponent = renderer.create(<InputFild />).toJSON();
    expect(TextInputComponent).toMatchSnapshot();
});