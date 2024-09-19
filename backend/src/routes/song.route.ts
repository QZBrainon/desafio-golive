import { Router } from "express";
import {
  getAllSongsController,
  getSongByIdController,
  createSongController,
  updateSongController,
  deleteSongController,
} from "../controllers/song.js";

const songRouter = Router();

songRouter.get("/", getAllSongsController);
songRouter.get("/:id", getSongByIdController);
songRouter.post("/", createSongController);
songRouter.patch("/:id", updateSongController);
songRouter.delete("/:id", deleteSongController);

export default songRouter;
