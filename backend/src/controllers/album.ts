import { Request, Response } from "express";
import {
  getAllAlbums,
  getAlbumById,
  createAlbum,
  updateAlbum,
  deleteAlbum,
} from "../services/album.js";
import { CreateAlbumDto, UpdateAlbumDto } from "../../types/album.dto.js";

export const getAllAlbumsController = async (req: Request, res: Response) => {
  const albums = await getAllAlbums();
  res.status(200).json(albums);
};

export const getAlbumByIdController = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  const { id } = req.params;
  const album = await getAlbumById(+id);
  res.status(200).json(album);
};

export const createAlbumController = async (
  req: Request<{}, {}, CreateAlbumDto>,
  res: Response
) => {
  const { name, artist, releaseDate } = req.body;
  const album = await createAlbum({ name, artist, releaseDate });
  res.status(201).json(album);
};

export const updateAlbumController = async (
  req: Request<{ id: string }, {}, UpdateAlbumDto>,
  res: Response
) => {
  const { id } = req.params;
  const { name, artist, releaseDate } = req.body;
  const album = await updateAlbum(+id, { name, artist, releaseDate });
  res.status(200).json(album);
};

export const deleteAlbumController = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  const { id } = req.params;
  const album = await deleteAlbum(+id);
  res.status(200).json(album);
};
