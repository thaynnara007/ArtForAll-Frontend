import React from 'react';
import Jest from 'jest';
import Enzyme from './Enzyme';
import {shallow} from 'enzyme';
import Tag from '../components/tag/Tag';

describe("TAG - testing state ", () =>{

    it("TEST01: it should render correctly", () =>{
        const tag = shallow(<Tag></Tag>);
        
        tag
            .find('background-color')
    })

    it("TTEST02: it should render correctly with tagName=tag", () =>{
        const tag = shallow(<Tag tagName="tag"></Tag>);
        
        tag
            .find('span#tag')
    })
})