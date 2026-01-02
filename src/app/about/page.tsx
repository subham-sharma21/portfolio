'use client'

import { PageTransition } from '@/components/page-transition'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Award, Code } from 'lucide-react'

const timeline = [
  {
    year: '2022 - Present',
    title: 'Senior Frontend Engineer',
    company: 'Tech Innovators Inc.',
    location: 'San Francisco, CA',
    description: 'Leading frontend development for a SaaS platform serving 100k+ users. Built scalable React applications with Next.js and TypeScript.',
  },
  {
    year: '2020 - 2022',
    title: 'Frontend Developer',
    company: 'Digital Solutions Co.',
    location: 'Austin, TX',
    description: 'Developed responsive web applications using React and modern CSS. Collaborated with design teams to implement pixel-perfect UIs.',
  },
  {
    year: '2018 - 2020',
    title: 'Junior Developer',
    company: 'StartupXYZ',
    location: 'Remote',
    description: 'Built landing pages and marketing websites. Gained experience with JavaScript frameworks and modern development workflows.',
  },
]

const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'Express', 'FastAPI', 'GraphQL'] },
  { category: 'Database', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'Supabase'] },
  { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma'] },
]

export default function About() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              I'm a passionate frontend engineer with 5+ years of experience building modern web applications.
              I specialize in React, Next.js, and TypeScript, with a focus on performance, accessibility, and user experience.
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-8">Career Timeline</h2>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-8 border-l border-border">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full" />
                  <div className="bg-card border border-border rounded-lg p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{item.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground mb-3">
                      <span className="font-medium">{item.company}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span className="text-sm">{item.location}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-8">Skills & Technologies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Code className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-semibold">{skill.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, itemIndex) => (
                      <span
                        key={itemIndex}
                        className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </PageTransition>
  )
}