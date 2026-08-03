import type { TestimonialItem } from "@/data/testimonials";

type TestimonialCardProps = {
  testimonial: TestimonialItem;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="rounded-[1.75rem] border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] p-6 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--brand-primary)] font-semibold text-white">
          {testimonial.initials}
        </div>
        <div>
          <h3 className="font-semibold text-[color:var(--brand-text-primary)]">{testimonial.name}</h3>
          <p className="text-sm text-[color:var(--brand-text-secondary)]">{testimonial.role}</p>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-1 text-[#F59E0B]" aria-label="Five star rating">
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={`${testimonial.name}-${index}`}>★</span>
        ))}
      </div>
      <p className="mt-4 text-sm leading-7 text-[color:var(--brand-text-secondary)]">“{testimonial.quote}”</p>
    </article>
  );
}
