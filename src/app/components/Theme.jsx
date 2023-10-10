"use client";
import React, { useState } from "react";

const Theme = () => {
  const [isDark, setIsDark] = useState(false);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  // ternary operator
  //   isDark ? console.log("Hello") : console.log("Hi");

  return (
    <div
      className={`w-full h-screen flex justify-center items-center ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <button onClick={changeTheme} className="border p-2">
        Change theme
      </button>
    </div>
  );
};

export default Theme;
