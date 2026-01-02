'use client'

import { PageTransition } from '@/components/page-transition'
import { MagneticButton } from '@/components/magnetic-button'
import { TechMarquee } from '@/components/tech-marquee'
import { HackerText } from '@/components/hacker-text'
import { CardSkeleton, ProjectCardSkeleton, ExperienceCardSkeleton } from '@/components/skeleton'
import { Github, ExternalLink, ArrowRight, Code2, Zap, Users, Award, MapPin, Calendar, Download } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
            <div className="text-center space-y-6 sm:space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4 sm:space-y-6"
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                  <span className="block">
                    <HackerText 
                      text="Subham Sharma" 
                      className="bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent"
                      trigger="both"
                    />
                  </span>
                  <span className="block text-muted-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2">
                    Building Digital Experiences
                  </span>
                </h1>
                
                <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Frontend engineer specializing in React, Next.js, and TypeScript. 
                  Creating scalable applications with exceptional user experiences.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <MagneticButton 
                  className="w-full sm:w-auto"
                  onClick={() => window.location.href = '/projects'}
                >
                  View My Work
                </MagneticButton>
                <button 
                  className="w-full sm:w-auto px-6 py-3 border border-border rounded-lg hover:bg-card transition-colors inline-flex items-center gap-2"
                  onClick={() => {
                    const link = document.createElement('a')
                    link.href = '/Resume.pdf'
                    link.download = 'Subham_Sharma_Resume.pdf'
                    link.click()
                  }}
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {isLoading ? (
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {Array.from({ length: 4 }).map((_, i) => (
                  <CardSkeleton key={i} />
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
              >
                <div className="spotlight-card bg-card border border-border rounded-xl p-4 sm:p-6 text-center">
                  <Code2 className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-2 sm:mb-3" />
                  <div className="text-xl sm:text-2xl font-bold mb-1">5+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
                </div>
                
                <div className="spotlight-card bg-card border border-border rounded-xl p-4 sm:p-6 text-center">
                  <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500 mx-auto mb-2 sm:mb-3" />
                  <div className="text-xl sm:text-2xl font-bold mb-1">50+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Projects Built</div>
                </div>
                
                <div className="spotlight-card bg-card border border-border rounded-xl p-4 sm:p-6 text-center">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 mx-auto mb-2 sm:mb-3" />
                  <div className="text-xl sm:text-2xl font-bold mb-1">1M+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Users Reached</div>
                </div>
                
                <div className="spotlight-card bg-card border border-border rounded-xl p-4 sm:p-6 text-center">
                  <Award className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500 mx-auto mb-2 sm:mb-3" />
                  <div className="text-xl sm:text-2xl font-bold mb-1">15+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Awards Won</div>
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* Featured Work */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8 sm:space-y-12"
            >
              <div className="text-center space-y-4">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Featured Work</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  A selection of projects showcasing modern web development and user experience design.
                </p>
              </div>

              {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <ProjectCardSkeleton key={i} />
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="spotlight-card bg-card border border-border rounded-xl overflow-hidden group"
                  >
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center">
                      <div className="text-3xl sm:text-4xl opacity-50">🚀</div>
                    </div>
                    <div className="p-4 sm:p-6">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-1">
                        E-Commerce Platform
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        Full-stack Next.js application with Stripe integration and real-time inventory management.
                      </p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded">Next.js</span>
                        <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded">TypeScript</span>
                        <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded">Stripe</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Live</span>
                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -5 }}
                    className="spotlight-card bg-card border border-border rounded-xl overflow-hidden group"
                  >
                    <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                      <div className="text-3xl sm:text-4xl opacity-50">📊</div>
                    </div>
                    <div className="p-4 sm:p-6">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-1">
                        Analytics Dashboard
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        Real-time data visualization platform with interactive charts and custom reporting.
                      </p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">React</span>
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">D3.js</span>
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">Node.js</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Live</span>
                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -5 }}
                    className="spotlight-card bg-card border border-border rounded-xl overflow-hidden group md:col-span-2 lg:col-span-1"
                  >
                    <div className="aspect-video bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center">
                      <div className="text-3xl sm:text-4xl opacity-50">🎨</div>
                    </div>
                    <div className="p-4 sm:p-6">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-1">
                        Design System
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        Comprehensive component library with Storybook documentation and design tokens.
                      </p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        <span className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs rounded">Storybook</span>
                        <span className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs rounded">Figma</span>
                        <span className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs rounded">React</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">In Progress</span>
                        <Github className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}

              <div className="text-center">
                <a 
                  href="/projects" 
                  className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-medium"
                >
                  View All Projects
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience & Blog */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {isLoading ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                <ExperienceCardSkeleton />
                <ExperienceCardSkeleton />
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
              >
                {/* Experience */}
                <div className="spotlight-card bg-card border border-border rounded-xl p-6 sm:p-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <h3 className="text-lg sm:text-xl font-semibold">Current Role</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold">Senior Frontend Engineer</h4>
                        <p className="text-primary text-sm">Tech Innovators Inc.</p>
                      </div>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Leading frontend development for a SaaS platform serving 100k+ users. 
                        Building scalable React applications with Next.js and TypeScript.
                      </p>
                      
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>2022 - Present</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Latest Blog */}
                <div className="spotlight-card bg-card border border-border rounded-xl p-6 sm:p-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <Code2 className="w-5 h-5 text-primary" />
                      <h3 className="text-lg sm:text-xl font-semibold">Latest Article</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold line-clamp-2">
                        Building Scalable React Applications
                      </h4>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        Architectural patterns and best practices for building large-scale React 
                        applications that can grow with your team and user base.
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">2 days ago • 8 min read</span>
                        <a 
                          href="/blog" 
                          className="inline-flex items-center gap-1 text-primary hover:gap-2 transition-all text-sm font-medium"
                        >
                          Read More
                          <ArrowRight className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* Tech Marquee */}
        <TechMarquee />
      </div>
    </PageTransition>
  )
}