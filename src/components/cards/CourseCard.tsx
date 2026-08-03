import Link from "next/link";
import type { ProgramItem } from "@/data/programs";

type CourseCardProps = {
  program: ProgramItem;
};

export function CourseCard({ program }: CourseCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[color:var(--brand-border)] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]">
      <div className={`h-36 bg-gradient-to-br ${program.accent}`} />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3 text-sm text-[color:var(--brand-text-secondary)]">
          <span className="rounded-full bg-[color:var(--brand-surface)] px-3 py-1 font-semibold text-[color:var(--brand-primary)]">
            {program.category}
          </span>
          <span>{program.level}</span>
        </div>
        <h3 className="mt-5 text-xl font-semibold text-[color:var(--brand-text-primary)]">
          {program.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-[color:var(--brand-text-secondary)]">
          {program.description}
        </p>
        <div className="mt-5 flex items-center justify-between text-sm font-medium text-[color:var(--brand-text-secondary)]">
          <span>{program.duration}</span>
          <Link href={program.href} className="font-semibold text-[color:var(--brand-primary)] transition-colors hover:text-[color:var(--brand-secondary)]">
            Enroll
          </Link>
        </div>
      </div>
    </article>
  );
}
