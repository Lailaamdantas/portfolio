import { ProjectCard } from "@/components/ProjectCard";

const projects = [
  {
    title: "Finch · Personal Finance OS",
    subtitle: "Product design · Mobile & Web",
    description:
      "Led product design from early discovery through launch. Defined the design system, money movement flows, and high-touch support surfaces for a calm, trust-building experience.",
    tags: ["Design System", "End-to-end flows", "Onboarding"],
    meta: "Fintech · 0 → 1",
  },
  {
    title: "Northline · Logistics Control Tower",
    subtitle: "Enterprise SaaS · Web",
    description:
      "Re-architected a dense multi-pane dashboard into a decision-first interface. Simplified critical alerts, shipment timelines, and exception handling flows.",
    tags: ["Information Architecture", "Data Viz", "SaaS"],
    meta: "Logistics · B2B",
  },
  {
    title: "Lumen Studio · Creative Collaboration",
    subtitle: "Collaboration Tool · Web",
    description:
      "Designed shared boards, commenting, and session flows for distributed creative teams. Focused on clarity, momentum, and low-friction collaboration.",
    tags: ["Workshops", "Prototyping", "Collaboration"],
    meta: "Creator tools",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <p className="text-xs uppercase tracking-[0.2em] text-foreground/60">
          Case Studies
        </p>
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Selected work across fintech, logistics, and collaboration tools.
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-foreground/70">
          A small set of projects that show how I approach complex systems,
          multi-stakeholder constraints, and the details that make interfaces
          feel composed and trustworthy.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            subtitle={project.subtitle}
            description={project.description}
            tags={project.tags}
            href="#"
            meta={project.meta}
          />
        ))}
      </section>
    </div>
  );
}
