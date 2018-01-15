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
      colorPick: false
    }

    this.toggleCheck = this.toggleCheck.bind(this);
    this.handleGoBack = this.handleGoBack.bind(this);
    this.handleColorPick = this.handleColorPick.bind(this);
    this.addColor = this.addColor.bind(this);

  }

  toggleCheck(e) {
    console.log(this.state.color)
    this.setState({toggled: !this.state.toggled, name: e.name})
  }

  handleGoBack(e) {
    this.setState({toggled: !this.state.toggled})
  }


  handleColorPick(e) {
    this.setState({colorPick: !this.state.colorPick})
  }

  addColor(e) {
    console.log('adding a color')
    let newColor = {color: e.colorValue, name: e.colorName}
    this.setState({
      color: [newColor, ...this.state.color]
    }, this.handleColorPick())
  }



  render() {
    const colors = this.state.color.map((color,idx) => {
      return (
        <Color 
          key={idx}
          toggleCheck={this.toggleCheck}
          name={color.name}
        />
      )
    })

    const style = {
      height: '100vh',
      backgroundColor: this.state.color.colorVal
    }

    const nameAllCaps = this.state.name.toUpperCase();

    //RENDERS BELOW

    //IF YOU PICK A SPECIFIC COLOR
    if (this.state.toggled === true) { 
      return (
        <div style={style}>
          <h1>THIS IS {nameAllCaps}.</h1>
          <h1>ISN'T IT BEAUTIFUL?</h1>
          <button onClick={this.handleGoBack}>GO BACK</button>
        </div>
    )} 

    //IF YOU CHOOSE TO ADD A NEW COLOR
    else if (this.state.colorPick === true) {
      return (
        <ColorForm 
          addColor={this.addColor}
        />
      )}

    //MAIN HOME PAGE
    else {
      return (
        <div className="App">
          <header className="App-header">
            <h4 className="App-title">Welcome to the color factory.</h4>
            <button onClick={this.handleColorPick}><h1>Add a color</h1></button>
          </header>

          <p>Please select a color.</p>

          {colors}

        </div>
    )}
  }
}

export default App;
