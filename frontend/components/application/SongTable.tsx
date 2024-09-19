"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { SheetDrawer } from "./SheetDrawer";
import { useSongContext } from "@/context/song.context";
import { DeleteAlert } from "./DeleteAlert";

export default function SongTable() {
  const { songs } = useSongContext();
  return (
    <div>
      {songs.length > 0 ? (
        <div className="container mx-auto w-full flex justify-between items-center py-6 gap-4 mt-28">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Nome</TableHead>
                <TableHead>Artista</TableHead>
                <TableHead className="text-center">
                  Data de lançamento
                </TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {songs?.map((song) => (
                <TableRow key={song?.id}>
                  <TableCell className="font-medium">{song?.id}</TableCell>
                  <TableCell>{song?.name}</TableCell>
                  <TableCell>{song?.artist}</TableCell>
                  <TableCell className="text-center">
                    {new Date(song?.releaseDate).toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
                  </TableCell>
                  <TableCell className="text-center flex justify-end">
                    <SheetDrawer type="música" song={song} />
                    <DeleteAlert id={song.id} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="text-center mt-10">
          <p className="text-muted-foreground">
            Não existe nenhuma música cadastrada
          </p>
        </div>
      )}
    </div>
  );
}
