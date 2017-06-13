import React from 'react';

const ShoppingCart = (props) => {
  let total = 0;
  const items = props.items.map(i => {
    total += (+i.quantity * (+i.price));
    return (
      <tr key={i.id} >
        <td>{i.quantity}</td>
        <td>{i.name}</td>
        <td>{i.price}</td>
        <td>
          <button
            onClick={() => props.removeItem(i.id)}
            type="button"
            className="btn btn-danger"
          >
            Remove
          </button>
        </td>
      </tr>
    );
  });

  return items.length > 0 ?
  (
    <div>
      <table className="table table-hover">
        <thead>
          <th>Quantity</th>
          <th>Name</th>
          <th>Price</th>
          <th></th>
        </thead>
        <tbody>
          {items}
        </tbody>
      </table>
      <strong>Total: ${total.toFixed(2)}</strong>
    </div>
  ) :
  (
    <strong>No Items Yet!</strong>
  );
}

export default ShoppingCart;
