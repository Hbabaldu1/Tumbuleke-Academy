export const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Academy", href: "/academy" },
  { label: "Programs", href: "/programs" },
  { label: "Pricing", href: "/pricing" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Login", href: "/login" },
  { label: "Register", href: "/register" },
] as const;

export const footerColumns = [
  {
    title: "Academy",
    links: [
      { label: "About us", href: "/about" },
      { label: "Programs", href: "/programs" },
      { label: "Mentorship", href: "/mentorship" },
    ],
  },
  {
    title: "Programs",
    links: [
      { label: "Digital Skills", href: "/programs/digital-skills" },
      { label: "Leadership", href: "/programs/leadership" },
      { label: "Innovation Lab", href: "/programs/innovation" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Gallery", href: "/gallery" },
      { label: "Events", href: "/events" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/support" },
      { label: "Contact", href: "/contact" },
      { label: "FAQs", href: "/faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Careers", href: "/careers" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
] as const;

export const contactDetails = {
  email: "hello@tumbulekeacademy.org",
  phone: "+27 83 123 4567",
  address: "Mthatha, Eastern Cape, South Africa",
  newsletterCopy: "Receive fresh learning opportunities and campus updates.",
};

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: "in" },
  { label: "Instagram", href: "https://www.instagram.com", icon: "ig" },
  { label: "X", href: "https://www.x.com", icon: "x" },
] as const;
