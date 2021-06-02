import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import database from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk])

test('should setup remove expense object', () => {
    const action = removeExpense({ id: '123abcd' })
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: '123abcd'
    })
})

test('should setup edit expense object', () => {
    const action = editExpense('123acbd', { description: 'Rent' });
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: '123acbd',
        updates: {
            description: 'Rent'
        }
    })
})

test('with provided values at add expense', () => {
    
    const action = addExpense(expenses[2])
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});

test('Should add expenses to database and store', (done)=>{
    const store = createMockStore({});
    const expenseData={
        description: 'water bill',
        amount: 3000,
        note:'this is really tough',
        createdAt: 12000000000
    };
    store.dispatch(startAddExpense(expenseData)).then(()=>{
       const actions= store.getActions();
       expect(actions[0]).toEqual({
           type: 'ADD_EXPENSE',
           expense: {
               id: expect.any(String),
               ...expenseData
           }
       })

       return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
})




test('Should add expenses with defaults to database and store', (done)=>{
    const store = createMockStore({});
    const expenseData={
        description: '',
        amount: 0,
        note:'',
        createdAt: 0
    };
    store.dispatch(startAddExpense(expenseData)).then(()=>{
       const actions= store.getActions();
       expect(actions[0]).toEqual({
           type: 'ADD_EXPENSE',
           expense: {
               id: expect.any(String),
               ...expenseData
           }
       })

       return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
})
// test('with default values at add expense', () => {
//     const action = addExpense();
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             description: '',
//             note: '',
//             createdAt: 0,
//             id:expect.any(String),
//             amount: 0
//         }

//     })
// })
// test('with default values at add expense', ()=>{

// })