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

    // get colors into array for each item

    let itemColors = this.state.items.map((item, i) => {
      let productColors = item.product_colors.map((color, i) => {
        return color.hex_value;
      })
      return productColors;
    })

    // make a variable called items to display below

    let items = this.state.items.map((item,i) => (
      <Item
        key={i}
        name={item.name}
        price={item.price}
        image_link={item.image_link}
        category={item.category}
        description={item.description}
        colors={itemColors[i]}
      />
    ))

    return (
      <div>
        {items}
      </div>
    )
  }
}


export default ItemList;
