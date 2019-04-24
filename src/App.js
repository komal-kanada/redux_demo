import React, { Component } from "react";
import ReactDOM from "react-dom";
import logo from './logo.svg';
import { connect } from "react-redux";
import * as actionCreator from "./store/actions/actions"
class App extends Component {
  render() {
    return (
      <div className="App">
        <div> Your Age:{this.props.age}</div>
        <button className="ageUp" onClick={this.props.onAgeUp}>
          AgeUP
        </button>
        <button className="ageDown" onClick={this.props.onAgeDown}>
          AgeDown
        </button>
        {this.props.loading && <img src={logo} className="applogo"/>}
        {/* <hr />
        <div>History</div>
        <div>
          <ul>
            {this.props.history.map(el => (
              <li
                onClick={() => this.props.onDelete(el.id)}
                className="historyItem"
                key={el.id}
              >
                {el.age}
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    age: state.age,
    loading: state.loading
    // history: state.history
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onAgeUp: () => dispatch(actionCreator.ageUP(1)),
    onAgeDown: () => dispatch(actionCreator.ageDown(1)),
    // onDelete: id => dispatch({ type: "DELETE_ITEM", key: id })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
