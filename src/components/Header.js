import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Go home</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    </header>
);

export default Header;