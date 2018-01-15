import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Color from './Color'

 


const ColorList = () => (
  <div>
    <h1>Test colors component</h1>
  </div>
)


const ColorForm = () => (
  <div>
  <h1>Test</h1>
    <form>
      <input type='color' />
    </form>
  </div>
)




class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: [
        { id: 1, name: 'red' },
        { id: 2, name: 'green' },
        { id: 3, name: 'blue' }
      ],
      toggled: false
    }

    this.toggleCheck = this.toggleCheck.bind(this);

  }

  toggleCheck(e) {
    this.setState({toggled: true})
  }

  render() {
    const colors = this.state.color.map((color,idx) => {
      return (
        <div key={idx}>
          <Link to={`/colors/${color.name}`}>{color.name}</Link>
        </div>
      )
    })

    return (
      <div className="App">
        <header className="App-header">
          <h4 className="App-title">Welcome to the color factory.</h4>
          <Link to='/colors/new'><h1>Add a color</h1></Link>
        </header>

        <p>Please select a color.</p>
        {colors}

        <Route exact path='/colors' component={ColorList} />
        <Route path='/colors/new' component={ColorForm} />


    
        <Route 
          path='/colors/:color'
          render={props => {
            let color = colors.find(c => c.props.id === +props.match.params.id) || null;
            return (
              <Color 
                {...props}
                handleToggle={this.toggleCheck}
              />
            )
          }}
        />
      </div>
    );
  }
}

export default App;
