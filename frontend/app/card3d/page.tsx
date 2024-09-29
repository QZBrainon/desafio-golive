import React from "react";

export default function page() {
  return (
    <div className="h-screen flex justify-center items-center card-container relative">
      <div className="w-[340px] h-[480px] absolute rounded-xl card flip hover:transform-none overflow-hidden">
        <img
          src="/card-back.webp"
          className="object-cover object-center w-full h-full"
        />
      </div>
      <div className="w-[340px] h-[480px]  rounded-xl absolute card flip backface-hidden">
        <img className="object-cover object-center" src="/dragonite.png" />
      </div>
    </div>
  );
}
