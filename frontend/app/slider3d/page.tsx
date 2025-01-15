"use client";
import React from "react";

const imgs = [
  "https://cdn.pixabay.com/photo/2016/11/29/03/53/maldives-1867187_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/12/01/20/28/forest-1072828_1280.jpg",
  "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fG5hdHVyZXxlbnwwfHx8fDE2NDkwNzU4MDM&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGxhbmRzY2FwZXxlbnwwfHx8fDE2NDkwNzU4MDM&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fGNoZXJyeXxlbnwwfHx8fDE2NDkwNzU4MDM&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGxhbmRzY2FwZXxlbnwwfHx8fDE2NDkwNzU4MDM&ixlib=rb-1.2.1&q=80&w=1080",
];

export default function Slider() {
  const [index, setIndex] = React.useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % imgs.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? imgs.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="container mx-auto flex-1 relative card-container">
      {imgs.map((img, i) => (
        <div
          key={i}
          className={`absolute w-full h-full overflow-hidden cursor-pointer transition-opacity duration-500 ease-in-out transform ${
            i === index
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-1/4"
          }`}
          style={{
            transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
          }}
        >
          <img src={img} className="w-full h-full object-cover" />
        </div>
      ))}

      {/* Next button */}
      <button
        onClick={handleNext}
        className="absolute bottom-[50%] right-4 p-2 bg-slate-400 opacity-75 hover:opacity-100 transition-all duration-300 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Previous button */}
      <button
        onClick={handlePrev}
        className="absolute top-[50%] left-4 p-2 bg-slate-400 opacity-75 hover:opacity-100 transition-all duration-300 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
    </div>
  );
}
