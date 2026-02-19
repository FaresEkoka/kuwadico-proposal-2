import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NavigationProvider } from "@/context/NavigationContext";
import { AssetProvider } from "@/context/AssetContext";

const milker = localFont({
  src: "../fonts/Milker.otf",
  variable: "--font-milker",
  display: "swap",
});

const questrial = localFont({
  src: "../fonts/Questrial-Regular.ttf",
  variable: "--font-questrial",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Website & Social Media Proposal | Flex Labs",
  description: "Website and social media proposal for Kuwadico - Grand Heights & Glory Phase II",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    viewportFit: "cover",
  },
  themeColor: "#2ECC71",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full ${milker.variable} ${questrial.variable}`}>
      <body className="h-full">
        <AssetProvider>
          <NavigationProvider>{children}</NavigationProvider>
        </AssetProvider>
      </body>
    </html>
  );
}
