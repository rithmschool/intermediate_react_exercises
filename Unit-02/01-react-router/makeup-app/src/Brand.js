import React, { Component } from 'react';
import './Brand.css';
import { Link } from 'react-router-dom';

class Brand extends Component {
  render() {


    return (
      <Link to={`/brands/${this.props.name}`} className="outer">
        <span className="inner">
          {this.props.name}
        </span>
      </Link>
    )
  }
}


export default Brand;