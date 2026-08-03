import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import { SecondaryButton } from "@/components/buttons/SecondaryButton";
import { Container } from "@/components/common/Container";
import { Heading } from "@/components/common/Heading";
import { Section } from "@/components/common/Section";

export function CTASection() {
  return (
    <Section id="cta" className="bg-white/70">
      <Container className="py-20">
        <div className="rounded-[2rem] border border-[color:var(--brand-border)] bg-[linear-gradient(135deg,rgba(7,43,120,0.96),rgba(0,87,255,0.9))] p-10 text-white shadow-[var(--shadow-corporate)] sm:p-14">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-100">Start your journey</p>
            <Heading as="h2" size="lg" className="mt-4 text-white">
              Ready to Start Your Technology Journey?
            </Heading>
            <p className="mt-5 text-lg leading-8 text-blue-50">
              Join a learning experience built for ambitious professionals, aspiring innovators, and future-ready teams.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <PrimaryButton href="/register" className="bg-white text-[color:var(--brand-primary)] hover:bg-slate-100">Enroll Today</PrimaryButton>
            <SecondaryButton href="/contact" className="border-white/40 bg-transparent text-white hover:bg-white/10">Contact Us</SecondaryButton>
          </div>
        </div>
      </Container>
    </Section>
  );
}
