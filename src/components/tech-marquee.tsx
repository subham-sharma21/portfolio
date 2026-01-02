'use client'

const techStack = [
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '▲' },
  { name: 'TypeScript', icon: 'TS' },
  { name: 'Tailwind', icon: '🎨' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Python', icon: '🐍' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Docker', icon: '🐳' },
]

export function TechMarquee() {
  return (
    <div className="w-full overflow-hidden bg-secondary/50 py-4">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...techStack, ...techStack].map((tech, index) => (
          <div
            key={index}
            className="mx-8 flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <span className="text-2xl">{tech.icon}</span>
            <span className="font-medium">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}