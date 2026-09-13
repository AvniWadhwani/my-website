import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 top-40 size-80 rounded-full bg-accent/10 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 md:py-28">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="size-2 rounded-full bg-primary" />
            Open to Data &amp; Product roles · MSIM @ UIUC
          </span>

          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Hi, I&apos;m Avni Wadhwani
          </h1>

          <p className="font-display text-xl font-semibold text-primary sm:text-2xl">
            Data Engineer &amp; Analyst
          </p>

          <p className="max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
            I build the pipelines, dashboards, and data-quality systems teams quietly rely on every day — turning messy,
            high-stakes data into something people can trust and act on.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button asChild size="lg">
              <a href="#projects">
                View My Work
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm md:max-w-none">
          <div className="absolute inset-0 -rotate-6 rounded-3xl bg-primary/10" />
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
            <Image
              src="/images/headshot.png"
              alt="Portrait of Avni Wadhwani"
              width={640}
              height={720}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
