'use client'

import { useState, useEffect } from 'react'

interface HackerTextProps {
  text: string
  className?: string
  trigger?: 'hover' | 'mount' | 'both'
}

export function HackerText({ text, className = '', trigger = 'hover' }: HackerTextProps) {
  const [displayText, setDisplayText] = useState(text)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?'
  
  const scramble = () => {
    if (isAnimating) return
    setIsAnimating(true)
    
    let iteration = 0
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (index < iteration) {
              return text[index]
            }
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join('')
      )
      
      if (iteration >= text.length) {
        clearInterval(interval)
        setIsAnimating(false)
      }
      
      iteration += 1 / 5
    }, 80)
  }

  useEffect(() => {
    setIsMounted(true)
    if (trigger === 'mount' || trigger === 'both') {
      const timer = setTimeout(scramble, 500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleInteraction = (trigger === 'hover' || trigger === 'both') ? { onMouseEnter: scramble } : {}

  if (!isMounted) {
    return (
      <span className={`font-mono cursor-pointer ${className}`}>
        {text}
      </span>
    )
  }

  return (
    <span 
      className={`font-mono cursor-pointer ${className}`}
      {...handleInteraction}
    >
      {displayText}
    </span>
  )
}