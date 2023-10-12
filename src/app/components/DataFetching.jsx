"use client";
import React, { useEffect, useState } from "react";

const DataFetching = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

//   console.log("data", data);

  return (
    <div>
      <div className="title">
        <h1>Data</h1>
      </div>

      <div>
        {data.map((item) => (
          <li>{item.title}</li>
        ))}
      </div>
    </div>
  );
};

export default DataFetching;
