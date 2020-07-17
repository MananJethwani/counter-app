import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = (id) => {
    let change = this.state.counters;
    for (let i = 0; i < change.length; i++) {
      if (change[i].id === id) change[i].value++;
    }
    this.setState({ counters: change });
  };

  handleDecrement = (id) => {
    let change = this.state.counters;
    for (let i = 0; i < change.length; i++) {
      if (change[i].id === id) change[i].value--;
    }
    this.setState({ counters: change });
  };

  render() {
    return (
      <div>
        {this.state.counters.map((m) => (
          <Counter
            key={m.id}
            counter={m}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
