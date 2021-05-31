import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';

test('Should render expense summary with single expense', ()=>{
       const wrapper= shallow(<ExpenseSummary expenseCount={1} expensesTotal={200}/>);
       expect(wrapper).toMatchSnapshot();
})


test('Should render expense summary with multiple expenses', ()=>{
    const wrapper= shallow(<ExpenseSummary expenseCount={3} expensesTotal={15000}/>);
    expect(wrapper).toMatchSnapshot();
})