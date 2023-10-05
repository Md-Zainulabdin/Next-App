import React from "react";
import Button from "./Button";

const Navbar = () => {
  return <div className="navbar w-full flex justify-between items-center px-12 border-b">
    <div className="logo text-2xl font-bold text-[--text-color]">Next App</div>
    <Button text={"Contact Us"}/>
  </div>; 
};

export default Navbar;
