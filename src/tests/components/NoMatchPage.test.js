import React from 'react';
import {shallow} from 'enzyme';
import NoMatchPage from '../../components/NoMatchPage';

test('should render not found page correctly', ()=>{
    const wrapper= shallow(<NoMatchPage />);
    expect(wrapper).toMatchSnapshot();
})