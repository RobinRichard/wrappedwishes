import type { Metadata } from "next";
import { Fraunces, Nunito_Sans } from "next/font/google";
import { AppContextProvider } from "@/store";
import { Layout } from "@/layout";

import "./globals.css";

const nunito = Nunito_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700"],
});

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "WrappedWishes",
  description: "Personalised gift Personalised gifts for every occasion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${fraunces.variable} light h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <AppContextProvider>
          <Layout>{children}</Layout>
        </AppContextProvider>
      </body>
    </html>
  );
}
