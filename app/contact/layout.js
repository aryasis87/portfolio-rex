export const metadata = {
  title: { default: 'Contact', template: '%s — Rex' },
  description: 'Send a short note about your project. This is a portfolio template, so the form does not send anything.',
  alternates: { canonical: '/contact' },
};

export default function Layout({ children }) {
  return children;
}
