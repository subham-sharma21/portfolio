'use client'

import { PageTransition } from '@/components/page-transition'
import { MagneticButton } from '@/components/magnetic-button'
import { TechMarquee } from '@/components/tech-marquee'
import { HackerText } from '@/components/hacker-text'
import { CardSkeleton, ProjectCardSkeleton, ExperienceCardSkeleton } from '@/components/skeleton'
import { Github, ExternalLink, ArrowRight, Code2, Zap, Users, Award, MapPin, Calendar, Download, Coffee, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [isExpanded, setIsExpanded] = useState(false)

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
                  <div className="text-xl sm:text-2xl font-bold mb-1">2+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
                </div>
                
                <div className="spotlight-card bg-card border border-border rounded-xl p-4 sm:p-6 text-center">
                  <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500 mx-auto mb-2 sm:mb-3" />
                  <div className="text-xl sm:text-2xl font-bold mb-1">5+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Projects Built</div>
                </div>
                
                <div className="spotlight-card bg-card border border-border rounded-xl p-4 sm:p-6 text-center">
                  <Code2 className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 mx-auto mb-2 sm:mb-3" />
                  <div className="text-xl sm:text-2xl font-bold mb-1">10+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Technologies Used</div>
                </div>
                
                <div className="spotlight-card bg-card border border-border rounded-xl p-4 sm:p-6 text-center">
                  <Coffee className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500 mx-auto mb-2 sm:mb-3" />
                  <div className="text-xl sm:text-2xl font-bold mb-1">400+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Coffee Consumed</div>
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
                    <div className="aspect-video relative overflow-hidden bg-card">
                      <img 
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" 
                        alt="Portfolio Website"
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                    </div>
                    <div className="p-4 sm:p-6">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-1">
                        Portfolio Website
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        A premium developer portfolio website built with Next.js 15, featuring interactive animations and modern design.
                      </p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded">Next.js</span>
                        <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded">TypeScript</span>
                        <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded">Framer Motion</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <a 
                          href="https://github.com/subham-sharma21/portfolio" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          onClick={(e) => e.stopPropagation()}
                          className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded hover:bg-green-500/30 transition-colors cursor-pointer relative z-20"
                        >
                          Live
                        </a>
                        <a 
                          href="https://github.com/subham-sharma21/portfolio" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="relative z-20 cursor-pointer"
                        >
                          <Github className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </a>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -5 }}
                    className="spotlight-card bg-card border border-border rounded-xl overflow-hidden group"
                  >
                    <div className="aspect-video relative overflow-hidden bg-card">
                      <img 
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" 
                        alt="JobLens"
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                    </div>
                    <div className="p-4 sm:p-6">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-1">
                        JobLens
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        End-to-end job market intelligence system with analytics pipeline and interactive heatmaps.
                      </p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">Python</span>
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">Analytics</span>
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">Visualization</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Completed</span>
                        <a 
                          href="https://github.com/subham-sharma21/JobLens" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="relative z-20 cursor-pointer"
                        >
                          <Github className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </a>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -5 }}
                    className="spotlight-card bg-card border border-border rounded-xl overflow-hidden group md:col-span-2 lg:col-span-1"
                  >
                    <div className="aspect-video relative overflow-hidden bg-card">
                      <img 
                        src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=80" 
                        alt="BabyCryAnalyser"
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                    </div>
                    <div className="p-4 sm:p-6">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-1">
                        BabyCryAnalyser
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        Analyzes baby cry audio files to determine sentiment and provide insights into baby's needs.
                      </p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        <span className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs rounded">ML</span>
                        <span className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs rounded">Audio Processing</span>
                        <span className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs rounded">Python</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Completed</span>
                        <a 
                          href="https://github.com/subham-sharma21/BabyCryAnalyser" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="relative z-20 cursor-pointer"
                        >
                          <Github className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </a>
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
                <div className="spotlight-card bg-card border border-border rounded-xl p-6 sm:p-8 h-fit relative z-10">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-primary" />
                        <h3 className="text-lg sm:text-xl font-semibold">Current Role</h3>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          setIsExpanded(!isExpanded)
                        }}
                        className="text-muted-foreground hover:text-primary transition-colors relative z-20 cursor-pointer"
                        aria-label={isExpanded ? "Collapse" : "Expand"}
                      >
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-5 h-5" />
                        </motion.div>
                      </button>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold">Software Engineer</h4>
                        <p className="text-primary text-sm">Cognizant</p>
                      </div>
                      
                      <AnimatePresence initial={false}>
                        {isExpanded ? (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-sm text-muted-foreground leading-relaxed space-y-2 overflow-hidden"
                          >
                            <li>• Developed scalable frontend modules using React with structured state management and REST API consumption</li>
                            <li>• Built reusable and modular UI components following clean architecture and component reusability principles</li>
                            <li>• Implemented responsive and accessible interfaces using semantic HTML and ARIA best practices</li>
                            <li>• Improved performance optimization through efficient rendering, memoization, and client-side UI optimization</li>
                          </motion.ul>
                        ) : (
                          <motion.p
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-sm text-muted-foreground leading-relaxed overflow-hidden"
                          >
                            Developed scalable frontend modules using React with structured state management and REST API consumption...
                          </motion.p>
                        )}
                      </AnimatePresence>
                      
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>June 2025 - Present</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Latest Blog */}
                <div className="spotlight-card bg-card border border-border rounded-xl p-6 sm:p-8 relative z-10">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <Code2 className="w-5 h-5 text-primary" />
                      <h3 className="text-lg sm:text-xl font-semibold">Latest Article</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold line-clamp-2">
                        Code Vibe: Coding with Generative AI
                      </h4>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        Exploring how generative AI is transforming the way we write code, 
                        collaborate, and build software in the modern development landscape.
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">LinkedIn Article</span>
                        <a 
                          href="https://www.linkedin.com/posts/subhamsharma1421_code-vibecoding-generativeai-ugcPost-7420134227637256192-wy8v?utm_source=share&utm_medium=member_desktop"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-primary hover:gap-2 transition-all text-sm font-medium relative z-20 cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation()
                            window.open('https://www.linkedin.com/posts/subhamsharma1421_code-vibecoding-generativeai-ugcPost-7420134227637256192-wy8v?utm_source=share&utm_medium=member_desktop', '_blank')
                          }}
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