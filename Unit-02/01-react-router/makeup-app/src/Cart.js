import React, { Component } from 'react';

class Cart extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.handleRemove(e.target.id);
  }

  render() {
    console.log("items",this.props.items);
    // NEED TO PUT IN AN ARRAY OF OBJECTS TO SHOW COUNTS
    // AND ONLY SHOW EACH ITEM ONCE (WITH QUANTITY)

    let tableRows = this.props.items.map((item, i) => (
      <tr key={i}>
        <th scope="row">1</th>
        <td>{item.props.name}</td>
        <td>{item.props.price}</td>
        <td>
          <button 
            type="button" 
            className="btn btn-danger"
            onClick={this.handleClick}
            id={item.props.name}
          >
            Remove
          </button>
        </td>
      </tr>
    ))

    let total = 0;
    this.props.items.forEach((item, i) => {
      total += +item.props.price;
    })

    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Quantity</th>
              <th>Name</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {tableRows}
          </tbody>
        </table>
        <h4>Total: ${total}
        </h4>
      </div>
    )
  }
}


export default Cart;