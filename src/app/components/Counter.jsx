"use client";
import React from "react";
import { useState } from "react";

const Counter = () => {
  let [count, setNumber] = useState(0);

  const addValue = () => {
    setNumber(count + 1);
  };

  const removeValue = () => {
    setNumber(count - 1);
  };

  console.log(count);

  return (
    <div className="flex gap-3 justify-center items-center">
      <button
        className="border"
        // onClick={
        //     () => {
        //     setNumber(count - 1);
        // }}

        onClick={removeValue}
      >
        Decrement
      </button>
      <div className="text-3xl font-bold">{count}</div>
      <button
        className="border"
        // onClick={() => {
        //     setNumber(count + 1);
        // }}

        onClick={addValue}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
