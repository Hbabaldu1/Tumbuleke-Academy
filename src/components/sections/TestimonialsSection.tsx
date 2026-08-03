import { Container } from "@/components/common/Container";
import { Heading } from "@/components/common/Heading";
import { Section } from "@/components/common/Section";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <Section id="testimonials" className="border-b border-[color:var(--brand-border)] bg-[color:var(--brand-surface)]">
      <Container className="py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--brand-secondary)]">Testimonials</p>
          <Heading as="h2" size="lg" className="mt-4">
            Learners trust the academy for meaningful growth and momentum.
          </Heading>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
