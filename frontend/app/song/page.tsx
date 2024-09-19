"use client";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import SongTable from "@/components/application/SongTable";

export default function MusicPage() {
  return (
    <div className="container mx-auto w-full py-6 gap-3 mt-28 flex-grow">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Músicas</h1>
          <p className="text-muted-foreground">
            Confira suas músicas favoritas
          </p>
        </div>
        <Link href="/song/new">
          <Button variant="default" aria-label="add_player">
            <PlusIcon className="mr-2 h-4 w-4" />
            Adicionar música
          </Button>
        </Link>
      </div>
      <SongTable />
    </div>
  );
}
