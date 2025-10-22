import React from "react";

function ChatBubble() {
  return (
    <div className="h-screen flex flex-col gap-2 items-center justify-center">
      <div className="w-full max-w-md p-6 bg-white border-2 relative shadow-md">
        <p className="text-xl text-black">
          If a girl named Jackie moves to Japan, she will be called Jackie-chan
        </p>
        <div
          className="w-6 aspect-square bg-white absolute bottom-0 left-[-5%]"
          style={{
            clipPath: "polygon(100% 0%, 100% 100%, 0% 100%)",
          }}
        ></div>
        <div className="w-12 aspect-square flex items-center justify-center font-bold text-xs bg-blue-500 rounded-full top-18 left-[-18%] absolute">
          <p>Me</p>
        </div>
      </div>
      <div className="w-full max-w-md p-6 bg-white border-2 relative shadow-md">
        <p className="text-xl text-black">Bro, what in the actual fuck?</p>
        <div
          className="w-6 aspect-square bg-white absolute bottom-0 right-[-5%]"
          style={{
            clipPath: "polygon(0% 0%, 100% 100%, 0% 100%)",
          }}
        ></div>
        <div className="w-12 aspect-square flex items-center justify-center font-bold text-xs bg-blue-500 rounded-full top-18 right-[-18%] absolute">
          <p>Homie</p>
        </div>
      </div>
    </div>
  );
}

export default ChatBubble;
