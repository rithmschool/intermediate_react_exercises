import React, { Component } from 'react';
import './Brand.css';
import { Link } from 'react-router-dom';

class Brand extends Component {

  render() {

    let style = {}
    if(this.props.active) {
      style = {
        color: "navy",
        backgroundColor: "red"
      }
    } 
    
    return (
      <Link to={`/brands/${this.props.name}`} className="outer">
        <span className="inner" style={style}>
          {this.props.name}
        </span>
      </Link>
    )
  }
}


export default Brand;