import React from "react";

const Button = ({text}) => {
    // console.log(text);
//   const obj = {
//     name: "zain",
//     age: 17,
//   };
  //   let age = obj.age; Before
//   let { age } = obj; // Object destructring
//   console.log(age);
  return <div className="border px-4 py-2 bg-indigo-400">{text}</div>;
};

export default Button;
