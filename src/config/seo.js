import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "./site";
import { CONTACT_INFO } from "./contact";

const ROUTE_META = {
  "/": (content) => ({
    title: content.meta.title,
    description: content.meta.description,
  }),
  "/skills": (content) => ({
    title: `${content.skills.pageTitle} | ${SITE_NAME}`,
    description: content.skills.pageDescription,
  }),
  "/experience": (content) => ({
    title: `${content.experience.pageTitle} | ${SITE_NAME}`,
    description: content.experience.pageDescription,
  }),
  "/projects": (content) => ({
    title: `${content.projects.pageTitle} | ${SITE_NAME}`,
    description: content.projects.intro,
  }),
  "/iutech": (content) => ({
    title: `${content.partner.pageTitle} | ${SITE_NAME}`,
    description: content.partner.paragraphs[0],
  }),
  "/bothbs": (content) => ({
    title: `${content.bothbs.pageTitle} | ${SITE_NAME}`,
    description: content.bothbs.paragraphs[0],
  }),
  "/hvac": (content) => ({
    title: `${content.rabahCo.pageTitle} | ${SITE_NAME}`,
    description: content.rabahCo.paragraphs[0],
  }),
  "/contact": (content) => ({
    title: `${content.contact.pageTitle} | ${SITE_NAME}`,
    description: content.contact.subtitle,
  }),
};

const BREADCRUMB_LABELS = {
  "/": "home",
  "/skills": "skills",
  "/experience": "experience",
  "/projects": "projects",
  "/iutech": "partner",
  "/bothbs": "partnerBothbs",
  "/hvac": "partnerHvac",
  "/contact": "contact",
};

export function getSeoForRoute(pathname, content) {
  const resolver = ROUTE_META[pathname] || ROUTE_META["/"];
  const { title, description } = resolver(content);

  return {
    title,
    description,
    canonical: `${SITE_URL}${pathname === "/" ? "" : pathname}`,
    ogImage: DEFAULT_OG_IMAGE,
    keywords: content.meta.keywords,
    pathname,
  };
}

export function getOrganizationSchema(content) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_NAME,
    url: SITE_URL,
    logo: DEFAULT_OG_IMAGE,
    image: DEFAULT_OG_IMAGE,
    description: content.meta.description,
    email: CONTACT_INFO.email,
    areaServed: {
      "@type": "Country",
      name: "Syria",
    },
    knowsAbout: [
      "Software Engineering",
      "Internet of Things",
      "HVAC Ventilation Systems",
      "Digital Health",
      "Artificial Intelligence",
    ],
    serviceType: [
      "Custom Software Development",
      "IoT Solutions",
      "HVAC Systems",
      "Healthcare IT",
    ],
    sameAs: [CONTACT_INFO.linkedin, CONTACT_INFO.github],
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: ["en", "ar"],
  };
}

export function getServiceListSchema(content) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: content.skills.pageTitle,
    itemListElement: content.skills.categories.map((category, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: category.title,
        description: category.items.join(", "),
        provider: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
        },
        areaServed: "Syria",
      },
    })),
  };
}

export function getBreadcrumbSchema(pathname, content) {
  const navKey = BREADCRUMB_LABELS[pathname] || "home";
  const label =
    navKey === "home" ? content.nav.brand : content.nav[navKey] || content.nav.home;

  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: content.nav.home,
      item: SITE_URL,
    },
  ];

  if (pathname !== "/") {
    items.push({
      "@type": "ListItem",
      position: 2,
      name: label,
      item: `${SITE_URL}${pathname}`,
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}

export function getFaqSchema(content) {
  if (!content.faq?.items?.length) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
