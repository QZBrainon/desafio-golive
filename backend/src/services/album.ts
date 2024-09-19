import { CreateAlbumDto, UpdateAlbumDto } from "../../types/album.dto.js";
import prisma from "../database/client.js";
import ERRORS from "../middlewares/error.middleware.js";

export const getAllAlbums = async () => {
  const albums = await prisma.album.findMany({
    include: {
      songs: {
        where: {
          deleted: false,
        },
      },
    },
  });
  return albums;
};

export const getAlbumById = async (id: number) => {
  const album = await prisma.album.findUnique({
    where: {
      id,
      deleted: false,
    },
    include: {
      songs: {
        where: {
          deleted: false,
        },
      },
    },
  });
  if (!album) {
    throw new Error(ERRORS.NotFoundError);
  }
  return album;
};

export const createAlbum = async (album: CreateAlbumDto) => {
  try {
    const newAlbum = await prisma.album.create({
      data: album,
    });
    return newAlbum;
  } catch (error) {
    throw new Error(ERRORS.P2025);
  }
};

export const updateAlbum = async (id: number, album: UpdateAlbumDto) => {
  try {
    const updatedAlbum = await prisma.album.update({
      where: {
        id,
      },
      data: album,
    });
    return updatedAlbum;
  } catch (error) {
    throw new Error(ERRORS.P2025);
  }
};

export const deleteAlbum = async (id: number) => {
  try {
    const deletedAlbum = await prisma.album.update({
      where: {
        id,
      },
      data: {
        deleted: true,
      },
    });
    return deletedAlbum;
  } catch (error) {
    throw new Error(ERRORS.P2025);
  }
};
