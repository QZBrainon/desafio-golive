import { Song } from "./song";

export interface Album {
  id: number;
  name: string;
  artist: string;
  releaseDate: string;
  deleted: boolean;
  createdAt: string;
  updatedAt: string;
  songs?: Song[];
}
