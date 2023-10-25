"use client";
import React, { useRef } from "react";

const Form = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    // if (emailRef.current.value !== undefined && passwordRef.current.value !== undefined) {
    //     alert("All Feilds are required!")
    // }

    if (passwordRef.current.value.length < 8) {
      alert("Password must contain 8 character");
    }
  };

  return (
    <div className="parent w-full h-screen flex justify-center items-center">
      <div className="child w-[300px] p-4 border">
        <form onSubmit={onSubmitHandler}>
          <div className="title">
            <h2>Login Form</h2>
          </div>

          <div className="mt-2">
            <label htmlFor="Email">Email *</label>
            <input
              ref={emailRef}
              type="email"
              className="border w-full"
              required
            />
          </div>

          <div className="mt-2">
            <label htmlFor="Password">Password *</label>
            <input
              ref={passwordRef}
              type="password"
              className="border w-full"
              required
            />
          </div>

          <button
            className="w-full p-2 bg-indigo-400 text-white mt-2"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
