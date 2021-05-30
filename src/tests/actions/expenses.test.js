import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

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
    const action = addExpense({
        description: 'xyz',
        note: 'abc',
        createdAt: '1200',
        amount: 1500
    });
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: 'xyz',
            note: 'abc',
            createdAt: '1200',
            id:expect.any(String),
            amount: 1500
        }

    })
})
test('with default values at add expense', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            createdAt: 0,
            id:expect.any(String),
            amount: 0
        }

    })
})
// test('with default values at add expense', ()=>{

// })