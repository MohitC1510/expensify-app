import moment from 'moment';
import selectExpense from '../../selectors/expenses';

const expenses = [{
    id: '1',
    description: 'gum',
    amount: 1000,
    note: '',
    createdAt: 0
},
{
    id: '2',
    description: 'rent',
    amount: 10000,
    note: '',
    createdAt: moment(0).subtract(4, 'days').valueOf()
},
{
    id: '3',
    description: 'credit card',
    amount: 4000,
    note: '',
    createdAt: moment(0).add(4, 'days').valueOf()
}]
test('should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpense(expenses, filters);
    expect(result).toEqual([expenses[2],expenses[1]]);
})

test('should filter by startDate value', ()=>{
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };
    const result = selectExpense(expenses, filters);
    expect(result).toEqual([expenses[2],expenses[0]]);

})
test('should filter by startDate value', ()=>{
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(4,'days')
    };
    const result = selectExpense(expenses, filters);
    expect(result).toEqual([expenses[2],expenses[0],expenses[1]]);

})
test('should sort by Date value', ()=>{
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpense(expenses, filters);
    expect(result).toEqual([expenses[2],expenses[0],expenses[1]]);

})
test('should sort by amount value', ()=>{
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpense(expenses, filters);
    expect(result).toEqual([expenses[1],expenses[2],expenses[0]]);

})