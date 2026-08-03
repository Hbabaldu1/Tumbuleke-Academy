import { Container } from "@/components/common/Container";
import { Heading } from "@/components/common/Heading";
import { Section } from "@/components/common/Section";

const journeySteps = [
  { title: "Discover", description: "Explore pathways aligned with your ambition and current skill level." },
  { title: "Learn", description: "Join practical learning experiences shaped by experts and modern tools." },
  { title: "Practice", description: "Apply your knowledge through projects that build confidence and evidence." },
  { title: "Get Certified", description: "Showcase your growth through professional recognition and shared credentials." },
];

export function AboutSection() {
  return (
    <Section id="journey" className="border-b border-[color:var(--brand-border)] bg-white/70">
      <Container className="py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--brand-secondary)]">Learning journey</p>
          <Heading as="h2" size="lg" className="mt-4">
            A clear path from curiosity to certificate.
          </Heading>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {journeySteps.map((step, index) => (
            <div key={step.title} className="rounded-[1.5rem] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--brand-primary)] text-sm font-semibold text-white">
                0{index + 1}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-[color:var(--brand-text-primary)]">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[color:var(--brand-text-secondary)]">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
