'use client'

import { PageTransition } from '@/components/page-transition'
import { ProjectCardSkeleton } from '@/components/skeleton'
import { HackerText } from '@/components/hacker-text'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Calendar, Sparkles } from 'lucide-react'
import { useState, useEffect } from 'react'

interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  metrics: string[]
  year: string
  status: 'Live' | 'Completed'
  links: {
    live?: string
    github: string
  }
}

const projects: Project[] = [
  {
    id: 'joblens',
    title: 'JobLens',
    description: 'End-to-end job market intelligence platform that aggregates tech job postings, processes them through an automated ETL analytics pipeline, and visualizes geographic job demand using interactive heatmaps.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    tags: ['Python', 'ETL Pipeline', 'Analytics', 'Data Visualization', 'Heatmaps'],
    metrics: [
      'Aggregates 1,000+ job postings',
      'Sub-300ms heatmap query latency',
      'ETL pipeline',
    ],
    year: '2024',
    status: 'Completed',
    links: {
      github: 'https://github.com/subham-sharma21/JobLens',
    },
  },
  {
    id: 'babycryanalyser',
    title: 'BabyCryAnalyser',
    description: 'Acoustic deep learning classifier that analyzes baby cry audio files to determine infant distress. Features end-to-end audio DSP processing with Librosa and neural evaluation to provide rapid diagnostic insights.',
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=80',
    tags: ['PyTorch', 'Audio DSP', 'Python', 'Librosa', 'Sentiment Analysis'],
    metrics: [
      'Log-Mel Spectrogram DSP with Librosa',
      '< 1.2s inference round-trip',
      'U-Net classification',
    ],
    year: '2024',
    status: 'Completed',
    links: {
      github: 'https://github.com/subham-sharma21/BabyCryAnalyser',
    },
  },
  {
    id: 'echocart',
    title: 'EchoCart E-Commerce',
    description: 'Full-stack enterprise e-commerce platform engineered with a Spring Boot microservices backend and decoupled frontend. Features transactional checkout, product management, and role-based access security.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    tags: ['Spring Boot', 'Java', 'REST API', 'RBAC', 'E-Commerce'],
    metrics: [
      'Spring Boot Microservices',
      'Role-Based Access Control (RBAC)',
      'Decoupled REST API',
    ],
    year: '2023',
    status: 'Completed',
    links: {
      github: 'https://github.com/subham-sharma21/Ecommerce-Website',
    },
  },
  {
    id: 'portfolio',
    title: 'Portfolio Website',
    description: 'Modern developer portfolio built with Next.js 15 App Router, TypeScript, and Tailwind CSS. Features interactive spotlight cards, Framer Motion transitions, responsive cyber-aesthetic UI, and sub-second performance.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    tags: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    metrics: [
      'Next.js 15 App Router',
      'TypeScript & Tailwind CSS',
      'Sub-second LCP performance',
    ],
    year: '2024',
    status: 'Live',
    links: {
      live: 'https://portfolio-86el.vercel.app',
      github: 'https://github.com/subham-sharma21/portfolio',
    },
  },
]

export default function Projects() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate initial loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  return (
    <PageTransition>
      <div className="min-h-screen">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <HackerText 
                text="Projects" 
                className="bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent"
                trigger="both"
              />
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              A curated collection of production applications, distributed microservices, and machine learning systems.
              Engineered with quantifiable performance metrics and real-world impact.
            </p>
          </motion.div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Array.from({ length: 4 }).map((_, i) => (
                <ProjectCardSkeleton key={i} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group flex"
                >
                  <div className="spotlight-card flex flex-col w-full bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300">
                    {/* Project Image */}
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block aspect-video relative overflow-hidden bg-card cursor-pointer"
                    >
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent" />
                    </a>
                    
                    <div className="p-6 flex flex-col flex-1">
                      {/* Meta header */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{project.year}</span>
                        </div>
                        <span className={`px-2.5 py-0.5 text-xs rounded-full font-medium inline-flex items-center gap-1.5 ${
                          project.status === 'Live' 
                            ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30' 
                            : 'bg-primary/15 text-primary border border-primary/30'
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${project.status === 'Live' ? 'bg-emerald-400 animate-pulse' : 'bg-primary'}`} />
                          {project.status}
                        </span>
                      </div>
                      
                      {/* Title */}
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block hover:text-primary transition-colors cursor-pointer"
                      >
                        <h2 className="text-xl font-bold mb-2">
                          {project.title}
                        </h2>
                      </a>
                      
                      {/* Description */}
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      {/* STAR Metrics / Architectural Highlights */}
                      <div className="mb-4">
                        <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-primary" />
                          <span>Key Achievements & Metrics</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {project.metrics.map((metric) => (
                            <span
                              key={metric}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md bg-primary/10 text-foreground border border-primary/25 hover:border-primary/50 transition-colors"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                              {metric}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 bg-muted/60 text-muted-foreground text-xs rounded border border-border/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      {/* Footer Link Buttons */}
                      <div className="flex items-center gap-4 pt-4 border-t border-border/60 relative z-10 mt-auto">
                        {project.links.live && (
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                          </a>
                        )}
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                          >
                            <Github className="w-4 h-4" />
                            GitHub Repository
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </section>
      </div>
    </PageTransition>
  )
}
