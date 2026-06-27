import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';

export const metadata: Metadata = {
  title: 'Morteza Mogharrab — Software Architect',
  description:
    "Software architect building AI-powered operational systems for Alberta's industrial sector. Master's in Computing Science, University of Alberta.",
  keywords: [
    'software architect',
    'AI engineer',
    'Calgary',
    'Alberta',
    'industrial software',
    'LangChain',
    'FastAPI',
    'React',
    'EPCM',
    'oil and gas software',
  ],
  openGraph: {
    title: 'Morteza Mogharrab — Software Architect',
    description:
      "Building AI-powered operational systems for Alberta's industrial sector.",
    url: 'https://morteza-mogharrab.github.io',
    siteName: 'Morteza Mogharrab',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morteza Mogharrab — Software Architect',
    description:
      "Building AI-powered operational systems for Alberta's industrial sector.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
