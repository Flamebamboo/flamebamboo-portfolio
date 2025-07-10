import type { Metadata } from "next";
import { ThemeProvider } from "@/contexts/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "flamebamboo.xyz",
  description: "Full-stack developer, content creator dream tech entrepenuer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playwrite+DE+Grund:wght@100..400&display=swap" rel="stylesheet" />
      </head>
      <body
        className="antialiased bg-white dark:bg-gray-950 text-black dark:text-white"
        style={{
          fontFamily: "Playwrite DE Grund, cursive",
          cursor: "url('/Cursor.svg') 4 4, pointer",
        }}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
