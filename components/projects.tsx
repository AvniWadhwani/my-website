import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Feature Adoption & Retention Modeling",
    description:
      "Funnel and cohort analyses in SQL and pandas to measure adoption across user segments, with churn models evaluated by hypothesis testing and an uplift analysis estimating who an intervention would truly influence.",
    image: "/images/project-adoption.png",
    tags: ["SQL", "pandas", "Uplift Modeling"],
  },
  {
    title: "NYC Transit Service Analysis",
    description:
      "A reproducible, version controlled pipeline joining ridership and schedule data for 490 stations from public APIs, flagging across 5 boroughs where demand and service diverged.",
    image: "/images/project-transit.png",
    tags: ["pandas", "APIs", "Matplotlib"],
  },
  {
    title: "Demand Forecasting",
    description:
      "Cleaned 3 years of weekly data and engineered seasonal features, comparing ARIMA, Prophet, and gradient boosting to produce a 24 month forecast with average error brought down to ~12%.",
    image: "/images/project-forecast.png",
    tags: ["scikit-learn", "Prophet", "ARIMA"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 bg-secondary/50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">My Projects</p>
          <h2 className="mb-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            A few things I&apos;ve built recently
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            A selection of data and analytics projects spanning experimentation, reproducible pipelines, and
            forecasting.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.title} preview`}
                  width={480}
                  height={360}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-display text-xl font-semibold">{project.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {project.description}
                </p>
                <Button asChild variant="ghost" className="justify-start px-0 text-primary hover:bg-transparent">
                  <a href="#contact">
                    View Project
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
