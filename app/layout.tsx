import Header from "./Header";
import Providers from "./Providers";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Info Stream",
  description:
    "Stay informed with InfoStream, your trusted source for breaking news, in-depth analysis, and trending stories from around the world. Get real-time updates on politics, technology, entertainment, and more. Download the InfoStream app now to stay connected to the latest events and stories shaping our world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="justify-center bg-gray-100 dark:bg-gray-800 transition-all duration-700">
        <Providers attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <div className="pt-36 px-4 md:mx-40">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
