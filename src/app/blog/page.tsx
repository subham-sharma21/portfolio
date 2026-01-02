'use client'

import { PageTransition } from '@/components/page-transition'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const blogPosts = [
  {
    id: 'building-scalable-react-apps',
    title: 'Building Scalable React Applications',
    excerpt: 'Best practices and architectural patterns for building large-scale React applications that can grow with your team and user base.',
    date: '2024-01-15',
    readTime: '8 min read',
    tags: ['React', 'Architecture', 'Best Practices'],
  },
  {
    id: 'nextjs-15-features',
    title: 'What\'s New in Next.js 15',
    excerpt: 'Exploring the latest features and improvements in Next.js 15, including the new App Router enhancements and performance optimizations.',
    date: '2024-01-10',
    readTime: '6 min read',
    tags: ['Next.js', 'Web Development', 'Performance'],
  },
  {
    id: 'typescript-advanced-patterns',
    title: 'Advanced TypeScript Patterns for React',
    excerpt: 'Deep dive into advanced TypeScript patterns that can improve your React development experience and code quality.',
    date: '2024-01-05',
    readTime: '12 min read',
    tags: ['TypeScript', 'React', 'Advanced'],
  },
  {
    id: 'framer-motion-guide',
    title: 'Creating Smooth Animations with Framer Motion',
    excerpt: 'A comprehensive guide to creating beautiful, performant animations in React applications using Framer Motion.',
    date: '2023-12-28',
    readTime: '10 min read',
    tags: ['Animation', 'Framer Motion', 'UI/UX'],
  },
]

export default function Blog() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Thoughts on web development, React, TypeScript, and the ever-evolving
              landscape of frontend engineering. Sharing what I learn along the way.
            </p>
          </motion.div>

          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/blog/${post.id}`}>
                  <div className="spotlight-card bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors duration-300 group">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h2 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-primary/20 text-primary text-xs rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-1 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                        <span>Read more</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  )
}