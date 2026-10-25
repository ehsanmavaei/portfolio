export const siteConfig = {
  name: "Ehsan Mavaei",
  title: "Ehsan Mavaei — Portfolio",
  description:
    "Personal portfolio of Ehsan Mavaei — software developer focused on clean, reliable web applications.",
  url: "https://ehsanmavaei.dev",
  email: "hello@ehsanmavaei.dev",
  github: "https://github.com/ehsanmavaei",
  linkedin: "https://www.linkedin.com/in/ehsanmavaei",
  intro:
    "I build thoughtful web experiences with modern tools. I care about performance, accessibility, and maintainable code.",
  heroAccentPhrase: "thoughtful web experiences",
  photoSrc: "/photo-placeholder.svg",
  /** Replace with a PDF URL in public/ when ready. */
  resumeHref: "[Placeholder: /resume.pdf]",
  availableForRoles: true,
} as const;

export const sectionNav = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
] as const;

/** Legacy routes — kept for static pages and SEO. */
export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
