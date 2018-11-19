import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchPeoples } from '../async/people.async';
class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getAllPeople();
  }
  render() {
    return (
    <div>
        <h1>
          Hellow!
        </h1>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    people: state.peoples
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllPeople: () => dispatch(fetchPeoples())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);