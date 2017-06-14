import React, { Component } from 'react';
import './Item.css';

class Item extends Component {
  render() {

    let colors = this.props.colors.map((color, i) => (
      <div 
        className="color" 
        style={{backgroundColor: color}}
        key={i}
      >
        &nbsp;
      </div>
    ))


    return (
      <div className="item">
        <div className="name">
          {this.props.name}
        </div>
        <div>
          <button className="price">
            ${this.props.price}
          </button>
        </div>
        <img src={this.props.image_link}/>
        <div className="other">
          Category: {this.props.category}
        </div>
        <div className="other">
          Colors: <div>{colors}</div>
        </div>
        <div className="description">
          {this.props.description}
        </div>
      </div>
    )
  }
}


export default Item;