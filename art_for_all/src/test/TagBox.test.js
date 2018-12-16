import React from 'react';
import Jest from 'jest';
import Enzyme from './Enzyme';
import {shallow} from 'enzyme';
import EditableTagBox from '../components/tagBox/EditableTagBox';


describe("EDITABLE TAG BOX - Testing", () => {

    it("TEST01: testing button New", () => {
        const box = shallow(<EditableTagBox onClick={null} tagsName={[]}></EditableTagBox>)

        box
            .find('button#New')
    })

    it("TEST02: testing button Delete", () => {
        const box = shallow(<EditableTagBox onClick={null} tagsName={["tag"]}></EditableTagBox>)

        box
            .find('button#New')
            .find('button#Delete')
    })
})