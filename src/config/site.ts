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
  /** Set your LinkedIn profile URL to show the link in the hero, contact, and JSON-LD sameAs. */
  linkedin: "",
  /** Set your Medium profile URL for JSON-LD sameAs. */
  medium: "",
  instagram: "https://www.instagram.com/ehsancodes",
  instagramHandle: "@ehsancodes",
  resumeUrl: "",
  availability: {
    en: "Open to full-time roles and freelance work",
    fa: "آماده همکاری تمام‌وقت و پروژه‌ای",
  },
  heroPitch: {
    en: "I build and run production software end to end—as founder and sole developer of Mavito, a café and restaurant management platform used by real venues in Iran. I work in React, Next.js, TypeScript, and Node.js with MongoDB, from product design through deployment and day-to-day operations.",
    fa: "نرم‌افزار production را از طراحی تا استقرار و نگه‌داری می‌سازم؛ بنیان‌گذار و تنها توسعه‌دهنده ماویتو، پلتفرم مدیریت کافه و رستوران که مجموعه‌های واقعی در ایران از آن استفاده می‌کنند. با React، Next.js، TypeScript و Node.js و MongoDB کار می‌کنم.",
  },
  contactSubjects: {
    fullTime: {
      en: "Full-time opportunity — Ehsan Mavaei",
      fa: "فرصت همکاری تمام‌وقت — احسان ماوایی",
    },
    freelance: {
      en: "Freelance project — Ehsan Mavaei",
      fa: "پروژه فریلنس — احسان ماوایی",
    },
  },
  seo: {
    title: {
      en: "Ehsan Mavaei | Founder & Full Stack Developer",
      fa: "احسان ماوایی | بنیان‌گذار و توسعه‌دهنده فول‌استک",
    },
    description: {
      en: "Full-stack developer and founder of Mavito (café & restaurant SaaS). React, Next.js, TypeScript, Node.js, MongoDB. Open to international full-time roles and freelance projects.",
      fa: "توسعه‌دهنده فول‌استک و بنیان‌گذار ماویتو (SaaS مدیریت کافه و رستوران). React، Next.js، TypeScript، Node.js، MongoDB. آماده همکاری تمام‌وقت بین‌المللی و پروژه فریلنس.",
    },
    keywords: {
      en: [
        "Ehsan Mavaei",
        "Ehsan Mavaee",
        "Ehsan Mavai",
        "full stack developer",
        "React developer",
        "Next.js developer",
        "TypeScript developer",
        "Node.js developer",
        "MongoDB",
        "freelance developer",
        "Mavito",
        "café restaurant software",
      ],
      fa: [
        "احسان ماوایی",
        "احسان معوایی",
        "توسعه‌دهنده فول‌استک",
        "برنامه‌نویس وب",
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "MongoDB",
        "نرم‌افزار مدیریت کافه و رستوران",
        "ماویتو",
        "Mavito",
      ],
    },
    alternateNames: {
      en: ["Ehsan Mavaei", "Ehsan Mavaee", "Ehsan Mavai"],
      fa: ["احسان ماوایی", "احسان معوایی"],
    },
  },
  codeStack: ["Next.js", "React", "TypeScript", "Node.js", "MongoDB"] as const,
  techStack: {
    frontend: ["Next.js", "React", "TypeScript"] as const,
    backend: ["Node.js", "REST APIs"] as const,
    data: ["MongoDB"] as const,
    devops: ["production deployment", "hosting", "monitoring"] as const,
  },
  aboutParagraphs: {
    en: [
      "I focus on practical product work: clear UX for staff under time pressure, reliable APIs, and data models that match how a venue actually runs.",
      "Building Mavito solo means I own trade-offs across the stack—from schema design and permissions to release and production support.",
      "I'm open to remote full-time roles with product-focused teams and to well-scoped freelance builds (dashboards, APIs, or improving an existing Next.js/Node app).",
    ],
    fa: [
      "روی کار عملی محصول تمرکز دارم: تجربه کاربری روشن برای پرسنل در زمان شلوغی، APIهای قابل اتکا و مدل داده متناسب با عملکرد واقعی مجموعه.",
      "ساختن ماویتو به‌تنهایی یعنی تصمیم‌های فنی در کل استک با خودم است؛ از طراحی دیتابیس و دسترسی‌ها تا انتشار و پشتیبانی production.",
      "برای موقعیت‌های دورکار تمام‌وقت با تیم‌های محورمحصول و پروژه‌های فریلنس مشخص (داشبورد، API، یا بهبود اپ Next.js/Node) آماده همکاری هستم.",
    ],
  },
  services: {
    heading: { en: "What I can help with", fa: "کارهایی که می‌توانم انجام دهم" },
    intro: {
      en: "Work I can substantiate from building and operating Mavito—not an agency roster.",
      fa: "کارهایی که از ساخت و نگه‌داری ماویتو می‌توانم انجام دهم؛ نه فهرست یک آژانس.",
    },
    items: {
      en: [
        "Full-stack web applications with React, Next.js, TypeScript, and Node.js",
        "Admin dashboards and internal tools for operations teams",
        "REST APIs and integration with third-party services",
        "MongoDB-backed applications: modeling, queries, and migrations",
        "Improving and extending existing Next.js or Node.js codebases",
      ],
      fa: [
        "اپلیکیشن وب فول‌استک با React، Next.js، TypeScript و Node.js",
        "داشبورد مدیریتی و ابزار داخلی برای تیم عملیات",
        "REST API و یکپارچه‌سازی با سرویس‌های شخص ثالث",
        "اپلیکیشن مبتنی بر MongoDB: مدل‌سازی، کوئری و مهاجرت",
        "بهبود و توسعه کدبیس موجود Next.js یا Node.js",
      ],
    },
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
      en: "Sole builder of a multi-module SaaS used in production: digital menu, ordering, kitchen display, inventory, finance, and staff permissions.",
      fa: "تنها سازنده SaaS چندماژوله در production: منوی دیجیتال، سفارش‌گیری، KDS، انبار، مالی و دسترسی پرسنل.",
    },
  },
  photoPath: "/images/me.webp",
  photoAlt: {
    en: "Portrait photo of Ehsan Mavaei",
    fa: "عکس پرتره احسان ماوایی",
  },
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
    stackTags: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
    ] as const,
    stackNote: {
      en: "Customer-facing menus and admin panels use Next.js and React with TypeScript. Business logic and REST APIs run on Node.js. Persistent data lives in MongoDB. I handle production deployment, hosting, and operational monitoring.",
      fa: "منوی مشتری و پنل مدیریت با Next.js و React و TypeScript. منطق کسب‌وکار و REST API روی Node.js. داده پایدار در MongoDB. استقرار production، هاست و پایش عملیاتی با خودم است.",
    },
    users: {
      en: "Independent cafés and restaurants in Iran—owners, kitchen staff, waiters, and cashiers—who need one system for daily service, not scattered tools.",
      fa: "کافه‌ها و رستوران‌های مستقل در ایران—مدیر، آشپزخانه، گارسون و صندوق—که به یک سامانه برای سرویس روزانه نیاز دارند.",
    },
    architecture: {
      en: "Each venue runs in its own account with role-based access. Orders flow from QR or staff devices into a shared kitchen queue; completed sales tie into inventory recipes and financial reports where those modules are enabled.",
      fa: "هر مجموعه حساب جدا با دسترسی مبتنی بر نقش دارد. سفارش از QR یا دستگاه پرسنل وارد صف آشپزخانه می‌شود؛ فروش تکمیل‌شده در صورت فعال بودن ماژول‌ها به دستور پخت انبار و گزارش مالی متصل می‌شود.",
    },
    orderFlow: {
      en: [
        "Guest scans QR or staff enters order at the table",
        "Order appears on the kitchen display with status and timers",
        "Payment and cashier steps update daily finance reports",
        "Inventory modules deduct raw materials from recipes when configured",
      ],
      fa: [
        "مهمان QR را اسکن می‌کند یا پرسنل سفارش سر میز ثبت می‌کند",
        "سفارش روی KDS با وضعیت و تایمر نمایش داده می‌شود",
        "پرداخت و صندوق گزارش مالی روزانه را به‌روز می‌کند",
        "در صورت پیکربندی، ماژول انبار مواد اولیه را از دستور پخت کسر می‌کند",
      ],
    },
    challenges: {
      en: [
        "Keeping order status consistent for guests, waitstaff, and kitchen during peak service",
        "Modeling recipes and stock so sales automatically reflect inventory without double entry",
        "Designing permissions so each staff role sees only what they need on floor tablets and admin panels",
      ],
      fa: [
        "همگام نگه داشتن وضعیت سفارش برای مهمان، گارسون و آشپزخانه در ساعات شلوغ",
        "مدل‌سازی دستور پخت و موجودی تا فروش بدون ورود دستی دوباره در انبار منعکس شود",
        "طراحی سطح دسترسی تا هر نقش فقط آنچه روی تبلت سالن و پنل نیاز دارد ببیند",
      ],
    },
    featureStatus: {
      production: {
        en: [
          "QR digital menu with branded design",
          "Table ordering and online ordering",
          "Kitchen display (KDS) with live order status and timers",
          "Waiter tablet ordering with item notes and split payment",
          "Inventory with recipes, automatic raw-material deduction, and low-stock alerts",
          "Customer club with loyalty points and campaigns",
          "Finance: cashier, expenses, profit and loss, daily and monthly reports",
          "Table management",
          "Role-based users and access levels",
        ],
        fa: [
          "منوی دیجیتال QR با طراحی برند",
          "سفارش سر میز و سفارش آنلاین",
          "نمایشگر آشپزخانه (KDS) با وضعیت زنده و تایمر",
          "سفارش‌گیری با تبلت گارسون، یادداشت آیتم و پرداخت تفکیکی",
          "انبار با دستور پخت، کسر خودکار مواد و هشدار کمبود",
          "باشگاه مشتریان با امتیاز وفاداری و کمپین",
          "مالی: صندوق، هزینه‌ها، سود و زیان، گزارش روزانه و ماهانه",
          "مدیریت میز",
          "کاربران و سطح دسترسی مبتنی بر نقش",
        ],
      },
      partial: {
        en: [] as readonly string[],
        fa: [] as readonly string[],
      },
      planned: {
        en: [] as readonly string[],
        fa: [] as readonly string[],
      },
    },
    clients: {
      en: "Used by cafés such as Café Team, Rosebud, and Octave.",
      fa: "در کافه‌هایی مانند Café Team، Rosebud و Octave استفاده می‌شود.",
    },
  },
} as const;

export function isFilled(value: string | undefined | null): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export function getKnowsAbout(): string[] {
  return [
    ...site.techStack.frontend,
    ...site.techStack.backend,
    ...site.techStack.data,
    ...site.techStack.devops,
  ];
}

export function getPersonSameAs(): string[] {
  const links = [
    site.instagram,
    site.linkedin,
    site.github,
    site.medium,
  ];
  return links.filter(isFilled);
}
