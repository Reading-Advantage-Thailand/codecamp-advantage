import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "Codecamp Advantage",
  description: "Learn Full-Stack Development with AI-powered personalized learning",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>
          <div className="min-h-screen bg-gray-100 flex flex-col">
            {children}
          </div>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
