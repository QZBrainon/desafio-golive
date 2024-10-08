"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import $ from "jquery";
import { Album } from "@/interfaces/album"; // Adjust the import according to your structure

interface AlbumContextType {
  albums: Album[];
  setAlbums: React.Dispatch<React.SetStateAction<Album[]>>;
  fetchAlbums: () => void;
}

const AlbumContext = createContext<AlbumContextType | undefined>(undefined);

export const AlbumProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [albums, setAlbums] = useState<Album[]>([]);

  const fetchAlbums = () => {
    $.ajax({
      url: "http://localhost:3001/album",
      method: "GET",
      success: (data: Album[]) => {
        setAlbums(data.filter((album) => !album?.deleted));
      },
      error: (err) => {
        console.error("Error fetching data:", err);
      },
    });
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  return (
    <AlbumContext.Provider value={{ albums, setAlbums, fetchAlbums }}>
      {children}
    </AlbumContext.Provider>
  );
};

export const useAlbumContext = () => {
  const context = useContext(AlbumContext);
  if (!context) {
    throw new Error("useAlbumContext must be used within an AlbumProvider");
  }
  return context;
};
