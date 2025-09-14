"use client";
import React, { useState } from "react";
import V0Version from "./v0-version";

export default function Page() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="max-w-lg w-full mx-auto bg-white">
        {/* Steps circles */}
        <div className="flex items-center justify-around my-4 px-4 text-black">
          {Array.from({ length: totalSteps }, (_, i) => (
            <>
              <div
                key={i}
                className={`w-5 h-5 rounded-full flex flex-shrink-0 items-center justify-center transition-all duration-300 ease-in-out ${
                  i + 1 <= currentStep ? "bg-green-500" : "bg-gray-200"
                }`}
              >
                {i + 1}
              </div>
              <div
                className={`h-[2px] ${
                  i + 1 === totalSteps ? "" : "w-full"
                } bg-black`}
              >
                <div
                  className={`h-[2px] bg-green-500 ${
                    i + 1 >= currentStep ? "w-0" : "w-full"
                  } transition-all duration-300 ease-in-out`}
                />
              </div>
            </>
          ))}
        </div>
        {/* Steps content */}
        <div className="flex flex-col gap-4 px-4 text-black">
          <div className="relative h-60 overflow-hidden">
            {Array.from({ length: totalSteps }, (_, i) => {
              return (
                <div
                  className={`${
                    i + 1 === currentStep
                      ? "bg-green-500 translate-x-0"
                      : i + 1 < currentStep
                      ? "bg-gray-200 -translate-x-full"
                      : "bg-gray-200 translate-x-full"
                  } absolute top-0 left-0 w-full h-full transition-transform duration-300 ease-in-out place-content-center text-center`}
                  key={i}
                >
                  {i + 1 === 1 && (
                    <div className="flex flex-col gap-2">
                      Name
                      <label htmlFor="name" className="text-sm  text-black">
                        <input type="text" name="name" id="name" className="" />
                      </label>
                    </div>
                  )}
                  {i + 1 === 2 && (
                    <div className="flex flex-col gap-2">
                      Email
                      <label htmlFor="email" className="text-sm text-black">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className=""
                        />
                      </label>
                    </div>
                  )}
                  {i + 1 === 3 && (
                    <div className="flex flex-col gap-2">
                      Password
                      <label htmlFor="password" className="text-sm text-black">
                        <input
                          type="password"
                          name="password"
                          id="password"
                          className=""
                        />
                      </label>
                    </div>
                  )}
                  {i + 1 === 4 && (
                    <div className="flex flex-col gap-2">
                      Confirm Password
                      <label
                        htmlFor="confirm-password"
                        className="text-sm text-black"
                      >
                        <input
                          type="password"
                          name="confirm-password"
                          id="confirm-password"
                          className=""
                        />
                      </label>
                    </div>
                  )}
                  {i + 1 === 5 && <span>Are you sure?</span>}
                </div>
              );
            })}
          </div>
        </div>
        {/* Buttons */}
        <div className="flex items-center justify-center gap-4 py-4">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() =>
              setCurrentStep(currentStep - 1 < 1 ? 1 : currentStep - 1)
            }
          >
            Back
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() =>
              setCurrentStep(
                currentStep + 1 > totalSteps ? totalSteps : currentStep + 1
              )
            }
          >
            {currentStep < totalSteps ? "Next" : "Finish"}
          </button>
        </div>
      </div>
      <V0Version />
    </div>
  );
}
