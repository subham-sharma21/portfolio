'use client'

import { PageTransition } from '@/components/page-transition'
import { ProjectCardSkeleton } from '@/components/skeleton'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Calendar } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const projects = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'Full-stack Next.js application with Stripe integration, real-time inventory management, and admin dashboard.',
    image: '/api/placeholder/600/400',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    year: '2023',
    status: 'Live',
    links: {
      live: 'https://example.com',
      github: 'https://github.com/example/repo',
    },
  },
  {
    id: 'task-management-app',
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates, drag-and-drop functionality, and team workspaces.',
    image: '/api/placeholder/600/400',
    tags: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
    year: '2023',
    status: 'Live',
    links: {
      live: 'https://example.com',
      github: 'https://github.com/example/repo',
    },
  },
  {
    id: 'weather-dashboard',
    title: 'Weather Dashboard',
    description: 'Beautiful weather application with location-based forecasts, interactive maps, and weather alerts.',
    image: '/api/placeholder/600/400',
    tags: ['React', 'Weather API', 'Mapbox', 'Chart.js'],
    year: '2022',
    status: 'Live',
    links: {
      live: 'https://example.com',
      github: 'https://github.com/example/repo',
    },
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'This very website! Built with Next.js 15, featuring interactive animations and modern design.',
    image: '/api/placeholder/600/400',
    tags: ['Next.js', 'Framer Motion', 'Tailwind', 'MDX'],
    year: '2024',
    status: 'Live',
    links: {
      github: 'https://github.com/example/repo',
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Projects</h1>
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
                    {/* Project Image Placeholder */}
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <div className="text-6xl opacity-20">🚀</div>
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
                      
                      <div className="flex items-center gap-3">
                        {project.links.live && (
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
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
                            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
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