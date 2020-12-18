import React from "react";
// import Radium from "radium"

const person = (props) => {
  return (
    <div>
      <p onClick={() => props.clicked(props.name)}>
        I Am A Person Named {props.name} and my age is {props.age}
      </p>
    </div>
  );
};

export default person;
