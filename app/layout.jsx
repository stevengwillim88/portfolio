import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
import Chat from "@/components/Chat";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

export const metadata = {
  title: "Steven | Portofolio",

  description:
    "My name is Steven, I'm a Senior Software Engineer and I'm passionate whatever I do.",

  author: "Steven Gwillim",
  siteUrl: "https://www.steven.my.id",
  applicationName: "steven",

  keywords: [
    "steven",
    "steve",
    "steve gwillim",
    "gwillim",
    "steven gwillim",
    "next",
    "tailwind",
    "portofolio",
    "react portofolio",
    "steven um",
  ],

  openGraph: {
    type: "website",
    url: "https://www.steven.my.id",
    title: "steven | Portofolio",
    site_name: "steven | Portofolio",
    description: "My name is steven, This is my portofolio website.",
    width: 1200,
    height: 630,
    images: [
      {
        url: "/og-image-rev.png",
        alt: "Steven Portofolio",
      },
    ],
    site_name: "Steven | Portofolio",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-arp=""	>
      <body>
        <ClientTopProgressBar />
        <Navbar />
        {children}
        <Chat />
        <Analytics />
      </body>
    </html>
  );
}
