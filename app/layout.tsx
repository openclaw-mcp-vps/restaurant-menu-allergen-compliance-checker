import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Menu Allergen Compliance Checker",
  description: "Check restaurant menus for allergen disclosure compliance against FDA requirements. Generate compliance reports and violation alerts instantly."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="92a3ad7b-bc8a-42f4-b301-d5fd14ade40c"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
