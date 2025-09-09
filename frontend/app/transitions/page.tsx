"use client";
import React, { useState } from "react";

export default function Page() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="max-w-lg w-full mx-auto bg-white">
        {/* Steps circles */}
        <div className="flex items-center justify-around my-4 px-4">
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
                } bg-black transition-all duration-300 ease-in-out`}
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

        {/* Buttons */}

        <div className="flex items-center justify-center gap-4">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() =>
              setCurrentStep(currentStep - 1 < 1 ? 1 : currentStep - 1)
            }
          >
            {currentStep > 1 ? "Previous" : "Back"}
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
    </div>
  );
}
