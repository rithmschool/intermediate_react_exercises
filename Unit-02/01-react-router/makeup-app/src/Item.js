import React, { Component } from 'react';
import './Item.css';

class Item extends Component {
  render() {
    return (
      <div className="item">
        <h5>
          {this.props.name}
        </h5>
        <div>
          {this.props.price}
        </div>
        <img src={this.props.image_link}/>
        <div>
          Category: {this.props.category}
        </div>
        <div>
          Colors: {this.props.colors}
        </div>
        <div>
          {this.props.description}
        </div>
      </div>
    )
  }
}


export default Item;