import { Container } from "@/components/common/Container";
import { Heading } from "@/components/common/Heading";
import { Section } from "@/components/common/Section";

const features = [
  {
    title: "Expert Instructors",
    description: "Learn from practitioners who understand modern work and the realities of growth.",
  },
  {
    title: "Hands-on Projects",
    description: "Build tangible experience through guided assignments and product-style challenges.",
  },
  {
    title: "Professional Certificates",
    description: "Receive credentials that strengthen your portfolio and your professional story.",
  },
  {
    title: "Career Support",
    description: "Get guidance on navigating opportunities, interviews, and next-step planning.",
  },
  {
    title: "Flexible Learning",
    description: "Learn at a pace that works for your schedule, whether you are studying full-time or part-time.",
  },
  {
    title: "Innovation Driven",
    description: "Stay ahead with emerging tools, strategic thinking, and a future-first mindset.",
  },
];

export function FeaturesSection() {
  return (
    <Section id="features" className="border-b border-[color:var(--brand-border)] bg-[color:var(--brand-surface)]">
      <Container className="py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--brand-secondary)]">Why choose us</p>
          <Heading as="h2" size="lg" className="mt-4">
            Built for learners who want momentum, confidence, and opportunity.
          </Heading>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-[1.5rem] border border-[color:var(--brand-border)] bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--brand-primary)]/10 text-[color:var(--brand-primary)]">
                ✦
              </div>
              <h3 className="mt-5 text-lg font-semibold text-[color:var(--brand-text-primary)]">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[color:var(--brand-text-secondary)]">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
