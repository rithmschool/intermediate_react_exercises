import React, { Component } from 'react';
import Brand from './Brand';
import ItemList from './ItemList';
import {
  Route,
  Link,
  BrowserRouter as Router
} from 'react-router-dom';

class BrandList extends Component {

  render() {
    
    const brands = this.props.brands.map((item, i) => {
      return (
        <Brand
          key={i}
          name={item}
        />
      )
    })

    return (
      <div>
        <span>
          {brands}
        </span>
        <Route path="/brands/:brand" component={ItemList}/>
      </div>
    )
  }
}


export default BrandList;

let brands = ["almay", "annabelle", "benefit", "covergirl",
   "dalish", "e.l.f.", "essie", "iman", "l'oreal",
   "marcelle", "maybelline", "milani", "mineral fusion", "misa",
   "mistura", "moov", "nyx", "orly", "pacifica", "physicians",
   "formula", "anada", "revlon", "salon",
   "sante", "sinful", "smashbox", "stila",
   "suncoat", "zorah"]

BrandList.defaultProps = { brands };
