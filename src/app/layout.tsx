import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/layout/ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "System|Control|Assistant",
  description: "SYSTEM | CONTROL | ASSISTANT avec panneaux coulissants",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="h-full dark">
      <body className={`${inter.className} h-full m-0 p-0 overflow-hidden theme-transition`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
