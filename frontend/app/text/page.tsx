import React from "react";

export default function TextEffect() {
  return (
    <div className="flex items-center justify-center h-screen">
      {/* <h1 className="text-8xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text">
        Colorful Text
      </h1> */}
      <h1 className="text-8xl font-bold text-transparent bg-[url('/br.jpg')] bg-cover bg-clip-text">
        CBLOL
      </h1>
      <h1 className="text-8xl font-bold text-transparent bg-[url('/us.jpg')] bg-cover bg-clip-text py-4">
        English
      </h1>
    </div>
  );
}
