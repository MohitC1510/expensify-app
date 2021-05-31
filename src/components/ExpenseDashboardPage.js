import React from 'react';
import ConnectedExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseSummary from './ExpenseSummary';
const ExpenseDashboardPage = () => (
    <div>
      <ExpenseSummary/>
      <ExpenseListFilters/>
      <ConnectedExpenseList/>
    </div>
  );
  export default ExpenseDashboardPage;