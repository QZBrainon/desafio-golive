import { CreateSongDto, UpdateSongDto } from "../../types/song.dto.js";
import prisma from "../database/client.js";
import ERRORS from "../middlewares/error.middleware.js";

export const getAllSongs = async () => {
  const songs = await prisma.song.findMany();
  return songs;
};

export const getSongById = async (id: number) => {
  const song = await prisma.song.findUnique({
    where: {
      id,
      deleted: false,
    },
  });
  if (!song) {
    throw new Error(ERRORS.NotFoundError);
  }
  return song;
};

export const createSong = async (song: CreateSongDto) => {
  try {
    const newSong = await prisma.song.create({
      data: song,
    });
    return newSong;
  } catch (error) {
    throw new Error(ERRORS.P2025);
  }
};

export const updateSong = async (id: number, song: UpdateSongDto) => {
  try {
    const updatedSong = await prisma.song.update({
      where: {
        id,
      },
      data: song,
    });
    return updatedSong;
  } catch (error) {
    throw new Error(ERRORS.P2025);
  }
};

export const deleteSong = async (id: number) => {
  try {
    const deletedSong = await prisma.song.update({
      where: {
        id,
      },
      data: {
        deleted: true,
      },
    });
    return deletedSong;
  } catch (error) {
    throw new Error(ERRORS.P2025);
  }
};

export const getSongByAlbumId = async (albumId: number) => {
  const song = await prisma.song.findMany({
    where: {
      albumId,
      deleted: false,
    },
  });
  return song;
};
