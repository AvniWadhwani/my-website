import { BookOpen, Coffee, Music2, Plane, Zap } from "lucide-react"

const hobbies = [
  {
    icon: BookOpen,
    title: "Reading",
    description: "Getting lost in a good book, from nonfiction on product thinking to the occasional gripping novel.",
  },
  {
    icon: Music2,
    title: "Dancing",
    description: "Letting loose and moving to the music, whether it is a choreographed routine or a spontaneous groove.",
  },
  {
    icon: Zap,
    title: "Badminton",
    description: "Fast rallies and quick reflexes on the court make for the perfect competitive unwind.",
  },
  {
    icon: Coffee,
    title: "Trying Coffees",
    description: "Hunting down new cafes and brews, tasting my way through single origins and house blends.",
  },
  {
    icon: Plane,
    title: "Travelling",
    description: "Exploring new places, cultures, and cuisines, and collecting stories from every trip along the way.",
  },
]

export function Hobbies() {
  return (
    <section id="hobbies" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
      <div className="mb-12 max-w-2xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Beyond the Data</p>
        <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          Things I love when I step away from the screen
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {hobbies.map((hobby) => (
          <div
            key={hobby.title}
            className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-primary/40"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/5 text-primary">
              <hobby.icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="mb-2 font-display text-lg font-semibold">{hobby.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{hobby.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
