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
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
