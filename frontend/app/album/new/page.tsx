"use client";

import { NewAlbumForm } from "@/components/application/NewAlbumForm";

export default function NewAlbumPage() {
  return (
    <div className="container mx-auto w-full py-6 gap-3 mt-28 flex-grow flex justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Albums</h1>
        <p className="text-muted-foreground">
          Crie novos álbuns para seus músicos favoritos.
        </p>
        <NewAlbumForm />
      </div>
    </div>
  );
}
