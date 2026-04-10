import { Inter, Outfit } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import './App.css';
import './components.css';
import WhatsAppFloat from '../components/WhatsAppFloat';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://froveninnovations.com'),
  title: {
    template: '%s | Froven Innovations',
    default: 'Froven Innovations - Commercial Refrigeration Sales, Rentals & AMC Services',
  },
  description: 'Froven Innovations provides end-to-end commercial refrigeration solutions, equipment rentals, and reliable AMC services across Vasai, Virar, Mumbai, and beyond.',
  keywords: ['Froven', 'Froven Innovations', 'Commercial Refrigeration in Vasai Virar', 'Refrigeration Rentals', 'HORECA Equipment Sales', 'AMC Services', 'Cold Room Sales'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Froven Innovations - Commercial Refrigeration Solutions',
    description: 'Specialists in commercial cooling, offering rentals, sales, and AMC services in Vasai Virar.',
    url: 'https://froveninnovations.com',
    siteName: 'Froven Innovations',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Froven Innovations',
    description: 'Commercial Refrigeration, Rentals & AMC Services.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        <link
          rel="preload"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          as="style"
        />
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body>
        {children}
        <WhatsAppFloat />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </body>
    </html>
  );
}
