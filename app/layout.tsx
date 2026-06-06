import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import TopLoader from '@/components/loader';
import { NavigationProvider } from '@/components/navigation-provider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Majeed Builders | Premier Construction Company in Islamabad',
    template: '%s | Majeed Builders',
  },
  description:
    'Majeed Builders is a leading construction company in Islamabad, Pakistan. Specializing in residential and commercial construction, renovation, and project management since 2010.',
  keywords: [
    'construction company Islamabad',
    'builders Pakistan',
    'residential construction Islamabad',
    'commercial construction Pakistan',
    'Majeed Builders',
    'building contractors Islamabad',
    'renovation Islamabad',
    'construction services Pakistan',
  ],
  authors: [{ name: 'Majeed Builders' }],
  creator: 'Majeed Builders',
  publisher: 'Majeed Builders',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: 'https://majeedbuilders.pk',
    siteName: 'Majeed Builders',
    title: 'Majeed Builders | Premier Construction Company in Islamabad',
    description:
      'Building excellence across Islamabad since 2010. Residential and commercial construction, renovation, and project management.',
  },
  twitter: {
    card: 'summary',
    title: 'Majeed Builders | Premier Construction Company in Islamabad',
    description:
      'Building excellence across Islamabad since 2010. Residential and commercial construction, renovation, and project management.',
  },
  alternates: {
    canonical: 'https://majeedbuilders.pk',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-stone-50`}>
        <NavigationProvider>
          <TopLoader />
          <Header />
          <main>{children}</main>
          <Footer />
        </NavigationProvider>
      </body>
    </html>
  );
}
