import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

const roles = [
  {
    period: "Jan 2026 — Present",
    title: "Teaching Assistant — Growth Coach",
    company: "Gies College of Business, UIUC",
    points: [
      "Lead weekly small group sessions guiding students in goal setting, self reflection, and skill development.",
      "Run 1:1 user and stakeholder conversations, and design engaging session content with program coordinators.",
    ],
  },
  {
    period: "Dec 2023 — May 2025",
    title: "Application Development Analyst — Data Engineering & BI",
    company: "Accenture",
    points: [
      "Led an HCM data migration solo with SQL validation and Python scripts, resolving 3,200+ payroll and benefits anomalies for a zero disruption go live with an 18% accuracy improvement.",
      "Built Python ML validation with schema and rule based filters to block corrupt records at ingestion, cutting repeat incidents by 45% across dashboards, reconciliation, and audit workflows.",
      "Designed 20+ BI Publisher models and OTBI dashboards for 3 business units, cutting reporting turnaround by 60% and freeing 8+ analyst hours weekly.",
      "Rebuilt ETL pipelines and PL/SQL procedures across Oracle Fusion AP, AR, and GL with REST integrations via Oracle OIC, reducing ERP data incidents by 30%.",
    ],
  },
  {
    period: "Sept 2021 — Dec 2023",
    title: "Application Development Associate — Data & Analytics",
    company: "Accenture",
    points: [
      "Diagnosed PL/SQL bottlenecks in 10M+ nightly records, optimizing indexing, partitioning, and batch logic across MySQL, PostgreSQL, and Oracle.",
      "Built an R forecasting model projecting load volumes across 4 domains, cutting overnight SLA breaches by 30%.",
      "Ran EDA on 3 years of data in SQL Server, surfacing capacity and quality trends that shaped multi million dollar infrastructure decisions.",
      "Built SQL query libraries and data dictionaries in GitHub, eliminating cross report discrepancies and cutting analyst onboarding by 3 weeks.",
    ],
  },
  {
    period: "May 2021 — Sept 2021",
    title: "Software Consultant (onsite at Morgan Stanley)",
    company: "Wiley India",
    points: [
      "Enhanced taxation outbounds using Java, JUnit, and Spring Hibernate within agile SDLC practices.",
      "Improved requirement clarity by collaborating with clients, management, and sales teams.",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 bg-secondary/50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Experience</p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              Where I&apos;ve shipped data &amp; ML
            </h2>
          </div>
          <Button asChild variant="outline" size="lg">
            <a href="/Avni_Wadhwani_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="size-4" />
              Download Resume
            </a>
          </Button>
        </div>

        <ol className="relative border-l border-border pl-6 sm:pl-8">
          {roles.map((role) => (
            <li key={role.title} className="mb-10 last:mb-0">
              <span className="absolute -left-[7px] mt-2 size-3.5 rounded-full border-2 border-background bg-primary" />
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="font-display text-xl font-semibold">
                    {role.title}
                    <span className="text-primary"> · {role.company}</span>
                  </h3>
                  <span className="text-sm font-medium text-muted-foreground">{role.period}</span>
                </div>
                <ul className="space-y-2">
                  {role.points.map((point) => (
                    <li key={point} className="flex gap-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/50" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">Education</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-display text-lg font-semibold">M.S. Information Management</h3>
              <p className="mt-1 text-sm text-primary">University of Illinois Urbana-Champaign</p>
              <p className="mt-1 text-sm text-muted-foreground">Data Analytics · GPA 4.00/4 · Aug 2025 — May 2027</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-display text-lg font-semibold">B.Tech, Data Science</h3>
              <p className="mt-1 text-sm text-primary">Medi-Caps University, India</p>
              <p className="mt-1 text-sm text-muted-foreground">GPA 8.18/10 · Aug 2017 — May 2021</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
