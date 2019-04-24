import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

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
    // history: state.history
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onAgeUp: () => dispatch({ type: "AGE_UP", value: 1 }),
    onAgeDown: () => dispatch({ type: "AGE_DOWN", value: 1 }),
    // onDelete: id => dispatch({ type: "DELETE_ITEM", key: id })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
