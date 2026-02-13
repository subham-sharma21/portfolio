'use client'

import { PageTransition } from '@/components/page-transition'
import { LocationMap } from '@/components/location-map'
import { HackerText } from '@/components/hacker-text'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Award, Code } from 'lucide-react'

const timeline = [
  {
    year: 'June 2025 - Present',
    title: 'Software Engineer',
    company: 'Cognizant',
    location: 'Bengaluru, India',
    description: 'Developed scalable frontend modules using React with structured state management and REST API consumption. Built reusable and modular UI components following clean architecture and component reusability principles. Implemented responsive and accessible interfaces using semantic HTML and ARIA best practices.',
  },
  {
    year: 'Jan 2023 - Jul 2024',
    title: 'Frontend Developer',
    company: 'Coratia Technologies Pvt. Ltd',
    location: 'Rourkela, Odisha',
    description: 'Created interactive web interfaces and integrated 3D models and animations to enhance user experience. Designed UI elements and assets for marketing and product interfaces, ensuring brand consistency.',
  },
  {
    year: 'Nov 2022 - Apr 2023',
    title: 'Digital Media Strategist',
    company: 'Yallo Retail',
    location: 'England, UK',
    description: 'Created and executed digital media strategies to boost brand engagement and presence. Developed content, tracked performance, and collaborated with teams to align marketing goals.',
  },
  {
    year: 'May 2022 - Nov 2022',
    title: 'Content Marketing Manager',
    company: 'Skill Magnet',
    location: 'England, UK',
    description: 'Built and managed an online community through effective content and social media strategies. Moderated discussions, analyzed feedback, and drove community growth and brand perception.',
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <HackerText 
                text="About Me" 
                className="bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent"
                trigger="both"
              />
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Turning coffee into clean code and late-night ideas into scalable systems.
            </p>
            <p className="text-xl text-muted-foreground max-w-3xl">
              My cats supervise the debugging process. They're very strict.
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
          {/* Location Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold mb-8">Location</h2>
            <LocationMap />
          </motion.div>
        </section>
      </div>
    </PageTransition>
  )
}