import React, { Component } from "react";
// import Radium from "radium";
import "./App.css";

import Persons from "../components/Persons/Persons";
import Dashboard from "../components/Dashboard/Dashboard";
// import styled from "styled-components";

class App extends Component {
  state = {
    showPersonsList: false,
    currentNameIndex: 0,
    personsData: [
      { name: "Alex", age: 38 },
      { name: "Jim", age: 53 },
      { name: "Carol", age: 50 },
      { name: "END OF FILE", age: -999 },
    ],
  };

  changePersonHandler = (e) => {};

  clickPersonHandler = (personName) => {
    console.log("Person clicked.");
    const newState = this.state.personsData.filter(
      (elem) => elem.name !== personName
    );
    this.setState({ personsData: newState });
  };

  showPersons = () => {
    this.setState({ showPersonsList: !this.state.showPersonsList });
  };

  render() {
    let classes = ["red", "bold"].join(" ");
    const style = {
      backgroundColor: "#FF7F50",
      ":hover": { backgroundColor: "lightblue" },
    };

    let persons = null;

    return (
      <div className="App">
        <h1 className={classes}>I AM THE APP</h1>
        <Dashboard />
        <Persons
          personsData={this.state.personsData}
          clicked={this.clickPersonHandler}
        />
        <button style={style} onClick={this.showPersons}>
          Toggle People List
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
