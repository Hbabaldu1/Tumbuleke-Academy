import { Container } from "@/components/common/Container";
import { Heading } from "@/components/common/Heading";
import { Section } from "@/components/common/Section";
import { partners } from "@/data/partners";

export function PartnersSection() {
  return (
    <Section id="partners" className="border-b border-[color:var(--brand-border)] bg-white/70">
      <Container className="py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--brand-secondary)]">Partners</p>
          <Heading as="h2" size="lg" className="mt-4">
            Backed by an ecosystem that values skills, credibility, and innovation.
          </Heading>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner) => (
            <div key={partner.name} className="rounded-[1.5rem] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] px-6 py-8 text-center shadow-sm">
              <p className="text-xl font-semibold text-[color:var(--brand-text-primary)]">{partner.name}</p>
              <p className="mt-2 text-sm text-[color:var(--brand-text-secondary)]">{partner.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
