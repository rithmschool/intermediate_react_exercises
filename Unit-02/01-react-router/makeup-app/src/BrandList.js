import React, { Component } from 'react';
import Brand from './Brand';
import ItemList from './ItemList';
import { Route } from 'react-router-dom';

class BrandList extends Component {

  render() {

    let selectedBrand = this.props.location.pathname.split("/")[2];
    let active;
    
    let brands = this.props.brands.map((item, i) => {
      item === selectedBrand ? active = true : active = false;
      return (
        <Brand
          key={i}
          name={item}
          active={active}
        />
      )
    })

    const MyItemList = (props) => {
      return (
        <ItemList 
          handleAdd={this.props.handleAdd}
          {...props}
        />
      );
    }

    return (
      <div>
        <span>
          {brands}
        </span>
        <Route path="/brands/:brand" render={MyItemList}/>
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
