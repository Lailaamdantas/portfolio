export default function ContactPage() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <p className="text-xs uppercase tracking-[0.2em] text-foreground/60">
          Contact
        </p>
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Tell me a bit about your product and what you need.
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-foreground/70">
          Whether you&apos;re refining an existing product or starting
          something new, a short overview is enough to begin: the problem, your
          team, and timelines.
        </p>
      </section>

      <section className="rounded-2xl border border-border/70 bg-muted/60 p-6 text-sm text-foreground/80">
        <form
          className="space-y-5"
          action="mailto:hello@example.com"
          method="post"
          encType="text/plain"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-foreground/70">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full rounded-lg border border-border/70 bg-background/60 px-3 py-2 text-sm text-foreground outline-none ring-0 placeholder:text-foreground/40 focus:border-accent/70"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-foreground/70">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full rounded-lg border border-border/70 bg-background/60 px-3 py-2 text-sm text-foreground outline-none ring-0 placeholder:text-foreground/40 focus:border-accent/70"
                placeholder="you@company.com"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-foreground/70">
              What are you working on?
            </label>
            <textarea
              name="project"
              rows={4}
              className="w-full resize-none rounded-lg border border-border/70 bg-background/60 px-3 py-2 text-sm text-foreground outline-none ring-0 placeholder:text-foreground/40 focus:border-accent/70"
              placeholder="A few lines about your product, team, and timelines."
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-foreground/70">
              How could I help?
            </label>
            <textarea
              name="help"
              rows={3}
              className="w-full resize-none rounded-lg border border-border/70 bg-background/60 px-3 py-2 text-sm text-foreground outline-none ring-0 placeholder:text-foreground/40 focus:border-accent/70"
              placeholder="Product discovery, design for a specific initiative, design systems, etc."
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <button
              type="submit"
              className="inline-flex items-center rounded-full bg-foreground px-5 py-2.5 text-xs font-medium text-background hover:bg-foreground/90"
            >
              Send email
            </button>
            <a
              href="mailto:hello@example.com"
              className="text-xs text-foreground/60 hover:text-foreground"
            >
              Or email directly: hello@example.com
            </a>
          </div>
        </form>
      </section>
    </div>
  );
}
