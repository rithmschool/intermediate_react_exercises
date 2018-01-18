import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import Color from './Color'
import ColorForm from './ColorForm'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: [
        { colorVal: '#FF0000', name: 'red' },
        { colorVal: '#02FC0B', name: 'green' },
        { colorVal: '#1217F0', name: 'blue' }
      ]
    }
    this.addColor = this.addColor.bind(this);
  }

  addColor(e) {
    console.log('in the add color')
    let newColor = { colorVal: e.colorVal, name: e.colorName }
    this.setState({
      color: [newColor, ...this.state.color]
    }, this.handleColorPick())
  }

  render() {
    const colors = this.state.color.map((color, idx) => {
      return (
        <div>
          <Link to={`/colors/${color.name}`}>{color.name}</Link>
        </div >
      )
    })
    //IF YOU PICK A SPECIFIC COLOR
    return (
      <div>
        <Switch>
          <Route
            exact path='/colors'
            render={() =>
              <div className='App'>
                <header className="App-header">
                  <h4 className="App-title">Welcome to the color factory.</h4>
                  <Link to='/colors/new'><h1>Add a color</h1></Link>
                </header>

                <p>Please select a color.</p>
                {colors}
              </div>
            }
          />

          <Route
            exact path='/colors/new'
            render={props => {
              return (< ColorForm
                addColor={this.addColor}
              />)
            }}
          />

          <Route
            exact path='/colors/:color'
            render={props => {
              const color = this.state.color.find(c => {
                return c.name === props.match.params.color
              })
              return <Color colorName={color.name} colorVal={color.colorVal} />
            }}
          />
        </Switch>
      </div>
    )
  }
}

export default App;
