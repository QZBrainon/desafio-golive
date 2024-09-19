import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Header from "@/components/application/Header";
import Footer from "@/components/application/Footer";
import { SongProvider } from "@/context/song.context";
import { AlbumProvider } from "@/context/album.context";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Desafio GoLive",
  description: "Desafio frontend para desenvolvedor Fullstack na GoLive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased flex flex-col min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SongProvider>
            <AlbumProvider>
              <Header />
              {children}
              <Toaster />
              <Footer />
            </AlbumProvider>
          </SongProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
