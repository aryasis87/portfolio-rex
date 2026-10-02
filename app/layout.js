import "./globals.css";
import { Inter, Anton, Space_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const anton = Anton({ variable: "--font-anton", subsets: ["latin"], weight: "400" });
const spaceMono = Space_Mono({ variable: "--font-space-mono", subsets: ["latin"], weight: ["400", "700"] });

const __jsonld = {"@context":"https://schema.org","@type":"WebSite","name":"Rex — Graphic Designer & Front-end Dev","description":"Portfolio template for Rex, a fictional graphic designer and front-end developer: loud neo-brutalist case studies that link to six live demo sites, plus articles on opening hours, radio schedules, and liner notes.","inLanguage":"en"};

export const metadata = {
  metadataBase: new URL("https://portfolio-rex-zeta.vercel.app"),
  title: { default: "Rex — Graphic Designer & Front-end Dev", template: "%s — Rex" },
  description: "Portfolio template for Rex, a fictional graphic designer and front-end developer: loud neo-brutalist case studies that link to six live demo sites, plus articles on opening hours, radio schedules, and liner notes.",
  applicationName: "Rex",
  keywords: ["graphic designer", "front-end developer", "neo-brutalism", "portfolio", "bold design"],
  authors: [{ name: "Rex" }],
  creator: "Rex",
  publisher: "Rex",
  alternates: { canonical: "https://portfolio-rex-zeta.vercel.app" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-rex-zeta.vercel.app",
    siteName: "Rex",
    title: "Rex — Graphic Designer & Front-end Dev",
    description: "Portfolio template for Rex, a fictional graphic designer and front-end developer: loud neo-brutalist case studies that link to six live demo sites, plus articles on opening hours, radio schedules, and liner notes.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Rex — Graphic Designer & Front-end Dev" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rex — Graphic Designer & Front-end Dev",
    description: "Portfolio template for Rex, a fictional graphic designer and front-end developer: loud neo-brutalist case studies that link to six live demo sites, plus articles on opening hours, radio schedules, and liner notes.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${anton.variable} ${spaceMono.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
          <ThemeToggle />
        </ThemeProvider>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
