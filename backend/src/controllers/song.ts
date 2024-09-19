import { Request, Response } from "express";
import {
  getAllSongs,
  getSongById,
  createSong,
  updateSong,
  deleteSong,
  getSongByAlbumId,
} from "../services/song.js";
import { CreateSongDto } from "../../types/song.dto.js";

export const getAllSongsController = async (
  req: Request,
  res: Response<any>
) => {
  const songs = await getAllSongs();
  res.status(200).json(songs);
};

export const getSongByIdController = async (
  req: Request<{ id: string }>,
  res: Response<any>
) => {
  const { id } = req.params;
  const song = await getSongById(+id);
  res.status(200).json(song);
};

export const createSongController = async (
  req: Request<{}, {}, CreateSongDto>,
  res: Response<any>
) => {
  const { name, artist, releaseDate, albumId } = req.body;
  const song = await createSong({ name, artist, releaseDate, albumId });
  res.status(201).json(song);
};

export const updateSongController = async (
  req: Request<{ id: string }, {}, CreateSongDto>,
  res: Response<any>
) => {
  const { id } = req.params;
  const { name, artist, releaseDate, albumId } = req.body;
  const song = await updateSong(+id, { name, artist, releaseDate, albumId });
  res.status(200).json(song);
};

export const deleteSongController = async (
  req: Request<{ id: string }>,
  res: Response<any>
) => {
  const { id } = req.params;
  const song = await deleteSong(+id);
  res.status(200).json(song);
};
