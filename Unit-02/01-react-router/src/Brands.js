import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';
import './Brands.css';
import axios from 'axios';

const MakeupCard = props => {
  let colors;
  if (props.productColors && props.productColors.length) {
    colors = props.productColors.map((c, i) => (
      <p key={i} style={{display: 'inline-block',
                         backgroundColor: c.hex_value,
                         width: '35px',
                         height: '35px'}}/>
    ));
  }
  const {id, name, price, category, productColors, imageLink, description} = props;
  return (
    <div className="makeup-card">
      <p className="makeup-heading">{name}</p>
      <p><button onClick={() => props.addItem(id, name, price, 1)}>${price}</button></p>
      <img src={imageLink} alt="makeup" />
      <h5>Category: {category}</h5>
      <h5>Colors</h5>
      {colors}
      <p className="makeup-desc">{description}</p>
    </div>
  );
};

const BrandNames = ({brands}) => {
  const brandComponents = brands.map((b, i) => (
    <span className="brand-name" key={i}><Link to={`/brands/${encodeURIComponent(b)}`}>{b.toUpperCase()}</Link> </span>
  ));
  return (
    <div className="row selector">
      {brandComponents}
    </div>
  );
};

BrandNames.defaultProps = {
  brands: ["almay", "annabelle", "benefit", "covergirl",
           "dalish", "e.l.f.", "essie", "iman", "l'oreal",
           "marcelle", "maybelline", "milani", "mineral fusion", "misa",
           "mistura", "moov", "nyx", "orly", "pacifica", "physicians",
           "formula", "anada", "revlon", "salon",
           "sante", "sinful", "smashbox", "stila",
           "suncoat", "zorah"]
};

class BrandDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      makeup: null
    };
    this.updateMakeupItems = this.updateMakeupItems.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.name !== prevProps.match.params.name) {
      this.setState({makeup: null}, () => this.updateMakeupItems());
    }
  }

  componentDidMount() {
    this.updateMakeupItems();
  }

  updateMakeupItems() {
    const name = encodeURIComponent(this.props.match.params.name);
    console.log("URL: ", `https://makeup-api.herokuapp.com/api/v1/products.json?brand=${name}`);
    axios.get(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=${name}`)
      .then(resp => {
        if (resp.data && resp.data.length > 0) {
          this.setState({makeup: resp.data});
        } else {
          this.setState({makeup: null});
        }
      });
  }

  render() {
    console.log("rendering BrandDetails");
    const {name} = this.props.match.params;
    const {addItem} = this.props;
    let makeup;
    if (this.state.makeup && this.state.makeup.length > 0) {
      makeup = this.state.makeup.map(m => (
        <MakeupCard key={m.id} id={m.id} productColors={m.product_colors}
                   name={m.name} price={m.price} description={m.description}
                   category={m.category} imageLink={m.image_link}
                   addItem={addItem}/>
      ));
    }
    return (
      <div>
        <h1>{name.toUpperCase()}</h1>
        <div style={{width: '100%'}}>
          {makeup}
        </div>
      </div>
    );
  }
}

const BrandPage = props => {
  const details = p => (
    <BrandDetails {...p} addItem={props.addItem}/>
  );
  return (
  <div>
    <BrandNames/>
    <Route path="/brands/:name" render={details}/>
  </div>
);
}


export default BrandPage;
export { BrandDetails, BrandNames };
