"use client";
import React, { useRef } from "react";
import { FiSearch } from "react-icons/fi";

const WeatherApp = () => {
  const searchRef = useRef();

  const onSubmitHandler = async (e) => {
    e.preventDefault(); // to prevent the page load when form is submit

    if (searchRef.current.value === "") {
      return;
    }

    console.log(process.env.API_KEY);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchRef.current.value}&appid=${process.env.API_KEY}&units=metric`
      );
      const data = await response.json();

      console.log("data", data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="weather-card border-2 w-[400px] p-8">
        <div className="searchBar w-full">
          <form onSubmit={onSubmitHandler} className="flex gap-2 items-center">
            <input
              type="text"
              name="city"
              placeholder="Search..."
              required
              ref={searchRef}
              className="p-3 border w-full"
            />
            <button className="relative" type="submit">
              <div className="p-4 text-white rounded-md bg-indigo-600">
                <FiSearch />
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;

// key: "{Your API Key Here}",
// base: "https://api.openweathermap.org/data/2.5/",
