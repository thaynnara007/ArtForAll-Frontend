import React from 'react';
import Jest from 'jest';
import Enzyme from './Enzyme';
import {shallow} from 'enzyme';
import Info from '../components/info/InfoArt';

describe("INFO ART- testing state screnshot", () =>{

    it("TEST01: it should render correctly", () =>{
        const info = shallow(<Info info={['','','','', '']} tagsName={[]}></Info>);
        expect(info).toMatchSnapshot();
    })

    it("TEST02: it should render correctly with info", () =>{
        const info = shallow(<Info info={['aaaa','bbbb','cccc','ddddd', 'eeee']} tagsName={[]}></Info>);
        expect(info).toMatchSnapshot();
    })
})