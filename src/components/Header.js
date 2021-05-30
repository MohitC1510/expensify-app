import React from 'react';
import { Link, NavLink } from "react-router-dom";
const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName='isActive' exact={true}>Go home</NavLink>
    <NavLink to="/create" activeClassName='isActive'>ADD expense</NavLink>
  </header>
);
export default Header;