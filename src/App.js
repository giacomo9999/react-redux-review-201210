import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

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
    }
    return (
      <div className="App">
        <h1>I AM THE APP</h1>
        <button onClick={this.showPersons}>Toggle People List</button>
        {persons}
      </div>
    );
  }
}

export default App;
