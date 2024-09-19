"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAlbumContext } from "@/context/album.context";
import { useState } from "react";
import $ from "jquery";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { useSongContext } from "@/context/song.context";

export function NewSongForm() {
  const { albums } = useAlbumContext();
  const { fetchSongs } = useSongContext();
  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [albumId, setAlbumId] = useState<number | null>(null);

  const router = useRouter();

  const submitHandler = () => {
    console.log(
      JSON.stringify({
        name,
        artist,
        releaseDate,
        albumId,
      })
    );
    $.ajax({
      url: "http://localhost:3001/song",
      method: "POST",
      data: JSON.stringify({
        name,
        artist,
        releaseDate: new Date(releaseDate).toISOString(),
        albumId,
      }),
      contentType: "application/json",
      dataType: "json",
      success: () => {
        toast({
          title: "Sucesso",
          description: "Sua música foi cadastrada com sucesso!",
        });
        fetchSongs();
        router.push("/song");
      },
      error: (err) => {
        console.error("Error fetching data:", err);
        toast({
          title: "Algo deu errado",
          description: "Não foi possível cadastrar sua música.",
          variant: "destructive",
        });
      },
    });
  };
  return (
    <Card className="mt-10">
      <CardHeader>
        <CardTitle>Crie uma nova música</CardTitle>
        <CardDescription>
          Insira os dados abaixo e cadastre um novo som em nossa plataforma.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Input
                id="name"
                placeholder="Nome da música"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Input
                id="name"
                placeholder="Nome do artista"
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Input
                id="name"
                placeholder="dd/mm/aaaa"
                value={releaseDate}
                onChange={(e) => setReleaseDate(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Select onValueChange={(value) => setAlbumId(Number(value))}>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Album" />
                </SelectTrigger>
                <SelectContent position="popper">
                  {albums.map((album) => (
                    <SelectItem key={album.id} value={String(album.id)}>
                      {album.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={submitHandler}>Criar música</Button>
      </CardFooter>
    </Card>
  );
}
