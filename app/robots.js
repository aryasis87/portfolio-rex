export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://portfolio-rex.vercel.app/sitemap.xml",
    host: "https://portfolio-rex.vercel.app",
  };
}
