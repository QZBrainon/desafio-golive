"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import $ from "jquery";
import { Edit2 } from "lucide-react";
import { useState, useEffect } from "react";
import { Album } from "@/interfaces/album";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Song } from "@/interfaces/song";
import { convertFromISOString } from "@/lib/convertFromISOString";
import { useSongContext } from "@/context/song.context";
import { toast } from "@/hooks/use-toast";

interface SheetDrawerProps<T> {
  type: T;
}

export function SheetDrawer({
  type,
  song,
}: {
  type: SheetDrawerProps<string>["type"];
  song: Song;
}) {
  const { fetchSongs } = useSongContext();
  const [albums, setAlbums] = useState<Album[]>([]);
  const [name, setName] = useState(song.name);
  const [artist, setArtist] = useState(song.artist);
  const [releaseDate, setReleaseDate] = useState(song.releaseDate);
  const [albumId, setAlbumId] = useState<number | null>(null);

  const submitHandler = (id: number) => {
    $.ajax({
      url: `http://localhost:3001/song/${id}`,
      method: "PATCH",
      data: JSON.stringify({
        id,
        name,
        artist,
        releaseDate,
        albumId,
      }),
      contentType: "application/json",
      dataType: "json",
      success: () => {
        fetchSongs();
        toast({
          title: "Sucesso",
          description: "Sua música foi alterada com sucesso!",
        });
      },
      error: (err) => {
        console.error("Error fetching data:", err);
        toast({
          title: "Algo deu errado",
          description: "Não foi possível alterar sua música.",
          variant: "destructive",
        });
      },
    });
  };

  useEffect(() => {
    $.ajax({
      url: "http://localhost:3001/album",
      method: "GET",
      success: (data: Album[]) => {
        setAlbums(data);
      },
      error: (err) => {
        console.error("Error fetching data:", err);
      },
    });
  }, []);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" aria-label="edit_data">
          <Edit2 className=" h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Editar {type}</SheetTitle>
          <SheetDescription>
            Faça mudanças em sua {type} aqui. Clique em salvar quando estiver
            pronto.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nome
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="artist" className="text-right">
              Artista
            </Label>
            <Input
              id="artist"
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="artist" className="text-right">
              Data de lançamento
            </Label>
            <Input
              id="artist"
              value={convertFromISOString(releaseDate)}
              onChange={(e) => setReleaseDate(e.target.value)}
              className="col-span-3"
              placeholder="dd/mm/aaaa"
            />
          </div>
          {type === "música" && (
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="album" className="text-right">
                Álbum
              </Label>
              <Select onValueChange={(value) => setAlbumId(Number(value))}>
                <SelectTrigger className="w-[248px]">
                  <SelectValue placeholder="Selecione um álbum" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {albums.map((album) => (
                      <SelectItem key={album.id} value={String(album.id)}>
                        {album.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          )}
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button
              onClick={() => {
                submitHandler(song.id);
              }}
            >
              Salvar alterações
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
