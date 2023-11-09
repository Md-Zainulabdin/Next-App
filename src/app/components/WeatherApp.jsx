"use client";

import React, { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FiSearch } from "react-icons/fi";

const WeatherApp = () => {
  const searchRef = useRef();
  const [weather, setWeather] = useState([]);
  const apiKey = "6d055e39ee237af35ca066f35474e9df";

  const onSubmitHandler = async (e) => {
    e.preventDefault(); // to prevent the page load when form is submit

    if (searchRef.current.value === "") {
      return;
    }

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchRef.current.value}&units=metric&appid=${apiKey}`
      );
      const data = await response.json();
      setWeather(data);
      // console.log("data", data);
      toast.success("Api call successfully");
    } catch (error) {
      toast.error("Something Went Wrong");
    }
  };

  console.log(weather.length);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Toaster />
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

        {weather.length === 0 ? (
          <div className="text-center py-6">
            <h1>Nothing to Show</h1>
          </div>
        ) : (
          <div className="weather-showcase w-full text-center py-6">
            {/* <img src={weather.image} alt="" /> */}
            <h1 className="text-3xl font-bold text-center">
              {weather?.main?.temp}°C
            </h1>
            <span className="text-xl font-semibold text-[#555]">
              {weather?.name}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;

// key: "{Your API Key Here}",
// base: "https://api.openweathermap.org/data/2.5/",

// ? -> nullish operator || safety operator
