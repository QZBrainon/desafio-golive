"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Circle } from "lucide-react";

export default function V0Version() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  const stepTitles = [
    "Personal Information",
    "Contact Details",
    "Security Setup",
    "Confirm Security",
    "Review & Submit",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-xl">
        <CardHeader className="text-center space-y-4">
          <CardTitle className="text-2xl font-bold text-foreground">
            Account Setup
          </CardTitle>
          <div className="space-y-4">
            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>
                  Step {currentStep} of {totalSteps}
                </span>
                <span>
                  {Math.round((currentStep / totalSteps) * 100)}% Complete
                </span>
              </div>
              <Progress
                value={(currentStep / totalSteps) * 100}
                className="h-2"
              />
            </div>

            {/* Step Indicators */}
            <div className="flex items-center justify-between px-4">
              {Array.from({ length: totalSteps }, (_, i) => (
                <div key={i} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`
                      w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out border-2
                      ${
                        i + 1 <= currentStep
                          ? "bg-primary border-primary text-primary-foreground"
                          : "bg-background border-border text-muted-foreground"
                      }
                    `}
                    >
                      {i + 1 < currentStep ? (
                        <CheckCircle2 className="w-5 h-5" />
                      ) : i + 1 === currentStep ? (
                        <Circle className="w-5 h-5 fill-current" />
                      ) : (
                        <span className="text-sm font-medium">{i + 1}</span>
                      )}
                    </div>
                    <span className="text-xs mt-2 text-center max-w-20 text-muted-foreground">
                      {stepTitles[i]}
                    </span>
                  </div>
                  {i + 1 < totalSteps && (
                    <div className="flex-1 h-px bg-border mx-4 relative">
                      <div
                        className={`
                          h-full bg-primary transition-all duration-300 ease-in-out
                          ${i + 1 < currentStep ? "w-full" : "w-0"}
                        `}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Step Content */}
          <div className="relative min-h-[200px]">
            {Array.from({ length: totalSteps }, (_, i) => (
              <div
                key={i}
                className={`
                  absolute top-0 left-0 w-full transition-all duration-500 ease-in-out
                  ${
                    i + 1 === currentStep
                      ? "opacity-100 translate-x-0"
                      : i + 1 < currentStep
                      ? "opacity-0 -translate-x-full"
                      : "opacity-0 translate-x-full"
                  }
                `}
              >
                <div className="space-y-4">
                  {i + 1 === 1 && (
                    <div className="space-y-4">
                      <div className="text-center space-y-2">
                        <h3 className="text-lg font-semibold">
                          Whats your name?
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Lets start with your personal information
                        </p>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Enter your full name"
                          className="h-12"
                        />
                      </div>
                    </div>
                  )}

                  {i + 1 === 2 && (
                    <div className="space-y-4">
                      <div className="text-center space-y-2">
                        <h3 className="text-lg font-semibold">
                          Contact Information
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          How can we reach you?
                        </p>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Enter your email address"
                          className="h-12"
                        />
                      </div>
                    </div>
                  )}

                  {i + 1 === 3 && (
                    <div className="space-y-4">
                      <div className="text-center space-y-2">
                        <h3 className="text-lg font-semibold">
                          Create Password
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Choose a strong password for your account
                        </p>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="Create a strong password"
                          className="h-12"
                        />
                      </div>
                    </div>
                  )}

                  {i + 1 === 4 && (
                    <div className="space-y-4">
                      <div className="text-center space-y-2">
                        <h3 className="text-lg font-semibold">
                          Confirm Password
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Please confirm your password
                        </p>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">
                          Confirm Password
                        </Label>
                        <Input
                          type="password"
                          name="confirm-password"
                          id="confirm-password"
                          placeholder="Confirm your password"
                          className="h-12"
                        />
                      </div>
                    </div>
                  )}

                  {i + 1 === 5 && (
                    <div className="space-y-4">
                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                          <CheckCircle2 className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold">
                          Ready to Submit
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Please review your information and confirm to create
                          your account
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between pt-6 border-t">
            <Button
              variant="outline"
              onClick={() =>
                setCurrentStep(currentStep - 1 < 1 ? 1 : currentStep - 1)
              }
              disabled={currentStep === 1}
              className="px-8"
            >
              Back
            </Button>

            <Button
              onClick={() =>
                setCurrentStep(
                  currentStep + 1 > totalSteps ? totalSteps : currentStep + 1
                )
              }
              disabled={currentStep === totalSteps}
              className="px-8"
            >
              {currentStep < totalSteps ? "Continue" : "Complete"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
