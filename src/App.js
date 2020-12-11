import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = { currentNameIndex: 0, personNames: ["Alex", "Jim", "Carol"] };

  switchNameHandler = () => {
    console.log("Switching name...", this.state.currentNameIndex + 1);
    this.setState({ currentNameIndex: this.state.currentNameIndex + 1 });
    console.log(this.state);
  };

  render() {
    const nameToDisplay = (
      <Person name={this.state.personNames[this.state.currentNameIndex]} />
    );

    return (
      <div className="App">
        <h1>I AM THE APP</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        {nameToDisplay}
      </div>
    );
  }
}

export default App;
