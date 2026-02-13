import { notFound } from 'next/navigation'
import { PageTransition } from '@/components/page-transition'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

// This would typically come from a CMS or file system
const blogPosts = {
  'building-scalable-react-apps': {
    title: 'Building Scalable React Applications',
    description: 'Best practices and architectural patterns for building large-scale React applications that can grow with your team and user base.',
    date: '2024-01-15',
    readTime: '8 min read',
    tags: ['React', 'Architecture', 'Best Practices'],
    content: `
# Building Scalable React Applications

As React applications grow in complexity, maintaining clean, scalable code becomes increasingly challenging. In this post, I'll share architectural patterns and best practices I've learned from building large-scale React applications.

## The Foundation: Project Structure

A well-organized project structure is crucial for scalability. Here's the structure I recommend:

\`\`\`
src/
├── components/          # Reusable UI components
│   ├── ui/             # Basic UI components (buttons, inputs)
│   └── features/       # Feature-specific components
├── hooks/              # Custom React hooks
├── services/           # API calls and external services
├── stores/             # State management (Zustand, Redux)
├── utils/              # Utility functions
├── types/              # TypeScript type definitions
└── app/                # Next.js app directory
\`\`\`

## Component Architecture

### 1. Composition Over Inheritance

React's composition model is powerful. Instead of creating complex inheritance hierarchies, compose smaller components.

### 2. Custom Hooks for Logic Separation

Extract complex logic into custom hooks to keep components focused on rendering.

## State Management Strategies

### 1. Local State First

Not everything needs global state. Use local state for component-specific data.

### 2. Context for Theme and User Data

Use React Context for data that needs to be accessed across many components.

## Performance Optimization

### 1. Memoization

Use React.memo, useMemo, and useCallback strategically.

### 2. Code Splitting

Split your code at route and component levels.

## Conclusion

Building scalable React applications requires thoughtful architecture, proper state management, and a focus on maintainability. The patterns and practices outlined here have served me well in large-scale projects.
    `
  }
}

export default async function BlogPost(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params
  const { slug } = params
  const post = blogPosts[slug as keyof typeof blogPosts]
  
  if (!post) {
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
              href="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <div className="mb-8">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
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

              <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">{post.description}</p>

              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
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
              <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }} />
            </div>
          </motion.div>
        </article>
      </div>
    </PageTransition>
  )
}