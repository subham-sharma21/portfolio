import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { GridBackground } from '@/components/grid-background'
import { Navigation } from '@/components/navigation'
import { CommandPalette } from '@/components/command-palette'
import { Analytics } from '@vercel/analytics/next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Developer Portfolio',
  description: 'A premium developer portfolio showcasing modern web development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <GridBackground />
        <Navigation />
        <CommandPalette />
        <main className="pt-16">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  )
}