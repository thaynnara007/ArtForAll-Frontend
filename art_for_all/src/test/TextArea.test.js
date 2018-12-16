import React from 'react';
import Jest from 'jest';
import Enzyme from './Enzyme';
import {shallow} from 'enzyme';
import Text from '../components/forms/textArea/Text';

describe("TEXT AREA - Testing with snapshots", () =>{

    it('TEST01: it shoul render correctly', () =>{
        const text = shallow(<Text></Text>);
        expect(text).toMatchSnapshot();
    })

    it('TEST02: it shoul render correctly with placeHolder=hello there', () =>{
        const text = shallow(<Text placeHolder="hello there"></Text>);
        expect(text).toMatchSnapshot();
    })
})