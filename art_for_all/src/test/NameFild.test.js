import React from 'react';
import Jest from 'jest';
import Enzyme from './Enzyme';
import {shallow} from 'enzyme';
import NameFild from '../components/forms/nameFild/NameFild';

describe("NAME FILD -Testing with snapshots", () => {

    it('TEST01: it should render correctly' , () =>{
        const nameFild = shallow(<NameFild></NameFild>);
        expect(nameFild).toMatchSnapshot();
    })
})