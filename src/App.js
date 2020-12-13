import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = (props) => {
  const [personsState, setPersonsState] = useState({
    currentNameIndex: 0,
    personsData: [
      { name: "Alex", age: 38 },
      { name: "Jim", age: 53 },
      { name: "Carol", age: 50 },
    ],
  });

  const switchPersonHandler = () => {
    console.log("Switching name...");
    setPersonsState({
      currentNameIndex: personsState.currentNameIndex + 1,
      personsData: personsState.personsData,
    });
    console.log(personsState);
  };

  return (
    <div className="App">
      <h1>I AM THE APP</h1>
      <button onClick={switchPersonHandler}>Switch Name</button>
      {
        <Person
          name={personsState.personsData[personsState.currentNameIndex].name}
          age={personsState.personsData[personsState.currentNameIndex].age}
        />
      }
    </div>
  );
};

export default App;
