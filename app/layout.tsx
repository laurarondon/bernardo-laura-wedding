import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bernardo & Laura · 05.06.2027",
  description: "Bernardo & Laura — Valencia, 5 de junho de 2027",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
