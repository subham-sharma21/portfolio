import Link from 'next/link'
import { HackerText } from '@/components/hacker-text'
import { Home, ArrowLeft } from 'lucide-react'

export const metadata = {
  title: '404 - Page Not Found | Subham Sharma',
  description: 'The requested page could not be found.',
}

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="space-y-2">
          <p className="text-sm font-mono uppercase tracking-widest text-primary">
            Error 404
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
            <HackerText text="Page Not Found" trigger="mount" />
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed pt-2">
            The page you are looking for might have been moved, renamed, or is temporarily offline.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/projects"
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-border bg-card text-foreground font-medium text-sm hover:bg-muted transition-colors inline-flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            View Projects
          </Link>
        </div>
      </div>
    </div>
  )
}
