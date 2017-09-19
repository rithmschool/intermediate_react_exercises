import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import './index.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'


ReactDOM.render(
  <Router>
    <div>
        <Route to='/todos' component={TodoList}/>
    </div>
  </Router>,
  document.getElementById('root')
);
