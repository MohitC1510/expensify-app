import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
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


test('should set default state', ()=>{
    
    const state=expensesReducer(undefined, {type:'@@INIT'})
    expect(state).toEqual([])
})


test('should remove expense by id', ()=>{
    const action={
        type:'REMOVE_EXPENSE', 
        id:'2'
};
    const state=expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0],expenses[2]])
})


test('should not remove if expense id not found', ()=>{
    const action={
        type:'REMOVE_EXPENSE', 
        id:'-1'
};
    const state=expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})


test('should add expense', ()=>{
    const expense={
            id: '189',
            description: 'laptop',
            amount: 400000,
            note: '',
            createdAt: 15000
        };
    const action={
        type:'ADD_EXPENSE', 
        expense
    };
    const state=expensesReducer(expenses, action)
    expect(state).toEqual([...expenses,expense])
});


test('should edit expense', ()=>{
    const amount=12500
    const action={
        type:'EDIT_EXPENSE', 
        id:'3',
        updates:{
            amount
        }
    };
    const state=expensesReducer(expenses, action)
    expect(state[2].amount).toBe(12500)
});
test('should not edit expense if id not found', ()=>{
    const amount=12500
    const action={
        type:'EDIT_EXPENSE', 
        id:'-1',
        updates:{
            amount
        }
    };
    const state=expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
});

