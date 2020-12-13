import React from "react";

const person = (props) => {
  return (
    <p>
      I Am A Person Named {props.name} and my age is {props.age}
    </p>
  );
};

export default person;
