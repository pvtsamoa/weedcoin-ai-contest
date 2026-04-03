import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Weedcoin OG AI Video Competition",
  description: "420 Year of the Horse Edition — $100 WEEDCOIN Prize Pool. Submit by April 19.",
  openGraph: {
    title: "Weedcoin OG AI Video Competition",
    description: "420 Year of the Horse Edition — $100 WEEDCOIN Prize Pool. Submit by April 19.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
