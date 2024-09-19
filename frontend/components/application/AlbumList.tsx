"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAlbumContext } from "@/context/album.context";
import { convertFromISOString } from "@/lib/convertFromISOString";
import { Edit2Icon, Trash2Icon } from "lucide-react";

export default function AlbumList() {
  const { albums } = useAlbumContext();

  const handleEdit = (id: number) => {
    // Placeholder for edit functionality
    console.log(`Edit album with id: ${id}`);
  };

  const handleDelete = (id: number) => {
    console.log(`Delete album with id: ${id}`);
  };
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
                  {/* <SheetDrawer type="album" song={album} /> */}
                  <button
                    onClick={() => handleDelete(album.id)}
                    className="text-primary-foreground hover:text-secondary dark:hover:text-secondary-foreground transition-colors p-1 rounded-sm hover:bg-primary-foreground/10 "
                    aria-label={`Delete ${album.name}`}
                  >
                    <Trash2Icon className="h-4 w-4" />
                  </button>
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
