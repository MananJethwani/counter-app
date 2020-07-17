import React, { Component } from "react";

class Counter extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <div className="row">
          <div className="col-1">
            <span className={this.countClasses()}>{this.countValue()}</span>
          </div>
          <div className="col">
            <button
              onClick={() => this.props.onIncrement(this.props.counter.id)}
              className="btn btn-sm m-2 btn-danger"
            >
              +
            </button>
            <button
              onClick={() => this.props.onDecrement(this.props.counter.id)}
              className=" btn-sm btn m-2 btn-info"
              disabled={this.props.counter.value === 0 ? "true" : ""}
            >
              -
            </button>
            <button
              onClick={this.handleDecrement}
              className=" btn-sm btn m-2 btn-secondary"
            >
              X
            </button>
          </div>
        </div>
      </div>
    );
  }
  countValue() {
    if (this.props.counter.value === 0) return "Zero";
    else return this.props.counter.value;
  }
  countClasses() {
    let classes = "badge m-2 ";
    if (this.props.counter.value === 0) classes += " badge-warning";
    else classes += " badge-primary";
    return classes;
  }
}

export default Counter;
