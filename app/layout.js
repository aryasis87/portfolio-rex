import "./globals.css";
import { Inter, Anton, Space_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const anton = Anton({ variable: "--font-anton", subsets: ["latin"], weight: "400" });
const spaceMono = Space_Mono({ variable: "--font-space-mono", subsets: ["latin"], weight: ["400", "700"] });

const __jsonld = {"@context":"https://schema.org","@type":"ProfilePage","mainEntity":{"@type":"Person","name":"Rex","jobTitle":"Graphic Designer & Front-end Developer","url":"https://rex.pintuweb.com","inLanguage":"en"}};

export const metadata = {
  metadataBase: new URL("https://rex.pintuweb.com"),
  title: "Rex — Graphic Designer & Front-end Dev",
  description: "Portfolio of Rex: bold, high-contrast neo-brutalist graphic design & front-end development.",
  applicationName: "Rex",
  keywords: ["graphic designer", "front-end developer", "neo-brutalism", "portfolio", "bold design"],
  authors: [{ name: "Rex" }],
  creator: "Rex",
  publisher: "Rex",
  alternates: { canonical: "https://rex.pintuweb.com" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rex.pintuweb.com",
    siteName: "Rex",
    title: "Rex — Graphic Designer & Front-end Dev",
    description: "Portfolio of Rex: bold, high-contrast neo-brutalist graphic design & front-end development.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Rex — Graphic Designer & Front-end Dev" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rex — Graphic Designer & Front-end Dev",
    description: "Portfolio of Rex: bold, high-contrast neo-brutalist graphic design & front-end development.",
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${anton.variable} ${spaceMono.variable} antialiased`}>
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
