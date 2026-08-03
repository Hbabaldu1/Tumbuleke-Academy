import { FeatureCard } from "@/components/cards/FeatureCard";
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
            <FeatureCard key={feature.title} title={feature.title} description={feature.description} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
