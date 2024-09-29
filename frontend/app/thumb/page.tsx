"use client";
import React from "react";
import { MousePointerClick } from "lucide-react";

export default function Thumb() {
  const [link, setLink] = React.useState("");

  const formatLink = (link: string) => {
    if (link.includes("?v=")) {
      const id = link.split("?v=")[1];
      return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
    }
    if (link.includes("shorts/")) {
      const id = link.split("shorts/")[1];
      return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
    }
    return "";
  };

  const handleClick = () => {
    const thumbnailUrl = formatLink(link);
    if (thumbnailUrl) {
      window.open(thumbnailUrl, "_blank");
      setLink("");
    }
  };
  return (
    <section className="flex-1">
      <div className="container mx-auto flex py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="text-5xl font-bold mb-4 ">
            Encontre thumbnails de vídeos <br />
            em um{" "}
            <span className={`text-red-500`}>
              click
              <span>
                <MousePointerClick className="inline-block w-6 h-6 -ml-1 mt-4" />
              </span>
            </span>
          </h1>
          <p className="mb-8 leading-relaxed text-wrap text-muted-foreground">
            Viu uma thumb divertida ou interessante? <br />
            Insira o link do vídeo e baixe a thumbnail em um instante.
          </p>
          <div className="flex w-full md:justify-start justify-center items-end">
            <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
              <input
                type="text"
                id="hero-field"
                name="hero-field"
                placeholder="Link do vídeo"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                className="w-full rounded border bg-opacity-50 focus:ring-2  focus:bg-transparent  text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <button
              onClick={handleClick}
              className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
            >
              Buscar
            </button>
          </div>

          <div className="flex items-center mt-3 ml-2">
            {Array.from({ length: 7 }, (_, i) => (
              <img
                alt="team"
                className="w-8 h-8 bg-gray-100 object-cover object-center rounded-full -ml-2"
                src={`https://i.pravatar.cc/150?img=${i}`}
                key={i}
              />
            ))}
            <div className="ml-2">
              <p className="text-sm  text-gray-500 ">
                +12k pessoas já estão usando
              </p>
            </div>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/hero-thumb.jpg"
          />
        </div>
      </div>
    </section>
  );
}

// <div className="container mx-auto w-full flex justify-between py-6 mt-28">
//   <div className="flex flex-col gap-4 w-1/2">
//     <h1 className="text-4xl font-bold">My Catchy Headline</h1>
//     <p className="text-lg">
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
//       tristique, nisl vel ultricies aliquet, lorem justo aliquam nisi, sit
//       amet ullamcorper nisi nisl euismod.
//     </p>
//   </div>
//   <div className="object-cover w-1/2 h-full">
//     <img src="/thumb.svg" alt="thumb" />
//   </div>
// </div>
