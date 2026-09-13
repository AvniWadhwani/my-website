"use client"

import { useState } from "react"
import { Mail, Send, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LinkedinIcon } from "@/components/brand-icons"

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/avni1399", icon: LinkedinIcon },
]

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
    e.currentTarget.reset()
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="scroll-mt-20 bg-secondary/50 py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-2">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Feedback</p>
          <h2 className="mb-4 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Have a project or a thought? Let&apos;s talk.
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-muted-foreground text-pretty">
            Whether you&apos;re hiring for a data or product role, have a data problem worth solving, or just want to
            talk shop, my inbox is always open.
          </p>

          <a
            href="mailto:avniwadhwani13@gmail.com"
            className="inline-flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium transition-colors hover:border-primary/40"
          >
            <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Mail className="size-4" />
            </span>
            avniwadhwani13@gmail.com
          </a>

          <div className="mt-8 flex gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex size-11 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <social.icon className="size-5" />
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <div className="grid gap-5">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="h-11 rounded-lg border border-input bg-background px-3 text-sm outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="h-11 rounded-lg border border-input bg-background px-3 text-sm outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="resize-none rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
            <Button type="submit" size="lg" className="w-full">
              {sent ? (
                <>
                  <Check className="size-4" />
                  Message sent!
                </>
              ) : (
                <>
                  <Send className="size-4" />
                  Send Message
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
