import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZUZU",
  description: "Aprendé a pensar como ingeniero de software colaborando con IA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
