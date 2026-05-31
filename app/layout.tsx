import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RIZK STORE - Premium Luxury Smartphones",
  description:
    "Discover premium luxury smartphones and accessories at RIZK STORE",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-primary text-light">{children}</body>
    </html>
  );
}
