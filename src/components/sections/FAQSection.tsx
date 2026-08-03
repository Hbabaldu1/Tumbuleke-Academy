"use client";

import { useState } from "react";
import { Container } from "@/components/common/Container";
import { Heading } from "@/components/common/Heading";
import { Section } from "@/components/common/Section";
import { faqs } from "@/data/faqs";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" className="border-b border-[color:var(--brand-border)] bg-[color:var(--brand-surface)]">
      <Container className="py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--brand-secondary)]">FAQ</p>
          <Heading as="h2" size="lg" className="mt-4">
            Answers for learners who want clarity before they begin.
          </Heading>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = index === openIndex;
            return (
              <div key={faq.question} className="rounded-[1.5rem] border border-[color:var(--brand-border)] bg-white shadow-sm">
                <h3>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-6 py-5 text-left"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="text-lg font-semibold text-[color:var(--brand-text-primary)]">{faq.question}</span>
                    <span className="ml-4 text-2xl text-[color:var(--brand-primary)]">{isOpen ? "−" : "+"}</span>
                  </button>
                </h3>
                {isOpen ? <p className="px-6 pb-6 text-sm leading-7 text-[color:var(--brand-text-secondary)]">{faq.answer}</p> : null}
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
