import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';
import 'leaflet/dist/leaflet.css';
import { siteMetadata } from '@/app/metadata';

const inter = Inter({ subsets: ['latin'] });

// eslint-disable-next-line react-refresh/only-export-components
export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="uaG-e_NkOuXNQMqXLlZxz2-J7JsM3-1J_HbgdbAkzZU"
        />
        <link rel="icon" type="image/png" href="/logo-IQIVN.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
