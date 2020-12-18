import React, { Component } from "react";
// import Radium from "radium";
import "./App.css";
import Person from "./Person/Person";
import styled from "styled-components";

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

  switchPersonHandler = () => {
    if (this.state.currentNameIndex + 1 > 2) {
      console.log("End of data...");
      this.setState({
        currentNameIndex: 3,
        personsData: this.state.personsData,
      });
    } else {
      console.log("Switching name...");
      this.setState({
        currentNameIndex: this.state.currentNameIndex + 1,
        personsData: this.state.personsData,
      });
      console.log(this.state);
    }
  };

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
    let classes = ["white", "bold"].join(" ");
    const style = {
      backgroundColor: "#FF7F50",
      ":hover": { backgroundColor: "lightblue" },
    };

    const StyledDiv = styled.div`
       {
        text-align: center;
        background-color: red;
      }
    `;

    let persons = null;
    if (this.state.showPersonsList) {
      persons = this.state.personsData.map((entry, index) => {
        return (
          <Person
            key={index}
            clicked={this.clickPersonHandler}
            name={this.state.personsData[index].name}
            age={this.state.personsData[index].age}
          />
        );
      });
      style.backgroundColor = "#ADFF2F";
    }
    return (
      <StyledDiv>
        <h1 className={classes}>I AM THE APP</h1>
        <button style={style} onClick={this.showPersons}>
          Toggle People List
        </button>
        {persons}
      </StyledDiv>
    );
  }
}

export default App;
