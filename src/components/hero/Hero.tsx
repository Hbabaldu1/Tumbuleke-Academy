import { HeroBackground } from "@/components/hero/HeroBackground";
import { HeroCTA } from "@/components/hero/HeroCTA";
import { Container } from "@/components/common/Container";
import { Heading } from "@/components/common/Heading";
import { brand } from "@/lib/branding";

const trustItems = [
  { value: "5,000+", label: "Students Trained" },
  { value: "24", label: "Programs" },
  { value: "1,800+", label: "Certificates Issued" },
  { value: "35+", label: "Industry Partners" },
  { value: "8", label: "Years of Impact" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[color:var(--brand-border)] bg-[linear-gradient(135deg,rgba(7,43,120,0.04),rgba(0,87,255,0.08))]">
      <HeroBackground />
      <Container className="relative grid gap-14 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="animate-fade-in-up max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-[color:var(--brand-border)] bg-white/80 px-3 py-1 text-sm font-semibold text-[color:var(--brand-primary)] shadow-sm backdrop-blur">
            {brand.slogan}
          </div>
          <Heading as="h1" size="xl" className="mt-6 leading-tight">
            Empowering Africa Through Technology and Innovation
          </Heading>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--brand-text-secondary)]">
            Tumbuleke Academy equips learners with practical digital skills, innovation mindsets, and industry-ready confidence through programs designed for real career growth.
          </p>
          <HeroCTA className="mt-8" />
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="relative overflow-hidden rounded-[2rem] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] p-6 shadow-[var(--shadow-corporate)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,87,255,0.15),transparent_45%)]" />
            <div className="relative grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-[color:var(--brand-border)] bg-white p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--brand-secondary)]">Learning</p>
                <p className="mt-3 text-3xl font-semibold text-[color:var(--brand-text-primary)]">Live + self-paced</p>
              </div>
              <div className="rounded-[1.5rem] border border-[color:var(--brand-border)] bg-white p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--brand-accent)]">Career</p>
                <p className="mt-3 text-3xl font-semibold text-[color:var(--brand-text-primary)]">Industry-ready skills</p>
              </div>
              <div className="rounded-[1.5rem] border border-[color:var(--brand-border)] bg-[color:var(--brand-primary)] p-5 text-white sm:col-span-2">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-100">Launchpad</p>
                <p className="mt-3 text-2xl font-semibold">From curiosity to certified impact.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-[color:var(--brand-border)] bg-white/70">
        <Container className="grid gap-4 py-8 md:grid-cols-2 xl:grid-cols-5">
          {trustItems.map((item) => (
            <div key={item.label} className="rounded-[1.25rem] border border-[color:var(--brand-border)] bg-white/80 p-4 text-center shadow-sm">
              <p className="text-2xl font-semibold text-[color:var(--brand-primary)]">{item.value}</p>
              <p className="mt-2 text-sm text-[color:var(--brand-text-secondary)]">{item.label}</p>
            </div>
          ))}
        </Container>
      </div>
    </section>
  );
}
