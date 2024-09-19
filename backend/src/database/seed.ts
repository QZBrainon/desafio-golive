import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  await prisma.album.createMany({
    data: [
      {
        name: "Thriller",
        artist: "Michael Jackson",
        releaseDate: new Date("1982-11-30"),
      },
      {
        name: "Back in Black",
        artist: "AC/DC",
        releaseDate: new Date("1980-07-25"),
      },
      {
        name: "Dark Side of the Moon",
        artist: "Pink Floyd",
        releaseDate: new Date("1973-03-01"),
      },
    ],
  });

  await prisma.song.createMany({
    data: [
      {
        name: "Billie Jean",
        artist: "Michael Jackson",
        releaseDate: new Date("1982-11-30"),
        albumId: 1,
      },
      {
        name: "Beat It",
        artist: "Michael Jackson",
        releaseDate: new Date("1982-11-30"),
        albumId: 1,
      },
      {
        name: "Hells Bells",
        artist: "AC/DC",
        releaseDate: new Date("1980-07-25"),
        albumId: 2,
      },
      {
        name: "You Shook Me All Night Long",
        artist: "AC/DC",
        releaseDate: new Date("1980-07-25"),
        albumId: 2,
      },
      {
        name: "Time",
        artist: "Pink Floyd",
        releaseDate: new Date("1973-03-01"),
        albumId: 3,
      },
      {
        name: "Money",
        artist: "Pink Floyd",
        releaseDate: new Date("1973-03-01"),
        albumId: 3,
      },
      {
        name: "Wish You Were Here",
        artist: "Pink Floyd",
        releaseDate: new Date("1975-09-12"),
      },
    ],
  });

  console.log("Seeding completed!");
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
