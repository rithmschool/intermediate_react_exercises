import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import BrandPage from './Brands';
import ShoppingCart from './ShoppingCart';

export default class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  addItem(id, name, price, quantity) {
    let item = this.state.items.find(i => i.id === id);
    let items;
    if (item) {
      items = this.state.items.map(i => {
        if (i.id === id) {
          return {
            ...i,
            quantity: i.quantity + quantity
          };
        } else {
          return i;
        }
      });
      this.setState({items})
    } else {
      item = {id, name, price, quantity};
      items = [...this.state.items, item];
      this.setState({items});
    }
  }

  removeItem(id) {
    const items = this.state.items.filter(i => i.id !== id);
    this.setState({items});
  }

  render() {
    const redirect = (props) => (
      <Redirect to={{
        pathname: '/brands',
        state: {from: props.location}
      }} />
    );

    const brandPage = (props) => (
      <BrandPage {...props} addItem={this.addItem} />
    );

    const cart = props => (
      <ShoppingCart {...props}
        items={this.state.items}
        removeItem={this.removeItem}
      />
    )

    return (
      <div className="container-fluid">
        <Route exact path="/cart" render={cart} />
        <Route path="/brands" render={brandPage} />
        <Route exact path="/" component={redirect} />
      </div>
    );
  }
};
