'use client'

import { PageTransition } from '@/components/page-transition'
import { ProjectCardSkeleton } from '@/components/skeleton'
import { HackerText } from '@/components/hacker-text'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Calendar } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const projects = [
  {
    id: 'portfolio',
    title: 'Portfolio Website',
    description: 'A premium developer portfolio website built with Next.js 15, featuring interactive animations, modern design, and engineering-focused content.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    tags: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
    year: '2024',
    status: 'Live',
    links: {
      live: 'https://github.com/subham-sharma21/portfolio',
      github: 'https://github.com/subham-sharma21/portfolio',
    },
  },
  {
    id: 'joblens',
    title: 'JobLens',
    description: 'End-to-end job market intelligence system that aggregates real job postings, processes them through a backend analytics pipeline, and visualizes geographic job demand using interactive heatmaps.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    tags: ['Python', 'Analytics', 'Data Visualization', 'Heatmaps'],
    year: '2024',
    status: 'Completed',
    links: {
      github: 'https://github.com/subham-sharma21/JobLens',
    },
  },
  {
    id: 'babycryanalyser',
    title: 'BabyCryAnalyser',
    description: 'Analyzes baby cry audio files to determine the sentiment or reason behind the cry. Users can upload audio files, which are then processed to provide insights into what the baby might be experiencing.',
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=80',
    tags: ['Machine Learning', 'Audio Processing', 'Python', 'Sentiment Analysis'],
    year: '2024',
    status: 'Completed',
    links: {
      github: 'https://github.com/subham-sharma21/BabyCryAnalyser',
    },
  },
  {
    id: 'echocart',
    title: 'EchoCart E-Commerce',
    description: 'Modern, full-stack e-commerce web application built with Spring Boot backend and vanilla JavaScript frontend. Provides complete shopping experience with user authentication, product management, shopping cart, and order processing.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    tags: ['Spring Boot', 'JavaScript', 'Java', 'E-Commerce'],
    year: '2023',
    status: 'Completed',
    links: {
      github: 'https://github.com/subham-sharma21/Ecommerce-Website',
    },
  },
]

export default function Projects() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1200)

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
              A collection of projects I've built, ranging from full-stack applications to
              experimental prototypes. Each project represents a learning journey and technical challenge.
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
                  className="group"
                >
                  <div className="spotlight-card bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors duration-300">
                    {/* Project Image */}
                    <div className="aspect-video relative overflow-hidden bg-card">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{project.year}</span>
                        </div>
                        <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                          {project.status}
                        </span>
                      </div>
                      
                      <Link href={`/projects/${project.id}`}>
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors cursor-pointer">
                          {project.title}
                        </h3>
                      </Link>
                      
                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-primary/20 text-primary text-xs rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-3 relative z-10">
                        {project.links.live && (
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
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
                            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                          >
                            <Github className="w-4 h-4" />
                            Source
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