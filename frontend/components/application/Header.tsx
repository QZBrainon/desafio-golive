"use client";
import DarkModeButton from "./DarkModeButton";

export default function Header() {
  return (
    <div className="container mx-auto w-full flex justify-between items-center py-6 gap-4">
      <a href="/" className="text-xl font-bold">
        GoLive Challenge
      </a>
      <DarkModeButton />
    </div>
  );
}
