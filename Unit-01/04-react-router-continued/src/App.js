import React from 'react';
import MainContent from './MainContent';
import {Link} from 'react-router-dom';
import './App.css';

const HeaderNav = () => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand header-link" to="/">
          <span role="img" aria-label="nail polish icon">💅</span> Makeup Mega Market <span role="img" aria-label="lipstick icon">💄</span>
        </Link>
      </div>
      <ul className="nav navbar-nav">
        <li><Link className="header-link" to="/brands/almay">Brands</Link></li>
      </ul>
      <form></form>
      <ul className="nav navbar-nav navbar-right">
        <li><Link className="header-link" to="/cart"><span role="img" aria-label="shopping cart link">🛒</span></Link></li>
      </ul>
    </div>
  </nav>
);

const App = () => (
  <div>
    <HeaderNav/>
    <MainContent/>
  </div>
);

export default App;
