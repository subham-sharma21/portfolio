'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PageTransition } from '@/components/page-transition'
import { HackerText } from '@/components/hacker-text'
import {
  Mail,
  Linkedin,
  Github,
  ExternalLink,
  Copy,
  Check,
  Send,
  MessageSquare,
  Clock,
  Sparkles,
} from 'lucide-react'

function BehanceIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M6.798 12.015c.67 0 1.19-.15 1.56-.45.37-.3.56-.73.56-1.28 0-.58-.18-1.02-.55-1.3-.37-.28-.9-.42-1.57-.42H3.59v3.45h3.208zm.24 6.09c.77 0 1.38-.17 1.83-.52.45-.35.68-.86.68-1.52 0-.69-.24-1.21-.71-1.56-.47-.35-1.14-.53-2.01-.53H3.59v4.13h3.448zM0 2.894h7.106c1.64 0 2.95.4 3.93 1.19.98.8 1.47 1.88 1.47 3.25 0 .86-.22 1.62-.67 2.27-.45.65-1.09 1.15-1.92 1.5 1.1.33 1.95.89 2.54 1.68.59.79.89 1.77.89 2.93 0 1.56-.54 2.82-1.61 3.77-1.07.96-2.5 1.44-4.29 1.44H0V2.894zm18.318 8.016c-.95 0-1.72.3-2.3.91-.58.6-.92 1.42-1.01 2.45h6.41c-.05-1-.38-1.81-.98-2.43-.61-.62-1.32-.93-2.12-.93zm6.65 6.78c-.73.94-1.71 1.69-2.94 2.24-1.23.55-2.6.83-4.11.83-2.47 0-4.48-.79-6.02-2.37-1.55-1.58-2.32-3.69-2.32-6.33 0-2.6.79-4.71 2.37-6.33 1.58-1.62 3.63-2.43 6.16-2.43 2.39 0 4.34.75 5.86 2.26 1.51 1.5 2.27 3.51 2.27 6.01v1.64H15.02c.08 1.32.55 2.34 1.42 3.07.87.72 1.97 1.09 3.3 1.09 1.05 0 1.96-.24 2.73-.72.77-.48 1.33-1.12 1.68-1.93l2.82 2.68zm-9.09-12.78h7.24v2.09h-7.24V4.91z" />
    </svg>
  )
}

const contactEmail = 'sharmasubham.1302@gmail.com'

const directMethods = [
  {
    name: 'LinkedIn',
    handle: 'subhamsharma1421',
    url: 'https://www.linkedin.com/in/subhamsharma1421',
    icon: Linkedin,
    description: 'Professional networking & updates',
  },
  {
    name: 'GitHub',
    handle: 'subham-sharma21',
    url: 'https://github.com/subham-sharma21',
    icon: Github,
    description: 'Code repositories & open source',
  },
  {
    name: 'Behance',
    handle: 'subhamsharma1421',
    url: 'https://www.behance.net/subhamsharma1421',
    icon: BehanceIcon,
    description: 'UI/UX designs & 3D visualizations',
  },
]

export default function ContactPage() {
  const [copied, setCopied] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement('textarea')
      textarea.value = contactEmail
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const validate = () => {
    const nextErrors: { name?: string; email?: string; message?: string } = {}

    if (!formData.name.trim()) {
      nextErrors.name = 'Please provide your name.'
    } else if (formData.name.trim().length < 2) {
      nextErrors.name = 'Name must be at least 2 characters.'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      nextErrors.email = 'Please provide your email address.'
    } else if (!emailRegex.test(formData.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.'
    }

    if (!formData.message.trim()) {
      nextErrors.message = 'Please enter a message.'
    } else if (formData.message.trim().length < 10) {
      nextErrors.message = 'Message must be at least 10 characters.'
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validate()) return

    setIsSubmitting(true)

    // Simulate sending message
    await new Promise((resolve) => setTimeout(resolve, 800))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setErrors({})
  }

  return (
    <PageTransition>
      <div className="min-h-screen">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 sm:mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <HackerText
                text="Get in Touch"
                className="bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent"
                trigger="both"
              />
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Open for software engineering opportunities, collaborations, and discussions. 
              Reach out directly or send a message below.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Direct Contact Methods */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-5 space-y-6"
            >
              <div>
                <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  Direct Connect
                </h2>
                <p className="text-sm text-muted-foreground">
                  Feel free to use any of the channels below for a prompt response.
                </p>
              </div>

              {/* Email Card */}
              <div className="spotlight-card bg-card border border-border rounded-xl p-5 sm:p-6 transition-all duration-300 hover:border-primary/50 relative overflow-hidden">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <p className="text-xs text-muted-foreground">Direct inbox</p>
                    </div>
                  </div>

                  {/* 1-Click Copy Email Button */}
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border border-border bg-secondary/70 hover:bg-secondary text-foreground hover:border-primary/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer shrink-0"
                    aria-label={copied ? 'Email copied' : 'Copy email address'}
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-emerald-500 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-muted-foreground" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between">
                  <a
                    href={`mailto:${contactEmail}`}
                    className="text-sm text-primary hover:underline truncate max-w-[240px] sm:max-w-none"
                  >
                    {contactEmail}
                  </a>
                  <a
                    href={`mailto:${contactEmail}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-xs inline-flex items-center gap-1"
                    aria-label="Open default mail client"
                  >
                    <span>Send</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Social Channels */}
              <div className="space-y-3">
                {directMethods.map((method) => {
                  const Icon = method.icon
                  return (
                    <a
                      key={method.name}
                      href={method.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="spotlight-card group block bg-card border border-border rounded-xl p-4 sm:p-5 hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-secondary/80 border border-border flex items-center justify-center text-foreground group-hover:text-primary group-hover:border-primary/40 transition-colors shrink-0">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">
                                {method.name}
                              </h3>
                              <span className="text-xs text-muted-foreground font-mono">
                                @{method.handle}
                              </span>
                            </div>
                            <p className="text-xs text-muted-foreground mt-0.5">
                              {method.description}
                            </p>
                          </div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                      </div>
                    </a>
                  )
                })}
              </div>

              {/* Status and Timezone Info */}
              <div className="bg-card/40 border border-border/60 rounded-xl p-4 flex items-center gap-3 text-xs text-muted-foreground">
                <Clock className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>
                  Based in Bengaluru, India (IST • UTC+5:30). Typical response time is under 24 hours.
                </span>
              </div>
            </motion.div>

            {/* Contact Message Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-7"
            >
              <div className="spotlight-card bg-card border border-border rounded-xl p-6 sm:p-8 relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Send a Message</h2>
                    <p className="text-sm text-muted-foreground">
                      Fill out the form below and I&apos;ll get back to you shortly.
                    </p>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="py-10 text-center space-y-4"
                    >
                      <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 flex items-center justify-center mx-auto">
                        <Check className="w-8 h-8" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-foreground">Message Sent!</h3>
                        <p className="text-sm text-muted-foreground max-w-md mx-auto">
                          Thank you for reaching out. I have received your message and will reply to your email address as soon as possible.
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setIsSubmitted(false)}
                        className="mt-4 px-5 py-2.5 rounded-lg border border-border bg-secondary hover:bg-secondary/80 text-foreground text-sm font-medium transition-colors cursor-pointer"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      noValidate
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-5"
                    >
                      {/* Name Field */}
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-foreground mb-1.5"
                        >
                          Name <span className="text-primary">*</span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => {
                            setFormData((prev) => ({ ...prev, name: e.target.value }))
                            if (errors.name) {
                              setErrors((prev) => ({ ...prev, name: undefined }))
                            }
                          }}
                          placeholder="Your name"
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? 'name-error' : undefined}
                          className={`w-full px-4 py-3 rounded-lg bg-secondary/50 border text-foreground placeholder:text-muted-foreground text-sm outline-none transition-colors focus:ring-2 focus:ring-primary ${
                            errors.name
                              ? 'border-rose-500 focus:ring-rose-500'
                              : 'border-border focus:border-primary'
                          }`}
                        />
                        {errors.name && (
                          <p id="name-error" className="mt-1 text-xs text-rose-500 font-medium">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Email Field */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-foreground mb-1.5"
                        >
                          Email <span className="text-primary">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData((prev) => ({ ...prev, email: e.target.value }))
                            if (errors.email) {
                              setErrors((prev) => ({ ...prev, email: undefined }))
                            }
                          }}
                          placeholder="your.email@example.com"
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                          className={`w-full px-4 py-3 rounded-lg bg-secondary/50 border text-foreground placeholder:text-muted-foreground text-sm outline-none transition-colors focus:ring-2 focus:ring-primary ${
                            errors.email
                              ? 'border-rose-500 focus:ring-rose-500'
                              : 'border-border focus:border-primary'
                          }`}
                        />
                        {errors.email && (
                          <p id="email-error" className="mt-1 text-xs text-rose-500 font-medium">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      {/* Message Field */}
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-foreground mb-1.5"
                        >
                          Message <span className="text-primary">*</span>
                        </label>
                        <textarea
                          id="message"
                          rows={5}
                          value={formData.message}
                          onChange={(e) => {
                            setFormData((prev) => ({ ...prev, message: e.target.value }))
                            if (errors.message) {
                              setErrors((prev) => ({ ...prev, message: undefined }))
                            }
                          }}
                          placeholder="Tell me about your project, idea, or role..."
                          aria-invalid={!!errors.message}
                          aria-describedby={errors.message ? 'message-error' : undefined}
                          className={`w-full px-4 py-3 rounded-lg bg-secondary/50 border text-foreground placeholder:text-muted-foreground text-sm outline-none transition-colors focus:ring-2 focus:ring-primary resize-y min-h-[120px] ${
                            errors.message
                              ? 'border-rose-500 focus:ring-rose-500'
                              : 'border-border focus:border-primary'
                          }`}
                        />
                        {errors.message && (
                          <p id="message-error" className="mt-1 text-xs text-rose-500 font-medium">
                            {errors.message}
                          </p>
                        )}
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Send Message</span>
                          </>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
