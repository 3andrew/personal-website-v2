import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Andrew Lin',
  description:
    'Personal site and portfolio of Andrew Lin, software engineer and third-year CS student at the University of Waterloo.',
  keywords:
    'Andrew Lin, software engineer, portfolio, University of Waterloo, UWaterloo, full-stack developer',
  authors: [{ name: 'Andrew Lin', url: 'https://andrewlin.ca' }],
  openGraph: {
    title: 'Andrew Lin – Software Engineer',
    description:
      'Projects, experience and contact info for Andrew Lin, full-stack developer.',
    url: 'https://andrewlin.ca',
    siteName: 'Andrew Lin',
  },
  robots: 'index, follow',
  alternates: { canonical: 'https://andrewlin.ca' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <noscript>
          <style>{`
            canvas { display: none !important; }
            .no-js-fallback { display:block; }
          `}</style>
          <div class="no-js-fallback bg-zinc-900 text-slate-200 p-8">
            <h1 class="text-2xl font-bold">Andrew Lin</h1>
            <p class="mt-2">
              Software Engineer &amp; CS student @ University&nbsp;of&nbsp;Waterloo
            </p>
            <p class="mt-4">
              Contact&nbsp;me:&nbsp;
              <a href="mailto:adlin@uwaterloo.ca" class="underline">
                adlin@uwaterloo.ca
              </a>
            </p>
          </div>
        </noscript>
        <Script id="schema-person" type="application/ld+json" strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Andrew Lin",
              "jobTitle": "Software Engineer & Computer Science Student",
              "affiliation": {
                "@type": "Organization",
                "name": "University of Waterloo"
              },
              "sameAs": [
                "https://github.com/3andrew",
                "https://www.linkedin.com/in/andrewlin2/"
              ],
              "url": "https://andrewlin.ca"
            })
          }} />
      </body>
    </html>
  );
}
