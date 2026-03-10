import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mttech.example.com'),
  title: {
    default: 'Mttech | Agência de Marketing Digital e SEO',
    template: '%s | Mttech'
  },
  description:
    'Agência de marketing digital focada em SEO, criação de sites modernos e estratégias de crescimento para gerar resultados reais.',
  keywords: [
    'marketing digital',
    'SEO',
    'criação de sites',
    'agência digital',
    'Mttech'
  ],
  openGraph: {
    title: 'Mttech | Agência de Marketing Digital e SEO',
    description:
      'SEO, design moderno e estratégias digitais para fazer sua empresa crescer online.',
    url: 'https://mttech.example.com',
    siteName: 'Mttech',
    locale: 'pt_BR',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mttech | Agência de Marketing Digital',
    description:
      'Transformamos sua presença digital em resultados reais com SEO, performance e design moderno.'
  },
  alternates: {
    canonical: '/'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
