"use client";
import React, { useState } from "react";

const Counter = () => {
  let [counter, setCounter] = useState(15);

  // ternary operator;
  

  const addValue = () => {
    setCounter(counter + 1);
    // console.log("counter", counter);
  };

  const removeValue = () => {
    setCounter(counter - 1);
    // console.log("counter", counter);
  };

  return (
    <>
      <div>Counter : {counter}</div>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
};

export default Counter;
