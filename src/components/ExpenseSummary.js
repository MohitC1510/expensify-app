import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpenseTotal from '../selectors/Expense-Total';

export const ExpenseSummary = ({expenseCount, expensesTotal}) => {
    const expenseWord = expenseCount === 1 ? 'expense': 'expenses';
    const formattedAmount=numeral(expensesTotal/100).format('$0,0.00');
       return (
          <div>
              <h1>Viewing {expenseCount} {expenseWord} totaling to {formattedAmount}</h1>
          </div>
       );
}

const mapStateToProps = (state) => {
   const visibleExpenses = selectExpenses(state.expenses, state.filters);

   return{
       expenseCount: visibleExpenses.length,
       expensesTotal: selectExpenseTotal(visibleExpenses)
   }
};

export default connect(mapStateToProps)(ExpenseSummary)