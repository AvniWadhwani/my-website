"use client"

import { useCallback, useEffect, useState } from "react"
import { Mail, Send, Check, Star, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LinkedinIcon, GithubIcon } from "@/components/brand-icons"
import { supabase } from "@/lib/supabase/client"

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/avni1399", icon: LinkedinIcon },
  { label: "GitHub", href: "https://github.com/AvniWadhwani", icon: GithubIcon },
]

type Feedback = {
  id: string
  name: string
  message: string
  rating: number
  created_at: string | null
}

function StarRating({
  value,
  onChange,
  interactive = false,
}: {
  value: number
  onChange?: (v: number) => void
  interactive?: boolean
}) {
  const [hover, setHover] = useState(0)
  return (
    <div className="flex items-center gap-1" role={interactive ? "radiogroup" : undefined} aria-label="Rating">
      {[1, 2, 3, 4, 5].map((star) => {
        const active = (hover || value) >= star
        const StarEl = (
          <Star
            className={`size-5 transition-colors ${
              active ? "fill-primary text-primary" : "fill-transparent text-muted-foreground/40"
            }`}
          />
        )
        if (!interactive) return <span key={star}>{StarEl}</span>
        return (
          <button
            key={star}
            type="button"
            role="radio"
            aria-checked={value === star}
            aria-label={`${star} star${star > 1 ? "s" : ""}`}
            onClick={() => onChange?.(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            className="rounded outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {StarEl}
          </button>
        )
      })}
    </div>
  )
}

function formatDate(iso: string | null | undefined) {
  if (!iso) {
    return "Just now"
  }

  const date = new Date(iso)

  if (Number.isNaN(date.getTime())) {
    return "Just now"
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  }).format(date)
}

export function Contact() {
  const [feedback, setFeedback] = useState<Feedback[]>([])
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [rating, setRating] = useState(0)
  const [submitting, setSubmitting] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const loadFeedback = useCallback(async () => {
    const { data, error } = await supabase
      .from("feedback")
      .select("*")
      .order("created_at", { ascending: false })
    if (error) {
      console.log("[v0] load feedback error:", error.message)
      return
    }
    setFeedback(data as Feedback[])
  }, [])

  useEffect(() => {
    loadFeedback()

    const channel = supabase
      .channel("feedback-changes")
      .on("postgres_changes", { event: "INSERT", schema: "public", table: "feedback" }, (payload) => {
        setFeedback((prev) => {
          const next = payload.new as Feedback
          if (prev.some((f) => f.id === next.id)) return prev
          return [next, ...prev]
        })
      })
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [loadFeedback])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)

    if (rating < 1) {
      setError("Please select a rating.")
      return
    }

    setSubmitting(true)
    const timestamp = new Date().toISOString()
    const { data, error } = await supabase
      .from("feedback")
      .insert({ name, message, rating, created_at: timestamp })
      .select()
      .single()
    setSubmitting(false)

    if (error) {
      console.log("[v0] insert feedback error:", error)
      if (error.code === "42501") {
        setError("Feedback submission is blocked by database permissions. Enable insert access for the public feedback table.")
      } else {
        setError("Something went wrong. Please try again.")
      }
      return
    }

    setFeedback((prev) => (prev.some((f) => f.id === data.id) ? prev : [data as Feedback, ...prev]))
    setName("")
    setMessage("")
    setRating(0)
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="scroll-mt-20 bg-secondary/50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Feedback</p>
            <h2 className="mb-4 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              Share your thoughts with me.
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground text-pretty">
              Worked with me, seen my projects, or just have a thought to share? Leave your feedback below — it means a
              lot and helps me grow.
            </p>

            <a
              href="mailto:avniw2@illinois.edu"
              className="inline-flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium transition-colors hover:border-primary/40"
            >
              <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Mail className="size-4" />
              </span>
              avniw2@illinois.edu
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="h-11 rounded-lg border border-input bg-background px-3 text-sm outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Feedback
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share your feedback..."
                  className="resize-none rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
              <div className="grid gap-2">
                <span className="text-sm font-medium">Rating</span>
                <StarRating value={rating} onChange={setRating} interactive />
              </div>
              {error ? <p className="text-sm text-destructive">{error}</p> : null}
              <Button type="submit" size="lg" className="w-full" disabled={submitting}>
                {submitting ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    Submitting...
                  </>
                ) : sent ? (
                  <>
                    <Check className="size-4" />
                    Feedback submitted!
                  </>
                ) : (
                  <>
                    <Send className="size-4" />
                    Submit Feedback
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>

        {feedback.length > 0 ? (
          <div className="mt-16">
            <h3 className="mb-6 font-display text-xl font-bold tracking-tight">
              What people are saying
              <span className="ml-2 text-sm font-normal text-muted-foreground">({feedback.length})</span>
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {feedback.map((item) => (
                <article
                  key={item.id}
                  className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-semibold">{item.name}</span>
                    <StarRating value={item.rating} />
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground text-pretty">{item.message}</p>
                  <time className="mt-auto text-xs text-muted-foreground/70" dateTime={item.created_at}>
                    {formatDate(item.created_at)}
                  </time>
                </article>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}
