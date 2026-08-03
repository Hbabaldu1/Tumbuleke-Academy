import { CourseCard } from "@/components/cards/CourseCard";
import { Container } from "@/components/common/Container";
import { Heading } from "@/components/common/Heading";
import { Section } from "@/components/common/Section";
import { programs } from "@/data/programs";

export function ProgramsSection() {
  return (
    <Section id="programs" className="border-b border-[color:var(--brand-border)] bg-white/70">
      <Container className="py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--brand-secondary)]">Featured programs</p>
          <Heading as="h2" size="lg" className="mt-4">
            Learn the skills employers and communities need now.
          </Heading>
          <p className="mt-5 text-lg leading-8 text-[color:var(--brand-text-secondary)]">
            Our cohort-based and self-paced programs combine practical instruction with portfolio-ready projects.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {programs.map((program) => (
            <CourseCard key={program.title} program={program} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
