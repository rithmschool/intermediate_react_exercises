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

  addItemToCart(item) {
    let cart = this.state.cart.slice();
    cart.push(item);
    this.setState({ cart })
  }

  removeItemFromCart(name) {
    let cart = this.state.cart.slice();
    // find index of item in cart
    let itemIndex = cart.map((item) => item.props.name).indexOf(name);
    // remove that item from the cart
    cart.splice(itemIndex, 1);
    this.setState({ cart })
  }

  render() {

    const MyBrandList = (props) => {
      return (
        <BrandList 
          handleAdd={this.addItemToCart.bind(this)}
          {...props}
        />
      )
    }

    const MyCart = (props) => {
      return (
        <Cart 
          items={this.state.cart}
          handleRemove={this.removeItemFromCart.bind(this)}
          {...props}
        />
      );
    }

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
          <Route path="/brands" render={MyBrandList}/>
          <Route path="/cart" render={MyCart}/>
        </div>
      </Router>
    );
  }
}

export default App;
