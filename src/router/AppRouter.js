import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import LoginPage from "../components/LoginPage";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import HelpPage from "../components/HelpPage";
import NoMatchPage from "../components/NoMatchPage";
import PrivateRoute from './PrivateRoute'

export const history= createBrowserHistory()

const AppRouter= () => (
    <Router history={history}>
    <div>
      
      <Switch>
        <Route path='/' component={LoginPage} exact={true} />
        <PrivateRoute path='/dashboard' component={ExpenseDashboardPage} />
        <PrivateRoute path='/create' component={AddExpensePage} />
        <PrivateRoute path='/edit/:id' component={EditExpensePage} />
        <Route path='/help' component={HelpPage} />
        <Route component={NoMatchPage} />
      </Switch>
    </div>
  </Router>
  );
export default AppRouter;