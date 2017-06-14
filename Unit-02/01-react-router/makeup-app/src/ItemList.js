import React, { Component } from 'react';
import Item from './Item';

class ItemList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      items:[]
    }
  }

  componentDidUpdate(prevProps) {
    if(prevProps.match.params.brand !== this.props.match.params.brand) {
     // make AJAX call
      let url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${this.props.match.params.brand}`;
      fetch(url).then(response => response.json()).then(items => {
        this.setState( {items} )
        // console.log(this.state.items);
      })
    }
  }

  componentDidMount() {

    // make AJAX call to get the item list
    let url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${this.props.match.params.brand}`;
    fetch(url).then(response => response.json()).then(items => {
      this.setState( {items} )
      // console.log(this.state.items);
    })
  }

  render() {

    // make a variable called items to display below

    // console.log(this.state.items);

    let items = this.state.items.map((item,i) => (
      <Item
        key={i}
        name={item.name}
        price={item.price}
        image_link={item.image_link}
        category={item.category}
        description={item.description}
      />
    ))

    // console.log(items);

    return (
      <div>
        {items}
      </div>
    )
  }
}


export default ItemList;
