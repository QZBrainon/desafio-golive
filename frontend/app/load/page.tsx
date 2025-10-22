import React from "react";

function Load() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="container mx-auto flex items-center justify-center rotate-[30deg]">
        {/* <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-pulse"></div> */}
        <div className="w-5 h-7 bg-slate-400 flip "></div>
      </div>
      <div className="relative mt-2">
        {/* Gray base text */}
        <span className="text-gray-500">Loading...</span>
        {/* White filling text */}
        <span className="absolute top-0 left-0 text-white fill-text">
          Loading...
        </span>
      </div>
      {/* Animated yellow circles */}
      {/* <div className="w-5 h-5 rounded bg-gradient-to-tr from-yellow-500 to-green-600 flex items-center justify-center mt-6">
        <span className="w-3 h-3 rounded bg-gradient-to-tr from-yellow-500 to-yellow-600 animate-[move-left-and-back_2s_ease-in-out_infinite]"></span>
        <span className="w-3 h-3 rounded bg-gradient-to-tr from-yellow-500 to-yellow-600 animate-[move-right-and-back_2s_ease-in-out_infinite]"></span>
      </div> */}

      <div className="w-5 h-5 p-2 bg-gradient-to-tr from-yellow-500 to-yellow-600 rotate-[45deg] mt-8 relative">
        <div className="w-[15px] h-[15px] bg-background absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center">
          <div className="w-3 h-3 bg-gradient-to-tr from-yellow-500 to-yellow-600 [clip-path:polygon(0_0,100%_0,0_100%)] up-down animate-pulse"></div>
        </div>
      </div>

      <div className="relative w-6 h-6 rounded-full bg-gradient-to-tr from-yellow-500 to-yellow-600 mt-8">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <div
            key={angle}
            className="absolute w-2 h-2 [clip-path:polygon(50%_0%,100%_100%,0%_100%)] bg-yellow-500"
            style={{
              top: "50%",
              left: "50%",
              transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-20px)`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Load;
