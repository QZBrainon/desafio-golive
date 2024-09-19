export interface CreateAlbumDto {
  name: string;
  artist: string;
  releaseDate: string;
}

export interface UpdateAlbumDto {
  name?: string;
  artist?: string;
  releaseDate?: string;
  deleted?: boolean;
}
