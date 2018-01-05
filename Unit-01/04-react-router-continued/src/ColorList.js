import React from "react";
import { Link } from "react-router-dom";
import "./ColorList.css"

const ColorList = props => {
  const colorLinks = props.colors.map(color => (
    <li key={color.hex}>
      <Link to={`/colors/${color.name}`}>{color.name}</Link>
    </li>
  ));
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to the color factory.</h1>
        <h1><Link to="/colors/new">Add a color</Link></h1>
      </header>
      <div className="App-intro">
        <p>Please select a color.</p>
        <ul>{colorLinks}</ul>
      </div>
    </div>
  )
}

export default ColorList;