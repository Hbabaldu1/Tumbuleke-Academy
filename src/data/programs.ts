export type ProgramItem = {
  title: string;
  category: string;
  level: string;
  duration: string;
  description: string;
  href: string;
  accent: string;
};

export const programs: ProgramItem[] = [
  {
    title: "Microsoft Office Professional",
    category: "Productivity",
    level: "Beginner",
    duration: "4 weeks",
    description: "Master the workflows behind Word, Excel, PowerPoint, and collaboration tools for modern workplaces.",
    href: "/programs/microsoft-office-professional",
    accent: "from-[#072B78] to-[#0057FF]",
  },
  {
    title: "AI Productivity",
    category: "Future Skills",
    level: "Intermediate",
    duration: "6 weeks",
    description: "Learn practical AI tools to accelerate research, content, and everyday decision-making.",
    href: "/programs/ai-productivity",
    accent: "from-[#17A34A] to-[#16A34A]",
  },
  {
    title: "Cybersecurity Essentials",
    category: "Security",
    level: "Beginner",
    duration: "5 weeks",
    description: "Build safe digital habits and understand the fundamentals of protecting personal and professional systems.",
    href: "/programs/cybersecurity-essentials",
    accent: "from-[#0F172A] to-[#334155]",
  },
  {
    title: "Graphics Design",
    category: "Creative",
    level: "Beginner",
    duration: "6 weeks",
    description: "Create visual identities, brand assets, and compelling digital experiences with modern design principles.",
    href: "/programs/graphics-design",
    accent: "from-[#7C3AED] to-[#4338CA]",
  },
  {
    title: "Web Development",
    category: "Engineering",
    level: "Intermediate",
    duration: "8 weeks",
    description: "Design and build responsive websites using modern frontend tools and production-ready workflows.",
    href: "/programs/web-development",
    accent: "from-[#0891B2] to-[#0284C7]",
  },
  {
    title: "Data Analytics",
    category: "Analytics",
    level: "Intermediate",
    duration: "7 weeks",
    description: "Translate data into insight with storytelling, dashboards, and practical analytical techniques.",
    href: "/programs/data-analytics",
    accent: "from-[#DC2626] to-[#FB923C]",
  },
];
