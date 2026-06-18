import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lumnia - Organisation douce et intelligente",
  description:
    "Lumnia rassemble agenda, repas, sport, communauté, covoiturage et assistant IA pour organiser le quotidien sans pression.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
