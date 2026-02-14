import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Transport & Déménagement Express — Liège",
  description: "Service de déménagement et transport de meubles/colis à Liège et environs. Prix imbattables, devis gratuit.",
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
