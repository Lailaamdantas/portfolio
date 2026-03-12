export default function AboutPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <p className="text-xs uppercase tracking-[0.2em] text-foreground/60">
          About
        </p>
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          I design products that feel considered, calm, and quietly opinionated.
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-foreground/70">
          I&apos;m a product designer with a focus on complex flows, systems,
          and the small details that make interfaces feel effortless. I enjoy
          partnering closely with product and engineering to move from fuzzy
          problems to clear, shippable solutions.
        </p>
      </section>

      <section className="grid gap-10 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1.2fr)]">
        <div className="space-y-4 text-sm leading-relaxed text-foreground/75">
          <p>
            Over the past few years I&apos;ve worked across fintech, logistics,
            and creative tools—often joining teams when they needed to mature a
            v1 product into something more scalable and intentional.
          </p>
          <p>
            My process moves between research, systems thinking, and detailed
            interaction design. I&apos;m comfortable navigating ambiguity, but I
            also care deeply about the craft of the final UI: typography,
            rhythm, and the way an interaction feels in motion.
          </p>
          <p>
            I like to keep teams aligned through tight feedback loops, clear
            documentation, and prototypes that make decisions easier. I&apos;m
            happiest when collaborating with curious PMs and engineers who care
            as much about the experience as the surface.
          </p>
        </div>
        <div className="space-y-4 rounded-2xl border border-border/70 bg-muted/60 p-5 text-sm text-foreground/75">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60">
            Snapshot
          </h2>
          <dl className="space-y-3">
            <div className="flex justify-between gap-3">
              <dt className="text-foreground/60">Based in</dt>
              <dd className="text-foreground">Remote-friendly (EU time zones)</dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt className="text-foreground/60">Focus</dt>
              <dd className="text-foreground">
                Product strategy, interaction design, design systems
              </dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt className="text-foreground/60">Collaboration</dt>
              <dd className="text-foreground">
                In-house, embedded, or selective freelance
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </div>
  );
}
