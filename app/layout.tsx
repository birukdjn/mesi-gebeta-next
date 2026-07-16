import type { Metadata } from "next";
import { Fraunces, Work_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});
const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "500", "600"],
});
const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mesigebeta.com"),
  title: {
    default: "Mesi Gebeta — Restaurant & Lounge",
    template: "%s | Mesi Gebeta",
  },
  description:
    "Mesi Gebeta is a cozy neighborhood restaurant and lounge serving scratch-made dishes, house coffee, and easy evenings. Reserve your table today.",
  keywords: ["Mesi Gebeta", "restaurant", "lounge", "Ethiopian dining", "reservations", "menu", "events"],
  openGraph: {
    title: "Mesi Gebeta — Restaurant & Lounge",
    description:
      "Cozy neighborhood restaurant and lounge serving scratch-made dishes, house coffee, and easy evenings.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fraunces.variable} ${workSans.variable} ${spaceMono.variable} font-body antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
