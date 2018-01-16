import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom';
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
      ],
      toggled: false,
      name: '',
      colorPick: false,
      currentColor: ''
    }

    this.toggleCheck = this.toggleCheck.bind(this);
    this.handleGoBack = this.handleGoBack.bind(this);
    this.handleColorPick = this.handleColorPick.bind(this);
    this.addColor = this.addColor.bind(this);

  }

  toggleCheck(e) {
    console.log('in the toggle check!')
    this.setState({toggled: !this.state.toggled, name: e.name, currentColor: e.colorVal})
  }

  handleGoBack(e) {
    this.setState({toggled: !this.state.toggled})
  }

  handleColorPick(e) {
    this.setState({colorPick: !this.state.colorPick})
  }

  addColor(e) {
    console.log('in the add color')
    let newColor = {colorVal: e.colorVal, name: e.colorName}
    this.setState({
      color: [newColor, ...this.state.color]
    }, this.handleColorPick())
  }



  render() {
    const colors = this.state.color.map((color,idx) => {
      return (
        <div>
          <Link to={`/colors/${color.name}`}>{color.name}</Link>
        </div>
      )
    })

    const style = {
      height: '100vh',
      backgroundColor: this.state.currentColor
    }

    const nameAllCaps = this.state.name.toUpperCase();

    //RENDERS BELOW

    //IF YOU PICK A SPECIFIC COLOR
    return (
      <div>

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
        render={props => (

          <ColorForm 
            {...props}
            addColor={this.addColor}
          />
        )}
        />

        <Route
          exact path='/colors/:color'
          render={props => 
            <div style={style} {...props}>
              <h1>THIS IS {nameAllCaps}.</h1>
              <h1>ISN'T IT BEAUTIFUL?</h1>
              <button onClick={this.handleGoBack}>GO BACK</button>
            </div>
          }
        />



      </div>

    )

  }
}

export default App;
