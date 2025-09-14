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
      <div className="w-5 h-5 rounded bg-gradient-to-tr from-yellow-500 to-yellow-600 rotate-[30deg] flex items-center justify-center mt-6">
        <div className="relative rotate-[-30deg]">
          <div className="w-3 h-3 rounded bg-gradient-to-tr from-yellow-500 to-yellow-600 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 animate-[move-left-and-back_2s_ease-in-out_infinite] rotate-[30deg]"></div>

          <div className="w-3 h-3 rounded bg-gradient-to-tr from-yellow-500 to-yellow-600 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 animate-[move-right-and-back_2s_ease-in-out_infinite] rotate-[30deg]"></div>
        </div>
      </div>

      <div className="w-5 h-5 p-2 bg-gradient-to-tr from-yellow-500 to-yellow-600 rotate-[45deg] mt-8 relative">
        <div className="w-[15px] h-[15px] bg-background absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center">
          <div className="w-3 h-3 bg-gradient-to-tr from-yellow-500 to-yellow-600 [clip-path:polygon(0_0,100%_0,0_100%)] up-down animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

export default Load;
