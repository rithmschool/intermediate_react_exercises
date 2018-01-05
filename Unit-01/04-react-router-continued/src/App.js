import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect, Link} from "react-router-dom";
import ColorList from "./ColorList";
import NewColor from "./NewColor";
import Color from "./Color";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [
        {
          name: "red",
          hex: "#FF0000",
        }, 
        {
          name: "green",
          hex: "#00FF00",
        },
        {
          name: "blue",
          hex: "#0000FF"
        }
      ]
    }
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(newColor) {
    this.setState({colors: [newColor, ...this.state.colors]})
  }

  render() {
    const colorListComponent = () => (
      <ColorList colors={this.state.colors} />
    );

    const newColorComponent = props => (
      <NewColor addColor={this.handleAdd} {...props} />
    )

    const colorComponent = props => {
      const colorName = props.match.params.color;
      const color = this.state.colors.find(color => color.name === colorName);
      return color ? <Color {...props} color={color} /> : <Redirect to="/colors" />;
    };

    return (
      <Switch>
        <Route exact path="/colors" render={colorListComponent} />
        <Route path="/colors/new" render={newColorComponent} />
        <Route path="/colors/:color" render={colorComponent} />
        <Redirect to="/colors" />
      </Switch>
    );
  }
}

export default App;
