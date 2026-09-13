import Image from "next/image"

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
      <div className="grid items-center gap-12 md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
            <Image
              src="/images/about.png"
              alt="A data engineering workstation with BI dashboards and data pipelines"
              width={520}
              height={560}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="md:col-span-3">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">About Me</p>
          <h2 className="mb-6 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Making sure the data behind every dashboard is right
          </h2>
          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            <p>
              Most people never think about the data behind a dashboard — until it&apos;s wrong. My job is to make sure
              it never is. I&apos;m a data engineer and analyst who builds the pipelines, dashboards, and quality systems
              that teams quietly rely on every day.
            </p>
            <p>
              Over four years at Accenture, I worked with U.S. enterprise clients to turn messy, high-stakes data into
              something people could actually trust and act on — leading a payroll and benefits migration solo,
              resolving 3,200+ anomalies for a zero-disruption go-live, building ML-based validation that cut repeat
              incidents by 45%, and designing 20+ BI dashboards that handed analysts back 8+ hours a week.
            </p>
            <p>
              Now I&apos;m finishing my M.S. in Information Management at UIUC and moving toward product and data roles,
              pairing that engineering foundation with the part I love most: figuring out what people actually need and
              building toward it.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
