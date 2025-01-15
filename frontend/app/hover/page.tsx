import React from "react";

const imgs = [
  "https://i.pinimg.com/236x/d8/2f/06/d82f062b907f5dcb15cdbfa4f8ae9b12.jpg",
  "https://i.pinimg.com/236x/6b/79/9c/6b799c0b4833ef0f9cea9d1f415e5061.jpg",
  "https://i.pinimg.com/236x/36/2c/42/362c42666201cdbff2ceb6aca43cfa11.jpg",
  "https://i.pinimg.com/474x/35/e6/58/35e658d9a6e74db3fc9cedfc88d6c8ef.jpg",
  "https://i.pinimg.com/236x/51/fe/f9/51fef936f37e833f7906d24dbae8e03c.jpg",
  "https://i.pinimg.com/474x/c0/f6/e9/c0f6e95c57b598c6b64af3438a72a463.jpg",
  "https://i.pinimg.com/474x/fe/ef/92/feef926836fbc7130733bf83f74ac26f.jpg",
];

export default function Hover() {
  return (
    <div className="container flex mx-auto justify-center items-center flex-1 gap-[1rem] card-container">
      {imgs.map((img, index) => (
        <div
          key={index}
          className="h-[20rem] w-[10rem] cursor-pointer overflow-hidden item"
        >
          <img src={img} className=" w-full h-full object-cover" />
        </div>
      ))}
    </div>
  );
}
