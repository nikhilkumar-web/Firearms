import { Gabarito, Roboto, Calistoga } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const gabarito = Gabarito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-gabarito",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-roboto",
  display: "swap",
});

const calistoga = Calistoga({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-calistoga",
  display: "swap",
});

export const metadata = {
  title: "American Firearms Network | Firearms Training Florida",
  description: "Professional firearms training in Florida focused on safety, skill development, legal education, and real-world defensive proficiency.",
  icons: {
    icon: "/images/logo/favicon.png",
    shortcut: "/images/logo/favicon.png",
    apple: "/images/logo/favicon.png",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${gabarito.variable} ${roboto.variable} ${calistoga.variable}`}>
      <body suppressHydrationWarning className="overflow-x-hidden font-roboto bg-[#FFFFFF] text-[#000000]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
