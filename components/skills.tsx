const groups = [
  {
    category: "Programming & Data",
    skills: ["SQL", "Python (pandas, scikit-learn)", "R", "PL/SQL"],
  },
  {
    category: "Databases & Pipelines",
    skills: ["Oracle", "PostgreSQL", "MySQL", "ETL/ELT", "Oracle OIC", "REST APIs"],
  },
  {
    category: "Statistics & Experimentation",
    skills: ["A/B Testing", "Causal Inference", "Predictive Modeling", "Forecasting", "Root-Cause Analysis"],
  },
  {
    category: "BI & Visualization",
    skills: ["Tableau", "Power BI", "Oracle BI / OTBI", "Excel", "Data Storytelling"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
      <div className="mb-12 max-w-2xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Skills &amp; Technologies</p>
        <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          The stack I use to build and ship data work
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {groups.map((group) => (
          <div key={group.category} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h3 className="mb-4 font-display text-lg font-semibold">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
