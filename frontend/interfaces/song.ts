export interface Song {
  id: number;
  name: string;
  artist: string;
  releaseDate: string;
  deleted: boolean;
  albumId?: number;
  createdAt: string;
  updatedAt: string;
}
