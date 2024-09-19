export interface CreateSongDto {
  name: string;
  artist: string;
  releaseDate: string;
  albumId?: number;
}

export interface UpdateSongDto {
  name?: string;
  artist?: string;
  releaseDate?: string;
  deleted?: boolean;
}
