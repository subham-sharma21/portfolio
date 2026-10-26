'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Search, Sun, Moon } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Extras', href: '/extras' },
  { name: 'Contact', href: '/contact' },
]

const statusOptions = [
  { text: 'Available for work', color: 'bg-emerald-500' },
  { text: 'Busy', color: 'bg-amber-500' },
  { text: 'Do not disturb', color: 'bg-rose-500' },
  { text: 'Away', color: 'bg-slate-400' },
]

export function Navigation() {
  const pathname = usePathname()
  const [status, setStatus] = useState(statusOptions[0])
  const [isManual, setIsManual] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [mounted, setMounted] = useState(false)
  const manualTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem('theme') as 'dark' | 'light' | null
    if (saved) {
      setTheme(saved)
      document.documentElement.classList.remove('dark', 'light')
      document.documentElement.classList.add(saved)
    } else if (document.documentElement.classList.contains('light')) {
      setTheme('light')
    }
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    localStorage.setItem('theme', nextTheme)
    document.documentElement.classList.remove('dark', 'light')
    document.documentElement.classList.add(nextTheme)
  }

  useEffect(() => {
    if (isManual) return // Don't auto-update if manually set

    const updateStatus = () => {
      const hour = new Date().getHours()
      if (hour >= 9 && hour < 18) {
        setStatus({ text: 'Available for work', color: 'bg-emerald-500' })
      } else if (hour >= 18 && hour < 22) {
        setStatus({ text: 'Available (Evening)', color: 'bg-amber-500' })
      } else {
        setStatus({ text: 'Currently offline', color: 'bg-rose-500' })
      }
    }

    updateStatus()
    const interval = setInterval(updateStatus, 60000)
    return () => clearInterval(interval)
  }, [isManual])

  // Close mobile menu on pathname change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isMobileMenuOpen])

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (manualTimeoutRef.current) {
        clearTimeout(manualTimeoutRef.current)
      }
    }
  }, [])

  const toggleStatus = () => {
    const currentIndex = statusOptions.findIndex((s) => s.text === status.text)
    const nextIndex = (currentIndex + 1) % statusOptions.length
    setStatus(statusOptions[nextIndex])
    setIsManual(true)

    if (manualTimeoutRef.current) {
      clearTimeout(manualTimeoutRef.current)
    }

    // Reset to auto after 1 hour
    manualTimeoutRef.current = setTimeout(() => setIsManual(false), 3600000)
  }

  const openCommandPalette = () => {
    document.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'k',
        ctrlKey: true,
        bubbles: true,
      })
    )
  }

  return (
    <>
      <nav
        aria-label="Main navigation"
        className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 gap-2">
            {/* Status indicator button */}
            <button
              type="button"
              onClick={toggleStatus}
              className="min-h-[44px] min-w-[44px] inline-flex items-center gap-2 px-2.5 sm:px-3 py-2 rounded-full hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors cursor-pointer text-left max-w-[170px] xs:max-w-[210px] sm:max-w-none"
              aria-label={`Current status: ${status.text}. Click to change status`}
            >
              <span className="relative flex h-2.5 w-2.5 shrink-0" aria-hidden="true">
                <span className={cn('animate-ping absolute inline-flex h-full w-full rounded-full opacity-75', status.color)} />
                <span className={cn('relative inline-flex rounded-full h-2.5 w-2.5', status.color)} />
              </span>
              <span className="text-xs sm:text-sm font-medium text-foreground truncate">
                {status.text}
              </span>
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={cn(
                      'min-h-[44px] min-w-[44px] inline-flex items-center justify-center px-3.5 py-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                      isActive
                        ? 'text-foreground font-semibold bg-secondary/80'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/40'
                    )}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </div>

            {/* Right actions: Command Palette trigger & Mobile menu toggle */}
            <div className="flex items-center gap-1 sm:gap-2 shrink-0">
              <button
                type="button"
                onClick={openCommandPalette}
                className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center gap-1.5 px-2.5 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors cursor-pointer"
                aria-label="Open command palette (Press Command K)"
              >
                <Search className="h-4 w-4" aria-hidden="true" />
                <kbd className="hidden sm:inline-flex pointer-events-none h-5 select-none items-center gap-1 rounded border border-border bg-muted/80 px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </button>

              {/* Theme toggle button */}
              <button
                type="button"
                onClick={toggleTheme}
                className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors cursor-pointer"
                aria-label="Toggle theme"
              >
                {mounted && theme === 'light' ? (
                  <Moon className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <Sun className="h-4 w-4" aria-hidden="true" />
                )}
              </button>

              {/* Mobile menu hamburger toggle */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                className="md:hidden min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors cursor-pointer"
                aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-navigation-drawer"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <Menu className="h-5 w-5" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Responsive Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="mobile-drawer-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 top-16 bg-background/80 backdrop-blur-sm z-30 md:hidden"
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.div
              key="mobile-drawer-content"
              id="mobile-navigation-drawer"
              role="region"
              aria-label="Mobile Navigation"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="fixed top-16 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b border-border shadow-xl md:hidden overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-4 py-4 space-y-4">
                <nav aria-label="Mobile Navigation Links" className="space-y-1">
                  {navigation.map((item) => {
                    const isActive = pathname === item.href
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        aria-current={isActive ? 'page' : undefined}
                        className={cn(
                          'min-h-[44px] w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                          isActive
                            ? 'text-foreground font-semibold bg-secondary/90 border border-border/80'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                        )}
                      >
                        <span>{item.name}</span>
                        {isActive && (
                          <span
                            className="w-2 h-2 rounded-full bg-emerald-500"
                            aria-hidden="true"
                          />
                        )}
                      </Link>
                    )
                  })}
                </nav>

                <div className="pt-3 border-t border-border/60">
                  <div className="text-xs font-medium text-muted-foreground px-1 mb-2.5">
                    Quick status switcher
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {statusOptions.map((opt) => {
                      const isSelected = status.text === opt.text
                      return (
                        <button
                          key={opt.text}
                          type="button"
                          onClick={() => {
                            setStatus(opt)
                            setIsManual(true)
                            if (manualTimeoutRef.current) {
                              clearTimeout(manualTimeoutRef.current)
                            }
                            manualTimeoutRef.current = setTimeout(() => setIsManual(false), 3600000)
                            setIsMobileMenuOpen(false)
                          }}
                          className={cn(
                            'min-h-[44px] flex items-center gap-2 px-3 py-2 rounded-md text-xs font-medium transition-colors text-left border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer',
                            isSelected
                              ? 'border-border bg-secondary/90 text-foreground font-semibold'
                              : 'border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/40'
                          )}
                          aria-label={`Set status to ${opt.text}`}
                        >
                          <span
                            className={cn('w-2 h-2 rounded-full shrink-0', opt.color)}
                            aria-hidden="true"
                          />
                          <span className="truncate">{opt.text}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
