'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Extras', href: '/extras' },
]

const statusOptions = [
  { text: 'Available for work', color: 'bg-green-500' },
  { text: 'Busy', color: 'bg-yellow-500' },
  { text: 'Do not disturb', color: 'bg-red-500' },
  { text: 'Away', color: 'bg-gray-500' },
]

export function Navigation() {
  const pathname = usePathname()
  const [status, setStatus] = useState(statusOptions[0])
  const [isManual, setIsManual] = useState(false)

  useEffect(() => {
    if (isManual) return // Don't auto-update if manually set
    
    const updateStatus = () => {
      const hour = new Date().getHours()
      if (hour >= 9 && hour < 18) {
        setStatus({ text: 'Available for work', color: 'bg-green-500' })
      } else if (hour >= 18 && hour < 22) {
        setStatus({ text: 'Available (Evening)', color: 'bg-yellow-500' })
      } else {
        setStatus({ text: 'Currently offline', color: 'bg-red-500' })
      }
    }

    updateStatus()
    const interval = setInterval(updateStatus, 60000)
    return () => clearInterval(interval)
  }, [isManual])

  const toggleStatus = () => {
    const currentIndex = statusOptions.findIndex(s => s.text === status.text)
    const nextIndex = (currentIndex + 1) % statusOptions.length
    setStatus(statusOptions[nextIndex])
    setIsManual(true)
    
    // Reset to auto after 1 hour
    setTimeout(() => setIsManual(false), 3600000)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={toggleStatus}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <div className={`w-2 h-2 ${status.color} rounded-full status-pulse`} />
            <span className="text-sm text-muted-foreground">{status.text}</span>
          </button>
          
          <div className="flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  pathname === item.href
                    ? 'text-primary'
                    : 'text-muted-foreground'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          <div className="text-sm text-muted-foreground">
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
              <span className="text-xs">⌘</span>K
            </kbd>
          </div>
        </div>
      </div>
    </nav>
  )
}