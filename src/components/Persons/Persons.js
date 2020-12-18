import React from "react";
import Person from "./Person/Person";

const persons = (props) =>
  props.personsData.map((entry, index) => {
    return (
      <Person
        key={index}
        clicked={props.clickPersonHandler}
        name={props.personsData[index].name}
        age={props.personsData[index].age}
      />
    );
  });

export default persons;
