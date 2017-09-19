import React from 'react';
import {Link} from 'react-router-dom';

export default (props) => (
  <div style={{fontSize: "2em"}}>
    {props.text}
    <Link to={`/todos/${props.id}/edit`}>
      <button className="btn btn-primary"
              style={{margin: "10px"}}>
        Edit
      </button>
    </Link>
  </div>
);
