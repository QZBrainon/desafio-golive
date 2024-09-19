"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAlbumContext } from "@/context/album.context";
import { convertFromISOString } from "@/lib/convertFromISOString";
import { AlbumDrawer } from "./AlbumDrawer";
import { DeleteAlert } from "./DeleteAlert";

export default function AlbumList() {
  const { albums } = useAlbumContext();

  return (
    <div className=" mt-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {albums.map((album, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="bg-primary p-4">
              <div className="flex justify-between items-center">
                <CardTitle className="text-primary-foreground">
                  {album.name}
                </CardTitle>
                <div className="flex space-x-2">
                  <AlbumDrawer album={album} />
                  <DeleteAlert id={album.id} type="album" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <p className="font-semibold">{album.artist}</p>
              <p className="text-sm text-muted-foreground">
                Released: {convertFromISOString(album.releaseDate)}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
