"use client";

import Link from "next/link";
import { Music2Icon, AlbumIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto w-full flex justify-between py-6 mt-28 flex-grow">
      <Link
        href="/song"
        className="p-4 w-full guitar-bg flex-grow cursor-pointer"
      >
        <div className="flex items-center gap-2">
          <h2 className="text-4xl font-bold text-white mb-4">Músicas</h2>
          <Music2Icon className="text-white text-4xl mb-4 h-7 w-7" />
        </div>
      </Link>
      <Link
        href="/album"
        className="p-4 w-full album-bg flex-grow cursor-pointer"
      >
        <div className="flex justify-end items-center gap-2">
          <h2 className="text-4xl font-bold text-white mb-4">Albums</h2>
          <AlbumIcon className="text-white text-4xl mb-4 h-7 w-7" />
        </div>
      </Link>
    </div>
  );
}
