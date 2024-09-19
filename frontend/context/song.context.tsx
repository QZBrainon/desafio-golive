"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import $ from "jquery";
import { Song } from "@/interfaces/song";

interface SongContextType {
  songs: Song[];
  setSongs: React.Dispatch<React.SetStateAction<Song[]>>;
  fetchSongs: () => void;
}

const SongContext = createContext<SongContextType | undefined>(undefined);

export const SongProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [songs, setSongs] = useState<Song[]>([]);

  const fetchSongs = () => {
    $.ajax({
      url: "http://localhost:3001/song",
      method: "GET",
      success: (data: Song[]) => {
        setSongs(data.filter((song) => !song.deleted));
      },
      error: (err) => {
        console.error("Error fetching data:", err);
      },
    });
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <SongContext.Provider value={{ songs, setSongs, fetchSongs }}>
      {children}
    </SongContext.Provider>
  );
};

export const useSongContext = () => {
  const context = useContext(SongContext);
  if (!context) {
    throw new Error("useSongContext must be used within a SongProvider");
  }
  return context;
};
