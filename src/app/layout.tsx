import HeaderPage from "@/components/HeaderPage";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextAuthProvider } from "@/components/NextAuthProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "my-personal-blog",
  description: "My personal blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-[80rem] min-h-screen bg-slate-100 mx-auto">
          <NextAuthProvider>
            <Toaster
              position="top-center"
              reverseOrder={false}
              gutter={8}
              containerClassName=""
              containerStyle={{}}
              toastOptions={{}}
            />
            <HeaderPage />

            {children}
          </NextAuthProvider>
        </div>
      </body>
    </html>
  );
}
