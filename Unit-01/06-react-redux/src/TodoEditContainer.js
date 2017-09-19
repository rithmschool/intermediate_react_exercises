import React, {Component} from 'react';
import {connect} from 'react-redux';

class TodoEditContainer extends Component {
  render() {
    return (
      <div>
        Todo edit container
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(TodoEditContainer);
