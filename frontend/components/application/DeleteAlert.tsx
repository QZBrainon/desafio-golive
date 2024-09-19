"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import $ from "jquery";
import { useSongContext } from "@/context/song.context";
import { toast } from "@/hooks/use-toast";

export function DeleteAlert({ id }: { id: number }) {
  const { fetchSongs } = useSongContext();
  const deleteHandler = (id: number) => {
    $.ajax({
      url: `http://localhost:3001/song/${id}`,
      method: "DELETE",
      success: () => {
        fetchSongs();
        toast({
          title: "Sucesso",
          description: "Sua música foi deletada com sucesso!",
        });
      },
      error: (err) => {
        console.error("Error fetching data:", err);
      },
    });
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="ghost" aria-label="delete_song">
          <Trash2 className="h-4 w-4 " />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Tem certeza que deseja excluir?</AlertDialogTitle>
          <AlertDialogDescription>
            Essa ação não pode ser desfeita.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-500 hover:bg-red-600"
            onClick={() => deleteHandler(id)}
          >
            Excluir
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
