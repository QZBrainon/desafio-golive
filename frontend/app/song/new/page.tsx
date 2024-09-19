"use client";
import { NewSongForm } from "@/components/application/NewSongForm";

export default function NewSongPage() {
  return (
    <div className="container mx-auto w-full py-6 gap-3 mt-28 flex-grow flex justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Do seu jeito</h1>
        <p className="text-muted-foreground">
          Sinta a liberdade de criar sua própria música.
        </p>
        <NewSongForm />
      </div>
    </div>
  );
}
