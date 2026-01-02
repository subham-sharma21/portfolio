'use client'

import { PageTransition } from '@/components/page-transition'
import { HackerText } from '@/components/hacker-text'
import { motion } from 'framer-motion'
import { ExternalLink, Code, Palette, Zap, BookOpen } from 'lucide-react'

const resources = [
  {
    category: 'Learning Roadmaps',
    icon: <BookOpen className="w-5 h-5" />,
    items: [
      {
        name: 'Roadmap.sh',
        description: 'Step by step guides and paths to learn different tools or technologies',
        url: 'https://roadmap.sh'
      },
      {
        name: 'Developer Roadmaps',
        description: 'Interactive roadmaps for developers',
        url: 'https://github.com/kamranahmedse/developer-roadmap'
      }
    ]
  },
  {
    category: 'Design Resources',
    icon: <Palette className="w-5 h-5" />,
    items: [
      {
        name: 'Figma',
        description: 'Collaborative interface design tool',
        url: 'https://figma.com'
      },
      {
        name: 'Dribbble',
        description: 'Design inspiration and showcase',
        url: 'https://dribbble.com'
      },
      {
        name: 'UI/UX Tools',
        description: 'Collection of design tools and resources',
        url: 'https://uiux.tools'
      }
    ]
  },
  {
    category: 'Development Tools',
    icon: <Code className="w-5 h-5" />,
    items: [
      {
        name: 'GitHub',
        description: 'Version control and collaboration platform',
        url: 'https://github.com'
      },
      {
        name: 'VS Code',
        description: 'Free source-code editor',
        url: 'https://code.visualstudio.com'
      },
      {
        name: 'Stack Overflow',
        description: 'Q&A platform for developers',
        url: 'https://stackoverflow.com'
      }
    ]
  },
  {
    category: 'Productivity',
    icon: <Zap className="w-5 h-5" />,
    items: [
      {
        name: 'Notion',
        description: 'All-in-one workspace for notes and docs',
        url: 'https://notion.so'
      },
      {
        name: 'Obsidian',
        description: 'Knowledge management and note-taking',
        url: 'https://obsidian.md'
      }
    ]
  }
]

export default function Extras() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <HackerText 
                text="Extras" 
                className="bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent"
                trigger="both"
              />
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              A curated collection of tools, resources, and websites that I find helpful for development, design, and productivity.
              These resources have been valuable in my journey and might be useful for yours too.
            </p>
          </motion.div>

          <div className="space-y-12">
            {resources.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-primary">{category.icon}</div>
                  <h2 className="text-2xl font-bold">{category.category}</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <motion.a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
                      whileHover={{ y: -2 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (itemIndex * 0.05) }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                          {item.name}
                        </h3>
                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                      
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  )
}