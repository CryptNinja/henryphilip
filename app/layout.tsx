import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const incoming = await headers();
  const host = incoming.get("host") ?? "localhost:3000";
  const protocol = host.includes("localhost") ? "http" : "https";
  const image = `${protocol}://${host}/og-curiosity.png`;

  return {
    title: "Henry Philip | Virtual Assistant & Operations Specialist",
    description:
      "Executive support, operations, marketing, and project coordination for ambitious teams worldwide.",
    openGraph: {
      title: "What could your week look like with the right support?",
      description: "Virtual assistance, operations, marketing, and project delivery.",
      images: [{ url: image, width: 1792, height: 909, alt: "Henry Philip portfolio" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "What could your week look like with the right support?",
      description: "Virtual assistance, operations, marketing, and project delivery.",
      images: [image],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
