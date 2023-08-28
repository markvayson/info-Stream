import Header from "./Header";
import Providers from "./Providers";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News App",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 p-2 dark:bg-slate-900 transition-all duration-700">
        <Header />
        <div className="">{children}</div>
      </body>
    </html>
  );
}
