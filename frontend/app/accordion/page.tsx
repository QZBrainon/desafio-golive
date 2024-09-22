"use client";
import React, { useState } from "react";
import Image from "next/image";

const names = ["Bob", "Alice", "Eve", "David", "Sara"];

export default function Page() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="h-screen flex justify-center items-center ">
      <div className="container flex justify-center items-center gap-4">
        {[1, 2, 3, 4, 5].map((imgNum, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={`relative -skew-x-12 h-96 filter grayscale hover:filter-none hover:scale-110 transition-all duration-300 ${
              expandedIndex === index ? "w-64" : "w-16"
            }`}
          >
            <span
              className={`absolute top-0 left-0 z-10 bg-black px-1 bg-opacity-20`}
            >
              {names[index]}
            </span>
            <Image
              src={`/img${imgNum}.jpg`}
              alt={`img${imgNum}`}
              layout="fill"
              className="object-cover bg-center bg-no-repeat "
            />
          </div>
        ))}
      </div>
    </div>
  );
}
