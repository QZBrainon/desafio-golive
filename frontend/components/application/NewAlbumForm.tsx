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
import { useAlbumContext } from "@/context/album.context";
import { useState } from "react";
import $ from "jquery";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { convertToISOString } from "@/lib/convertToISOString";

export function NewAlbumForm() {
  const { fetchAlbums } = useAlbumContext();
  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  const router = useRouter();

  const submitHandler = () => {
    $.ajax({
      url: "http://localhost:3001/album",
      method: "POST",
      data: JSON.stringify({
        name,
        artist,
        releaseDate: convertToISOString(releaseDate),
      }),
      contentType: "application/json",
      dataType: "json",
      success: () => {
        toast({
          title: "Sucesso",
          description: "Sua música foi cadastrada com sucesso!",
        });
        fetchAlbums();
        router.push("/album");
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
        <CardTitle>Crie um novo album</CardTitle>
        <CardDescription>
          Insira os dados abaixo e cadastre um novo album em nossa plataforma.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Input
                id="name"
                placeholder="Nome do album"
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
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={submitHandler}>Criar album</Button>
      </CardFooter>
    </Card>
  );
}
