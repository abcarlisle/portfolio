import "@/styles/globals.css";
import clsx from "clsx";
import { Metadata } from "next";

import { Providers } from "./providers";

import { fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

//export const viewport: Viewport = {
//  themeColor: [
//    { media: "(prefers-color-scheme: light)", color: "white" },
//    { media: "(prefers-color-scheme: dark)", color: "black" },
//  ],
//};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "h-full bg-midnight-900 bg-gradient-to-l font-sans antialiased",

          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="flex flex-col">
            <main className="mx-auto max-w-full px-20">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
