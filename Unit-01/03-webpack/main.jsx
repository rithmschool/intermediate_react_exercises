import React, {Component} from 'react'
import {render} from 'react-dom'
import {Child} from './helpers/helpers.jsx'
import Color from './helpers/color.jsx'


class App extends Component {
  constructor(props){
    super(props)
    this.state= {
      number: Math.random()
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({number: Math.random()})
    // this must be used to reset the state AND retrigger render and all dependencies
  }

  render(){
    return(
    <div id='root'>
      <h1>Welcome to {this.props.name}'s Component</h1>
      <p>My favorite number is {this.state.number}</p>
      <button onClick={this.handleClick.bind(this)}>Click Me!</button>
      <button onClick={this.handleClick}>Click Me!</button>   
      <Child  num = {this.state.number}>
        <p>Hi</p>
      </Child> 
      <Color/>
    </div>
    )
  }
}

render(<App name='Aaron'/>, document.getElementById("app"))