import { Router } from "express";
import {
  getAllAlbumsController,
  getAlbumByIdController,
  createAlbumController,
  updateAlbumController,
  deleteAlbumController,
} from "../controllers/album.js";

const albumRouter = Router();

albumRouter.get("/", getAllAlbumsController);
albumRouter.get("/:id", getAlbumByIdController);
albumRouter.post("/", createAlbumController);
albumRouter.patch("/:id", updateAlbumController);
albumRouter.delete("/:id", deleteAlbumController);

export default albumRouter;
