"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const data = fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);

  console.log("products", product);
  return (
    <div className="w-full p-6 flex justify-center flex-wrap gap-4">
      {product.map((item) => (
        <div
          className="w-[350px] overflow-hidden border cursor-pointer"
          key={item.id}
        >
          <div className="image w-full h-[250px] flex justify-center items-start hover:scale-[1.02] duration-300 overflow-hidden">
            <Image
              src={item.image}
              alt="product image"
              width={300}
              height={300}
              priority
            />
          </div>

          <div className="desc w-full p-4 border-t overflow-hidden">
            <h1 className="font-medium text-lg">{item.title}</h1>
            <p className="text-md font-semibold text-red-400">${item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
