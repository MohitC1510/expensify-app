import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import {Link} from'react-router-dom';
import selectExpenses from '../selectors/expenses';
import selectExpenseTotal from '../selectors/Expense-Total';

export const ExpenseSummary = ({expenseCount, expensesTotal}) => {
    const expenseWord = expenseCount === 1 ? 'expense': 'expenses';
    const formattedAmount=numeral(expensesTotal/100).format('$0,0.00');
       return (
          <div className="page-header">
              <div className="content-container">
              <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} totaling to <span>{formattedAmount}</span></h1>
              <div className="page-header__actions">
                  <Link className="button" to="/create">Add Expense</Link>
              </div>
              </div>
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