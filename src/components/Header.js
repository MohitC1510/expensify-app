import React from 'react';
import { Link, NavLink } from "react-router-dom";
import {connect} from 'react-redux'
import {startLogout} from '../actions/auth'
export const Header = ({startLogout}) => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName='isActive' exact={true}>DashBoard</NavLink>
    <NavLink to="/create" activeClassName='isActive'>ADD expense</NavLink>
    <button onClick={startLogout}>Logout</button>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header)