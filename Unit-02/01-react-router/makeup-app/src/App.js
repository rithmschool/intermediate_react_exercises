import React, { Component } from 'react';
import './App.css';
import {
  Route,
  Link,
  BrowserRouter as Router
} from 'react-router-dom';
import BrandList from './BrandList';
import ItemList from './ItemList';
// import Cart from './Cart';
//          <Route path="/cart" component={Cart}/>

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <Link to="/brands" className="link">💅Makeup Mega Market💄</Link>
            <span>&nbsp;&nbsp;</span>
            <Link to="/brands" className="link">Brands</Link>
          </div>
          <Route exact path="/" component={BrandList}/>
          <Route path="/brands" component={BrandList}/>
        </div>
      </Router>
    );
  }
}

export default App;
