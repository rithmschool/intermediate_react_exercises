import React, { Component } from 'react';
import './Item.css';

class Item extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      animation: null
    }
  }

  handleClick(e) {
    this.props.handleAdd(this);
    // console.log(e.pageX, e.pageY);
    this.setState({
      animation: "fade 1s 1"
    })
    setTimeout( () => {
      this.setState({
        animation: null
      })
    }, 1000);
  }

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
          <button className="price" onClick={this.handleClick}>
            ${(+this.props.price).toFixed(2)}
          </button>
          <span style={{"color": "white", "animation": this.state.animation}}>&nbsp;&nbsp;Added to cart!</span>
        </div>
        <img src={this.props.image_link} alt={this.props.name}/>
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