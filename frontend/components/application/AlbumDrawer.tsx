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
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { useAlbumContext } from "@/context/album.context";
import { convertToISOString } from "@/lib/convertToISOString";
import { Album } from "@/interfaces/album";
import { convertFromISOString } from "@/lib/convertFromISOString";

export function AlbumDrawer({ album }: { album: Album }) {
  const { fetchAlbums } = useAlbumContext();
  const [name, setName] = useState(album.name);
  const [artist, setArtist] = useState(album.artist);
  const [releaseDate, setReleaseDate] = useState(
    convertFromISOString(album.releaseDate)
  );

  const submitHandler = (id: number) => {
    $.ajax({
      url: `http://localhost:3001/album/${id}`,
      method: "PATCH",
      data: JSON.stringify({
        name,
        artist,
        releaseDate: convertToISOString(releaseDate),
      }),
      contentType: "application/json",
      dataType: "json",
      success: () => {
        fetchAlbums();
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

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" aria-label="edit_data">
          <Edit2 className=" h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Editar Album</SheetTitle>
          <SheetDescription>
            Faça mudanças em seus Albums aqui. Clique em salvar quando estiver
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
            <Label htmlFor="releaseDate" className="text-right">
              Data de lançamento
            </Label>
            <Input
              id="releaseDate"
              value={releaseDate}
              onChange={(e) => setReleaseDate(e.target.value)}
              className="col-span-3"
              placeholder="dd/mm/aaaa"
            />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button
              onClick={() => {
                submitHandler(album.id);
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
