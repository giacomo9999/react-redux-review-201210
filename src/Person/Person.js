import React from "react";

const person = (props) => {
  return (
    <div>
      <p>
        I Am A Person Named {props.name} and my age is {props.age}
      </p>
      {/* <button onClick={props.clickAction}>Click to Increment Person</button> */}
    </div>
  );
};

export default person;
