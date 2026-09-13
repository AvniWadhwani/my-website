import { LinkedinIcon } from "@/components/brand-icons"

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/avni1399", icon: LinkedinIcon },
]

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Avni Wadhwani. All rights reserved.
        </p>
        <div className="flex gap-2">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <social.icon className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
