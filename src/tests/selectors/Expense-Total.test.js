import selectExpenseTotal from '../../selectors/Expense-Total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', ()=>{
    const res= selectExpenseTotal([]);
    expect(res).toBe(0);
});
test('should return a single expense', ()=>{
    const res= selectExpenseTotal([expenses[0]]);
    expect(res).toBe(1000);
});
test('should return a single expense', ()=>{
    const res= selectExpenseTotal(expenses);
    expect(res).toBe(15000);
});