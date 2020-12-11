import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = (props) => {
  const [personsState, setPersonsState] = useState({
    currentNameIndex: 0,
    personNames: ["Alex", "Jim", "Carol"],
  });

  const switchNameHandler = () => {
    console.log("Switching name...");
    setPersonsState({
      currentNameIndex: personsState.currentNameIndex + 1,
      personNames: personsState.personNames,
    });
    console.log(personsState);
  };

  return (
    <div className="App">
      <h1>I AM THE APP</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      {
        <Person
          name={personsState.personNames[personsState.currentNameIndex]}
        />
      }
    </div>
  );
};

export default App;


