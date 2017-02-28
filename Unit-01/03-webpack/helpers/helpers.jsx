import React, {Component} from 'react'
import {render} from 'react-dom'

// the extends keyword is a shorthand for inheritance in es2015 class syntax. 
// it is NOT a new feature of the language, just an abstraction of what you have seen before.
export class Child extends Component {
  // if you want to set props, you do it in the constructor
  constructor(props){
    // but first you have to call super() for any parent props
    super(props)
  }
  render(){

    return(
    <div>
    	<h5>I am the the helper function!
      My children: {this.props.children}
      My parent's number is : {this.props.num}
      </h5>
    </div>
      )
  }
}

render(<Child/>, document.getElementById("app"))