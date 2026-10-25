import {
  absoluteUrl,
  getMetadataBase,
  getSiteOrigin,
  siteUrl,
} from "@/config/site-url";

export { absoluteUrl, getMetadataBase, getSiteOrigin, siteUrl };

export const locales = ["en", "fa"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const site = {
  name: { en: "Ehsan Mavaei", fa: "احسان ماوایی" },
  title: {
    en: "Founder & Full Stack Developer",
    fa: "بنیان‌گذار و توسعه‌دهنده فول‌استک",
  },
  titleAccent: {
    en: "Full Stack Developer",
    fa: "توسعه‌دهنده فول‌استک",
  },
  email: "ehsanmavaei@gmail.com",
  github: "",
  linkedin: "",
  instagram: "https://www.instagram.com/ehsancodes",
  instagramHandle: "@ehsancodes",
  resumeUrl: "",
  availability: {
    en: "Open to full-time roles and freelance work",
    fa: "آماده همکاری تمام‌وقت و پروژه‌ای",
  },
  heroPitch: {
    en: "I build and run production software end to end. I'm the founder and sole developer of Mavito, a restaurant and café management platform used by real cafés in Iran.",
    fa: "نرم‌افزارهای production را از ابتدا تا انتها می‌سازم و نگه می‌دارم. بنیان‌گذار و تنها توسعه‌دهنده ماویتو هستم؛ پلتفرم مدیریت رستوران و کافه که کافه‌های واقعی در ایران از آن استفاده می‌کنند.",
  },
  seo: {
    title: {
      en: "Ehsan Mavaei | Founder & Full Stack Developer",
      fa: "احسان ماوایی | بنیان‌گذار و توسعه‌دهنده فول‌استک",
    },
    description: {
      en: "Ehsan Mavaei — full stack & Next.js developer, founder of Mavito café and restaurant software in Iran. Open to full-time and freelance work.",
      fa: "احسان ماوایی — توسعه‌دهنده فول‌استک و Next.js، بنیان‌گذار نرم‌افزار مدیریت کافه و رستوران ماویتو در ایران. همکاری تمام‌وقت و پروژه‌ای.",
    },
    keywords: {
      en: [
        "Ehsan Mavaei",
        "Ehsan Mavaee",
        "Ehsan Mavai",
        "full stack developer",
        "Next.js developer",
        "Node.js developer",
        "freelance developer",
        "Mavito",
        "café restaurant software",
      ],
      fa: [
        "احسان ماوایی",
        "احسان معوایی",
        "توسعه‌دهنده فول‌استک",
        "برنامه‌نویس وب",
        "طراح سایت",
        "نرم‌افزار مدیریت کافه و رستوران",
        "Next.js",
        "Node.js",
        "ماویتو",
        "Mavito",
      ],
    },
    alternateNames: {
      en: ["Ehsan Mavaei", "Ehsan Mavaee", "Ehsan Mavai"],
      fa: ["احسان ماوایی", "احسان معوایی"],
    },
    leadParagraph: {
      en: "I'm Ehsan Mavaei — also spelled Ehsan Mavaee or Ehsan Mavai — a full stack developer and founder. I design, build, and operate Mavito, café and restaurant management software used by real cafés in Iran, as a Next.js and Node.js developer open to full-time work and freelance projects.",
      fa: "من احسان ماوایی (احسان معوایی) هستم؛ توسعه‌دهنده فول‌استک و بنیان‌گذار. نرم‌افزار مدیریت کافه و رستوران ماویتو را به‌تنهایی می‌سازم و اداره می‌کنم — برنامه‌نویس وب با Next.js و Node.js، آماده همکاری تمام‌وقت و پروژه‌ای.",
    },
  },
  codeStack: ["Next.js", "Node.js", "MongoDB", "DevOps"] as const,
  techStack: {
    frontend: ["Next.js", "React", "TypeScript"] as const,
    backend: ["Node.js", "REST APIs"] as const,
    data: ["MongoDB"] as const,
    devops: ["deployment", "hosting", "server operations"] as const,
  },
  aboutParagraphs: {
    en: [
      "I am a full stack developer and founder.",
      "I designed, built, deployed, and operate Mavito alone, covering frontend, backend, database, and DevOps.",
      "I am looking for full-time roles and freelance projects.",
    ],
    fa: [
      "توسعه‌دهنده فول‌استک و بنیان‌گذار هستم.",
      "ماویتو را به‌تنهایی طراحی، ساخت، استقرار و نگه‌داری می‌کنم؛ از فرانت‌اند و بک‌اند تا پایگاه داده و DevOps.",
      "به دنبال موقعیت تمام‌وقت و پروژه‌های فریلنس هستم.",
    ],
  },
  experience: {
    role: {
      en: "Founder & Full Stack Developer",
      fa: "بنیان‌گذار و توسعه‌دهنده فول‌استک",
    },
    company: { en: "Mavito", fa: "ماویتو" },
    startDate: "",
    endDate: "",
    description: {
      en: "Built and operate a multi-module SaaS platform for cafés and restaurants, solo.",
      fa: "پلتفرم SaaS چندماژوله برای کافه و رستوران را به‌تنهایی ساخته و اداره می‌کنم.",
    },
  },
  photoPath: "/images/me.webp",
  mavito: {
    name: { en: "Mavito", fa: "ماویتو" },
    liveUrl: "https://mavito.ir",
    walkthroughSubject: "Mavito walkthrough",
    screenshots: {
      hero: {
        src: "/images/mavito/hero.png",
        alt: {
          en: "Mavito platform hero screen showing the main dashboard",
          fa: "نمای اصلی داشبورد پلتفرم ماویتو",
        },
      },
      orders: {
        src: "/images/mavito/orders-panel.png",
        alt: {
          en: "Mavito orders panel with live order management",
          fa: "پنل سفارش‌های ماویتو با مدیریت سفارش زنده",
        },
      },
      dashboard: {
        src: "/images/mavito/dashboard.png",
        alt: {
          en: "Mavito analytics and reporting dashboard",
          fa: "داشبورد گزارش‌ها و تحلیل ماویتو",
        },
      },
    },
    stackTags: ["Next.js", "Node.js", "MongoDB", "DevOps"] as const,
    clients: {
      en: "Used by cafés such as Café Team, Rosebud, and Octave.",
      fa: "در کافه‌هایی مانند Café Team، Rosebud و Octave استفاده می‌شود.",
    },
  },
} as const;

export function isFilled(value: string | undefined | null): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export function getPersonSameAs(): string[] {
  const links = [
    site.instagram,
    site.github,
    site.linkedin,
    site.mavito.liveUrl,
  ];
  return links.filter(isFilled);
}
