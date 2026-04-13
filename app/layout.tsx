import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blog de Ciência de Dados | Lucas Winter",
  description:
    "Um blog em Next.js sobre ciência de dados, machine learning, visualização e decisões orientadas por dados."
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
