export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "How do I enroll in a program?",
    answer: "Select a program, choose your preferred track, and complete the enrollment form. Our admissions team will confirm your place shortly after.",
  },
  {
    question: "Do you issue certificates?",
    answer: "Yes. Every completed program includes a professional certificate that can be shared on LinkedIn and other career platforms.",
  },
  {
    question: "What payment options are available?",
    answer: "We support secure online payments, invoicing for teams, and flexible installment options for qualifying learners.",
  },
  {
    question: "Are the programs live or self-paced?",
    answer: "We offer a mix of structured live sessions and self-paced modules so learners can choose the rhythm that fits their schedule.",
  },
  {
    question: "What support is available after enrollment?",
    answer: "Every learner receives access to mentors, support channels, and community resources throughout their journey.",
  },
];
