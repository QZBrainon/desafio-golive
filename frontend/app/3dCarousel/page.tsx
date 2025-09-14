"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface MenuItem {
  id: number;
  title: string;
  icon: string;
  color: string;
  gradient: string;
}

const menuItems: MenuItem[] = [
  {
    id: 0,
    title: "Start Game",
    icon: "🎮",
    color: "from-blue-500 to-purple-600",
    gradient: "bg-gradient-to-br",
  },
  {
    id: 1,
    title: "Multiplayer",
    icon: "👥",
    color: "from-green-500 to-emerald-600",
    gradient: "bg-gradient-to-br",
  },
  {
    id: 2,
    title: "Store",
    icon: "🛍️",
    color: "from-yellow-500 to-orange-600",
    gradient: "bg-gradient-to-br",
  },
  {
    id: 3,
    title: "Settings",
    icon: "⚙️",
    color: "from-red-500 to-pink-600",
    gradient: "bg-gradient-to-br",
  },
];

export default function CarouselPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextItem = () => {
    setCurrentIndex((prev) => (prev + 1) % menuItems.length);
  };

  const prevItem = () => {
    setCurrentIndex((prev) => (prev - 1 + menuItems.length) % menuItems.length);
  };

  const selectItem = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowRight":
        case "ArrowDown":
          event.preventDefault();
          nextItem();
          break;
        case "ArrowLeft":
        case "ArrowUp":
          event.preventDefault();
          prevItem();
          break;
        case "Enter":
        case " ":
          event.preventDefault();
          break;
        case "1":
          event.preventDefault();
          selectItem(0);
          break;
        case "2":
          event.preventDefault();
          selectItem(1);
          break;
        case "3":
          event.preventDefault();
          selectItem(2);
          break;
        case "4":
          event.preventDefault();
          selectItem(3);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextItem, prevItem, selectItem]);

  const getItemPosition = (index: number, currentIndex: number) => {
    const totalItems = menuItems.length;
    const angle = ((index - currentIndex) * 360) / totalItems;
    const radius = 180;

    const x = Math.sin((angle * Math.PI) / 180) * radius;
    const z = Math.cos((angle * Math.PI) / 180) * radius;
    const y = 0;

    const isCurrent = index === currentIndex;
    const distanceFromCurrent = Math.abs(
      (index - currentIndex + totalItems) % totalItems
    );
    const normalizedDistance = Math.min(
      distanceFromCurrent,
      totalItems - distanceFromCurrent
    );

    return {
      x,
      y,
      z,
      rotateY: angle,
      rotateX: 0,
      scale: isCurrent ? 1.3 : Math.max(0.7, 1 - normalizedDistance * 0.1),
      opacity: 1,
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.1),transparent_50%)]" />

      <div className="relative w-full h-screen flex items-center justify-center perspective-1000">
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Persona Menu
          </h1>
        </div>

        <div
          className="relative w-96 h-96"
          style={{
            perspective: "1200px",
            perspectiveOrigin: "center center",
          }}
        >
          <div
            className="relative w-full h-full"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {menuItems.map((item, index) => {
              const position = getItemPosition(index, currentIndex);
              const isCurrent = index === currentIndex;

              return (
                <motion.div
                  key={item.id}
                  className="absolute cursor-pointer"
                  animate={{
                    x: position.x,
                    y: position.y,
                    z: position.z,
                    rotateY: position.rotateY,
                    rotateX: position.rotateX,
                    scale: position.scale,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 15,
                    mass: 0.8,
                  }}
                  onClick={() => selectItem(index)}
                  whileHover={{ scale: position.scale * 1.1 }}
                  whileTap={{ scale: position.scale * 0.95 }}
                  style={{
                    transformStyle: "preserve-3d",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: isCurrent ? 20 : 10 - Math.abs(position.z) / 20,
                  }}
                >
                  <div
                    className={`relative w-32 h-32 rounded-2xl ${
                      item.gradient
                    } ${item.color}
                      shadow-2xl border border-white/20 backdrop-blur-sm
                      ${isCurrent ? "shadow-purple-500/50" : ""}
                      transform-gpu`}
                    style={{
                      boxShadow: isCurrent
                        ? "0 25px 50px -12px rgba(147, 51, 234, 0.5), 0 0 30px rgba(147, 51, 234, 0.3)"
                        : "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent" />

                    <div className="flex flex-col items-center justify-center h-full text-white">
                      <div className="text-3xl mb-2">{item.icon}</div>
                      <div className="text-sm font-semibold text-center px-2">
                        {item.title}
                      </div>
                    </div>

                    {isCurrent && (
                      <motion.div
                        className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 opacity-30"
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        style={{ zIndex: -1 }}
                      />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-4">
          <motion.button
            onClick={prevItem}
            className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white font-semibold
              border border-white/20 shadow-lg hover:bg-white/20 transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            ← Previous
          </motion.button>

          <motion.button
            onClick={nextItem}
            className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white font-semibold
              border border-white/20 shadow-lg hover:bg-white/20 transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Next →
          </motion.button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {menuItems.map((_, index) => (
            <motion.div
              key={index}
              className={`w-2 h-2 rounded-full cursor-pointer ${
                index === currentIndex ? "bg-purple-400" : "bg-white/30"
              }`}
              onClick={() => selectItem(index)}
              whileHover={{ scale: 1.2 }}
              animate={{
                scale: index === currentIndex ? 1.2 : 1,
                opacity: index === currentIndex ? 1 : 0.5,
              }}
            />
          ))}
        </div>

        <div className="absolute top-1/2 left-8 transform -translate-y-1/2">
          <div className="text-white/60 text-sm">
            <p>Controls:</p>
            <p className="mt-1">← → Arrow keys</p>
            <p>1-4 Number keys</p>
            <p className="mt-2 text-purple-300">
              Current: {menuItems[currentIndex].title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
