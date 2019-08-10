import React from 'react';
import './index.css';
import { NavLink }  from 'react-router-dom';

function Header() {
  return (
    <header className="Header">
      <nav className="navbar navbar-light bg-light">
        <NavLink to='/' className="navbar-brand">Products</NavLink>
        <NavLink to='/checkout' className="navbar-brand">Checkout</NavLink>
        <NavLink to='/inventory' className="navbar-brand">Inventory</NavLink>
      </nav>
    </header>
  );
}

export default Header;
