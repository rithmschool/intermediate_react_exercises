import React, { Component } from 'react';
import './App.css';
import {
  Route,
  Link,
  BrowserRouter as Router,
  Redirect
} from 'react-router-dom';
import BrandList from './BrandList';
import ItemList from './ItemList';
import Cart from './Cart';

const Home = () => <Redirect to="/brands"/>

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cart: []
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <Link to="/brands" className="link">💅Makeup Mega Market💄</Link>
            <span>&nbsp;&nbsp;</span>
            <Link to="/brands" className="link">Brands</Link>
            <Link to="/cart" className="link cart">🛒</Link>
          </div>
          <Route exact path="/" component={Home}/>
          <Route path="/brands" component={BrandList}/>
          <Route path="/cart" component={Cart}/>
        </div>
      </Router>
    );
  }
}

export default App;
