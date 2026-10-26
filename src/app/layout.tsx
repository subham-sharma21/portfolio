import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { GridBackground } from '@/components/grid-background'
import { Navigation } from '@/components/navigation'
import { CommandPalette } from '@/components/command-palette'
import { Footer } from '@/components/footer'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ subsets: ['latin'] })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://portfolio-86el.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Subham Sharma — Software Engineer',
    template: '%s | Subham Sharma',
  },
  description:
    'Frontend & Software Engineer specializing in React, Next.js, and TypeScript. Creating scalable applications with exceptional user experiences.',
  keywords: [
    'Subham Sharma',
    'Software Engineer',
    'Frontend Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Portfolio',
  ],
  authors: [{ name: 'Subham Sharma', url: siteUrl }],
  creator: 'Subham Sharma',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'Subham Sharma — Software Engineer',
    description:
      'Frontend & Software Engineer specializing in React, Next.js, and TypeScript. Creating scalable applications with exceptional user experiences.',
    siteName: 'Subham Sharma Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Subham Sharma — Software Engineer',
    description:
      'Frontend & Software Engineer specializing in React, Next.js, and TypeScript. Creating scalable applications with exceptional user experiences.',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t){document.documentElement.classList.remove('dark','light');document.documentElement.classList.add(t);}}catch(e){}})();`,
          }}
        />
      </head>
      <body className={inter.className}>
        <GridBackground />
        <Navigation />
        <CommandPalette />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
