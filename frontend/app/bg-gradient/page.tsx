import React from "react";

function page() {
  return (
    <div
      className="h-screen"
      style={{
        background: "radial-gradient(circle, #1a1a2e, #16213e, #0f0c29)",
      }}
    >
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-white text-4xl font-bold">
          Welcome to the background gradient page!
        </h1>
        <p className="text-white text-xl">
          This is a page with a background gradient.
        </p>
      </div>
    </div>
  );
}

export default page;
