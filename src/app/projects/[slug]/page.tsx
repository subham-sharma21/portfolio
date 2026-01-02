import { notFound } from 'next/navigation'
import { PageTransition } from '@/components/page-transition'
import { motion } from 'framer-motion'
import { Calendar, ExternalLink, Github, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

// This would typically come from a CMS or file system
const projects = {
  'ecommerce-platform': {
    title: 'E-Commerce Platform',
    description: 'Full-stack Next.js application with Stripe integration, real-time inventory management, and admin dashboard.',
    date: '2023-06-15',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    live: 'https://example.com',
    github: 'https://github.com/example/repo',
    content: `
# E-Commerce Platform Case Study

## Overview

This project is a comprehensive e-commerce platform built with modern web technologies. The goal was to create a scalable, performant, and user-friendly online shopping experience that could handle high traffic and complex inventory management.

## Key Features

- **Product Catalog**: Dynamic product listings with advanced filtering and search
- **Shopping Cart**: Persistent cart with real-time inventory checking
- **Payment Processing**: Secure payments via Stripe with multiple payment methods
- **User Authentication**: JWT-based auth with social login options
- **Admin Dashboard**: Comprehensive admin panel for inventory and order management
- **Real-time Updates**: WebSocket integration for live inventory updates

## Technical Implementation

### Frontend Architecture

The frontend is built with Next.js 13+ using the App Router for optimal performance and SEO.

### Performance Results

The platform successfully handles:
- **10,000+** concurrent users
- **99.9%** uptime
- **<2s** average page load time
- **15%** increase in conversion rate
    `
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects[slug as keyof typeof projects]
  
  if (!project) {
    notFound()
  }

  return (
    <PageTransition>
      <div className="min-h-screen">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              href="/projects"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>

            <div className="mb-8">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={project.date}>
                    {new Date(project.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </div>
                <div className="flex items-center gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </a>
                  )}
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: project.content.replace(/\n/g, '<br />') }} />
            </div>
          </motion.div>
        </article>
      </div>
    </PageTransition>
  )
}