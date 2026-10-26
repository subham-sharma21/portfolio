'use client'

import Link from 'next/link'
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Extras', href: '/extras' },
  { name: 'Contact', href: '/contact' },
]

function BehanceIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-4.726 3-3.21 0-5.46-2.38-5.46-5.86 0-3.34 2.22-5.74 5.34-5.74 3.09 0 5.09 2.28 4.98 5.75h-7.39c.07 1.77 1.2 2.87 2.87 2.87 1.34 0 2.12-.66 2.45-1.55l1.936.53zm-4.746-6.1c-1.39 0-2.31.95-2.52 2.37h4.89c-.06-1.37-.93-2.37-2.37-2.37zM7.34 11.23c1.37-.41 2.3-1.47 2.3-2.93 0-2.35-1.87-3.8-4.74-3.8H0v15h5.18c3.27 0 5.28-1.63 5.28-4.32 0-1.89-1.28-3.36-3.12-3.95zm-4.34-4.2h1.9c1.47 0 2.24.67 2.24 1.83 0 1.22-.84 1.9-2.31 1.9H3V7.03zm2.25 9.97H3v-4.17h2.36c1.61 0 2.46.78 2.46 2.07 0 1.36-.88 2.1-2.57 2.1z" />
    </svg>
  )
}

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/subham-sharma21',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/subhamsharma1421',
    icon: Linkedin,
  },
  {
    name: 'Behance',
    href: 'https://www.behance.net/subhamsharma',
    icon: BehanceIcon,
  },
  {
    name: 'Email',
    href: 'mailto:sharmasubham.1302@gmail.com',
    icon: Mail,
  },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-border/40 bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-8">
          {/* Branding & Tagline */}
          <div className="space-y-2">
            <Link
              href="/"
              className="text-lg font-bold tracking-tight text-foreground hover:text-primary transition-colors"
            >
              Subham Sharma
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Software Engineer at Cognizant. Crafting scalable frontend architecture, modern web apps, and refined digital experiences.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:text-center space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Navigation
            </h3>
            <ul className="flex flex-wrap md:justify-center gap-x-6 gap-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:text-right space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Connect
            </h3>
            <div className="flex md:justify-end items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    aria-label={social.name}
                    className="p-2 rounded-lg border border-border/40 text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-card transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Subham Sharma. All rights reserved.</p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border/40 text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-card transition-all duration-200"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
