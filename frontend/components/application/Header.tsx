"use client";
import DarkModeButton from "./DarkModeButton";

export default function Header() {
  return (
    <div className="container mx-auto w-full flex justify-between items-center py-6 gap-4">
      <a href="/" className="text-2xl flex font-bold">
        {/* Thumb
        <img src="/pin.svg" alt="pin" className="w-6 h-6" />
        nail */}
        GoLive Challenge
      </a>
      <DarkModeButton />
    </div>
  );
}
