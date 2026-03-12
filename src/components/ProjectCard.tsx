import Link from "next/link";
import type { ReactNode } from "react";

export type ProjectCardProps = {
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  href: string;
  meta?: ReactNode;
};

export function ProjectCard({
  title,
  subtitle,
  description,
  tags,
  href,
  meta,
}: ProjectCardProps) {
  return (
    <article className="group flex flex-col justify-between rounded-2xl border border-border/70 bg-gradient-to-b from-muted/80 via-muted/60 to-background/90 p-5 shadow-subtle transition hover:-translate-y-1 hover:border-accent/60 hover:shadow-xl">
      <div className="space-y-2">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-base font-semibold text-foreground">
              <Link href={href} className="hover:text-accent">
                {title}
              </Link>
            </h3>
            {subtitle && (
              <p className="text-xs uppercase tracking-[0.2em] text-foreground/50">
                {subtitle}
              </p>
            )}
          </div>
          {meta && <div className="text-xs text-foreground/60">{meta}</div>}
        </div>
        <p className="text-sm leading-relaxed text-foreground/70">
          {description}
        </p>
      </div>
      <div className="mt-4 flex items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-background/60 px-2 py-0.5 text-xs text-foreground/60 ring-1 ring-border/70"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={href}
          className="inline-flex items-center text-xs font-medium text-accent group-hover:gap-1 transition-[gap,color]"
        >
          View case study
          <span aria-hidden>↗</span>
        </Link>
      </div>
    </article>
  );
}
